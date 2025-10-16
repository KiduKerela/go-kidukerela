'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type NewsCarouselProps = {
	children: React.ReactNode
	className?: string
}

export function NewsCarousel({ children, className }: NewsCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		loop: false,
		slidesToScroll: 1
	})

	const [canScrollPrev, setCanScrollPrev] = React.useState(false)
	const [canScrollNext, setCanScrollNext] = React.useState(false)

	const scrollPrev = React.useCallback(() => {
		emblaApi?.scrollPrev()
	}, [emblaApi])

	const scrollNext = React.useCallback(() => {
		emblaApi?.scrollNext()
	}, [emblaApi])

	const onSelect = React.useCallback(() => {
		if (!emblaApi) return
		setCanScrollPrev(emblaApi.canScrollPrev())
		setCanScrollNext(emblaApi.canScrollNext())
	}, [emblaApi])

	React.useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('select', onSelect)
		emblaApi.on('reInit', onSelect)

		return () => {
			emblaApi.off('select', onSelect)
			emblaApi.off('reInit', onSelect)
		}
	}, [emblaApi, onSelect])

	return (
		<div className={cn('relative', className)}>
			<div className="mb-8 flex items-center justify-between">
				<h2 className="text-3xl font-bold text-gray-800">Feature News</h2>
				<div className="flex space-x-2">
					<button
						className={cn(
							'rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200',
							!canScrollPrev && 'cursor-not-allowed opacity-50'
						)}
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>
					<button
						className={cn(
							'rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200',
							!canScrollNext && 'cursor-not-allowed opacity-50'
						)}
						onClick={scrollNext}
						disabled={!canScrollNext}
						aria-label="Next slide"
					>
						<ChevronRight className="h-5 w-5" />
					</button>
				</div>
			</div>

			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex gap-8">{children}</div>
			</div>
		</div>
	)
}

export function NewsCarouselItem({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={cn('min-w-0 shrink-0 grow-0 basis-full md:basis-1/3', className)}
		>
			{children}
		</div>
	)
}
