import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar1, Car, CirclePlus, File, Search, Tags } from 'lucide-react';
import React from 'react';

export default function QuickActions() {
	const quickActions = [
		{ icon: <CirclePlus />, label: 'Nuevo Cliente', color: 'text-blue-500' },
		{ icon: <Car />, label: 'Nuevo Vehículo', color: 'text-orange-500' },
		{ icon: <Calendar1 />, label: 'Agendar Servicio', color: 'text-green-500' },
		{ icon: <Tags />, label: 'Nueva Venta', color: 'text-blue-500' },
		{ icon: <Search />, label: 'Buscar Historial', color: 'text-orange-500' },
		{ icon: <File />, label: 'Generar Factura', color: 'text-green-500' },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Acciones Rápidas</CardTitle>
				<CardDescription>Accesos directos frecuentes</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-2 gap-3">
					{quickActions.map((action, index) => (
						<Button
							key={index}
							variant="outline"
							className="h-auto py-4 flex flex-col items-center justify-center space-y-2"
							style={{ borderColor: `${action.color}30` }}
						>
							<div
								className="h-10 w-10 rounded-full flex items-center justify-center"
								style={{ backgroundColor: `${action.color}10` }}
							>
								{React.cloneElement(action.icon, { className: `${action.color} size-9` })}
							</div>
							<span className="text-xs font-medium">{action.label}</span>
						</Button>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
