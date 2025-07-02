'use client';

import { Button } from '@/components/ui/button';
import ClientList from '@/components/ui/clientList';
import ClientForm from '@/components/ui/clientsForm';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { useDashboard } from '@/lib/contexts/DashboardContext';
import ClientStats from '@/components/ui/ClientStats';
import { User } from 'lucide-react';

export default function ClientsPage() {
	const { isClientDialogOpen, setIsClientDialogOpen } = useDashboard();

	return (
		<div className="space-y-6 p-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Gestión de Clientes</h2>
				<Dialog open={isClientDialogOpen} onOpenChange={setIsClientDialogOpen}>
					<DialogTrigger asChild>
						<Button className="bg-orange-500 hover:bg-orange-500/90 cursor-pointer">
							<User />
							Nuevo Cliente
						</Button>
					</DialogTrigger>
					<ClientForm />
				</Dialog>
			</div>

			<div className="grid grid-cols-1 gap-6">
				<ClientList />
				<ClientStats />
			</div>
		</div>
	);
}
