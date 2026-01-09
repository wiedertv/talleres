import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Eclipse, Hash, Palette, Search, User } from 'lucide-react';
import Image from 'next/image';

const vehicles = [
	{
		plate: 'ABC-123',
		make: 'Toyota',
		model: 'Corolla',
		year: '2020',
		color: 'Blanco',
		owner: 'Roberto Méndez',
		lastService: '15/06/2025',
		status: 'Activo',
		image:
			'https://readdy.ai/api/search-image?query=white%20Toyota%20Corolla%202020%20sedan%20on%20a%20simple%20white%20background%2C%20professional%20automotive%20photography%2C%20clean%20studio%20lighting&width=120&height=80&seq=6&orientation=landscape',
	},
	{
		plate: 'XYZ-789',
		make: 'Honda',
		model: 'Civic',
		year: '2019',
		color: 'Azul',
		owner: 'Laura Torres',
		lastService: '28/06/2025',
		status: 'En servicio',
		image:
			'https://readdy.ai/api/search-image?query=blue%20Honda%20Civic%202019%20sedan%20on%20a%20simple%20white%20background%2C%20professional%20automotive%20photography%2C%20clean%20studio%20lighting&width=120&height=80&seq=7&orientation=landscape',
	},
	// Más vehículos...
];

export default function VehicleList() {
	return (
		<Card className="shadow-lg border-0 overflow-hidden">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Vehículos Registrados</CardTitle>
				<div className="flex items-center space-x-2 mt-2">
					<div className="relative flex-1">
						<Input
							type="text"
							placeholder="Buscar por placa o VIN..."
							className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
						/>
						<Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					</div>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Todos los vehículos" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos los vehículos</SelectItem>
							<SelectItem value="active">Activos</SelectItem>
							<SelectItem value="service">En servicio</SelectItem>
							<SelectItem value="pending">Pendientes</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{vehicles.map((vehicle, index) => (
						<div key={index} className="flex items-center p-4 rounded-lg hover:bg-gray-50 border border-gray-100">
							<div className="h-20 w-30 overflow-hidden rounded-md relative">
								<Image
									src={vehicle.image}
									alt={`${vehicle.make} ${vehicle.model}`}
									className="h-full w-full object-cover"
									fill
								/>
							</div>
							<div className="ml-4 flex-1">
								<div className="flex items-center justify-between">
									<h4 className="text-sm font-medium">
										{vehicle.make} {vehicle.model} {vehicle.year}
									</h4>
									<div className="flex items-center">
										<Badge
											variant="outline"
											className={`mr-2 ${
												vehicle.status === 'Activo'
													? 'bg-green-500/10 text-green-500 border-green-500/20'
													: vehicle.status === 'En servicio'
													? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
													: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
											}`}
										>
											{vehicle.status}
										</Badge>
										<button className="text-gray-400 hover:text-gray-600">
											<Eclipse />
										</button>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-2 mt-2 text-xs text-gray-500">
									<span className="flex items-center gap-2">
										<Hash /> Placa: {vehicle.plate}
									</span>
									<span className="flex items-center gap-2">
										<Palette /> Color: {vehicle.color}
									</span>
									<span className="flex items-center gap-2">
										<User /> Dueño: {vehicle.owner}
									</span>
								</div>
								<div className="mt-2 text-xs">
									<span className="text-gray-500">
										Último servicio: <span className="font-medium">{vehicle.lastService}</span>
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">
					<ChevronLeft />
					Anterior
				</Button>
				<div className="flex items-center space-x-1">
					{[1, 2, 3, 4, 5].map((page) => (
						<Button
							key={page}
							variant={page === 1 ? 'default' : 'outline'}
							className={`w-8 h-8 p-0 hover:bg-blue-500 hover:text-primary-foreground ${
								page === 1 ? 'bg-blue-500 hover:bg-blue-400' : ''
							}`}
						>
							{page}
						</Button>
					))}
				</div>
				<Button variant="outline">
					Siguiente
					<ChevronRight />
				</Button>
			</CardFooter>
		</Card>
	);
}
