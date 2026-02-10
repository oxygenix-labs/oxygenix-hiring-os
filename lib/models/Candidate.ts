import mongoose, { Schema, Model, Document } from 'mongoose';

export interface ICandidate extends Document {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    jobId?: mongoose.Types.ObjectId;
    fullName: string;
    email: string;
    phone?: string;
    resumeText: string;
    resumeUrl?: string;
    screeningScore?: number;
    screeningStatus: 'pending' | 'shortlisted' | 'rejected' | 'interviewed' | 'offered';
    screeningNotes?: string;
    skills?: string[];
    experience?: string;
    education?: string;
    interviewScores?: {
        category: string;
        score: number;
        notes?: string;
    }[];
    finalDecision?: 'hire' | 'reject' | 'pending';
    createdAt: Date;
    updatedAt: Date;
}

const candidateSchema = new Schema<ICandidate>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
    },
    fullName: {
        type: String,
        required: [true, 'Candidate name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    resumeText: {
        type: String,
        required: true,
    },
    resumeUrl: {
        type: String,
    },
    screeningScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    screeningStatus: {
        type: String,
        enum: ['pending', 'shortlisted', 'rejected', 'interviewed', 'offered'],
        default: 'pending',
    },
    screeningNotes: {
        type: String,
    },
    skills: [{
        type: String,
    }],
    experience: {
        type: String,
    },
    education: {
        type: String,
    },
    interviewScores: [{
        category: String,
        score: Number,
        notes: String,
    }],
    finalDecision: {
        type: String,
        enum: ['hire', 'reject', 'pending'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

// Indexes
candidateSchema.index({ userId: 1, screeningStatus: 1 });
candidateSchema.index({ email: 1 });
candidateSchema.index({ createdAt: -1 });

const Candidate: Model<ICandidate> = mongoose.models.Candidate || mongoose.model<ICandidate>('Candidate', candidateSchema);

export default Candidate;
