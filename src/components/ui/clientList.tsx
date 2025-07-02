'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Car, ChevronLeft, ChevronRight, Eclipse, Mail, Phone, Search, Star } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';

interface Client {
	image: string;
	name: string;
	points: number;
	email: string;
	phone: string;
	vehicles?: number;
	lastService?: string;
}

const defaultClients: Client[] = [
	{
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
		name: 'Juan Pérez',
		points: 1500,
		email: 'juan.perez@example.com',
		phone: '+584121234567',
		vehicles: 2,
		lastService: '2024-05-20',
	},
	{
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
		name: 'María García',
		points: 2200,
		email: 'maria.garcia@example.com',
		phone: '+584149876543',
		vehicles: 1,
		lastService: '2025-01-10',
	},
	{
		image: 'https://randomuser.me/api/portraits/men/3.jpg',
		name: 'Carlos Sánchez',
		points: 800,
		email: 'carlos.sanchez@example.com',
		phone: '+584265551234',
	},
	{
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
		name: 'Ana López',
		points: 3000,
		email: 'ana.lopez@example.com',
		phone: '+584167778899',
		vehicles: 3,
		lastService: '2024-11-15',
	},
];

export default function ClientList() {
	const [clients] = useState<Client[]>(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('clients');
			return stored ? JSON.parse(stored) : defaultClients;
		}
		return defaultClients;
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('clients', JSON.stringify(clients));
		}
	}, [clients]);

	return (
		<Card className="shadow-lg border-0 overflow-hidden">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Clientes Registrados</CardTitle>
				<div className="flex items-center space-x-2 mt-2">
					<div className="relative flex-1">
						<Input
							type="text"
							placeholder="Buscar cliente..."
							className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
						/>
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					</div>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Todos los clientes" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos los clientes</SelectItem>
							<SelectItem value="active">Clientes activos</SelectItem>
							<SelectItem value="new">Nuevos (último mes)</SelectItem>
							<SelectItem value="vip">Clientes VIP</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardHeader>
			<CardContent className="p-0">
				<div className="divide-y divide-gray-100">
					{clients.map((client: Client, index: number) => (
						<div
							key={index}
							className="flex items-center p-5 hover:bg-gray-50 transition-colors duration-150  border-b rounded-xl"
						>
							<Avatar className="h-14 w-14 border-2 border-blue-500/20">
								<AvatarImage src={client.image} />
								<AvatarFallback>{client.name.substring(0, 2).toUpperCase()}</AvatarFallback>
							</Avatar>
							<div className="ml-4 flex-1">
								<div className="flex items-center justify-between">
									<h4 className="text-base font-semibold text-blue-500">{client.name}</h4>
									<div className="flex items-center">
										<Badge variant="outline" className="mr-2 bg-green-500/10 text-green-500 border-green-500/20">
											<Star /> {client.points} pts
										</Badge>
										<button className="text-gray-400 hover:text-gray-600">
											<Eclipse />
										</button>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-2 mt-2 text-xs text-gray-600">
									<span className="flex items-center">
										<Mail className="mr-1 text-blue-500" /> {client.email}
									</span>
									<span className="flex items-center">
										<Phone className="mr-1 text-blue-500" /> {client.phone}
									</span>
									<span className="flex items-center">
										<Car className="mr-1 text-blue-500" /> {client.vehicles || 0} vehículos
									</span>
								</div>
								<div className="mt-2 text-xs">
									<span className="text-gray-500">
										Último servicio:{' '}
										<span className="font-medium text-[orange-500]">{client.lastService || 'N/A'}</span>
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex justify-between bg-gray-50 py-4">
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
