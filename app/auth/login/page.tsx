import { LoginForm } from '@/components/auth/login-form';
import Link from 'next/link';

export const metadata = {
  title: 'Iniciar Sesión - BusinessPro',
  description: 'Inicia sesión en tu cuenta de BusinessPro',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-text-inverse font-bold">
            BP
          </div>
          <span className="font-bold text-text-primary">BusinessPro</span>
        </Link>
      </div>

      {/* Form */}
      <LoginForm />

      {/* Footer */}
      <p className="text-center text-text-secondary text-sm mt-8">
        © 2024 BusinessPro. Todos los derechos reservados.
      </p>
    </div>
  );
}
