import { AppContent } from '@/components/app-content';
import { Navbar1 } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import Navbar from '@/components/navbar';
import type { AppLayoutProps } from '@/types';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: AppLayoutProps) {
    return (
        <AppShell variant="header" >
            {/* <AppHeader breadcrumbs={breadcrumbs} /> */}
            {/* <Navbar1 /> */}
            <Navbar />
            <AppContent variant="header">{children}</AppContent>
        </AppShell>
    );
}
