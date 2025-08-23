import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { useProducts } from '../components/Allproducts'

function MobileSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, loading } = useProducts("")
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (!loading && products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, 3));
    }
  }, [loading])

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <div className=' flex justify-evenly items-center mt-5'>
        <Link to={"/"} className="text-gray-600 hover:text-gray-800">
          <FaArrowLeft />
        </Link>
        <div className='flex border items-center h-[35px] px-3 box-border max-w-[320px] w-full rounded'>
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-[280px] pl-2 h-[30px] focus:outline-none focus:ring-0'
          />

        </div>
      </div>
      {searchTerm === "" ? (
        <div className='grid grid-cols-3 gap-3 m-5'>
          {loading ? (
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              Loading...
            </p>
          ) : (
            randomProducts.map((product) => (
              <div key={product.id} className='shadow-lg rounded'>
                <div><img src={product.image_path} /></div>
                <p className='text-center text-sm'>{product.name}</p>
              </div>
            ))
          )}
        </div>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className='mx-4 mt-2 p-1 box-border'>
            <div className='border border-gray-300 flex items-center gap-2 p-2'>
              <div className='max-w-[40px] rounded-full overflow-hidden'>
                <img className='object-cover' src={product.image_path} />
              </div>
              <p>{product.name}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default MobileSearchPage
