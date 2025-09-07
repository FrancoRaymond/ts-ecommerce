import cartIcon from '../assets/images/icon-cart.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-3 py-3 bg-gray-50 shadow sm:px-5 md:px-10 lg:px-24 fixed top-0 w-full'>
        <h1 className='text-gray-800 text-2xl'>store</h1>
        <button className='relative cursor-pointer active:scale-105'>
            <img src={cartIcon} alt="" className='size-6'/>
            <span className='bg-red-700 text-white text-xs p-0.5 absolute -top-2 -right-1 rounded-3xl'>3</span>
        </button>
    </div>
  )
}

export default Navbar
