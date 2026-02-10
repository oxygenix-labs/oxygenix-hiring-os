import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import Organization from '@/lib/models/Organization';
import { z } from 'zod';

const signupSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    fullName: z.string().min(2, 'Full name is required'),
    companyName: z.string().min(2, 'Company name is required'),
    acceptedTerms: z.boolean().refine(val => val === true, {
        message: 'You must accept the terms and conditions',
    }),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = signupSchema.parse(body);

        await dbConnect();

        // Check if user already exists
        const existingUser = await User.findOne({ email: validatedData.email });

        if (existingUser) {
            return NextResponse.json(
                { success: false, error: 'An account with this email already exists' },
                { status: 400 }
            );
        }

        // Create organization first
        const organization = await Organization.create({
            name: validatedData.companyName,
            ownerId: null, // Will be set after user creation
            planType: 'free',
            isTrialActive: true,
        });

        // Create new user (password will be hashed by pre-save hook)
        const user = await User.create({
            email: validatedData.email,
            password: validatedData.password,
            fullName: validatedData.fullName,
            companyName: validatedData.companyName,
            organizationId: organization._id,
            role: 'founder', // First user is always founder
        });

        // Update organization with owner ID
        organization.ownerId = user._id;
        await organization.save();

        return NextResponse.json(
            {
                success: true,
                user: {
                    id: user._id.toString(),
                    email: user.email,
                    fullName: user.fullName,
                    companyName: user.companyName,
                    role: user.role,
                    organizationId: organization._id.toString(),
                },
                organization: {
                    id: organization._id.toString(),
                    name: organization.name,
                    slug: organization.slug,
                    trialEndDate: organization.trialEndDate,
                    isTrialActive: organization.isTrialActive,
                },
            },
            { status: 201 }
        );
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, error: error.errors[0].message },
                { status: 400 }
            );
        }

        console.error('Signup error:', error);
        return NextResponse.json(
            { success: false, error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
