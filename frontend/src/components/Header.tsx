import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className="text-2xl font-bold">
                        Reading Notes
                    </div>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link className="text-white" href="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
