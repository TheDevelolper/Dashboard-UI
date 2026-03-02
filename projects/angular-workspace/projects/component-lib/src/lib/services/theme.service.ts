import { signal } from '@angular/core';

const STORAGE_KEY = 'theme';

export const themeSignal = signal<boolean>(false);

function getInitialTheme(): boolean {
  let result = false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) {
    result = stored === 'dark';
    return result;
  }
  result =  window.matchMedia('(prefers-color-scheme: dark)').matches;
  return result;
}

export function initializeTheme(): void {
  const isDark = getInitialTheme();
  applyTheme(isDark);
}

export function toggleTheme(): void {
  const newValue = !themeSignal();
  setTheme(newValue);
}

export function setTheme(isDark: boolean): void {
  applyTheme(isDark);
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
}

// Applies the theme without updating the local storage for initial load. 
// This allows us to apply the theme based on system preferences without locking the user into a choice before they make one.
function applyTheme(isDark: boolean): void {
  themeSignal.set(isDark);
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}
