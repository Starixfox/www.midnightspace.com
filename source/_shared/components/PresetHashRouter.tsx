import { useEffect, useState, type ReactNode } from 'react';
import { getPresetRoutePath } from '../preset-site-routing';

type PresetHashRouterProps = {
  routes: Record<string, ReactNode>;
};

export function PresetHashRouter({ routes }: PresetHashRouterProps) {
  const [path, setPath] = useState<string>(() =>
    typeof window === 'undefined' ? '' : getPresetRoutePath(),
  );

  useEffect(() => {
    const onHashChange = () => setPath(getPresetRoutePath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return <>{routes[path] ?? routes['']}</>;
}
