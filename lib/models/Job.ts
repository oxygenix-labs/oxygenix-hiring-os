import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IJob extends Document {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    roleName: string;
    teamSize: string;
    experienceLevel: 'entry' | 'mid' | 'senior' | 'lead';
    responsibilities: string;
    mustHaveSkills: string;
    niceToHaveSkills: string;
    generatedDescription?: string;
    generatedRequirements?: string[];
    status: 'draft' | 'active' | 'closed';
    createdAt: Date;
    updatedAt: Date;
}

const jobSchema = new Schema<IJob>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    roleName: {
        type: String,
        required: [true, 'Role name is required'],
        trim: true,
    },
    teamSize: {
        type: String,
        default: '2-5',
    },
    experienceLevel: {
        type: String,
        enum: ['entry', 'mid', 'senior', 'lead'],
        default: 'mid',
    },
    responsibilities: {
        type: String,
        required: [true, 'Responsibilities are required'],
    },
    mustHaveSkills: {
        type: String,
        required: [true, 'Must-have skills are required'],
    },
    niceToHaveSkills: {
        type: String,
        default: '',
    },
    generatedDescription: {
        type: String,
    },
    generatedRequirements: [{
        type: String,
    }],
    status: {
        type: String,
        enum: ['draft', 'active', 'closed'],
        default: 'draft',
    },
}, {
    timestamps: true,
});

// Index for efficient queries
jobSchema.index({ userId: 1, status: 1 });
jobSchema.index({ createdAt: -1 });

const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>('Job', jobSchema);

export default Job;
