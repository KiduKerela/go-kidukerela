import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import KeralaHero from '@/public/kerala_hero_image.jpg'

export default function HeroSection() {
	return (
		<section className="relative h-[calc(100vh-4rem)] min-h-[500px]">
			<div className="absolute inset-0">
				<Image
					src={KeralaHero}
					alt="Kerala Backwaters"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0"></div>
			</div>

			<div className="absolute bottom-0 left-1/2 z-10 mx-4 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 translate-y-1/2 rounded-2xl bg-white p-4 text-gray-800 shadow-xl sm:p-6 md:p-8">

				<h1 className="mb-3 text-2xl font-bold text-blue-600 sm:mb-4 sm:text-3xl">
					Good Morning!
				</h1>
				<p className="mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base">
					Explore beautiful places in the world with Aranda
				</p>

				<Button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 py-2.5 text-sm text-white transition-colors hover:bg-blue-700 sm:py-3 sm:text-base">
					<Search className="h-4 w-4 sm:h-5 sm:w-5" />
					<span>Search</span>
				</Button>
			</div>
		</section>
	)
}
