'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import KPICards from '@/components/ui/KPICard';
import RecentActivity from '@/components/ui/RecentActivity';
import ServicesChart from '@/components/ui/serviceChart';
import UpcomingServices from '@/components/ui/UpcomingServices';
import QuickActions from '@/components/ui/QuickActions';

export default function DashboardPage() {
	return (
		<div className="space-y-6 p-6">
			<KPICards />

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle>Servicios por Categoría</CardTitle>
						<CardDescription>Últimos 6 meses</CardDescription>
					</CardHeader>
					<CardContent>
						<ServicesChart />
					</CardContent>
				</Card>

				<RecentActivity />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<UpcomingServices />
				<QuickActions />
			</div>
		</div>
	);
}
