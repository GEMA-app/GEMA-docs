import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 p-6">
      <h1 className="text-4xl font-bold mb-4">GEMA</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Sistema de Gestión y Evaluación de Modelos y Artefactos
      </p>
      <p>
        Explora la{' '}
        <Link href="/docs" className="font-medium underline text-primary">
          Documentación
        </Link>{' '}
        para comenzar.
      </p>
    </div>
  );
}
