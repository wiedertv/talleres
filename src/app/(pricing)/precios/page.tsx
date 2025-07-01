"use client";
import React, {useState} from 'react';
import Link from 'next/link'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Checkbox} from "@/components/ui/checkbox";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";
import {Progress} from "@/components/ui/progress";
import {motion} from 'framer-motion';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("profesional");
    const [activeTab, setActiveTab] = useState("pricing");
    const [progress, setProgress] = useState(33);

    const handlePlanSelect = (plan: string) => {
        setSelectedPlan(plan);
        setActiveTab("checkout");
        setProgress(66);
    };

    const plans = [
        {
            id: "basico",
            name: "Básico",
            priceMonthly: "29,99€",
            priceAnnual: "299,90€",
            description: "Ideal para emprendedores y pequeños negocios",
            features: [
                "Hasta 3 usuarios",
                "10GB de almacenamiento",
                "Soporte por email",
                "Funciones básicas",
                "Actualizaciones mensuales"
            ],
            highlighted: false
        },
        {
            id: "profesional",
            name: "Profesional",
            priceMonthly: "59,99€",
            priceAnnual: "599,90€",
            description: "Perfecto para equipos en crecimiento",
            features: [
                "Hasta 10 usuarios",
                "50GB de almacenamiento",
                "Soporte prioritario 24/5",
                "Todas las funciones básicas",
                "API completa",
                "Integraciones avanzadas",
                "Actualizaciones semanales"
            ],
            highlighted: true
        },
        {
            id: "empresarial",
            name: "Empresarial",
            priceMonthly: "99,99€",
            priceAnnual: "999,90€",
            description: "Solución completa para grandes empresas",
            features: [
                "Usuarios ilimitados",
                "500GB de almacenamiento",
                "Soporte prioritario 24/7",
                "Todas las funciones",
                "API personalizada",
                "Integraciones a medida",
                "Actualizaciones diarias",
                "Gestor de cuenta dedicado"
            ],
            highlighted: false
        }
    ];

    const faqs = [
        {
            question: "¿Puedo cambiar de plan en cualquier momento?",
            answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y se ajustará el cobro prorrateado."
        },
        {
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express), PayPal y transferencia bancaria para planes empresariales."
        },
        {
            question: "¿Ofrecen período de prueba gratuito?",
            answer: "Sí, todos nuestros planes incluyen un período de prueba gratuito de 14 días, sin necesidad de introducir datos de pago."
        },
        {
            question: "¿Cómo funciona la facturación?",
            answer: "La facturación se realiza de forma mensual o anual según el plan elegido. Enviamos las facturas por correo electrónico y también están disponibles en tu panel de control."
        },
        {
            question: "¿Qué incluye el soporte técnico?",
            answer: "Dependiendo de tu plan, ofrecemos diferentes niveles de soporte. Todos los planes incluyen al menos soporte por email, mientras que los planes superiores tienen acceso a soporte prioritario por teléfono y chat."
        }
    ];

    const testimonials = [
        {
            name: "María González",
            company: "Innovatech SL",
            text: "Desde que implementamos este software, nuestra productividad ha aumentado un 30%. La interfaz es intuitiva y el soporte técnico es excelente."
        },
        {
            name: "Carlos Rodríguez",
            company: "Grupo Empresarial CR",
            text: "La mejor inversión que hemos hecho este año. El plan Empresarial nos ha permitido personalizar completamente la plataforma a nuestras necesidades."
        },
        {
            name: "Laura Martínez",
            company: "Diseños Creativos",
            text: "Como pequeña empresa, el plan Básico nos ofrece todo lo que necesitamos a un precio muy competitivo. Totalmente recomendado."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Header modernizado */}
            <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-cube text-indigo-600 text-2xl"></i>
                        <span className="text-xl font-bold text-indigo-600"><Link href="/">AutoTalleres</Link></span>
                    </div>


                    <div className="flex items-center space-x-3">
                        <Button variant="outline" className="rounded-full border-gray-300 hover:bg-gray-50">
                            Iniciar Sesión
                        </Button>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md">
                            Registrarse
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="hidden">
                        <TabsTrigger value="pricing">Precios</TabsTrigger>
                        <TabsTrigger value="checkout">Checkout</TabsTrigger>
                    </TabsList>

                    <TabsContent value="pricing" className="space-y-16">
                        {/* Hero Section */}
                        <section className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Planes que se adaptan a tu
                                negocio</h1>
                            <p className="text-xl text-gray-600 mb-8">Elige el plan perfecto para tus necesidades. Todos
                                incluyen acceso completo a nuestras funcionalidades principales.</p>

                            {/* Toggle Plan */}
                            <div className="flex items-center justify-center space-x-4 mb-12">
                                <span
                                    className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Mensual</span>
                                <Switch
                                    checked={isAnnual}
                                    onCheckedChange={setIsAnnual}
                                    className="data-[state=checked]:bg-indigo-600"
                                />
                                <div className="flex items-center">
                                    <span
                                        className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Anual</span>
                                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Ahorra
                                        20%</Badge>
                                </div>
                            </div>
                        </section>

                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {plans.map((plan) => (
                                <motion.div
                                    key={plan.id}
                                    whileHover={{y: -5}}
                                    transition={{duration: 0.2}}
                                >
                                    <Card
                                        className={`relative overflow-hidden transition-all ${plan.highlighted ? 'border-indigo-600 shadow-lg ring-1 ring-indigo-600' : 'border-gray-200 hover:border-indigo-300'}`}
                                    >
                                        {plan.highlighted && (
                                            <div
                                                className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                                                Más popular
                                            </div>
                                        )}

                                        <CardHeader className={`pb-6 ${plan.highlighted ? 'bg-indigo-50' : ''}`}>
                                            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                            <CardDescription
                                                className="text-gray-600 mt-1">{plan.description}</CardDescription>
                                            <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900">
                          {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                        </span>
                                                <span className="text-gray-600 ml-2">{isAnnual ? '/año' : '/mes'}</span>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="pt-4">
                                            <ul className="space-y-3">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                                        <span className="text-gray-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>

                                        <CardFooter>
                                            <Button
                                                onClick={() => handlePlanSelect(plan.id)}
                                                className={`w-full rounded-full ${plan.highlighted ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}
                                            >
                                                Seleccionar Plan
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* FAQ Section */}
                        <section className="bg-white rounded-xl shadow-sm p-8 mb-16">
                            <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
                            <div className="max-w-3xl mx-auto">
                                <Accordion type="single" collapsible className="w-full space-y-2">
                                    {faqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="border rounded-lg overflow-hidden hover:border-indigo-300 transition-colors"
                                        >
                                            <AccordionTrigger
                                                className="px-4 py-3 hover:no-underline text-left font-medium">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-3 text-gray-600">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Testimonials */}
                        <section className="bg-indigo-50 rounded-xl p-8 mb-16">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-2xl font-bold mb-8">Lo que dicen nuestros clientes</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex justify-center mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400 mx-0.5"></i>
                                                ))}
                                            </div>
                                            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                                            <div className="text-sm">
                                                <p className="font-medium text-gray-900">{testimonial.name}</p>
                                                <p className="text-gray-600">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="text-center">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
                                <p className="text-gray-600 mb-6">Contacta con nuestro equipo para obtener un plan
                                    adaptado a tus necesidades específicas.</p>
                                <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md">
                                    Contactar con Ventas
                                </Button>
                            </div>
                        </section>

                        {/* Trust Badges */}
                        <section className="mt-16">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    {icon: "fa-shield-alt", text: "Pago Seguro"},
                                    {icon: "fa-undo", text: "30 Días de Garantía"},
                                    {icon: "fa-headset", text: "Soporte 24/7"},
                                    {icon: "fa-cloud-upload-alt", text: "Actualizaciones Gratuitas"}
                                ].map((item, index) => (
                                    <div key={index}
                                         className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                                        <i className={`fas ${item.icon} text-3xl text-indigo-600 mb-3`}></i>
                                        <h3 className="font-medium text-center">{item.text}</h3>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </TabsContent>

                    {/* Checkout Section */}
                    <TabsContent value="checkout">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-8">
                                <Progress value={progress} className="h-2 bg-gray-200"/>
                                <div className="flex justify-between mt-2 text-sm text-gray-600">
                                    <span className={progress >= 33 ? 'text-indigo-600 font-medium' : ''}>Información personal</span>
                                    <span
                                        className={progress >= 66 ? 'text-indigo-600 font-medium' : ''}>Método de pago</span>
                                    <span>Confirmación</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-5 gap-8">
                                <div className="md:col-span-3 space-y-6">
                                    {/* Personal Info */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Información Personal</CardTitle>
                                            <CardDescription>Introduce tus datos para completar la
                                                compra</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">Nombre</Label>
                                                    <Input id="firstName" placeholder="Tu nombre"/>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Apellidos</Label>
                                                    <Input id="lastName" placeholder="Tus apellidos"/>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Correo electrónico</Label>
                                                <Input id="email" type="email" placeholder="tu@email.com"/>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Empresa (opcional)</Label>
                                                <Input id="company" placeholder="Nombre de tu empresa"/>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Billing Info */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Información de Facturación</CardTitle>
                                            <CardDescription>Introduce tus datos de facturación</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="address">Dirección</Label>
                                                <Input id="address" placeholder="Calle, número, piso..."/>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="city">Ciudad</Label>
                                                    <Input id="city" placeholder="Tu ciudad"/>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="postalCode">Código Postal</Label>
                                                    <Input id="postalCode" placeholder="12345"/>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="country">País</Label>
                                                <Input id="country" placeholder="España"/>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="taxId">NIF/CIF (opcional)</Label>
                                                <Input id="taxId" placeholder="Para facturación"/>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Payment Method */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Método de Pago</CardTitle>
                                            <CardDescription>Selecciona tu método de pago preferido</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <RadioGroup defaultValue="card" className="space-y-3">
                                                <div
                                                    className="flex items-center space-x-3 border rounded-lg p-4 hover:border-indigo-400 transition-colors">
                                                    <RadioGroupItem value="card" id="card"/>
                                                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                                                        <div className="flex justify-between items-center">
                                                            <span>Tarjeta de crédito</span>
                                                            <div className="flex space-x-2">
                                                                <i className="fab fa-cc-visa text-blue-800 text-2xl"></i>
                                                                <i className="fab fa-cc-mastercard text-red-600 text-2xl"></i>
                                                                <i className="fab fa-cc-amex text-blue-500 text-2xl"></i>
                                                            </div>
                                                        </div>
                                                    </Label>
                                                </div>

                                                <div
                                                    className="flex items-center space-x-3 border rounded-lg p-4 hover:border-indigo-400 transition-colors">
                                                    <RadioGroupItem value="paypal" id="paypal"/>
                                                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                                                        <div className="flex justify-between items-center">
                                                            <span>PayPal</span>
                                                            <i className="fab fa-paypal text-blue-700 text-2xl"></i>
                                                        </div>
                                                    </Label>
                                                </div>

                                                <div
                                                    className="flex items-center space-x-3 border rounded-lg p-4 hover:border-indigo-400 transition-colors">
                                                    <RadioGroupItem value="transfer" id="transfer"/>
                                                    <Label htmlFor="transfer" className="flex-1 cursor-pointer">
                                                        <div className="flex justify-between items-center">
                                                            <span>Transferencia bancaria</span>
                                                            <i className="fas fa-university text-gray-700 text-2xl"></i>
                                                        </div>
                                                    </Label>
                                                </div>
                                            </RadioGroup>

                                            {/* Card Details */}
                                            <div className="mt-6 space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="cardNumber">Número de tarjeta</Label>
                                                    <Input id="cardNumber" placeholder="1234 5678 9012 3456"/>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="expiry">Fecha de caducidad</Label>
                                                        <Input id="expiry" placeholder="MM/AA"/>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="cvc">CVC</Label>
                                                        <Input id="cvc" placeholder="123"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Order Summary */}
                                <div className="md:col-span-2">
                                    <div className="sticky top-8">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Resumen del Pedido</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="bg-indigo-50 p-4 rounded-lg">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span
                                                            className="font-medium">Plan {plans.find(p => p.id === selectedPlan)?.name}</span>
                                                        <Badge
                                                            className="bg-indigo-100 text-indigo-800">{isAnnual ? 'Anual' : 'Mensual'}</Badge>
                                                    </div>
                                                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                                                        {plans.find(p => p.id === selectedPlan)?.features.slice(0, 4).map((feature, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <i className="fas fa-check text-green-500 mt-1 mr-2 text-xs"></i>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="text-right font-medium">
                                                        {isAnnual
                                                            ? plans.find(p => p.id === selectedPlan)?.priceAnnual
                                                            : plans.find(p => p.id === selectedPlan)?.priceMonthly}
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <div className="flex justify-between text-sm">
                                                        <span>Subtotal</span>
                                                        <span>{isAnnual
                                                            ? plans.find(p => p.id === selectedPlan)?.priceAnnual
                                                            : plans.find(p => p.id === selectedPlan)?.priceMonthly}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span>IVA (21%)</span>
                                                        <span>
                              {isAnnual
                                  ? (parseFloat(plans.find(p => p.id === selectedPlan)?.priceAnnual.replace('€', '').replace(',', '.') || "0") * 0.21).toFixed(2).replace('.', ',') + '€'
                                  : (parseFloat(plans.find(p => p.id === selectedPlan)?.priceMonthly.replace('€', '').replace(',', '.') || "0") * 0.21).toFixed(2).replace('.', ',') + '€'}
                            </span>
                                                    </div>
                                                    <Separator/>
                                                    <div className="flex justify-between font-bold">
                                                        <span>Total</span>
                                                        <span>
                              {isAnnual
                                  ? (parseFloat(plans.find(p => p.id === selectedPlan)?.priceAnnual.replace('€', '').replace(',', '.') || "0") * 1.21).toFixed(2).replace('.', ',') + '€'
                                  : (parseFloat(plans.find(p => p.id === selectedPlan)?.priceMonthly.replace('€', '').replace(',', '.') || "0") * 1.21).toFixed(2).replace('.', ',') + '€'}
                            </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center space-x-2 pt-4">
                                                    <Input placeholder="Código promocional"/>
                                                    <Button variant="outline" className="rounded-full">Aplicar</Button>
                                                </div>

                                                <div className="space-y-4 pt-4">
                                                    <div className="flex items-start space-x-3">
                                                        <Checkbox id="terms"/>
                                                        <Label htmlFor="terms" className="text-sm leading-snug">
                                                            Acepto los <a href="#"
                                                                          className="text-indigo-600 hover:underline">Términos
                                                            y Condiciones</a> y la <a href="#"
                                                                                      className="text-indigo-600 hover:underline">Política
                                                            de Privacidad</a>
                                                        </Label>
                                                    </div>
                                                    <Button
                                                        className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md"
                                                        onClick={() => setProgress(100)}
                                                    >
                                                        Completar Compra
                                                    </Button>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex-col items-start space-y-3 pt-0">
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <i className="fas fa-lock text-indigo-500"></i>
                                                    <span>Pago 100% seguro</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <i className="fas fa-undo text-indigo-500"></i>
                                                    <span>30 días de garantía de devolución</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <i className="fas fa-headset text-indigo-500"></i>
                                                    <span>Soporte técnico incluido</span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-5 gap-8 mb-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <i className="fas fa-cube text-indigo-400 text-2xl"></i>
                                <span className="text-xl font-bold">SaaSPro</span>
                            </div>
                            <p className="text-gray-400 mb-6">La plataforma SaaS todo en uno para hacer crecer tu
                                negocio.</p>
                            <div className="flex space-x-4">
                                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <i className={`fab fa-${social} text-lg`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {[
                            {
                                title: "Producto",
                                links: ["Características", "Precios", "Integraciones", "Actualizaciones", "Hoja de ruta"]
                            },
                            {
                                title: "Recursos",
                                links: ["Blog", "Documentación", "Comunidad", "Tutoriales", "Webinars"]
                            },
                            {
                                title: "Empresa",
                                links: ["Sobre nosotros", "Clientes", "Empleo", "Prensa", "Contacto"]
                            }
                        ].map((column, index) => (
                            <div key={index}>
                                <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SaaSPro. Todos los
                                    derechos reservados.</p>
                            </div>
                            <div className="flex space-x-6">
                                {['Términos y Condiciones', 'Política de Privacidad', 'Cookies'].map((item, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 space-x-4">
                            {['cc-visa', 'cc-mastercard', 'cc-amex', 'cc-paypal'].map((icon, index) => (
                                <i key={index} className={`fab fa-${icon} text-gray-400 text-xl`}></i>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Pricing;