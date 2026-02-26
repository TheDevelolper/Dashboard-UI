import { signal } from '@angular/core';

const STORAGE_KEY = 'theme';

export const themeSignal = signal<boolean>(false);

function getInitialTheme(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) {
    return stored === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function initializeTheme(): void {
  const isDark = getInitialTheme();
  themeSignal.set(isDark);
  applyTheme(isDark);
}

export function toggleTheme(): void {
  const newValue = !themeSignal();
  setTheme(newValue);
}

export function setTheme(isDark: boolean): void {
  themeSignal.set(isDark);
  applyTheme(isDark);
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
}

function applyTheme(isDark: boolean): void {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}
