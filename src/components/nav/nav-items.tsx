'use client'

import * as Input from '@/components/ui/input'
import { Menu, Search, X } from "lucide-react";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLink } from './nav-link';
import { MenuOverlay } from './menu-overlay';

const navLinks = [
    {
        title: 'After Effects Presets',
        path: '#after-presets',
    },
    {
        title: 'After Effects Tutorials',
        path: '#after-tutorials',
    },
]

export function NavItems() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setNavbarOpen(false),
        );
    }, []);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">

            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 '>

                <div className='flex gap-2 items-center'>
                    <div className="mobile-menu block md:hidden">
                        {!navbarOpen ? (
                            <button
                                type='button'
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                type='button'
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    <Link
                        href={"/"}
                        className="text-white text-2xl lg:text-3xl font-semibold italic"
                    >
                        Pixel Tribe
                    </Link>

                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex gap-10'>
                        {/* <li>
                            <a href="##" className="hover:text-zinc-500" >After Effects Presets</a>
                        </li>
                        <li>
                            <a href="##" className="hover:text-zinc-500" >After Effects Tutorials</a>
                        </li> */}
                        {navLinks.map((link, index) => (
                            <li key={(index)}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-8 font-medium text-sm">

                    {/* <div className='hidden md:flex mx-auto'>
                        <Input.Root>
                            <Input.Prefix>
                                <Search className="h-5 w-5 text-zinc-500" />
                            </Input.Prefix>
                            <Input.Control id='search' type="text" placeholder='Search...' />
                        </Input.Root>
                    </div> */}

                    <div className='flex items-center gap-6'>
                        <Link href={'/login'} className="hidden md:flex font-semibold text-white hover:text-zinc-500"
                        >
                            Login
                        </Link>
                        <Link href={'/signup'} className="flex items-center font-semibold bg-zinc-900 h-14 rounded-full border px-8 py-2 text-zinc-50 hover:bg-zinc-600"
                        >
                            Sign Up
                        </Link>
                    </div>


                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} className='bg-[#644f4f] bg-opacity-25' /> : null}
        </nav>
    )
}