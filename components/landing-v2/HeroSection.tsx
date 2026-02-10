import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="container py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Run hiring like a system,{' '}
                            <span className="text-violet-600">not guesswork.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                            All-in-one hiring platform to create jobs, manage candidates, and hire faster with AI.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2" asChild>
                            <Link href="/signup">
                                Try Free
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2">
                            <Play className="w-4 h-4" />
                            View Demo
                        </Button>
                    </div>
                </div>

                {/* Right: Product Screenshot */}
                <div className="relative">
                    <div className="aspect-[4/3] rounded-lg border border-border bg-muted/50 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center p-8 space-y-2">
                            <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mb-4">
                                <span className="text-white font-bold text-2xl">H</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Product Screenshot</p>
                        </div>
                    </div>
                    {/* Subtle gradient background */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-2xl -z-10 blur-2xl" />
                </div>
            </div>
        </section>
    );
}
