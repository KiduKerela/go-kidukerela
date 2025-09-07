'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { CalendarDays, MapPin, Users, Phone, Mail } from 'lucide-react'
import { toast } from 'sonner'

const formSchema = z.object({
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters')
		.max(100, 'Name must be less than 100 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number'),
	destination: z.string().optional(),
	travelType: z.string().optional(),
	travelers: z.string().optional(),
	budget: z.string().optional(),
	duration: z.string().optional(),
	travelDate: z.string().optional(),
	message: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

export default function TravelInquiryForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			destination: '',
			travelType: '',
			travelers: '',
			budget: '',
			duration: '',
			travelDate: '',
			message: ''
		}
	})

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true)

		// Console log the collected form data
		console.log('Travel Inquiry Form Data:', data)
		console.log('Form submission details:')
		console.log('- Name:', data.name)
		console.log('- Email:', data.email)
		console.log('- Phone:', data.phone)
		console.log('- Destination:', data.destination)
		console.log('- Travel Type:', data.travelType)
		console.log('- Number of Travelers:', data.travelers)
		console.log('- Budget Range:', data.budget)
		console.log('- Trip Duration:', data.duration)
		console.log('- Travel Date:', data.travelDate)
		console.log('- Additional Message:', data.message)

		// Simulate form submission delay
		await new Promise((resolve) => setTimeout(resolve, 1000))

		setIsSubmitting(false)
		toast.success(
			'Thank you for your inquiry! We will get back to you soon.'
		)
	}

	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<Card className="shadow-lg">
				<CardHeader className="px-4 text-center sm:px-6">
					<CardTitle className="flex items-center justify-center gap-2 text-3xl font-bold text-blue-800">
						<h1 className="font-sans text-2xl font-semibold tracking-tight text-yellow-300 sm:text-4xl lg:text-6xl">
							Kidu Kerela 🌴
						</h1>
					</CardTitle>
					<CardDescription className="text-base sm:text-lg">
						Plan your perfect getaway with us. Fill out this form to
						get started!
					</CardDescription>
				</CardHeader>

				<CardContent className="px-4 sm:px-6">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4 sm:space-y-6"
						>
							{/* Personal Information */}
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm sm:text-base">
												<Users className="h-4 w-4" />
												Full Name *
											</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your full name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm sm:text-base">
												<Mail className="h-4 w-4" />
												Email Address *
											</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="your.email@example.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm sm:text-base">
												<Phone className="h-4 w-4" />
												Phone Number *
											</FormLabel>
											<FormControl>
												<Input
													type="tel"
													placeholder="+91 98765 43210"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* Travel Details */}
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
								<FormField
									control={form.control}
									name="destination"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-sm sm:text-base">
												Preferred Destination
											</FormLabel>
											<FormControl>
												<Input
													placeholder="e.g., Goa, Dubai, Paris"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="travelType"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-sm sm:text-base">
												Travel Type
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select travel type" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="domestic">
														Domestic
													</SelectItem>
													<SelectItem value="international">
														International
													</SelectItem>
													<SelectItem value="honeymoon">
														Honeymoon Package
													</SelectItem>
													<SelectItem value="family">
														Family Trip
													</SelectItem>
													<SelectItem value="business">
														Business Travel
													</SelectItem>
													<SelectItem value="adventure">
														Adventure Tour
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="travelDate"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2 text-sm sm:text-base">
												<CalendarDays className="h-4 w-4" />
												Preferred Travel Date
											</FormLabel>
											<FormControl>
												<Input type="date" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
								<FormField
									control={form.control}
									name="travelers"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-sm sm:text-base">
												Number of Travelers
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="1">
														1 Person
													</SelectItem>
													<SelectItem value="2">
														2 People
													</SelectItem>
													<SelectItem value="3">
														3 People
													</SelectItem>
													<SelectItem value="4">
														4 People
													</SelectItem>
													<SelectItem value="5+">
														5+ People
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="budget"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-sm sm:text-base">
												Budget Range
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select budget" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="under-25k">
														Under ₹25,000
													</SelectItem>
													<SelectItem value="25k-50k">
														₹25,000 - ₹50,000
													</SelectItem>
													<SelectItem value="50k-100k">
														₹50,000 - ₹1,00,000
													</SelectItem>
													<SelectItem value="100k-200k">
														₹1,00,000 - ₹2,00,000
													</SelectItem>
													<SelectItem value="above-200k">
														Above ₹2,00,000
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="duration"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-sm sm:text-base">
												Trip Duration
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select duration" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="1-3">
														1-3 Days
													</SelectItem>
													<SelectItem value="4-7">
														4-7 Days
													</SelectItem>
													<SelectItem value="8-14">
														1-2 Weeks
													</SelectItem>
													<SelectItem value="15+">
														More than 2 Weeks
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm sm:text-base">
											Additional Requirements / Message
										</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Tell us about your travel preferences, special requirements, or any questions you have..."
												rows={4}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								disabled={isSubmitting}
								className="mx-auto flex w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
							>
								{isSubmitting ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 200 200"
									>
										<circle
											fill="#FFFFFF"
											stroke="#FFFFFF"
											strokeWidth="15"
											r="15"
											cx="40"
											cy="65"
										>
											<animate
												attributeName="cy"
												calcMode="spline"
												dur="2"
												values="65;135;65;"
												keySplines=".5 0 .5 1;.5 0 .5 1"
												repeatCount="indefinite"
												begin="-.4"
											></animate>
										</circle>
										<circle
											fill="#FFFFFF"
											stroke="#FFFFFF"
											strokeWidth="15"
											r="15"
											cx="100"
											cy="65"
										>
											<animate
												attributeName="cy"
												calcMode="spline"
												dur="2"
												values="65;135;65;"
												keySplines=".5 0 .5 1;.5 0 .5 1"
												repeatCount="indefinite"
												begin="-.2"
											></animate>
										</circle>
										<circle
											fill="#FFFFFF"
											stroke="#FFFFFF"
											strokeWidth="15"
											r="15"
											cx="160"
											cy="65"
										>
											<animate
												attributeName="cy"
												calcMode="spline"
												dur="2"
												values="65;135;65;"
												keySplines=".5 0 .5 1;.5 0 .5 1"
												repeatCount="indefinite"
												begin="0"
											></animate>
										</circle>
									</svg>
								) : (
									'Submit Travel Inquiry'
								)}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
