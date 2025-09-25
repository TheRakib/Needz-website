import Link from 'next/link';
import React from 'react';

const DeleteUser = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
            <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4 text-red-600">Delete Account</h1>
                <p className="text-gray-600 mb-6">
                    Deleting your account will remove your profile and all associated data
                    permanently. This action cannot be undone.
                </p>

                {/* Link to user profile */}
                <Link
                    href="/user/profile"
                    className="block w-full text-center bg-gray-200 text-red-600 border border-red-600 font-medium py-2 px-4 rounded-xl hover:text-white hover:bg-red-700 transition"
                >
                    Go to My Profile
                </Link>
            </div>
        </div>
    );
};

export default DeleteUser;