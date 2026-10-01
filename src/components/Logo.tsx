import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

/**
 * Exact geometric architectural roof mark based on The Dream Homes brand identity.
 * Features the signature multi-faceted golden-amber gradient folded roofline with chimney.
 */
export const TheDreamHomesLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeMap = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
    xl: 'h-20 w-auto',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 700 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} transition-transform duration-200`}
        aria-label="The Dream Homes Logo"
      >
        <defs>
          {/* Left ascending beam gradient: luminous yellow-gold */}
          <linearGradient id="dhGoldAscent" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFA600" />
            <stop offset="45%" stopColor="#FFC800" />
            <stop offset="100%" stopColor="#FFE033" />
          </linearGradient>

          {/* Crest transition gradient for fold */}
          <linearGradient id="dhFoldFacet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC800" />
            <stop offset="40%" stopColor="#FF9500" />
            <stop offset="100%" stopColor="#E66A00" />
          </linearGradient>

          {/* Main descending beam gradient: rich amber to deep saffron */}
          <linearGradient id="dhAmberDescent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9E00" />
            <stop offset="50%" stopColor="#F57C00" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          {/* Secondary right roof gradient */}
          <linearGradient id="dhRightGable" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB300" />
            <stop offset="50%" stopColor="#FB8C00" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          {/* Chimney gradient */}
          <linearGradient id="dhChimney" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFA000" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
        </defs>

        {/* Chimney / Vertical architectural accent */}
        <polygon
          points="490,132 535,132 535,205 490,175"
          fill="url(#dhChimney)"
        />

        {/* Right Secondary Roof Slope */}
        <polygon
          points="395,115 560,225 560,285 395,175"
          fill="url(#dhRightGable)"
        />

        {/* Main Roof - Left Ascending Facet (Yellow-Gold) */}
        <polygon
          points="130,225 285,115 285,175 130,285"
          fill="url(#dhGoldAscent)"
        />

        {/* Main Roof - Center Fold Cap & Right Descending Facet (Rich Amber-Orange) */}
        <polygon
          points="285,115 440,225 440,285 285,175"
          fill="url(#dhAmberDescent)"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-tight text-zinc-900 leading-none text-lg lg:text-xl">
            THE DREAM HOMES
          </span>
          <span className="text-[11px] font-semibold tracking-[0.2em] text-amber-600 uppercase mt-0.5">
            Building Dreams
          </span>
        </div>
      )}
    </div>
  );
};
