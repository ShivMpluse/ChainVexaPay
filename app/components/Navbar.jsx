"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/ChainVexa.png";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white/20">
            <div className="flex justify-between items-center px-4 py-2">

                {/* Logo */}
                <Image src={logo} alt="logo" className="h-12 w-12" />

                {/* Hamburger Button (Mobile) */}
                <button
                    className="md:hidden block text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 text-sm font-medium capitalize">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About us</Link></li>
                    <li><Link href="/contact-us">Contact us</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/product">Product</Link></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col gap-4 px-4 py-4 text-md font-medium capitalize border-t justify-end">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About us</Link></li>
                    <li><Link href="/contact-us">Contact us</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/product">Product</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;
