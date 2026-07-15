import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80"
    >
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-slate-900 dark:text-white">
          K.Ogawa
        </a>

        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-slate-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden dark:text-slate-200 dark:hover:text-blue-400 dark:focus:ring-offset-slate-900"
        >
          <span className="relative block h-5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-current transition-transform ${
                isOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] block h-0.5 w-6 bg-current transition-opacity ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-6 bg-current transition-transform ${
                isOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>

        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-6 py-3 shadow-md md:hidden dark:border-slate-700 dark:bg-slate-900 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="mx-auto flex max-w-5xl flex-col py-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base font-medium text-slate-700 transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-slate-200 dark:hover:text-blue-400 dark:focus:text-blue-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
