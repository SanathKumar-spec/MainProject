import React, { useState } from 'react'
import Header from '../components/Header'
import { addToCart } from '../Utils/cartUtil'
import Notification from '../components/Notification'
import { useProducts } from '../components/Allproducts'

function Tables() {
    const { products, loading } = useProducts("table")
    const [showNotification, setShowNotification] = useState(false)
    function handleAdd(item) {
        addToCart(item)
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 2000);
    }


    return (
        <div>
            <Header />
            {loading ? <p className='text-center'>Loading</p> : 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10 max-w-7xl mx-auto">
                    {products.map((table) => (
                        <a key={table.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition h-[550px] flex flex-col">
                            <img src={table.image_path} className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-300" />

                            <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                                <div>
                                    <h2 className="font-semibold mt-2">{table.name}</h2>
                                    <h4 className="text-sm line-clamp-3">{table.description}</h4>
                                    <h2 className="font-semibold mt-1">${table.price}</h2>
                                </div>
                                <button className="px-4 py-1 rounded-xl bg-yellow-500 mb-2 cursor-pointer" onClick={() => handleAdd(table)}>Cart</button>
                                <Notification message={"Item added to cart"} visible={showNotification} />
                            </div>
                        </a>
                    ))}
                </div>
            }
        </div>
    )
}

export default Tables
