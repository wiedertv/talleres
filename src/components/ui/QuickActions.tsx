import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"

export default function QuickActions() {
    const quickActions = [
        {icon: 'fa-user-plus', label: 'Nuevo Cliente', color: '#2A5C8F'},
        {icon: 'fa-car-alt', label: 'Nuevo Vehículo', color: '#FF6B35'},
        {icon: 'fa-calendar-plus', label: 'Agendar Servicio', color: '#4CB944'},
        {icon: 'fa-tags', label: 'Nueva Venta', color: '#2A5C8F'},
        {icon: 'fa-search', label: 'Buscar Historial', color: '#FF6B35'},
        {icon: 'fa-file-invoice', label: 'Generar Factura', color: '#4CB944'},
    ]

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
                            style={{borderColor: `${action.color}30`}}
                        >
                            <div
                                className="h-10 w-10 rounded-full flex items-center justify-center"
                                style={{backgroundColor: `${action.color}10`}}
                            >
                                <i className={`fas ${action.icon}`} style={{color: action.color}}></i>
                            </div>
                            <span className="text-xs font-medium">{action.label}</span>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}