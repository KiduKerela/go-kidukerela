import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import KeralaHero from '@/public/kerala_hero_image.jpg'

export default function HeroSection() {
	return (
		<section className="relative h-[calc(100vh-4rem)]">
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

			<div className="absolute bottom-0 left-1/2 z-10 w-full max-w-2xl -translate-x-1/2 translate-y-1/2 rounded-2xl bg-white p-8 text-gray-800 shadow-xl">

				<h1 className="mb-4 text-3xl font-bold text-blue-600">
					Good Morning!
				</h1>
				<p className="mb-6 text-gray-600">
					Explore beautiful places in the world with Aranda
				</p>

				<Button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700">
					<Search className="h-5 w-5" />
					<span>Search</span>
				</Button>
			</div>
		</section>
	)
}
