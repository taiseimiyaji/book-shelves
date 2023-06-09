import React from 'react';
import NoteListItem from './NoteListItem';

interface NoteListProps {
    notes: Array<{
        id: number;
        title: string;
        content: string;
    }>;
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <div className="space-y-4">
            {notes.map(note => (
                <NoteListItem key={note.id} note={note} />
            ))}
        </div>
    );
}

export default NoteList;
