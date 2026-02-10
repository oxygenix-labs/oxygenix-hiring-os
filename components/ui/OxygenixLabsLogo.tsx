import React from 'react';

interface OxygenixLabsLogoProps {
    size?: 'small' | 'medium' | 'large';
    variant?: 'light' | 'dark'; // kept for prop compatibility, but mostly using theme now
    iconOnly?: boolean;
    product?: 'labs' | 'ui' | 'airsense' | 'planner' | 'hire';
    className?: string;
}

export function OxygenixLabsLogo({
    size = 'medium',
    variant = 'dark',
    iconOnly = false,
    product = 'labs',
    className = ''
}: OxygenixLabsLogoProps) {
    // Dimensions mapping
    const dimensions = {
        small: { icon: 24, fontSize: 'text-base', spacing: 'gap-2' },
        medium: { icon: 36, fontSize: 'text-2xl', spacing: 'gap-3' },
        large: { icon: 48, fontSize: 'text-4xl', spacing: 'gap-4' }
    };

    const dim = dimensions[size];

    return (
        <div className={`flex items-center ${dim.spacing} group ${className}`}>
            {/* Logo Icon with Glow */}
            <div className="relative flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-violet-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />

                <svg
                    width={dim.icon}
                    height={dim.icon}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 drop-shadow-lg"
                >
                    <defs>
                        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" className="text-violet-500" stopColor="currentColor" />
                            <stop offset="100%" className="text-fuchsia-600" stopColor="currentColor" />
                        </linearGradient>
                        <linearGradient id="logo-gradient-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" className="text-fuchsia-500" stopColor="currentColor" />
                            <stop offset="100%" className="text-violet-600" stopColor="currentColor" />
                        </linearGradient>
                    </defs>

                    {/* Main Circle Ring */}
                    <circle
                        cx="28"
                        cy="28"
                        r="22"
                        stroke="url(#logo-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="opacity-90 group-hover:opacity-0 transition-opacity"
                    />

                    {/* Hover Ring (Spinning or Different Color) */}
                    <circle
                        cx="28"
                        cy="28"
                        r="22"
                        stroke="url(#logo-gradient-hover)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="100 40"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out origin-center -rotate-90 group-hover:rotate-0"
                    />

                    {/* Central Element: O2 Symbol Abstract */}
                    <path
                        d="M20 28C20 23.5817 23.5817 20 28 20C32.4183 20 36 23.5817 36 28"
                        stroke="url(#logo-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="transition-all duration-300 group-hover:translate-y-[-2px]"
                    />
                    <circle
                        cx="28"
                        cy="36"
                        r="3"
                        fill="currentColor"
                        className="text-white dark:text-violet-200"
                    />
                </svg>
            </div>

            {/* Text Logo */}
            {!iconOnly && (
                <div className="flex flex-col leading-none select-none">
                    <span className={`font-outfit font-bold tracking-tight text-foreground ${dim.fontSize}`}>
                        Oxygenix
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-violet-500 uppercase ml-0.5">
                        {product}
                    </span>
                </div>
            )}
        </div>
    );
}
