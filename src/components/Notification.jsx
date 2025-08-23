import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function Notification({ message, visible, type = "success" }) {
    return (
        <div
            className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 
                        ${visible ? 'top-5 opacity-100' : '-top-20 opacity-0'}`}
        >
            <div className="flex items-center justify-evenly bg-white border border-gray-300 rounded-3xl py-2 px-4 shadow-lg">
                {type === "success" ? (
                    <FaCheck className="text-green-600 text-sm mr-2" />
                ) : (
                    <FaTimes className="text-red-600 text-sm mr-2" />
                )}
                <p className={`text-sm font-medium ${type === "success" ? "text-green-700" : "text-red-700"}`}>
                    {message}
                </p>
            </div>
        </div>
    );
}

export default Notification;
