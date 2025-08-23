import React, { useState } from 'react'
import Header from '../components/Header'
import { addToCart } from '../Utils/cartUtil'
import Notification from '../components/Notification'

function Storage() {
    const[showNotification, setShowNotification] = useState(false)
    function handleAdd(item){
        addToCart(item)
        setShowNotification(true);
        setTimeout(()=>setShowNotification(false), 2000)
    }

    const Storage = [
        {
            id: 446,
            type:"shelf",
            name: "Rostres",
            image_path: "https://i.pinimg.com/736x/6c/8c/fe/6c8cfe71cb6f4fbd24245c55dca4c807.jpg",
            description: "Wooden Street Kayden 4 Door Wardrobe Furniture for Clothes, Wooden Almirah for Bedroom, Multi Utility Cupboard with Lock and Handles,1 Year Warranty, Engineered Wood, Columbian Walnut Finish",
            price: 89.99
        },
        {
            id: 52546,
            type:"shelf",
            name: "WOODSTAGE",
            image_path: "https://i.pinimg.com/736x/a8/ae/60/a8ae600ecef663e48ba5279626038926.jpg",
            description: "WOODSTAGE Solid Sheesham Wood Multipurpose Chair for Living Room Bedroom Home Wooden Armchair Furniture for Garden Balcony Outdoor Indoor - (Honey Oak Finish)",
            price: 116.49
        },
        {
            id: 64661,
            type:"shelf",
            name: "Lumens",
            image_path: "https://i.pinimg.com/736x/bd/0e/a8/bd0ea8b5bfad079229f4a06650a446d6.jpg",
            description: "Wooden Street Kayden 4 Door Engineered Wood Wardrobe Furniture for Clothes, Wooden Almirah for Bedroom, Multi Utility Cupboard with Hanging Rod, Lock and Handles,1 Year Warranty (Frosty White)",
            price: 133.49
        },
        {
            id: 54455,
            type:"shelf",
            name: "Furnite",
            image_path: "https://i.pinimg.com/736x/93/7e/90/937e903e18216e2ba9c40d048109a3b2.jpg",
            description: "Nilkamal Freedom Big FMM Plastic Cabinet | 3-Year Warranty | 4-Shelf Storage Cupboard with Doors | Multi Organiser for Home, Wardrobe, and Kitchen | Clothes Rack, Shelves, Brown & Biscuit Colour",
            price: 99.99
        }

    ]
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10 max-w-7xl mx-auto">
                {Storage.map((storage) =>(
                <a key={storage.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition h-[550px] flex flex-col">
                    <img src={storage.image_path} className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="font-semibold mt-2">{storage.name}</h2>
                            <h4 className="text-sm line-clamp-3">{storage.description}</h4>
                            <h2 className="font-semibold mt-1">${storage.price}</h2>
                        </div>
                        <button className="px-4 py-1 rounded-xl bg-yellow-500 mb-2" onClick={() => handleAdd(storage)}>Cart</button>
                        <Notification message={"Item added to cart"} visible={showNotification}/>
                    </div>
                </a>
                ))}
            </div>
        </div>
    )
}

export default Storage
