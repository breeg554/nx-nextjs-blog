import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@blog/ui';

interface ThemeSwitchProps {}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex gap-3">
      <Button onClick={() => setTheme('light')}>Light Mode</Button>
      <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
    </div>
  );
};
