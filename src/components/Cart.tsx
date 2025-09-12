import close from '../assets/images/icon-close.svg'
//import { useShoppingCart } from '../context/CartContext'
type ShoppingCartProps = {
  isOpen: boolean
}
const Cart = ({isOpen}: ShoppingCartProps) => { 
  //const { closeCart } = useShoppingCart()

  return (
    <div className={`${isOpen ? 'flex' : "hidden"} cart fixed  top-0 left-0 z-50 w-full min-h-screen px-2 sm:px-5 md:px-10 lg:px-24`}>
      <div className='max-w-sm h-fit max-h-[500px] overflow-y-auto bg-white w-full p-5 ml-auto mt-14 rounded-sm flex flex-col'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Cart</h3>
          <button className='cursor-pointer'><img src={close} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Cart
