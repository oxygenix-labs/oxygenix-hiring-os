import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

interface LogoProps {
    variant?: 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
}

export const Logo: React.FC<LogoProps> = ({
    variant = 'dark',
    size = 'md',
    href = '/'
}) => {
    const textColor = variant === 'light' ? '#ffffff' : '#1e293b';
    const primaryGradient = variant === 'light'
        ? ['#a78bfa', '#ec4899', '#f472b6']
        : ['#8b5cf6', '#d946ef', '#ec4899'];

    const sizes = {
        sm: { icon: 'w-6 h-6', text: 'text-lg', iconSize: 'w-4 h-4' },
        md: { icon: 'w-8 h-8', text: 'text-xl', iconSize: 'w-5 h-5' },
        lg: { icon: 'w-10 h-10', text: 'text-2xl', iconSize: 'w-6 h-6' },
    };

    const currentSize = sizes[size];

    const logoContent = (
        <>
            <div
                className={`${currentSize.icon} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}
                style={{
                    background: `linear-gradient(135deg, ${primaryGradient[0]}, ${primaryGradient[1]}, ${primaryGradient[2]})`,
                }}
            >
                <Sparkles className={`${currentSize.iconSize} text-white`} />
            </div>
            <div className="flex items-baseline gap-1.5">
                <span
                    className={`${currentSize.text} font-bold`}
                    style={{ color: textColor }}
                >
                    OXYGENIX
                </span>
                <span
                    className={`${currentSize.text} font-bold`}
                    style={{
                        color: variant === 'light' ? primaryGradient[2] : primaryGradient[0]
                    }}
                >
                    HIRE
                </span>
            </div>
        </>
    );

    if (href) {
        return (
            <Link href={href} className="flex items-center gap-3 group">
                {logoContent}
            </Link>
        );
    }

    return (
        <div className="flex items-center gap-3">
            {logoContent}
        </div>
    );
};
