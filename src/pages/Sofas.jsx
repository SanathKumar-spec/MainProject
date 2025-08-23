import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { addToCart } from '../Utils/cartUtil'
import Notification from '../components/Notification'


export const Sofa = [
    {
        id: 76766,
        type:"sofa",
        name: "Derecha",
        image_path: "https://i.pinimg.com/736x/db/b6/8d/dbb68d00e3e53119054e7ef8fa1a3b6d.jpg",
        description: "WOODSTAGE Solid Sheesham Wood Multipurpose Chair for Living Room Bedroom Home Wooden Armchair Furniture for Garden Balcony Outdoor Indoor - (Honey Oak Finish)",
        price: 291.99
    },
    {
        id: 766348,
        type:"sofa",
        name: "Safesto",
        image_path: "https://i.pinimg.com/736x/29/f3/67/29f3674431f758b312a4437da45befb2.jpg",
        description: "The Durian sofa is a comfortable sofa with straight lines that will adapt perfectly to your living room. These straight lines mark the design of this sofa, with a more traditional image of a robust and warm sofa.",
        price: 300.99
    },
    {
        id: 879443,
        type:"sofa",
        name: "Haven",
        image_path: "https://i.pinimg.com/736x/e0/cb/35/e0cb355ac366318ec739b83a9642e421.jpg",
        description: "Wooden Arm Chair with Cushion and Cane Back Support Chair Living Room Bedroom Home Wooden Armchair Furniture Garden Balcony Outdoor & Indoor (Walnut Finish).",
        price: 149.99
    },
    {
        id: 8474325,
        type:"sofa",
        name: "Canape",
        image_path: "https://i.pinimg.com/736x/40/78/20/4078202662d91e6e5496d3f650572a69.jpg",
        description: "The luxury of sofas and comfortable with cushioned seats",
        price: 189.49
    }
]

function Sofas() {
    const [showNotification, setShowNotification] = useState(false);

    function handleAdd(item) {
        addToCart(item)
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000)
    }

    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10 max-w-7xl mx-auto">
                {Sofa.map((sofa) => (
                    <a key={sofa.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition h-[550px] flex flex-col">
                        <img src={sofa.image_path} className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-300" alt="" />

                        <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                            <div>
                                <h2 className="font-semibold mt-2">{sofa.name}</h2>
                                <h4 className="text-sm line-clamp-3">{sofa.description}</h4>
                                <h2 className="font-semibold mt-1">${sofa.price}</h2>
                            </div>
                            <button className="px-4 py-1 rounded-xl bg-yellow-500 mb-2 cursor-pointer hover:bg-yellow-400 transition-all duration-300" onClick={() => handleAdd(sofa)}>Cart</button>
                            <Notification message="Item added to cart" visible={showNotification} />
                        </div>
                    </a>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Sofas
