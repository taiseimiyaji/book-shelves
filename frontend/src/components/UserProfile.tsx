import React from 'react';

interface UserProfileProps {
    user: {
        id: number;
        name: string;
        avatar_url: string;
        introduction: string;
    };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div className="flex flex-col items-center p-4">
            <img src={user.avatar_url} alt={user.name} className="rounded-full w-32 h-32 object-cover" />
            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
            <p className="text-gray-600 mt-2">{user.introduction}</p>
        </div>
    );
}

export default UserProfile;
