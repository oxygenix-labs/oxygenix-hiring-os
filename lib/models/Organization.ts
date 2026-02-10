import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IOrganization extends Document {
    _id: string;
    name: string;
    slug: string;
    ownerId: mongoose.Types.ObjectId;
    planType: 'free' | 'pro' | 'team';
    trialStartDate: Date;
    trialEndDate: Date;
    isTrialActive: boolean;
    isActive: boolean;
    settings: {
        allowPublicJobs: boolean;
        requireApprovalForOffers: boolean;
        emailNotifications: boolean;
    };
    createdAt: Date;
    updatedAt: Date;
}

const organizationSchema = new Schema<IOrganization>({
    name: {
        type: String,
        required: [true, 'Organization name is required'],
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    planType: {
        type: String,
        enum: ['free', 'pro', 'team'],
        default: 'free',
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
    isTrialActive: {
        type: Boolean,
        default: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    settings: {
        allowPublicJobs: {
            type: Boolean,
            default: true,
        },
        requireApprovalForOffers: {
            type: Boolean,
            default: true,
        },
        emailNotifications: {
            type: Boolean,
            default: true,
        },
    },
}, {
    timestamps: true,
});

// Generate slug from name before saving
organizationSchema.pre('save', async function (next) {
    if (this.isModified('name') && !this.slug) {
        const baseSlug = this.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        this.slug = baseSlug;

        // Ensure unique slug
        let counter = 1;
        while (await mongoose.models.Organization.findOne({ slug: this.slug })) {
            this.slug = `${baseSlug}-${counter}`;
            counter++;
        }
    }
    next();
});

// Virtual to check if trial is expired
organizationSchema.virtual('isTrialExpired').get(function () {
    return this.isTrialActive && this.trialEndDate < new Date();
});

const Organization: Model<IOrganization> =
    mongoose.models.Organization ||
    mongoose.model<IOrganization>('Organization', organizationSchema);

export default Organization;
