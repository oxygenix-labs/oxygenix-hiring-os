import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
            companyName: string;
            role: string;
            isTrialExpired: boolean;
            trialEndDate: string;
        } & DefaultSession['user'];
    }

    interface User {
        id: string;
        email: string;
        name: string;
        companyName: string;
        role: string;
        isTrialExpired: boolean;
        trialEndDate: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        companyName: string;
        role: string;
        isTrialExpired: boolean;
        trialEndDate: string;
    }
}
