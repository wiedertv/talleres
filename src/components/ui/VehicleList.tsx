import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"

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
        image: 'https://readdy.ai/api/search-image?query=white%20Toyota%20Corolla%202020%20sedan%20on%20a%20simple%20white%20background%2C%20professional%20automotive%20photography%2C%20clean%20studio%20lighting&width=120&height=80&seq=6&orientation=landscape'
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
        image: 'https://readdy.ai/api/search-image?query=blue%20Honda%20Civic%202019%20sedan%20on%20a%20simple%20white%20background%2C%20professional%20automotive%20photography%2C%20clean%20studio%20lighting&width=120&height=80&seq=7&orientation=landscape'
    },
    // Más vehículos...
]

export default function VehicleList() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Vehículos Registrados</CardTitle>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Buscar por placa o VIN..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A5C8F] focus:border-transparent text-sm"
                        />
                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Todos los vehículos"/>
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
                        <div key={index}
                             className="flex items-center p-4 rounded-lg hover:bg-gray-50 border border-gray-100">
                            <div className="h-20 w-30 overflow-hidden rounded-md">
                                <img
                                    src={vehicle.image}
                                    alt={`${vehicle.make} ${vehicle.model}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="ml-4 flex-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">{vehicle.make} {vehicle.model} {vehicle.year}</h4>
                                    <div className="flex items-center">
                                        <Badge
                                            variant="outline"
                                            className={`mr-2 ${
                                                vehicle.status === 'Activo' ? 'bg-[#4CB944]/10 text-[#4CB944] border-[#4CB944]/20' :
                                                    vehicle.status === 'En servicio' ? 'bg-[#2A5C8F]/10 text-[#2A5C8F] border-[#2A5C8F]/20' :
                                                        'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20'
                                            }`}
                                        >
                                            {vehicle.status}
                                        </Badge>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-2 text-xs text-gray-500">
                                    <span><i className="fas fa-hashtag mr-1"></i> Placa: {vehicle.plate}</span>
                                    <span><i className="fas fa-palette mr-1"></i> Color: {vehicle.color}</span>
                                    <span><i className="fas fa-user mr-1"></i> Dueño: {vehicle.owner}</span>
                                </div>
                                <div className="mt-2 text-xs">
                                    <span className="text-gray-500">Último servicio: <span
                                        className="font-medium">{vehicle.lastService}</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">
                    <i className="fas fa-chevron-left mr-2"></i>
                    Anterior
                </Button>
                <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map(page => (
                        <Button
                            key={page}
                            variant={page === 1 ? "default" : "outline"}
                            className={`w-8 h-8 p-0 ${page === 1 ? 'bg-[#2A5C8F]' : ''}`}
                        >
                            {page}
                        </Button>
                    ))}
                </div>
                <Button variant="outline">
                    Siguiente
                    <i className="fas fa-chevron-right ml-2"></i>
                </Button>
            </CardFooter>
        </Card>
    )
}