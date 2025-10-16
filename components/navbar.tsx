'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setIsMobileMenuOpen(false);
	};

	const handleNavClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? 'bg-white shadow-sm'
					: 'bg-transparent'
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<button
							onClick={scrollToTop}
							className={`text-xl font-bold transition-colors duration-300 sm:text-2xl ${
								isScrolled ? 'text-blue-600' : 'text-white'
							}`}
						>
							KIDU KERALA
						</button>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden space-x-4 md:flex lg:space-x-8">
						<a
							href="#top-booking"
							className={`text-sm transition-colors duration-300 lg:text-base ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							Top Booking
						</a>
						<a
							href="#explore-kerala"
							className={`text-sm transition-colors duration-300 lg:text-base ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							Explore Kerala
						</a>
						<a
							href="#news"
							className={`text-sm transition-colors duration-300 lg:text-base ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							News
						</a>
						<a
							href="#contact"
							className={`text-sm transition-colors duration-300 lg:text-base ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							Contact Us
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className={`md:hidden ${
							isScrolled ? 'text-gray-700' : 'text-white'
						}`}
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg">
							<a
								href="#top-booking"
								onClick={handleNavClick}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
							>
								Top Booking
							</a>
							<a
								href="#explore-kerala"
								onClick={handleNavClick}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
							>
								Explore Kerala
							</a>
							<a
								href="#news"
								onClick={handleNavClick}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
							>
								News
							</a>
							<a
								href="#contact"
								onClick={handleNavClick}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
							>
								Contact Us
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
