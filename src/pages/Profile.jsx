import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <Header/>
            <div>
                <main class="max-w-7xl mx-auto px-6 py-12">
                    <h1 class="text-3xl font-semibold mb-8">My Account</h1>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                            <h2 class="text-xl font-semibold mb-4">Orders</h2>
                            <p class="text-gray-700">You have 3 recent orders.</p>
                            <a href="#" class="text-blue-600 hover:underline text-sm mt-2 inline-block">View Orders</a>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                            <h2 class="text-xl font-semibold mb-4">Address</h2>
                            <p class="text-gray-700">123 Street Name, Bangalore, India</p>
                            <Link to={"/manageaddress"} class="text-blue-600 hover:underline text-sm mt-2 inline-block">Manage Address</Link>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                            <h2 class="text-xl font-semibold mb-4">Offer Cards</h2>
                            <p class="text-gray-700">2 active coupons available.</p>
                            <a href="#" class="text-blue-600 hover:underline text-sm mt-2 inline-block">View Offers</a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Profile
