import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="container py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Start hiring smarter today
                </h2>
                <p className="text-lg text-muted-foreground">
                    Join teams who've replaced guesswork with a proven system. Free 14-day trial, no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="gap-2" asChild>
                        <Link href="/signup">
                            Try Free for 14 Days
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/login">View Demo</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
