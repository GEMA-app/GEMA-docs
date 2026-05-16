import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      tabs={[
        { title: 'Análisis', url: '/docs/analisis' },
        { title: 'Frontend', url: '/docs/frontend' },
        { title: 'Backend', url: '/docs/backend' },
      ]}
    >
      {children}
    </DocsLayout>
  );
}