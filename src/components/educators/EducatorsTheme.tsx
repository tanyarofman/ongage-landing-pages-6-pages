import { ReactNode } from 'react';

interface EducatorsThemeProps {
  children: ReactNode;
}

const EducatorsTheme = ({ children }: EducatorsThemeProps) => {
  return (
    <div 
      className="educators-theme"
      style={{
        '--primary': '59 100% 50%',
        '--primary-glow': '214 100% 70%',
        '--hero': '59 100% 50%',
        '--accent-foreground': '59 100% 50%',
        '--ring': '59 100% 50%',
        '--gradient-hero': 'linear-gradient(135deg, hsl(59 100% 50%), hsl(214 100% 70%))',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default EducatorsTheme;