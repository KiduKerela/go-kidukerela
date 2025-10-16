'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
						<span
							className={`text-2xl font-bold transition-colors duration-300 ${
								isScrolled ? 'text-blue-600' : 'text-white'
							}`}
						>
							KIDU KERALA
						</span>
					</div>
					<div className="hidden space-x-8 md:flex">
						<a
							href="#"
							className={`transition-colors duration-300 ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							Home
						</a>
						<a
							href="#"
							className={`transition-colors duration-300 ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							Destination
						</a>
						<a
							href="#"
							className={`transition-colors duration-300 ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							Blog
						</a>
						<a
							href="#"
							className={`transition-colors duration-300 ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							About
						</a>
						<a
							href="#"
							className={`transition-colors duration-300 ${
								isScrolled
									? 'text-gray-700 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
							}`}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
