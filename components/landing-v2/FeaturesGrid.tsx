import { Megaphone, Users, GitBranch, Sparkles, Calendar, FileText, BarChart3, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        icon: Sparkles,
        title: 'AI Resume Analysis',
        description: 'Our AI reads between the lines to find the best talent, not just keywords.',
        className: "md:col-span-2",
        gradient: "from-violet-500/10 to-purple-500/10"
    },
    {
        icon: Users,
        title: 'Team Collaboration',
        description: 'Discuss candidates with your team in real-time.',
        className: "",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
        icon: GitBranch,
        title: 'Pipeline Automation',
        description: 'Automate stage transitions and emails.',
        className: "",
        gradient: "from-emerald-500/10 to-green-500/10"
    },
    {
        icon: Calendar,
        title: 'Smart Scheduling',
        description: 'Auto-find perfectly matching interview slots.',
        className: "md:col-span-2",
        gradient: "from-amber-500/10 to-orange-500/10"
    },
    {
        icon: Megaphone,
        title: 'Multi-Channel Posting',
        description: 'One click to post to LinkedIn, Indeed, and more.',
        className: "",
        gradient: "from-pink-500/10 to-rose-500/10"
    },
];

export function FeaturesGrid() {
    return (
        <section className="container py-24">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold font-outfit tracking-tight">
                    <span className="text-gradient">Everything</span> you need to scale.
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A complete operating system for your hiring process, powered by advanced intelligence.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/50 backdrop-blur-sm p-8 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1",
                            feature.className
                        )}
                    >
                        {/* Background Gradient */}
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                            feature.gradient
                        )} />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 text-foreground" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold font-outfit">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative Corner Icon */}
                            <div className="absolute -bottom-6 -right-6 text-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-12">
                                <feature.icon className="w-32 h-32" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
