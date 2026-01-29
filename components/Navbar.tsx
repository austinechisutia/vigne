import React from 'react';
import { Search, ShoppingCart, Heart, User, MapPin, Truck, RotateCcw, ShieldCheck, ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="flex flex-col w-full font-sans">
            {/* Top Bar */}
            <div className="bg-[#0B1221] text-white py-2 px-4 md:px-8 text-xs flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors" role="button" tabIndex={0} aria-label="Select shipping country">
                    <MapPin size={14} className="text-gray-400" aria-hidden="true" />
                    <span className="opacity-90">Ship to</span>
                    <span className="font-bold">KSA</span>
                    <span className="text-lg leading-none" role="img" aria-label="KSA Flag">🇸🇦</span>
                    <ChevronDown size={12} className="text-gray-400" aria-hidden="true" />
                </div>

                <nav aria-label="Top navigation" className="hidden md:flex items-center gap-6 text-gray-300">
                    <ul className="flex items-center gap-6 m-0 p-0 list-none">
                        <li className="flex items-center gap-2">
                            <Truck size={14} className="text-[#00C4CC]" aria-hidden="true" />
                            <span>Trusted Shipping</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <RotateCcw size={14} className="text-[#00C4CC]" aria-hidden="true" />
                            <span>Easy RETURNS</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-[#00C4CC]" aria-hidden="true" />
                            <span>Secure Shopping</span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Bar */}
            <div className="bg-white py-4 px-4 md:px-8 border-b border-gray-100 flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex items-center shrink-0">
                    <a href="/" className="text-3xl font-bold text-[#00C4CC] tracking-tight" aria-label="Stella Home">stella</a>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl hidden md:block relative">
                    <form className="relative" role="search">
                        <label htmlFor="search-input" className="sr-only">Search for products</label>
                        <input
                            id="search-input"
                            type="search"
                            placeholder="What are you looking for?"
                            className="w-full bg-[#FAFAFA] text-gray-700 py-3 pl-12 pr-4 rounded-full border border-transparent focus:bg-white focus:border-[#00C4CC] focus:ring-0 transition-all outline-none placeholder-gray-400"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} aria-hidden="true" />
                    </form>
                </div>

                {/* Right Actions */}
                <nav aria-label="User navigation" className="flex items-center gap-6 shrink-0">
                    <ul className="flex items-center gap-6 m-0 p-0 list-none">
                        {/* Cart */}
                        <li>
                            <a href="/cart" className="relative text-gray-600 hover:text-[#00C4CC] cursor-pointer transition-colors block" aria-label="Cart">
                                <ShoppingCart size={24} aria-hidden="true" />
                                <span className="absolute -top-1 -right-2 bg-[#F64A4A] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                                    3
                                </span>
                            </a>
                        </li>

                        {/* Wishlist */}
                        <li>
                            <a href="/wishlist" className="relative text-gray-600 hover:text-[#00C4CC] cursor-pointer transition-colors block" aria-label="Wishlist">
                                <Heart size={24} aria-hidden="true" />
                                <span className="absolute -top-1 -right-2 bg-[#F64A4A] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                                    2
                                </span>
                            </a>
                        </li>

                        {/* Language/Region */}
                        <li className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-[#00C4CC] cursor-pointer transition-colors" role="button" tabIndex={0} aria-label="Select language">
                            <span className="text-xl leading-none" role="img" aria-label="US Flag">🇺🇸</span>
                            <span className="text-sm font-medium">English</span>
                            <ChevronDown size={14} aria-hidden="true" />
                        </li>

                        {/* User Profile */}
                        <li className="flex items-center gap-3 pl-2">
                            <a href="/profile" className="flex items-center gap-3" aria-label="User Profile">
                                <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm" aria-hidden="true">
                                    AR
                                </div>
                                <div className="hidden lg:flex flex-col text-sm leading-tight">
                                    <span className="text-gray-400 text-xs">Welcome Back!</span>
                                    <span className="font-bold text-gray-800">Abdel Rahman</span>
                                </div>
                                <ChevronDown size={14} className="hidden lg:block text-gray-400" aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Mobile Search (visible only on small screens) */}
            <div className="md:hidden px-4 pb-4">
                <form className="relative" role="search">
                    <label htmlFor="mobile-search-input" className="sr-only">Search for products</label>
                    <input
                        id="mobile-search-input"
                        type="search"
                        placeholder="What are you looking for?"
                        className="w-full bg-[#FAFAFA] text-gray-700 py-3 pl-12 pr-4 rounded-full border border-transparent focus:bg-white focus:border-[#00C4CC] focus:ring-0 transition-all outline-none placeholder-gray-400"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} aria-hidden="true" />
                </form>
            </div>
        </header>
    );
};

export default Navbar;
