import { ReactNode } from 'react';

interface EducatorsThemeProps {
  children: ReactNode;
}

const EducatorsTheme = ({ children }: EducatorsThemeProps) => {
  return (
    <div 
      className="educators-theme"
      style={{
        '--primary': '232 84% 60%',
        '--primary-glow': '232 90% 70%',
        '--hero': '232 84% 60%',
        '--accent-foreground': '232 84% 60%',
        '--ring': '232 84% 60%',
        '--gradient-hero': 'linear-gradient(135deg, hsl(232 84% 60%), hsl(232 90% 70%))',
        '--struggle-color': '20 91% 67%',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default EducatorsTheme;