import { useTheme } from '../store/themeStore';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm transition
        ${isDark
          ? 'border-slate-700/70 bg-slate-900/80 text-slate-100 hover:bg-slate-800/90'
          : 'border-slate-300 bg-white/90 text-slate-800 hover:bg-slate-100'
        }`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px]
          ${isDark ? 'bg-slate-950 text-amber-300' : 'bg-slate-100 text-slate-900'}
        `}
      >
        {isDark ? '☾' : '☼'}
      </span>
      <span>{isDark ? 'Dark' : 'Light'} mode</span>
    </button>
  );
}

