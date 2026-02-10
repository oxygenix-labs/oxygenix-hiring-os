export function TrustStrip() {
    // Placeholder logos using text for now, but styled like logos
    const companies = [
        "Acme Corp", "GlobalTech", "Nebula", "Trio", "Hexagon", "Circle", "FoxRun", "Velvet"
    ];

    return (
        <section className="border-y border-border/50 bg-muted/20 backdrop-blur-sm overflow-hidden py-8">
            <div className="container relative">
                <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">
                    Trusted by forward-thinking teams
                </p>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden group">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                    {/* Marquee Content (Doubled for seamless loop) */}
                    <div className="flex animate-marquee whitespace-nowrap gap-16 hover:[animation-play-state:paused] py-2">
                        {[...companies, ...companies, ...companies].map((company, i) => (
                            <div
                                key={i}
                                className="text-2xl font-bold font-outfit text-muted-foreground/40 hover:text-violet-500/80 transition-colors duration-300 cursor-default select-none"
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
