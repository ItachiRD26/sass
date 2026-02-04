'use client';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Configuración</h1>
        <p className="text-text-secondary">Gestiona la configuración de tu empresa</p>
      </div>
      
      <div className="grid gap-6 max-w-2xl">
        <div className="p-6 bg-surface border border-border rounded-lg">
          <h3 className="font-semibold text-text-primary mb-4">Información de la Empresa</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Nombre</label>
              <input
                type="text"
                value="Mi Empresa"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Correo</label>
              <input
                type="email"
                value="empresa@example.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-surface border border-border rounded-lg">
          <h3 className="font-semibold text-text-primary mb-4">Plan de Suscripción</h3>
          <div className="space-y-2">
            <p className="text-text-secondary">Plan: <span className="font-semibold text-text-primary">Profesional</span></p>
            <p className="text-text-secondary">Renovación: <span className="font-semibold text-text-primary">15 de marzo, 2024</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
