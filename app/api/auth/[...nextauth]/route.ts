import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter your email and password');
                }

                await dbConnect();

                // Find user by email
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error('No account found with this email address');
                }

                // Verify password
                const isPasswordValid = await user.comparePassword(credentials.password);

                if (!isPasswordValid) {
                    throw new Error('Incorrect password. Please try again.');
                }

                // Check if trial expired
                const now = new Date();
                const isTrialExpired = now > user.trialEndDate;

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.fullName,
                    companyName: user.companyName,
                    role: user.role,
                    isTrialExpired,
                    trialEndDate: user.trialEndDate.toISOString(),
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.companyName = (user as any).companyName;
                token.role = (user as any).role;
                token.isTrialExpired = (user as any).isTrialExpired;
                token.trialEndDate = (user as any).trialEndDate;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                (session.user as any).companyName = token.companyName;
                (session.user as any).role = token.role;
                (session.user as any).isTrialExpired = token.isTrialExpired;
                (session.user as any).trialEndDate = token.trialEndDate;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
