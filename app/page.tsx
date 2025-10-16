import HeroSection from '@/components/landingPage/HeroSection'
import WhyChooseUs from '@/components/landingPage/WhyChooseUs'
import Partners from '@/components/landingPage/Partners'
import TopBookNow from '@/components/landingPage/TopBookNow'
import ExploreKerala from '@/components/landingPage/ExploreKerala'
import FeatureNews from '@/components/landingPage/FeatureNews'
import Testimonials from '@/components/landingPage/Testimonials'
import Newsletter from '@/components/landingPage/Newsletter'
import Footer from '@/components/landingPage/Footer'

export default function Homepage() {
	return (
		<div className="min-h-screen bg-white">
			<HeroSection />
			<WhyChooseUs />
			<Partners />
			<TopBookNow />
			<ExploreKerala />
			<FeatureNews />
			<Testimonials />
			<Newsletter />
			<Footer />
		</div>
	)
}
