// src/pages/ManageAddress.jsx
import React from "react";
import { Mail, Phone, MapPin, Edit, Trash2 } from "lucide-react";

export default function ManageAddress() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Manage Address
        </h2>

        <div className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">user@example.com</p>
            </div>
          </div>
          <Edit className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-500" />
        </div>

        <div className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition">
          <div className="flex items-center space-x-3">
            <Phone className="text-green-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-gray-800">+91 9876543210</p>
            </div>
          </div>
          <Edit className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-500" />
        </div>

        <div className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition">
          <div className="flex items-center space-x-3">
            <MapPin className="text-red-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Delivery Address</p>
              <p className="font-medium text-gray-800">
                123, MG Road, Bangalore, India
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Edit className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-500" />
            <Trash2 className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500" />
          </div>
        </div>

        <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          + Add New Address
        </button>
      </div>
    </div>
  );
}
