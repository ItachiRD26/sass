'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShoppingCart, Package, BarChart3, FileText, Users, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                BP
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-lg">BusinessPro</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Características
              </a>
              <a href="#pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Precios
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link href="/auth/login" className="hidden sm:inline px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Iniciar sesión
              </Link>
              <Link href="/auth/register" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">500+ empresas nos confían</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Tu negocio, bajo control total
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Gestiona tu inventario, ventas, clientes y más desde una plataforma intuitiva diseñada para pequeñas y medianas empresas dominicanas.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/auth/register" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                  Comienza gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-900">
                  Ver características
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sin tarjeta de crédito requerida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Acceso inmediato a todas las funciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Soporte 24/7 en español</span>
                </div>
              </div>
            </div>

            {/* Right Column - Mock Dashboard */}
            <div className="relative hidden md:block">
              <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="h-3 w-24 bg-gray-300 dark:bg-slate-700 rounded" />
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-5/6 bg-gray-300 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-4/6 bg-gray-300 dark:bg-slate-700 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-20 bg-gray-300 dark:bg-slate-700 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Todo lo que necesitas para crecer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Una plataforma completa con todas las herramientas para administrar tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: "Sistema POS", desc: "Procesa ventas rápidamente con nuestro punto de venta moderno." },
              { icon: Package, title: "Inventario", desc: "Control total de tus productos con alertas automáticas." },
              { icon: BarChart3, title: "Reportes", desc: "Visualiza tus ventas con dashboards intuitivos." },
              { icon: FileText, title: "Cotizaciones", desc: "Genera presupuestos profesionales en segundos." },
              { icon: Users, title: "Equipo", desc: "Controla permisos y roles para tu equipo." },
              { icon: Lock, title: "Seguridad", desc: "Encriptación de datos y backups automáticos." }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-600 dark:hover:border-blue-500 transition">
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">¿Por qué elegir BusinessPro?</h2>
              <div className="space-y-4">
                {[
                  "Diseñado para el mercado dominicano",
                  "Interfaz intuitiva en español",
                  "Integración con PayPal",
                  "Acceso desde cualquier dispositivo",
                  "Actualizaciones constantes",
                  "Soporte local 24/7"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="text-center space-y-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600 dark:text-gray-400">Empresas activas</p>
                </div>
                <div className="h-px bg-gray-200 dark:bg-slate-700" />
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                  <p className="text-gray-600 dark:text-gray-400">Transacciones</p>
                </div>
                <div className="h-px bg-gray-200 dark:bg-slate-700" />
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                  <p className="text-gray-600 dark:text-gray-400">Disponibilidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Planes para tu negocio</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Elige el plan perfecto para ti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Inicio", price: "Gratis", features: ["Hasta 100 productos", "POS básico", "1 usuario"], highlight: false },
              { name: "Profesional", price: "RD$ 2,999", features: ["Productos ilimitados", "POS completo", "10 usuarios", "Reportes avanzados"], highlight: true },
              { name: "Empresarial", price: "Contactar", features: ["Todo incluido", "Usuarios ilimitados", "API", "Soporte prioritario"], highlight: false }
            ].map((plan, i) => (
              <div key={i} className={`rounded-lg border p-8 ${plan.highlight ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-600' : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900'}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{plan.price}</div>
                <Link href="/auth/register" className={`w-full py-2 rounded-lg font-medium mb-6 block text-center ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-gray-200'}`}>
                  Empezar
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Listo para comenzar?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Únete a cientos de empresas usando BusinessPro</p>
          <Link href="/auth/register" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            Crear cuenta gratis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">BP</div>
                <span className="font-bold text-gray-900 dark:text-white">BusinessPro</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tu negocio, bajo control</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#features" className="hover:text-gray-900 dark:hover:text-white">Características</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 dark:hover:text-white">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Términos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 BusinessPro. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Twitter</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Facebook</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-border bg-surface">
                <span className="inline-block w-2 h-2 rounded-full bg-success" />
                <span className="text-xs font-medium text-text-secondary">Más de 500 empresas confían en nosotros</span>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                  Tu negocio, bajo control total
                </h1>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Gestiona tu inventario, ventas, clientes y más desde una plataforma intuitiva diseñada específicamente para pequeñas y medianas empresas dominicanas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/auth/register"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-text-inverse font-medium rounded-lg hover:bg-primary-dark transition-colors group"
                >
                  Comienza gratis <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-text-primary font-medium rounded-lg hover:bg-surface transition-colors"
                >
                  Ver características
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm text-text-secondary">Sin tarjeta de crédito requerida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm text-text-secondary">Acceso inmediato a todas las funciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm text-text-secondary">Soporte 24/7 en español</span>
                </div>
              </div>
            </div>

            {/* Right side - Dashboard preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 bg-border rounded" />
                    <div className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-warning" />
                      <div className="h-2 w-2 rounded-full bg-success" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-border rounded" />
                    <div className="h-4 w-5/6 bg-border rounded" />
                    <div className="h-4 w-4/6 bg-border rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-24 bg-border rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Todo lo que necesitas para crecer</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Una plataforma completa con todas las herramientas para administrar tu negocio de manera profesional y eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Sistema POS Inteligente",
                description: "Procesa ventas rápidamente con nuestro punto de venta moderno. Múltiples métodos de pago y reportes en tiempo real.",
                color: "text-blue-500"
              },
              {
                icon: Package,
                title: "Gestión de Inventario",
                description: "Control total de tus productos. Alertas automáticas de bajo stock y movimientos detallados.",
                color: "text-green-500"
              },
              {
                icon: BarChart3,
                title: "Análisis y Reportes",
                description: "Visualiza tus ventas, ganancias e inventario con dashboards intuitivos y reportes exportables.",
                color: "text-purple-500"
              },
              {
                icon: FileText,
                title: "Cotizaciones Profesionales",
                description: "Genera presupuestos en segundos. Seguimiento automático y conversión a ventas.",
                color: "text-orange-500"
              },
              {
                icon: Users,
                title: "Gestión de Equipo",
                description: "Controla permisos y roles. Auditoría completa de acciones de usuarios.",
                color: "text-pink-500"
              },
              {
                icon: Lock,
                title: "Seguridad Empresarial",
                description: "Encriptación de datos, autenticación segura y backups automáticos.",
                color: "text-red-500"
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group p-8 rounded-xl border border-border bg-surface/50 hover:border-primary hover:bg-surface transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`inline-block p-3 rounded-lg bg-primary/10 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Por qué elegir BusinessPro?</h2>
              <div className="space-y-5">
                {[
                  "Diseñado para el mercado dominicano con soporte local",
                  "Interfaz en español intuitiva y fácil de usar",
                  "Integración con PayPal para pagos en línea",
                  "Acceso desde cualquier dispositivo",
                  "Actualizado constantemente con nuevas funciones",
                  "Comunidad activa de usuarios y soporte directo"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-border">
              <div className="text-center space-y-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-text-secondary">Empresas activas</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <p className="text-text-secondary">Transacciones procesadas</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-text-secondary">Disponibilidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planes para tu negocio</h2>
            <p className="text-lg text-text-secondary">Elige el plan que mejor se adapte a tus necesidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Inicio",
                price: "Gratis",
                description: "Perfecto para comenzar",
                features: [
                  "Hasta 100 productos",
                  "POS básico",
                  "1 usuario",
                  "Reportes simples"
                ],
                cta: "Comenzar ahora",
                highlighted: false
              },
              {
                name: "Profesional",
                price: "RD$ 2,999",
                period: "/mes",
                description: "Para negocios en crecimiento",
                features: [
                  "Productos ilimitados",
                  "POS completo",
                  "Hasta 10 usuarios",
                  "Reportes avanzados",
                  "Cotizaciones",
                  "Integración PayPal"
                ],
                cta: "Prueba gratis",
                highlighted: true
              },
              {
                name: "Empresarial",
                price: "Contactar",
                description: "Solución personalizada",
                features: [
                  "Todo lo de Profesional",
                  "Usuarios ilimitados",
                  "API personalizada",
                  "Soporte prioritario",
                  "Capacitación incluida",
                  "SLA garantizado"
                ],
                cta: "Solicitar demo",
                highlighted: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-all ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg scale-105"
                    : "border-border bg-surface/50 hover:border-primary/50"
                }`}
              >
                <div className="p-8 border-b border-border">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-text-secondary text-sm ml-1">{plan.period}</span>}
                  </div>
                  <Link
                    href={plan.highlighted ? "/auth/register" : "#"}
                    className={`w-full py-2 rounded-lg font-medium transition-colors text-center block ${
                      plan.highlighted
                        ? "bg-primary text-text-inverse hover:bg-primary-dark"
                        : "bg-surface text-text-primary hover:bg-border"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preguntas frecuentes</h2>
            <p className="text-text-secondary">Resuelve tus dudas sobre BusinessPro</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Es seguro usar BusinessPro?",
                a: "Sí, usamos encriptación de nivel empresarial y mantenemos backups automáticos de todos tus datos. Tu información está protegida."
              },
              {
                q: "¿Puedo cambiar de plan en cualquier momento?",
                a: "Por supuesto. Puedes actualizar, degradar o cancelar tu plan en cualquier momento sin penalizaciones."
              },
              {
                q: "¿Hay soporte al cliente?",
                a: "Sí, contamos con soporte por email, chat y teléfono disponible en español durante horario comercial."
              },
              {
                q: "¿Necesito capacitación para usar BusinessPro?",
                a: "La plataforma es muy intuitiva, pero ofrecemos tutoriales y webinars gratuitos para ayudarte a aprovecharla al máximo."
              }
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-background">
                <h3 className="font-semibold text-text-primary mb-3">{item.q}</h3>
                <p className="text-text-secondary text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-lg text-text-secondary mb-8">
            Únete a cientos de empresas que ya usan BusinessPro para gestionar su negocio de forma inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-text-inverse font-medium rounded-lg hover:bg-primary-dark transition-colors group"
            >
              Registrarse gratis <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text-primary font-medium rounded-lg hover:bg-surface transition-colors"
            >
              Ver demo en vivo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-text-inverse font-bold text-sm">
                  BP
                </div>
                <span className="font-bold">BusinessPro</span>
              </div>
              <p className="text-sm text-text-secondary">
                La plataforma todo en uno para gestionar tu negocio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Características</Link></li>
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Precios</Link></li>
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Seguridad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Contacto</Link></li>
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Acerca de</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Términos</Link></li>
                <li><Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-text-secondary">
            <p>&copy; 2024 BusinessPro. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-6 sm:mt-0">
              <Link href="#" className="hover:text-text-primary transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-text-primary transition-colors">Facebook</Link>
              <Link href="#" className="hover:text-text-primary transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-text-primary transition-colors">Instagram</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
