import { FileQuestion, MessageSquare, Brain, DollarSign } from 'lucide-react';

const problems = [
    {
        icon: FileQuestion,
        title: 'Resumes exaggerate skills',
        description: 'Candidates oversell their abilities. You waste time interviewing people who can\'t do the job.',
    },
    {
        icon: MessageSquare,
        title: 'Interviews lack structure',
        description: 'You ask different questions to each candidate. Comparisons become impossible.',
    },
    {
        icon: Brain,
        title: 'Decisions rely on gut feeling',
        description: 'When hiring comes down to instinct, you miss red flags and hire the wrong people.',
    },
    {
        icon: DollarSign,
        title: 'Recruiters are expensive',
        description: 'Agencies charge 20-30% of first-year salary. That\'s $20k for a $100k hire.',
    },
];

export function ProblemSection() {
    return (
        <section className="container py-20 md:py-32">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Most hiring is broken
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Here's what goes wrong when you don't have a system
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {problems.map((problem, index) => (
                    <div key={index} className="space-y-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                            <problem.icon className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold">{problem.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
