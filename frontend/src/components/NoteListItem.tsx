import React from 'react';
import Link from 'next/link';

interface NoteListItemProps {
    note: {
        id: number;
        title: string;
        content: string;
    };
}

const NoteListItem: React.FC<NoteListItemProps> = ({ note }) => {
    return (
        <div className="border p-4 my-2">
            <Link href={`/notes/${note.id}`}>
                <div className="font-bold text-blue-800">
                    {note.title}
                </div>
            </Link>
            <p className="text-gray-600">{note.content}</p>
        </div>
    );
}

export default NoteListItem;
