'use client'

import {Button} from "@/components/ui/button"
import ClientList from "@/components/ui/clientList"
import ClientForm from "@/components/ui/clientsForm"
import {Dialog, DialogTrigger} from "@/components/ui/dialog"
import {useDashboard} from "@/lib/contexts/DashboardContext"
import ClientStats from "@/components/ui/ClientStats";

export default function ClientsPage() {
    const {isClientDialogOpen, setIsClientDialogOpen} = useDashboard()

    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Gestión de Clientes</h2>
                <Dialog open={isClientDialogOpen} onOpenChange={setIsClientDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                            <i className="fas fa-user-plus mr-2"></i>
                            Nuevo Cliente
                        </Button>
                    </DialogTrigger>
                    <ClientForm/>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <ClientList/>
                <ClientStats/>
            </div>
        </div>
    )
}