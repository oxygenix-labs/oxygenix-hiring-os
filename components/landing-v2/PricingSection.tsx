import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Free',
        price: '$0',
        description: 'For trying out the platform',
        features: [
            'Up to 3 active jobs',
            '10 candidates per month',
            'Basic pipeline',
            'Email support',
        ],
        cta: 'Start Free',
        href: '/signup',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$99',
        description: 'For growing teams',
        features: [
            'Unlimited jobs',
            'Unlimited candidates',
            'Full hiring pipeline',
            'AI resume screening',
            'Interview planner',
            'Priority support',
        ],
        cta: 'Start Free Trial',
        href: '/signup',
        popular: true,
    },
    {
        name: 'Team',
        price: '$299',
        description: 'For larger organizations',
        features: [
            'Everything in Pro',
            'Unlimited team members',
            'Advanced analytics',
            'Custom workflows',
            'API access',
            'Dedicated support',
        ],
        cta: 'Contact Sales',
        href: '/contact',
        popular: false,
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="container py-20 md:py-32">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Simple, transparent pricing
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose the plan that fits your hiring needs
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-lg border ${plan.popular
                                ? 'border-violet-500 bg-violet-500/5'
                                : 'border-border bg-background'
                            } p-8 flex flex-col`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                            <div className="mb-2">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.price !== '$0' && <span className="text-muted-foreground">/month</span>}
                            </div>
                            <p className="text-sm text-muted-foreground">{plan.description}</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                    <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            variant={plan.popular ? 'default' : 'outline'}
                            className="w-full"
                        >
                            <Link href={plan.href}>{plan.cta}</Link>
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}
