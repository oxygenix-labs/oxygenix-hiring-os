import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IApplication extends Document {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    status: 'new' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';
    currentStage: string;
    notes: string[];
    communications: {
        type: 'email' | 'message' | 'call';
        content: string;
        sentAt: Date;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

const applicationSchema = new Schema<IApplication>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    candidateId: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true,
    },
    status: {
        type: String,
        enum: ['new', 'screening', 'interview', 'offer', 'hired', 'rejected'],
        default: 'new',
    },
    currentStage: {
        type: String,
        default: 'Application Received',
    },
    notes: [{
        type: String,
    }],
    communications: [{
        type: {
            type: String,
            enum: ['email', 'message', 'call'],
        },
        content: String,
        sentAt: {
            type: Date,
            default: Date.now,
        },
    }],
}, {
    timestamps: true,
});

// Indexes
applicationSchema.index({ userId: 1, status: 1 });
applicationSchema.index({ jobId: 1 });
applicationSchema.index({ candidateId: 1 });
applicationSchema.index({ createdAt: -1 });

const Application: Model<IApplication> = mongoose.models.Application || mongoose.model<IApplication>('Application', applicationSchema);

export default Application;
