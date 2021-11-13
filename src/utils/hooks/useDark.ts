import React, { useState, useEffect } from 'react'

const useDark = () => {
  // const theme = localStorage.theme;
  const [theme, setTheme] = useState<any>(localStorage.getItem('theme') || 'light');

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('theme', theme);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useDark;