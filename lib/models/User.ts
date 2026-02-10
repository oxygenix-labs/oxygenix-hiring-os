import mongoose, { Schema, Model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    fullName: string;
    companyName: string;
    organizationId: mongoose.Types.ObjectId;
    role: 'hr_admin' | 'founder' | 'hiring_manager';
    createdAt: Date;
    trialStartDate: Date;
    trialEndDate: Date;
    isTrialExpired: boolean;
    isEmailVerified: boolean;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
    },
    companyName: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true,
    },
    organizationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: false, // Set after organization is created
    },
    role: {
        type: String,
        enum: ['hr_admin', 'founder', 'hiring_manager'],
        required: [true, 'Role is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    trialStartDate: {
        type: Date,
        default: Date.now,
    },
    trialEndDate: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setDate(date.getDate() + 7); // 7 days trial
            return date;
        },
    },
    isTrialExpired: {
        type: Boolean,
        default: false,
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error: any) {
        next(error);
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

// Check if trial is expired before queries
userSchema.pre(/^find/, function (this: any, next) {
    const now = new Date();
    this.where({ trialEndDate: { $gte: now } });
    next();
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
