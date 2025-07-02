'use client'

import {createContext, ReactNode, useContext, useState} from 'react'

interface DashboardContextType {
    sidebarOpen: boolean
    toggleSidebar: () => void
    activeTab: string
    setActiveTab: (tab: string) => void
    isClientDialogOpen: boolean
    setIsClientDialogOpen: (open: boolean) => void
    isVehicleDialogOpen: boolean
    setIsVehicleDialogOpen: (open: boolean) => void
    newClientData: {
        name: string
        type: string
        email: string
        phone: string
        address: string
        notes: string
        ci: string
        rif: string
    }
    setNewClientData: (data: any) => void
    newVehicleData: {
        plate: string
        make: string
        model: string
        year: string
        color: string
        contact: string
        notes: string
    }
    setNewVehicleData: (data: any) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({children}: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [activeTab, setActiveTab] = useState('dashboard')
    const [isClientDialogOpen, setIsClientDialogOpen] = useState(false)
    const [isVehicleDialogOpen, setIsVehicleDialogOpen] = useState(false)
    const [newClientData, setNewClientData] = useState({
        name: "",
        type: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
        ci: "",
        rif: ""
    })
    const [newVehicleData, setNewVehicleData] = useState({
        plate: "",
        make: "",
        model: "",
        year: "",
        color: "",
        contact: "",
        notes: ""
    })

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const handleQuickClientRegistration = () => {
        const currentDate = new Date()
        const formattedDate = currentDate.toLocaleDateString()
        const newClient = {
            ...newClientData,
            id: `CLT-${Math.floor(Math.random() * 1000)}`,
            createdAt: formattedDate,
            points: 0,
            level: 'Bronce',
            image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20Hispanic%20person%20with%20neutral%20expression%2C%20studio%20lighting%2C%20professional%20photography&width=100&height=100&seq=10&orientation=squarish'
        }

        const existingClients = JSON.parse(localStorage.getItem('clients') || '[]')
        const updatedClients = [...existingClients, newClient]
        localStorage.setItem('clients', JSON.stringify(updatedClients))

        setIsClientDialogOpen(false)
        setNewClientData({
            name: "",
            type: "",
            email: "",
            phone: "",
            address: "",
            notes: ""
        })
    }

    return (
        <DashboardContext.Provider value={{
            sidebarOpen,
            toggleSidebar,
            activeTab,
            setActiveTab,
            isClientDialogOpen,
            setIsClientDialogOpen,
            isVehicleDialogOpen,
            setIsVehicleDialogOpen,
            newClientData,
            setNewClientData,
            newVehicleData,
            setNewVehicleData,
            handleQuickClientRegistration
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

export function useDashboard() {
    const context = useContext(DashboardContext)
    if (context === undefined) {
        throw new Error('useDashboard must be used within a DashboardProvider')
    }
    return context
}