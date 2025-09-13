import close from '../assets/images/icon-close.svg'
import { useShoppingCart } from '../context/CartContext'
import { CurrencyFormatter } from '../utilities/CurrencyFormatter'
import  { CartItem }  from './CartItem'
import { items } from '../assets/data/data.ts'

type ShoppingCartProps = {
  isOpen: boolean
}
const Cart = ({isOpen}: ShoppingCartProps) => { 
  const {closeCart, cartItems} = useShoppingCart()
  

  return (
    <div className={`${isOpen ? 'flex' : "hidden"} cart fixed  top-0 left-0 z-50 w-full min-h-screen px-2 sm:px-5 md:px-10 lg:px-24`}>
      <div className='max-w-sm h-fit max-h-[500px] overflow-y-auto bg-white w-full p-5 ml-auto mt-14 rounded-sm flex flex-col'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Cart</h3>
          <button onClick={closeCart} className='cursor-pointer'><img src={close} alt="" /></button>
        </div>
        <div className='flex flex-col gap-3 mt-4'>
          {
            cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))
          }
        </div>
        <span className='mt-5 font-semibold ml-auto'>Total: {CurrencyFormatter(cartItems.reduce((total, ci) => {
          const item = items.find(i => i.id === ci.id)
          return total + (item?.price || 0) * ci.quantity
        }, 0))}</span>
      </div>
    </div>
  )
}

export default Cart
