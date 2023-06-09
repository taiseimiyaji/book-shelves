"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import UserProfile from '../../components/UserProfile';
import NoteList from '../../components/NoteList';
import Footer from '../../components/Footer';

interface Note {
    id: number;
    title: string;
    content: string;
}

interface User {
    id: number;
    name: string;
    avatar_url: string;
    introduction: string;
}

const UserProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userRes = await axios.get('http://localhost:3000/api/v1/users/1'); // You should replace '1' with actual user id
                setUser(userRes.data);
                const notesRes = await axios.get(`http://localhost:3000/api/v1/users/${userRes.data.id}/notes`);
                setNotes(notesRes.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUserProfile();
    }, []);

    if (!user) return null;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Nav />
            <main className="container mx-auto p-4 flex-grow">
                <UserProfile user={user} />
                <h2 className="text-2xl font-bold mt-8">User's Notes</h2>
                <NoteList notes={notes} />
            </main>
            <Footer />
        </div>
    );
}

export default UserProfilePage;
