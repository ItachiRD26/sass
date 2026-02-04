export const metadata = {
  title: 'Panel de Administración - BusinessPro',
  description: 'Panel administrativo de BusinessPro',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
