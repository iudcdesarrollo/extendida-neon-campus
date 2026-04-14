import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center">
        <h1 className="text-6xl font-sora font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 font-inter mb-8">Página no encontrada</p>
        <Link
          href="/"
          className="bg-subtle-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-purple/50 transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
