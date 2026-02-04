import { DashboardShell } from '@/components/layout/dashboard-shell';

export const metadata = {
  title: 'Dashboard - BusinessPro',
  description: 'Panel de control de tu negocio',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
