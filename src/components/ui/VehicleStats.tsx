import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Progress} from "@/components/ui/progress"

export default function VehicleStats() {
    const brandDistribution = [
        {brand: 'Toyota', percentage: 32, color: '#2A5C8F'},
        {brand: 'Honda', percentage: 24, color: '#FF6B35'},
        {brand: 'Volkswagen', percentage: 18, color: '#4CB944'},
        {brand: 'Ford', percentage: 15, color: '#9B59B6'},
        {brand: 'Otros', percentage: 11, color: '#95A5A6'},
    ]

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
                            <Progress
                                value={brand.percentage}
                                className="h-2 bg-gray-200"
                                style={{
                                    backgroundColor: `${brand.color}20`,
                                    ['--progress-primary' as any]: brand.color
                                }}
                            />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}