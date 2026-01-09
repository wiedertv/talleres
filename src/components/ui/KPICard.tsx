import { Card, CardContent } from '@/components/ui/card';
import { CircleArrowDown, CircleArrowUp, Settings, Users, Wrench } from 'lucide-react';

export default function KPICards() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			{/* Servicios del Mes */}
			<Card>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-500">Servicios del Mes</p>
							<h3 className="text-2xl font-bold mt-1">142</h3>
							<p className="text-xs text-green-500 mt-1 flex items-center">
								<CircleArrowUp className="mr-1" />
								12% vs. mes anterior
							</p>
						</div>
						<div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
							<Wrench className="text-blue-500" />
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Ventas de Repuestos */}
			<Card>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-500">Ventas de Repuestos</p>
							<h3 className="text-2xl font-bold mt-1">$24,850</h3>
							<p className="text-xs text-green-500 mt-1 flex items-center">
								<CircleArrowUp className="mr-1" /> 8% vs. mes anterior
							</p>
						</div>
						<div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
							<Settings className="fas fa-cogs text-orange-500" />
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Clientes Nuevos */}
			<Card>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-500">Clientes Nuevos</p>
							<h3 className="text-2xl font-bold mt-1">28</h3>
							<p className="text-xs text-orange-500 mt-1 flex items-center">
								<CircleArrowDown className="mr-1" /> 3% vs. mes anterior
							</p>
						</div>
						<div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
							<Users className="fas fa-users text-green-500 text-xl" />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
