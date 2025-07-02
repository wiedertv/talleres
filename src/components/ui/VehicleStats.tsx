import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function VehicleStats() {
	const brandDistribution = [
		{ brand: 'Toyota', percentage: 32, color: 'bg-blue-500' },
		{ brand: 'Honda', percentage: 24, color: 'bg-orange-500' },
		{ brand: 'Volkswagen', percentage: 18, color: 'bg-green-500' },
		{ brand: 'Ford', percentage: 15, color: 'bg-pink-500' },
		{ brand: 'Otros', percentage: 11, color: 'bg-gray-500' },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Distribución por Marca</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{brandDistribution.map((brand, index) => (
						<div key={index}>
							<div className="flex justify-between mb-1">
								<span className="text-sm">{brand.brand}</span>
								<span className="text-sm font-medium">{brand.percentage}%</span>
							</div>
							<Progress value={brand.percentage} className="h-2 bg-gray-200" colorIndicator={`${brand.color}`} />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
