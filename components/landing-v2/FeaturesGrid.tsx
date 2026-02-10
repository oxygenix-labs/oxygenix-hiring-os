import { Megaphone, Users, GitBranch, Sparkles, Calendar, FileText } from 'lucide-react';

const features = [
    {
        icon: Megaphone,
        title: 'Job Posting & Distribution',
        description: 'Create job descriptions and distribute them across multiple platforms from one place.',
    },
    {
        icon: Users,
        title: 'Candidate Management',
        description: 'Track every candidate in a unified database. See their history, notes, and current status.',
    },
    {
        icon: GitBranch,
        title: 'Hiring Pipeline',
        description: 'Move candidates through customizable stages. Visualize your entire hiring funnel.',
    },
    {
        icon: Sparkles,
        title: 'AI Resume Screening',
        description: 'Automatically score and rank candidates based on job requirements. Save hours of manual review.',
    },
    {
        icon: Calendar,
        title: 'Interview Planner',
        description: 'Generate structured interview questions tailored to the role and candidate background.',
    },
    {
        icon: FileText,
        title: 'Offer Generator',
        description: 'Create professional offer letters in seconds. Include all the right details automatically.',
    },
];

export function FeaturesGrid() {
    return (
        <section className="container py-20 md:py-32">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Everything you need to hire
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Powerful features that work together seamlessly
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="group relative rounded-lg border border-border p-6 hover:border-violet-500/50 transition-colors">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
