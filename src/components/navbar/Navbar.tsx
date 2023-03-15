import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '../constants/Index';


export function Navbar() {
    const [active, setActive] = useState("Home")
    const [toggle, setToggle] = useState(false);
    return (
        <header className="pb-6  lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* <!-- lg+ --> */}
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="/images/logo.png" alt="" />
                        </a>
                    </div>

                    <button onClick={() => setToggle(!toggle)} type="button" className="inline-flex p-2 text-brand1 transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                        {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                        </svg>

                        {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
                        {/* <a href="#" title="" className="text-base font-medium text-brand1 transition-all duration-200 hover:text-brand focus:text-brand"> Features </a>

                        <a href="#" title="" className="text-base font-medium text-brand1 transition-all duration-200 hover:text-brand focus:text-brand"> Solutions </a>

                        <a href="#" title="" className="text-base font-medium text-brand1 transition-all duration-200 hover:text-brand focus:text-brand"> Resources </a>

                        <a href="#" title="" className="text-base font-medium text-brand1 transition-all duration-200 hover:text-brand focus:text-brand"> Pricing </a> */}
                    </div>
                    <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200  lg:inline-flex " role="button"> Login</a>
                    <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-brand border border-transparent rounded-md lg:inline-flex hover:bg-brand focus:bg-brand" role="button"> Sign Up </a>
                </nav>

                {/* <!-- xs to lg --> */}
                <nav className="pt-4 pb-6 border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div >
                        <div>
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
                    </div>

                    <div className="px-6 mt-6">
                        <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-brand border border-transparent rounded-md tems-center hover:bg-brand focus:bg-brand" role="button"> Sign Up </a>
                    </div>
                </nav>
            </div>
        </header>

    );
}
