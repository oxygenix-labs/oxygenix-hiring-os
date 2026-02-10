'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';
import { OxygenixLabsLogo } from '@/components/ui/OxygenixLabsLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { PasswordStrengthIndicator } from '@/components/auth/PasswordStrengthIndicator';
import { toast } from 'sonner';
import { z } from 'zod';

const signupSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    companyName: z.string().min(2, 'Company name is required'),
    acceptedTerms: z.boolean().refine(val => val === true, {
        message: 'You must accept the terms and conditions',
    }),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const router = useRouter();
    const { status } = useSession();
    const [showPassword, setShowPassword] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullName: '',
            email: '',
            companyName: '',
            password: '',
            acceptedTerms: false,
        },
    });

    const password = watch('password');
    const acceptedTerms = watch('acceptedTerms');

    // Redirect if already authenticated
    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [status, router]);

    const onSubmit = async (data: SignupFormData) => {
        setSubmitError(null);

        try {
            // Call signup API
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!result.success) {
                setSubmitError(result.error || 'Signup failed');
                toast.error(result.error || 'Signup failed');
                return;
            }

            // Auto-login after successful signup
            const signInResult = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (signInResult?.error) {
                toast.error('Account created but login failed. Please try logging in.');
                router.push('/login');
            } else {
                toast.success('Account created successfully! Starting your 7-day trial...');
                router.push('/dashboard');
            }
        } catch (error) {
            setSubmitError('An unexpected error occurred');
            toast.error('An unexpected error occurred');
        }
    };

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex">
            {/* Left side - Branding */}
            <div className="hidden lg:flex lg:flex-1 relative bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 p-12 flex-col justify-between overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmg\ydi0yaC0yem0tMi0ydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

                <div className="relative z-10">
                    {/* Logo */}
                    <OxygenixLabsLogo variant="light" size="large" product="hire" />

                    {/* Main content */}
                    <div className="mt-20">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Start hiring smarter in minutes
                        </h1>
                        <p className="text-xl text-violet-100 mb-12 max-w-md">
                            Join teams who've replaced guesswork with a proven hiring system.
                        </p>

                        {/* Features list */}
                        <div className="space-y-4">
                            {[
                                'Post jobs and get qualified candidates',
                                'Screen resumes with AI assistance',
                                'Run structured interviews',
                                'Make data-backed hiring decisions',
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-violet-200 mt-0.5 flex-shrink-0" />
                                    <span className="text-violet-50">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom testimonial/trust signal */}
                <div className="relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                        <p className="text-sm text-violet-100 italic mb-2">
                            "We went from 30 days to hire down to 12 days. The structured process removed all the guesswork."
                        </p>
                        <p className="text-sm font-medium text-white">
                            — Sarah Chen, VP of Engineering
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 bg-background">
                <div className="w-full max-w-md mx-auto">
                    {/* Mobile logo */}
                    <div className="flex lg:hidden mb-8">
                        <OxygenixLabsLogo variant="dark" size="medium" product="hire" />
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-foreground mb-2">
                            Create your account
                        </h2>
                        <p className="text-muted-foreground">
                            Start your 7-day free trial. No credit card required.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {submitError && (
                            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                                {submitError}
                            </div>
                        )}

                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full name</Label>
                            <Input
                                id="fullName"
                                type="text"
                                autoComplete="name"
                                placeholder="John Doe"
                                disabled={isSubmitting}
                                {...register('fullName')}
                                className={errors.fullName ? 'border-destructive' : ''}
                            />
                            {errors.fullName && (
                                <p className="text-sm text-destructive">{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* Work Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Work email</Label>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@company.com"
                                disabled={isSubmitting}
                                {...register('email')}
                                className={errors.email ? 'border-destructive' : ''}
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Company Name */}
                        <div className="space-y-2">
                            <Label htmlFor="companyName">Company name</Label>
                            <Input
                                id="companyName"
                                type="text"
                                autoComplete="organization"
                                placeholder="Acme Inc"
                                disabled={isSubmitting}
                                {...register('companyName')}
                                className={errors.companyName ? 'border-destructive' : ''}
                            />
                            {errors.companyName && (
                                <p className="text-sm text-destructive">{errors.companyName.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    placeholder="Create a strong password"
                                    disabled={isSubmitting}
                                    {...register('password')}
                                    className={errors.password ? 'border-destructive pr-10' : 'pr-10'}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={isSubmitting}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            {password && <PasswordStrengthIndicator password={password} />}
                            {errors.password && (
                                <p className="text-sm text-destructive">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Terms checkbox */}
                        <div className="flex items-start gap-3 py-2">
                            <Checkbox
                                id="acceptedTerms"
                                checked={acceptedTerms}
                                onCheckedChange={(checked) => setValue('acceptedTerms', !!checked)}
                                disabled={isSubmitting}
                                className={errors.acceptedTerms ? 'border-destructive' : ''}
                            />
                            <div className="flex-1">
                                <label
                                    htmlFor="acceptedTerms"
                                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                                >
                                    I agree to the{' '}
                                    <Link
                                        href="/terms"
                                        className="text-primary hover:text-primary/80 font-medium"
                                        target="_blank"
                                    >
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        href="/privacy"
                                        className="text-primary hover:text-primary/80 font-medium"
                                        target="_blank"
                                    >
                                        Privacy Policy
                                    </Link>
                                </label>
                                {errors.acceptedTerms && (
                                    <p className="text-sm text-destructive mt-1">{errors.acceptedTerms.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Creating account...
                                </>
                            ) : (
                                'Create account & start free trial'
                            )}
                        </Button>

                        {/* Login link */}
                        <p className="text-center text-sm text-muted-foreground pt-4">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="text-primary hover:text-primary/80 font-medium transition-colors"
                            >
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
