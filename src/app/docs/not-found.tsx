import Link from 'next/link';

export default function DocsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Documento no encontrado</h1>
      <p className="text-fd-muted-foreground max-w-md mb-8">
        La página de documentación que estás buscando no existe en esta sección o ha sido reubicada.
      </p>
      <Link
        href="/docs/guia"
        className="bg-fd-primary text-fd-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
      >
        Ir a la Guía Principal
      </Link>
    </div>
  );
}
