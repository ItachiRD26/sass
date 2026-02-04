'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, ShoppingCart, Package, FileText, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border-light bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-text-inverse font-bold">
              BP
            </div>
            <span className="font-bold text-text-primary">BusinessPro</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <Link href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Características
            </Link>
            <Link href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors">
              Precios
            </Link>
          </div>
          <div className="flex gap-2">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-text-primary hover:bg-surface rounded-lg transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-2 bg-primary text-text-inverse rounded-lg hover:bg-primary-dark transition-colors"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-full bg-surface px-4 py-2">
              <span className="text-sm font-medium text-primary">Bienvenido a BusinessPro</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl mb-6">
              Gestiona tu negocio de forma inteligente
            </h1>
            <p className="text-balance text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Plataforma completa para administrar tus productos, ventas, inventario y más. 
              Diseñada especialmente para pequeñas y medianas empresas.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-text-inverse hover:bg-primary-dark transition-colors"
              >
                Comenzar gratis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-text-primary hover:bg-surface transition-colors"
              >
                Ver características
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 rounded-2xl border border-border bg-surface p-1 shadow-2xl">
            <div className="rounded-xl bg-gradient-to-b from-surface-secondary to-background p-8">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-20 rounded-lg bg-border-light" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border-light px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Todo lo que necesitas</h2>
            <p className="text-lg text-text-secondary">Herramientas poderosas integradas en una sola plataforma</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShoppingCart,
                title: "Sistema POS",
                description: "Punto de venta moderno y rápido para tus operaciones diarias"
              },
              {
                icon: Package,
                title: "Gestión de Inventario",
                description: "Control total de tu stock en tiempo real"
              },
              {
                icon: BarChart3,
                title: "Productos",
                description: "Organiza y administra todos tus productos fácilmente"
              },
              {
                icon: FileText,
                title: "Cotizaciones",
                description: "Genera cotizaciones profesionales en segundos"
              },
              {
                icon: Users,
                title: "Gestión de Usuarios",
                description: "Control de permisos y roles para tu equipo"
              },
              {
                icon: BarChart3,
                title: "Reportes",
                description: "Análisis detallados de tu negocio"
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="rounded-lg border border-border-light bg-surface p-6 hover:border-primary transition-colors">
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-light bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Listo para comenzar?</h2>
          <p className="text-lg text-text-secondary mb-8">
            Únete a cientos de empresas que ya confían en BusinessPro
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-text-inverse hover:bg-primary-dark transition-colors"
          >
            Crear cuenta gratis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-light bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-text-inverse font-bold text-sm">
                  BP
                </div>
                <span className="font-bold text-text-primary">BusinessPro</span>
              </div>
              <p className="text-text-secondary text-sm">
                Plataforma SAAS para gestión empresarial integral
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Producto</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><Link href="#" className="hover:text-text-primary transition-colors">Características</Link></li>
                  <li><Link href="#" className="hover:text-text-primary transition-colors">Precios</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Empresa</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><Link href="#" className="hover:text-text-primary transition-colors">Acerca de</Link></li>
                  <li><Link href="#" className="hover:text-text-primary transition-colors">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><Link href="#" className="hover:text-text-primary transition-colors">Privacidad</Link></li>
                  <li><Link href="#" className="hover:text-text-primary transition-colors">Términos</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border-light mt-8 pt-8 flex flex-col gap-4 sm:flex-row sm:justify-between text-sm text-text-secondary">
            <p>&copy; 2024 BusinessPro. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-text-primary transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-text-primary transition-colors">Facebook</Link>
              <Link href="#" className="hover:text-text-primary transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
