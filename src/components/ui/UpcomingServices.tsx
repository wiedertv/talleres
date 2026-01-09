import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Calendar1, Settings } from 'lucide-react';

export default function UpcomingServices() {
	const upcomingServices = [
		{
			time: '11:30',
			client: 'Roberto Méndez',
			service: 'Cambio de frenos',
			vehicle: 'Honda Civic 2019',
			status: 'Confirmado',
		},
		{
			time: '13:00',
			client: 'Laura Torres',
			service: 'Diagnóstico eléctrico',
			vehicle: 'Nissan Sentra 2018',
			status: 'Pendiente',
		},
		{
			time: '15:30',
			client: 'Carlos Vega',
			service: 'Mantenimiento 10,000km',
			vehicle: 'Volkswagen Golf 2021',
			status: 'Confirmado',
		},
		{
			time: '16:45',
			client: 'Ana Martínez',
			service: 'Cambio de batería',
			vehicle: 'Chevrolet Spark 2017',
			status: 'Confirmado',
		},
	];

	return (
		<Card className="lg:col-span-2">
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle>Próximos Servicios</CardTitle>
					<CardDescription>Servicios programados para hoy</CardDescription>
				</div>
				<Button variant="outline">
					<Calendar1 />
					Ver Agenda
				</Button>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{upcomingServices.map((service, index) => (
						<div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
							<div className="flex-shrink-0 w-16 text-center">
								<span className="text-sm font-medium">{service.time}</span>
							</div>
							<div className="ml-4 flex-1">
								<h4 className="text-sm font-medium">{service.client}</h4>
								<div className="grid md:grid-cols-[auto_1fr] items-center text-xs text-gray-500 mt-1">
									<span className="col-start-auto flex items-center gap-2 mr-3">
										<Car /> {service.vehicle}
									</span>
									<span className="flex items-center gap-2 mr-3">
										<Settings /> {service.service}
									</span>
								</div>
							</div>
							<Badge
								variant={service.status === 'Confirmado' ? 'default' : 'outline'}
								className={service.status === 'Confirmado' ? 'bg-green-500 hover:bg-green-500/90' : ''}
							>
								{service.status}
							</Badge>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
