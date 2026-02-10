import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { OxygenixLabsLogo } from '@/components/ui/OxygenixLabsLogo';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/50 border-b border-white/20 dark:bg-black/50 dark:border-white/10 support-[backdrop-filter]:bg-white/20">
            <div className="container flex h-20 items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="group">
                    <OxygenixLabsLogo product="hire" size="small" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {['Product', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 rounded-full transition-all duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA Area */}
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
                        Log in
                    </Link>
                    <Button className="rounded-full px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 border-0 transition-all hover:scale-105 hover:shadow-violet-500/40">
                        <span className="mr-2">Get Started</span>
                        <Sparkles className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
