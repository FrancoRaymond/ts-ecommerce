import { CurrencyFormatter } from "../utilities/CurrencyFormatter"
import type { StoreItemType } from '../types/store.ts'
import { useShoppingCart } from "../context/CartContext.tsx"

type StoreItemProps = {
  item: StoreItemType
}

const StoreItem = ({ item }: StoreItemProps) => {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(item.id)
  return (
    <div className="w-fit bg-gray-50">
      <img src={item.image} alt={item.name} className=" rounded-md" />
      <div className="p-2 mt-3 flex flex-col gap-2">
        <h2>{item.name}</h2>
        <div className="flex justify-between gap-5 items-center">
          <span className="font-semibold">{CurrencyFormatter(item.price)}</span>
          <span className="text-red-500 text-sm">{item.kit + " kit"}</span> 
        </div>  
      </div>
      <div className="w-full flex py-3">
        {
          quantity === 0 ? 
          (<button onClick={() => increaseCartQuantity(item.id)} className="text-white bg-blue-600 py-1 w-4/5 mx-auto rounded-md cursor-pointer hover:bg-blue-700 transition duration-300">+ Add to cart</button>) : 
          (<div className="flex flex-col gap-2.5 w-fit mx-auto">
            <div className="flex items-center gap-5">
              <button onClick={() => decreaseCartQuantity(item.id)} className="bg-blue-600 text-white py-1 px-3 rounded-md font-bold cursor-pointer hover:bg-blue-700 transition duration-300">-</button>
              <span className="text-sm">{quantity} in cart</span>
              <button onClick={() => increaseCartQuantity(item.id)} className="bg-blue-600 text-white py-1 px-3 rounded-md font-bold cursor-pointer hover:bg-blue-700 transition duration-300">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="mx-auto bg-red-600 text-white py-1 px-2 text-sm rounded-md cursor-pointer w-fit hover:bg-red-700 transition duration-300">Remove</button>
          </div>)
        }
      </div>
    </div>
  )
}

export default StoreItem