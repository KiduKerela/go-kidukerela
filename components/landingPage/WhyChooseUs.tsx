import { Shield, Award, Clock } from 'lucide-react'

export default function WhyChooseUs() {
	return (
		<section className="mt-32 py-16 md:mt-40">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
					WHY CHOOSE US?
				</h2>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="text-center">
						<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
							<Shield className="h-8 w-8 text-blue-600" />
						</div>
						<h3 className="mb-2 text-xl font-semibold">
							Competitive Prices
						</h3>
						<p className="text-gray-600">
							With over 500 suppliers and the purchasing power of
							our planning and supporting industry, Lorem Ipsum
						</p>
					</div>

					<div className="text-center">
						<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
							<Award className="h-8 w-8 text-blue-600" />
						</div>
						<h3 className="mb-2 text-xl font-semibold">
							Award Winning
						</h3>
						<p className="text-gray-600">
							With over 500 suppliers and the purchasing power of
							our planning and supporting industry, Lorem Ipsum
						</p>
					</div>

					<div className="text-center">
						<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
							<Clock className="h-8 w-8 text-blue-600" />
						</div>
						<h3 className="mb-2 text-xl font-semibold">
							Seamless Experience
						</h3>
						<p className="text-gray-600">
							With over 500 suppliers and the purchasing power of
							our planning and supporting industry, Lorem Ipsum
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
