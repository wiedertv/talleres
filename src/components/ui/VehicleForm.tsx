'use client'

import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {useDashboard} from "@/lib/contexts/DashboardContext";

export default function VehicleForm() {
    const {
        newVehicleData,
        setNewVehicleData,
        setIsVehicleDialogOpen
    } = useDashboard()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Lógica para guardar el vehículo
        setIsVehicleDialogOpen(false)
        setNewVehicleData({
            plate: "",
            make: "",
            model: "",
            year: "",
            color: "",
            contact: "",
            notes: ""
        })
    }

    return (
        <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
                <DialogTitle>Nuevo Vehículo</DialogTitle>
                <DialogDescription>Registrar vehículo</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="modal-plate">Placa / VIN <span className="text-red-500">*</span></Label>
                    <Input
                        id="modal-plate"
                        value={newVehicleData.plate}
                        onChange={(e) => setNewVehicleData({...newVehicleData, plate: e.target.value})}
                        placeholder="Ej. ABC-123 o VIN"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="modal-make">Marca <span className="text-red-500">*</span></Label>
                        <Select
                            value={newVehicleData.make}
                            onValueChange={(value) => setNewVehicleData({...newVehicleData, make: value})}
                            required
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar marca"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="toyota">Toyota</SelectItem>
                                <SelectItem value="honda">Honda</SelectItem>
                                <SelectItem value="ford">Ford</SelectItem>
                                <SelectItem value="chevrolet">Chevrolet</SelectItem>
                                <SelectItem value="volkswagen">Volkswagen</SelectItem>
                                <SelectItem value="nissan">Nissan</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="modal-model">Modelo <span className="text-red-500">*</span></Label>
                        <Select
                            value={newVehicleData.model}
                            onValueChange={(value) => {
                                if (value === "custom") {
                                    const customModel = prompt("Ingrese el nuevo modelo:")
                                    if (customModel) {
                                        setNewVehicleData({...newVehicleData, model: customModel})
                                    }
                                } else {
                                    setNewVehicleData({...newVehicleData, model: value})
                                }
                            }}
                            required
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar modelo"/>
                            </SelectTrigger>
                            <SelectContent>
                                {newVehicleData.make === "toyota" && [
                                    <SelectItem key="corolla" value="Corolla">Corolla</SelectItem>,
                                    <SelectItem key="camry" value="Camry">Camry</SelectItem>,
                                    <SelectItem key="rav4" value="RAV4">RAV4</SelectItem>,
                                    <SelectItem key="hilux" value="Hilux">Hilux</SelectItem>
                                ]}
                                {newVehicleData.make === "honda" && [
                                    <SelectItem key="civic" value="Civic">Civic</SelectItem>,
                                    <SelectItem key="accord" value="Accord">Accord</SelectItem>,
                                    <SelectItem key="crv" value="CR-V">CR-V</SelectItem>,
                                    <SelectItem key="pilot" value="Pilot">Pilot</SelectItem>
                                ]}
                                {/* Otras marcas... */}
                                <SelectItem key="custom" value="custom">
                                    <div className="flex items-center">
                                        <i className="fas fa-plus mr-2"></i>
                                        Agregar nuevo modelo
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="modal-year">Año <span className="text-red-500">*</span></Label>
                        <Input
                            id="modal-year"
                            type="number"
                            value={newVehicleData.year}
                            onChange={(e) => setNewVehicleData({...newVehicleData, year: e.target.value})}
                            placeholder="Ej. 2022"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="modal-color">Color</Label>
                        <Input
                            id="modal-color"
                            value={newVehicleData.color}
                            onChange={(e) => setNewVehicleData({...newVehicleData, color: e.target.value})}
                            placeholder="Ej. Blanco"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="modal-contact">Dueño/Contacto</Label>
                    <Input
                        id="modal-contact"
                        value={newVehicleData.contact}
                        onChange={(e) => setNewVehicleData({...newVehicleData, contact: e.target.value})}
                        placeholder="Nombre del dueño"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="modal-notes">Notas adicionales</Label>
                    <Textarea
                        id="modal-notes"
                        value={newVehicleData.notes}
                        onChange={(e) => setNewVehicleData({...newVehicleData, notes: e.target.value})}
                        placeholder="Información adicional relevante"
                    />
                </div>

                <DialogFooter className="flex justify-end space-x-2 mt-4">
                    <Button
                        variant="outline"
                        type="button"
                        onClick={() => setIsVehicleDialogOpen(false)}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        className="bg-[#2A5C8F] hover:bg-[#2A5C8F]/90"
                    >
                        <i className="fas fa-save mr-2"></i>
                        Guardar Vehículo
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}