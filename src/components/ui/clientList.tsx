'use client'

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

export default function ClientList() {
    const clients = JSON.parse(localStorage.getItem('clients') || '[]')

    return (
        <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#2A5C8F]/5 to-[#2A5C8F]/10 border-b">
                <h2 className="text-[#2A5C8F] text-lg font-semibold">Clientes Registrados</h2>
                <div className="flex items-center space-x-2 mt-2">
                    <div className="relative flex-1">
                        <Input
                            type="text"
                            placeholder="Buscar cliente..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A5C8F] focus:border-transparent text-sm"
                        />
                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Todos los clientes"/>
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
                    {clients.map((client, index) => (
                        <div key={index}
                             className="flex items-center p-5 hover:bg-gray-50 transition-colors duration-150">
                            <Avatar className="h-14 w-14 border-2 border-[#2A5C8F]/20">
                                <AvatarImage src={client.image}/>
                                <AvatarFallback>{client.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 flex-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base font-semibold text-[#2A5C8F]">{client.name}</h4>
                                    <div className="flex items-center">
                                        <Badge variant="outline"
                                               className="mr-2 bg-[#4CB944]/10 text-[#4CB944] border-[#4CB944]/20">
                                            <i className="fas fa-star mr-1 text-xs"></i> {client.points} pts
                                        </Badge>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-2 text-xs text-gray-600">
                                    <span className="flex items-center"><i
                                        className="fas fa-envelope mr-1 text-[#2A5C8F]"></i> {client.email}</span>
                                    <span className="flex items-center"><i
                                        className="fas fa-phone mr-1 text-[#2A5C8F]"></i> {client.phone}</span>
                                    <span className="flex items-center"><i
                                        className="fas fa-car mr-1 text-[#2A5C8F]"></i> {client.vehicles || 0} vehículos</span>
                                </div>
                                <div className="mt-2 text-xs">
                                    <span className="text-gray-500">Último servicio: <span
                                        className="font-medium text-[#FF6B35]">{client.lastService || 'N/A'}</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-gray-50 py-4">
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