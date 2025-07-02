import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function ClientStats() {
	const stats = [
		{ label: 'Clientes Activos', value: 78, color: 'bg-blue-500' },
		{ label: 'Retención', value: 92, color: 'bg-green-500' },
		{ label: 'Nuevos vs Recurrentes', value: 35, color: 'bg-orange-500' },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Estadísticas de Clientes</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{stats.map((stat, index) => (
						<div key={index}>
							<div className="flex justify-between mb-1">
								<span className="text-sm">{stat.label}</span>
								<span className="text-sm font-medium">{stat.value}%</span>
							</div>
							<Progress colorIndicator={`${stat.color}`} value={stat.value} className="h-2 bg-gray-200" />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
