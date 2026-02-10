export function ProductPreview() {
    return (
        <section className="container py-20 md:py-32 bg-muted/30">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    See it in action
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A complete view of the platform
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div className="aspect-video rounded-lg border border-border bg-background shadow-2xl flex items-center justify-center">
                    <div className="text-center p-8 space-y-2">
                        <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mb-4">
                            <span className="text-white font-bold text-2xl">H</span>
                        </div>
                        <p className="text-lg font-medium">Product Preview</p>
                        <p className="text-sm text-muted-foreground">Dashboard, Pipeline & AI Tools</p>
                    </div>
                </div>
                {/* Subtle gradient background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-3xl -z-10 blur-3xl" />
            </div>
        </section>
    );
}
