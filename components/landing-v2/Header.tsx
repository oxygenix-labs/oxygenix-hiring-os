import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">H</span>
                    </div>
                    <span className="font-semibold text-lg">HireFlow</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Product
                    </Link>
                    <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Pricing
                    </Link>
                    <Link href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Docs
                    </Link>
                    <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Login
                    </Link>
                </nav>

                {/* CTA */}
                <Button asChild>
                    <Link href="/signup">Try Free</Link>
                </Button>
            </div>
        </header>
    );
}
