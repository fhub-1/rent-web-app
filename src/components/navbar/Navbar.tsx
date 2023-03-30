import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '../constants/Index';

export function Navbar() {
    const [active, setActive] = useState("Home")

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="pb-6  lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="/images/logo.png" alt="" />
                        </a>
                    </div>
                    <button onClick={handleMenuClick} type="button" className="inline-flex p-2  transition-all duration-200 rounded-md lg:hidden bg-brand focus:bg-gray-100 hover:bg-gray-100">
                        {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                        <svg className={isMenuOpen ? 'hidden w-6 h-6' : 'block w-6 h-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>

                        {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                        <svg className={isMenuOpen ? 'block w-6 h-6' : 'hidden w-6 h-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal list-none   cursor-pointer text-[16px] ${active === nav.title ? "text-base font-medium underline   text-brand transition-all duration-200  " : "text-base font-medium text-brand1 transition-all duration-200 hover:text-brand focus:text-brand"
                                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link href={`#${nav.id}`}>{nav.title}</Link>
                            </li>
                        ))}
                    </div>
                    <Link href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200  lg:inline-flex " role="button"> Login</Link>
                    <Link href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-brand border border-transparent rounded-md lg:inline-flex hover:bg-brand focus:bg-brand" role="button"> Sign Up </Link>
                </nav>

                {/* <!-- xs to lg --> */}
                <nav className={`${isMenuOpen ? "block" : "hidden"
                    } lg:hidden transition-all duration-300 bg-gray-800 p-10 shadow-md rounded-md text-blod font-semibold `}>
                    <div className='flex flex-1 p-6 space-x-3 mt-10 '>
                        <div className=''>
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal list-none  space-x-2 m-2 cursor-pointer text-[16px] ${active === nav.title ? "text-base font-medium underline   text-brand transition-all duration-200  " : "text-base font-medium text-brand1 transition-all duration-200 hover:text-brand focus:text-brand"
                                        } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <Link href={`#${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                        </div>
                    </div>

                    <div className="px-6 mt-6">
                        <Link href="#" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-brand border border-transparent rounded-md tems-center hover:bg-brand focus:bg-brand" role="button"> Sign Up </Link>
                    </div>
                </nav>
            </div>
        </header>

    );
}


