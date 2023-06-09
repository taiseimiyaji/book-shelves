"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import NoteList from '../../components/NoteList';
import Footer from '../../components/Footer';

interface Note {
    id: number;
    title: string;
    content: string;
}

const HomePage: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/v1/notes');
                setNotes(res.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchNotes();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Nav />
            <main className="container mx-auto p-4 flex-grow">
                <h1 className="text-2xl font-bold mb-4">Recent Notes</h1>
                <NoteList notes={notes} />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
