import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-10 text-center lg:text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 mx-auto lg:mx-0 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                            </span>
                            <span className="text-sm font-semibold tracking-wide uppercase">New AI Features 2.0</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                                Hiring meant to be <br />
                                <span className="text-gradient-premium">intelligent.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Transform your recruiting pipeline with our AI-driven OS. Automate sourcing, screening, and scheduling in one premium dashboard.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="xl" className="h-14 px-8 rounded-full text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-1 transition-all duration-300">
                                <Link href="/signup" className="flex items-center gap-2">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button size="xl" variant="outline" className="h-14 px-8 rounded-full text-lg border-2 hover:bg-secondary/50 backdrop-blur-sm transition-all duration-300">
                                <span className="flex items-center gap-2">
                                    <Play className="w-5 h-5 fill-current" />
                                    Watch Demo
                                </span>
                            </Button>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>14-day free trial</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative lg:block">
                        {/* Main Glass Card */}
                        <div className="relative z-20 glass-card rounded-3xl p-2 animate-float">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100/20 bg-white">
                                {/* Mock UI Header */}
                                <div className="h-12 border-b flex items-center px-4 gap-2 bg-gray-50/50">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                    </div>
                                    <div className="ml-4 w-60 h-6 rounded-md bg-gray-200/50" />
                                </div>
                                {/* Mock UI Content */}
                                <div className="p-6 space-y-4 bg-gradient-to-br from-white to-gray-50 h-[400px]">
                                    <div className="flex gap-4">
                                        <div className="w-1/3 h-32 rounded-xl bg-violet-100/50 animate-pulse border border-violet-100" />
                                        <div className="w-1/3 h-32 rounded-xl bg-fuchsia-100/50 animate-pulse delay-100 border border-fuchsia-100" />
                                        <div className="w-1/3 h-32 rounded-xl bg-blue-100/50 animate-pulse delay-200 border border-blue-100" />
                                    </div>
                                    <div className="space-y-3 pt-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                                <div className="w-10 h-10 rounded-full bg-gray-100" />
                                                <div className="space-y-2 flex-1">
                                                    <div className="w-1/3 h-3 rounded bg-gray-200" />
                                                    <div className="w-1/2 h-2 rounded bg-gray-100" />
                                                </div>
                                                <div className="w-16 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center text-xs font-bold">
                                                    Hire
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements behind */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

                        {/* Floating Widget */}
                        <div className="absolute -right-8 top-1/3 z-30 glass-card p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">98%</div>
                                <div>
                                    <div className="text-xs text-muted-foreground font-semibold">Match Rate</div>
                                    <div className="text-sm font-bold text-foreground">Top Talent Found</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
