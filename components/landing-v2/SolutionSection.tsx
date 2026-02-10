import { Briefcase, Users, GitBranch, FileCheck } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Briefcase,
        title: 'Create Job',
        description: 'Define the role, requirements, and what success looks like. Get an AI-generated job description.',
    },
    {
        number: '02',
        icon: Users,
        title: 'Get Applications',
        description: 'Candidates apply directly. Their resumes are automatically parsed and scored.',
    },
    {
        number: '03',
        icon: GitBranch,
        title: 'Run Hiring Pipeline',
        description: 'Move candidates through screening, interviews, and final decisions with structured workflows.',
    },
    {
        number: '04',
        icon: FileCheck,
        title: 'Send Offer',
        description: 'Generate offer letters instantly. Track acceptance and onboarding in one place.',
    },
];

export function SolutionSection() {
    return (
        <section className="container py-20 md:py-32 bg-muted/30">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    How it works
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A structured process that replaces chaos with clarity
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl font-bold text-violet-600/20">{step.number}</span>
                                <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center">
                                    <step.icon className="w-6 h-6 text-violet-600" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                        {/* Connector line */}
                        {index < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border -z-10" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
