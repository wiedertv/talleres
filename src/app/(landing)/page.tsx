'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import Link from 'next/link';
import {
	CalendarCheck,
	CalendarCheck2,
	ChartLine,
	ChartNoAxesGantt,
	CircleArrowRight,
	CircleCheck,
	CirclePlay,
	CircleX,
	Forward,
	MessageCircle,
	Package,
	Rocket,
	Star,
	StarHalf,
	Users,
	Wrench,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Header Moderno */}
			<header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
				<div className="container mx-auto px-4 py-3 flex items-center justify-between">
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
						<Link
							href="#"
							className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
						>
							<Wrench />
							AutoTalleres
						</Link>
					</motion.div>
					<div className="hidden md:flex items-center space-x-6">
						<nav className="flex items-center space-x-6">
							{['Características', 'Beneficios', 'Planes', 'Testimonios'].map((item, i) => (
								<motion.a
									key={i}
									href={`#${item.toLowerCase()}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium cursor-pointer"
								>
									{item}
								</motion.a>
							))}
						</nav>

						<div className="flex items-center space-x-3">
							<Button variant="outline" className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50/50">
								Iniciar Sesión
							</Button>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-blue-400/30">
									Registrarse
								</Button>
							</motion.div>
						</div>
					</div>

					<Button
						variant={'ghost'}
						size={'icon'}
						className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
						onClick={toggleMenu}
					>
						{isMenuOpen ? (
							<CircleX className="text-gray-700 size-5" />
						) : (
							<ChartNoAxesGantt className="text-gray-700 size-5" />
						)}
					</Button>
				</div>

				{/* Menú móvil con animación */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden"
						>
							<div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
								{['Características', 'Beneficios', 'Planes', 'Testimonios'].map((item, i) => (
									<motion.a
										key={i}
										href={`#${item.toLowerCase()}`}
										onClick={() => setIsMenuOpen(false)}
										whileTap={{ scale: 0.95 }}
										className="py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
									>
										{item}
									</motion.a>
								))}
								<div className="flex flex-col space-y-2 pt-2 border-t border-gray-200/50">
									<Button variant="outline" className="rounded-full">
										Iniciar Sesión
									</Button>
									<Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full">
										Registrarse
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			{/* Hero Section Moderna */}
			<section className="pt-28 md:pt-36 pb-20 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
				<div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=abstract%20tech%20background%20with%20circuits%20and%20blue%20glow')] bg-cover bg-center opacity-20" />

				<div className="container mx-auto px-4 relative z-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="max-w-2xl"
					>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
							Revoluciona tu{' '}
							<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
								taller automotriz
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-700 mb-8">
							La plataforma inteligente que automatiza tu gestión y mejora la experiencia de tus clientes.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-blue-400/30">
									<Rocket className={'mr-2 size-5'} />
									Prueba 14 días gratis
								</Button>
							</motion.div>

							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									variant="outline"
									className="border-blue-600 text-blue-600 hover:bg-blue-50/50 text-lg py-6 px-8 rounded-full"
								>
									<CirclePlay className={'mr-2 size-5'} />
									Ver demostración
								</Button>
							</motion.div>
						</div>

						<div className="mt-10 flex items-center">
							<div className="flex -space-x-3">
								{[1, 2, 3].map((i) => (
									<Avatar
										key={i}
										className="size-12 hover:-translate-y-2 transition duration-300 ease-in-out hover:z-10 border-2 border-white shadow-md"
									>
										<div>
											<AvatarImage
												src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`}
												className=""
											/>
											<AvatarFallback>CN</AvatarFallback>
										</div>
									</Avatar>
								))}
							</div>
							<p className="ml-4 text-gray-600">
								Más de <span className="font-bold text-gray-800">2,500 talleres</span> ya confían en nosotros
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Sección de Beneficios con Glassmorphism */}
			<section id="beneficios" className="py-16 md:py-24 relative">
				<div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=abstract%20tech%20grid%20background%20with%20blue%20glow')] bg-cover opacity-5" />

				<div className="container mx-auto px-4 relative">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Potencia tu taller con <span className="text-blue-600">tecnología inteligente</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Soluciones diseñadas para optimizar cada aspecto de tu operación automotriz.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								icon: <CalendarCheck />,
								title: 'Agenda Inteligente',
								description: 'Optimiza tiempos y evita sobrecargas con nuestro sistema de citas automatizado.',
							},
							{
								icon: <Users />,
								title: 'Fidelización',
								description: 'Programas personalizados para mantener a tus clientes satisfechos y recurrentes.',
							},
							{
								icon: <ChartLine />,
								title: 'Analíticos',
								description: 'Dashboards interactivos con métricas clave para tu toma de decisiones.',
							},
							{
								icon: <Package />,
								title: 'Inventario',
								description: 'Control inteligente de repuestos con alertas de stock y proveedores integrados.',
							},
						].map((benefit, i) => (
							<Card
								key={i}
								className="text-center text-xl shadow-lg border backdrop-blur-sm rounded-xl border-gray-100/50 hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-5"
							>
								<CardHeader>
									<div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-md text-white">
										{benefit.icon}
									</div>
									<CardTitle className="font-bold">{benefit.title}</CardTitle>
									<CardDescription>{benefit.description}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Características con diseño alternado */}
			<section id="caracteristicas" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Diseñado para <span className="text-blue-600">simplificar tu operación</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Todas las herramientas integradas en una plataforma intuitiva y poderosa.
						</p>
					</motion.div>

					{[
						{
							title: 'Agenda Inteligente',
							description:
								'Optimiza los tiempos de tu taller con nuestro sistema de citas que considera la duración de cada servicio, disponibilidad de mecánicos y recursos necesarios.',
							image:
								'https://readdy.ai/api/search-image?query=modern%20auto%20repair%20shop%20scheduling%20interface%20on%20tablet',
							features: ['Recordatorios automáticos', 'Asignación de mecánicos', 'Historial de servicios'],
						},
						{
							title: 'Gestión de Clientes 360°',
							description:
								'Mantén toda la información de tus clientes organizada, incluyendo historial de servicios, preferencias y datos de contacto en un solo lugar.',
							image:
								'https://readdy.ai/api/search-image?query=automotive%20customer%20management%20dashboard%20on%20laptop',
							features: ['Perfiles completos', 'Historial de vehículos', 'Comunicación integrada'],
						},
						{
							title: 'Control Financiero',
							description:
								'Gestiona facturas, presupuestos y pagos con nuestro sistema integrado que genera informes automáticos para mantener tu negocio saludable.',
							image:
								'https://readdy.ai/api/search-image?query=automotive%20shop%20financial%20dashboard%20on%20desktop',
							features: ['Facturación automática', 'Seguimiento de pagos', 'Informes financieros'],
						},
					].map((feature, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className={`flex flex-col ${
								i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
							} items-center gap-10 mb-20`}
						>
							<div className="w-full lg:w-1/2">
								<motion.div
									whileHover={{ scale: 1.03 }}
									className="rounded-2xl overflow-hidden shadow-xl border border-gray-100"
								>
									<Image fill src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
								</motion.div>
							</div>

							<div className="w-full lg:w-1/2">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
								<p className="text-lg text-gray-600 mb-6">{feature.description}</p>
								<ul className="space-y-3 mb-8">
									{feature.features.map((item, j) => (
										<motion.li key={j} whileHover={{ x: 5 }} className="flex items-center">
											<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
												<CircleCheck className="text-blue-600" />
											</div>
											<span className="text-gray-700">{item}</span>
										</motion.li>
									))}
								</ul>
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full">
										Explorar función
										<CircleArrowRight />
									</Button>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Planes con diseño de tarjetas modernas */}
			<section id="planes" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Planes que <span className="text-blue-600">se adaptan a ti</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Elige la opción que mejor se ajuste a las necesidades de tu taller.
						</p>
					</motion.div>

					<Tabs defaultValue="mensual" className="w-full max-w-5xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex justify-center mb-12"
						>
							<TabsList className="bg-gray-100 p-1 rounded-full">
								<TabsTrigger value="mensual" className="rounded-full px-6 py-2">
									Pago Mensual
								</TabsTrigger>
								<TabsTrigger value="anual" className="rounded-full px-6 py-2">
									Pago Anual <span className="ml-1 text-blue-600">(20% OFF)</span>
								</TabsTrigger>
							</TabsList>
						</motion.div>

						<TabsContent value="mensual">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{[
									{
										name: 'Básico',
										price: '$29',
										description: 'Ideal para talleres pequeños que están comenzando',
										features: ['2 usuarios', 'Gestión de citas', 'Perfiles de clientes', 'Soporte por email'],
										popular: false,
										buttonText: 'Comenzar',
									},
									{
										name: 'Profesional',
										price: '$79',
										description: 'Perfecto para talleres en crecimiento',
										features: [
											'5 usuarios',
											'Gestión avanzada',
											'Sistema de fidelización',
											'Informes detallados',
											'Soporte prioritario',
										],
										popular: true,
										buttonText: 'Prueba gratis',
									},
									{
										name: 'Empresarial',
										price: '$149',
										description: 'Para talleres con múltiples ubicaciones',
										features: [
											'Usuarios ilimitados',
											'Múltiples sucursales',
											'Gestión de inventario',
											'API completa',
											'Soporte 24/7',
										],
										popular: false,
										buttonText: 'Contactar ventas',
									},
								].map((plan, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ y: -5 }}
									>
										<Card
											className={`h-full border-2 ${
												plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'
											} transition-all duration-300`}
										>
											{plan.popular && (
												<div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
													Más popular
												</div>
											)}
											<CardHeader>
												<CardTitle className="text-2xl">{plan.name}</CardTitle>
												<CardDescription>{plan.description}</CardDescription>
											</CardHeader>
											<CardContent>
												<div className="mb-6">
													<span className="text-4xl font-bold">{plan.price}</span>
													<span className="text-gray-500 ml-2">/mes</span>
												</div>
												<ul className="space-y-3">
													{plan.features.map((feature, j) => (
														<li key={j} className="flex items-start">
															<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
															<span className="text-gray-700">{feature}</span>
														</li>
													))}
												</ul>
											</CardContent>
											<CardFooter>
												<Button
													className={`w-full rounded-full ${
														plan.popular
															? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
															: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
													}`}
												>
													{plan.buttonText}
												</Button>
											</CardFooter>
										</Card>
									</motion.div>
								))}
							</div>
						</TabsContent>

						<TabsContent value="anual">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{[
									{
										name: 'Básico',
										price: '$23',
										description: 'Ideal para talleres pequeños que están comenzando',
										features: ['2 usuarios', 'Gestión de citas', 'Perfiles de clientes', 'Soporte por email'],
										popular: false,
										buttonText: 'Comenzar',
									},
									{
										name: 'Profesional',
										price: '$63',
										description: 'Perfecto para talleres en crecimiento',
										features: [
											'5 usuarios',
											'Gestión avanzada',
											'Sistema de fidelización',
											'Informes detallados',
											'Soporte prioritario',
										],
										popular: true,
										buttonText: 'Prueba gratis',
									},
									{
										name: 'Empresarial',
										price: '$119',
										description: 'Para talleres con múltiples ubicaciones',
										features: [
											'Usuarios ilimitados',
											'Múltiples sucursales',
											'Gestión de inventario',
											'API completa',
											'Soporte 24/7',
										],
										popular: false,
										buttonText: 'Contactar ventas',
									},
								].map((plan, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.1 }}
										viewport={{ once: true }}
									>
										<Card
											className={`h-full border-2 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'}`}
										>
											{plan.popular && (
												<div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
													Más popular
												</div>
											)}
											<CardHeader>
												<CardTitle className="text-2xl">{plan.name}</CardTitle>
												<CardDescription>{plan.description}</CardDescription>
											</CardHeader>
											<CardContent>
												<div className="mb-6">
													<span className="text-4xl font-bold">{plan.price}</span>
													<span className="text-gray-500 ml-2">/mes</span>
												</div>
												<ul className="space-y-3">
													{plan.features.map((feature, j) => (
														<li key={j} className="flex items-start">
															<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
															<span className="text-gray-700">{feature}</span>
														</li>
													))}
												</ul>
											</CardContent>
											<CardFooter>
												<Button
													className={`w-full rounded-full ${
														plan.popular
															? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
															: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
													}`}
												>
													{plan.buttonText}
												</Button>
											</CardFooter>
										</Card>
									</motion.div>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Testimonios con Swiper moderno */}
			<section id="testimonios" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Confían en <span className="text-blue-600">nosotros</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Talleres que han transformado su gestión con nuestra plataforma.
						</p>
					</motion.div>

					<div className="max-w-6xl mx-auto">
						<Swiper
							modules={[Pagination, Autoplay, EffectCreative]}
							pagination={{ clickable: true }}
							autoplay={{ delay: 6000, disableOnInteraction: false }}
							spaceBetween={30}
							slidesPerView={1}
							breakpoints={{
								768: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
							}}
							className="pb-12"
						>
							{[
								{
									name: 'Miguel Rodríguez',
									position: 'Propietario, Talleres Rodríguez',
									testimonial:
										'AutoTalleres ha revolucionado nuestra gestión. La eficiencia aumentó un 40% y nuestros clientes están más satisfechos.',
									rating: 5,
									image: 'https://randomuser.me/api/portraits/men/32.jpg',
								},
								{
									name: 'Laura Martínez',
									position: 'Gerente, Autocentro Express',
									testimonial:
										'El sistema de fidelización nos ha ayudado a recuperar clientes. La plataforma es intuitiva y el soporte excelente.',
									rating: 5,
									image: 'https://randomuser.me/api/portraits/women/44.jpg',
								},
								{
									name: 'Carlos Vega',
									position: 'Director, Talleres Vega',
									testimonial:
										'Gestionamos 3 talleres con más de 20 empleados. AutoTalleres ha simplificado enormemente nuestra operación diaria.',
									rating: 4,
									image: 'https://randomuser.me/api/portraits/men/75.jpg',
								},
								{
									name: 'Ana Gómez',
									position: 'Administradora, Talleres Gómez',
									testimonial:
										'La implementación fue rápida y el soporte nos ayudó en todo. Nuestros clientes valoran las notificaciones automáticas.',
									rating: 5,
									image: 'https://randomuser.me/api/portraits/women/63.jpg',
								},
							].map((testimonial, i) => (
								<SwiperSlide key={i}>
									<motion.div whileHover={{ y: -10 }} className="h-full p-1">
										<Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-300">
											<CardContent className="p-6 flex flex-col h-full">
												<div className="flex items-center mb-6">
													<div className="relative size-10 mr-3">
														<Image
															fill
															src={testimonial.image}
															alt={testimonial.name}
															className="w-14 h-14 rounded-full object-cover mr-4 shadow-md"
														/>
													</div>
													<div>
														<h4 className="font-bold text-gray-900">{testimonial.name}</h4>
														<p className="text-sm text-gray-600">{testimonial.position}</p>
													</div>
												</div>

												<div className="mb-4">
													<div className="flex text-yellow-400">
														{[...Array(5)].map((_, j) => (
															<span key={j}>{j < testimonial.rating ? <Star /> : <StarHalf />}</span>
														))}
													</div>
												</div>

												<p className="text-gray-700 italic mb-6 flex-grow">{testimonial.testimonial}</p>

												<div className="mt-auto">
													<Button variant="outline" className="rounded-full border-gray-300 text-gray-600">
														<Forward />
														Compartir testimonio
													</Button>
												</div>
											</CardContent>
										</Card>
									</motion.div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>

			{/* CTA Moderno */}
			<section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=abstract%20tech%20circuit%20background%20with%20white%20lines')] bg-cover bg-center" />
				</div>

				<div className="container mx-auto px-4 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu taller?</h2>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Únete a la revolución digital del sector automotriz hoy mismo.
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8 rounded-full shadow-lg ">
									<Rocket className="mr-2 size-5" />
									Prueba 14 días gratis
								</Button>
							</motion.div>

							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									variant={'outline'}
									className="border-white text-white hover:text-blue-600 bg-white/20 hover:bg-white/10 text-lg py-6 px-8 rounded-full"
								>
									<CalendarCheck2 className="mr-2" />
									Agendar demostración
								</Button>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Footer Moderno */}
			<footer className="bg-gray-900 text-white pt-16 pb-8">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
						<div className="lg:col-span-2">
							<Link
								href="#"
								className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 inline-block"
							>
								<i className="fas fa-car-mechanic mr-2"></i>
								AutoTalleres
							</Link>
							<p className="text-gray-400 mb-6">
								La plataforma líder en gestión para talleres automotrices. Simplifica, automatiza y haz crecer tu
								negocio.
							</p>
							<div className="flex space-x-4">
								{['/facebook.png', '/insta.png'].map((social, i) => (
									<motion.a
										key={i}
										href="#"
										whileHover={{ y: -3 }}
										className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
									>
										<Image src={social} alt="img" width={32} height={32} />
									</motion.a>
								))}
							</div>
						</div>

						{[
							{
								title: 'Producto',
								links: ['Características', 'Precios', 'Demostraciones', 'Actualizaciones'],
							},
							{
								title: 'Soporte',
								links: ['Centro de ayuda', 'Tutoriales', 'Contacto', 'Estado'],
							},
							{
								title: 'Empresa',
								links: ['Sobre nosotros', 'Blog', 'Empleo', 'Prensa'],
							},
							{
								title: 'Legal',
								links: ['Términos', 'Privacidad', 'Cookies', 'Licencias'],
							},
						].map((column, i) => (
							<div key={i}>
								<h3 className="text-lg font-bold mb-4 text-gray-200">{column.title}</h3>
								<ul className="space-y-2">
									{column.links.map((link, j) => (
										<motion.li key={j} whileHover={{ x: 5 }}>
											<a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
												{link}
											</a>
										</motion.li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="pt-8 border-t border-gray-800">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<div className="mb-4 md:mb-0">
								<p className="text-gray-400">
									&copy; {new Date().getFullYear()} AutoTalleres. Todos los derechos reservados.
								</p>
							</div>
							<div className="flex space-x-6">
								<a href="#" className="text-gray-400 hover:text-white text-sm">
									Términos
								</a>
								<a href="#" className="text-gray-400 hover:text-white text-sm">
									Privacidad
								</a>
								<a href="#" className="text-gray-400 hover:text-white text-sm">
									Cookies
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Botón de chat flotante con animación */}
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="fixed bottom-6 right-6 z-50"
			>
				<Button className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl hover:shadow-blue-400/50 flex items-center justify-center">
					<MessageCircle className="size-8" />
				</Button>
			</motion.div>
		</div>
	);
}
