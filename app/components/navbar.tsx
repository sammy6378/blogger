import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-md font-work-sans sticky top-0 z-50">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.jpeg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    {/* user session */}
                    {session && session?.user ? (
                        <>
                            <Link href="/home" className="text-gray-700 hover:text-blue-600 font-medium">
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                                About
                            </Link>
                            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 font-medium">
                                Blogs
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                                Contact
                            </Link>
                            <Link
                                href={`/user/${session.user.id}`}
                                className="text-gray-900 font-semibold bg-blue-100 px-3 py-1 rounded-md hover:bg-blue-200 transition-all"
                            >
                                {session?.user?.name}
                            </Link>

                            {/* Logout Button */}
                            <form
                                action={async () => {
                                    "use server";
                                    await signOut({ redirectTo: '/' });
                                }}
                            >
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition-all"
                                >
                                    Logout
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/startup/create"
                                className="text-gray-700 hover:text-blue-600 font-medium"
                            >
                                Create Account
                            </Link>

                            {/* Login Button */}
                            <form
                                action={async () => {
                                    "use server";
                                    await signIn('github');
                                }}
                            >
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all"
                                >
                                    Login
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
