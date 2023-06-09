import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
    return (
        <nav className="bg-blue-200 p-4">
            <ul className="flex flex-col space-y-2">
                <li>
                    <Link href="/">
                        <div className="text-blue-800">
                            Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <div className="text-blue-800">
                            Profile
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/new-note">
                        <div className="text-blue-800">
                            New Note
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
