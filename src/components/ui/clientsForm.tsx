'use client'

import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {useDashboard} from "@/lib/contexts/DashboardContext"

export default function ClientForm() {
    const {newClientData, setNewClientData, handleQuickClientRegistration} = useDashboard()

    return (
        <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
                <DialogTitle>Nuevo Cliente</DialogTitle>
                <DialogDescription>Registrar cliente dueño</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="modal-name">Nombre completo <span className="text-red-500">*</span></Label>
                    <Input
                        id="modal-name"
                        value={newClientData.name}
                        onChange={(e) => setNewClientData({...newClientData, name: e.target.value})}
                        placeholder="Nombre y apellidos"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="modal-type">Tipo de cliente</Label>
                    <Select value={newClientData.type}
                            onValueChange={(value) => setNewClientData({...newClientData, type: value})}>
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccionar tipo"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="personal">Personal</SelectItem>
                            <SelectItem value="business">Empresa</SelectItem>
                        </SelectContent>
                    </Select>
                    {newClientData.type === 'personal' && (
                        <div className="mt-2">
                            <Label htmlFor="modal-ci">C.I <span className="text-red-500">*</span></Label>
                            <Input
                                id="modal-ci"
                                value={newClientData.ci || ''}
                                onChange={(e) => setNewClientData({...newClientData, ci: e.target.value})}
                                placeholder="Cédula de Identidad"
                            />
                        </div>
                    )}
                    {newClientData.type === 'business' && (
                        <div className="mt-2">
                            <Label htmlFor="modal-rif">RIF <span className="text-red-500">*</span></Label>
                            <Input
                                id="modal-rif"
                                value={newClientData.rif || ''}
                                onChange={(e) => setNewClientData({...newClientData, rif: e.target.value})}
                                placeholder="Registro de Información Fiscal"
                            />
                        </div>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="modal-email">Correo electrónico <span className="text-red-500">*</span></Label>
                    <Input
                        id="modal-email"
                        type="email"
                        value={newClientData.email}
                        onChange={(e) => setNewClientData({...newClientData, email: e.target.value})}
                        placeholder="ejemplo@correo.com"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="modal-phone">Teléfono <span className="text-red-500">*</span></Label>
                    <Input
                        id="modal-phone"
                        value={newClientData.phone}
                        onChange={(e) => setNewClientData({...newClientData, phone: e.target.value})}
                        placeholder="+52 555 123 4567"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="modal-address">Dirección</Label>
                    <Input
                        id="modal-address"
                        value={newClientData.address}
                        onChange={(e) => setNewClientData({...newClientData, address: e.target.value})}
                        placeholder="Calle, número, colonia"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="modal-notes">Notas adicionales</Label>
                    <Textarea
                        id="modal-notes"
                        value={newClientData.notes}
                        onChange={(e) => setNewClientData({...newClientData, notes: e.target.value})}
                        placeholder="Información adicional relevante"
                    />
                </div>
            </form>
            <DialogFooter className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => setIsClientDialogOpen(false)}>
                    Cancelar
                </Button>
                <Button
                    onClick={handleQuickClientRegistration}
                    className="bg-[#2A5C8F] hover:bg-[#2A5C8F]/90"
                >
                    <i className="fas fa-save mr-2"></i>
                    Guardar Cliente
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}