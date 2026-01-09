'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import VehicleForm from '@/components/ui/VehicleForm';
import VehicleList from '@/components/ui/VehicleList';
import VehicleStats from '@/components/ui/VehicleStats';
import { useDashboard } from '@/lib/contexts/DashboardContext';
import { Car } from 'lucide-react';

export default function VehiclesPage() {
	const { isVehicleDialogOpen, setIsVehicleDialogOpen } = useDashboard();

	return (
		<div className="space-y-6 p-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Gestión de Vehículos</h2>
				<Dialog open={isVehicleDialogOpen} onOpenChange={setIsVehicleDialogOpen}>
					<DialogTrigger asChild>
						<Button className="bg-orange-500 hover:bg-orange-500/90">
							<Car />
							Nuevo Vehículo
						</Button>
					</DialogTrigger>
					<VehicleForm />
				</Dialog>
			</div>

			<div className="grid grid-cols-1 gap-6">
				<VehicleList />
				<VehicleStats />
			</div>
		</div>
	);
}
