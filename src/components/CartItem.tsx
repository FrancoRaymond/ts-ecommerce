import { useShoppingCart } from "../context/CartContext"
import { items } from '../assets/data/data.ts'
import { CurrencyFormatter } from "../utilities/CurrencyFormatter"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = items.find(i => i.id === id)
    if(item == null) return null

    return (
        <div className="flex gap-2">
            <img src={item.image} alt="" className="h-20 w-16 object-cover rounded-md"/>
            <div className="flex items-center gap-5">
                <div className="flex flex-col gap-2 justify-between">
                    <div className="flex items-start gap-2">
                        <p className="font-semibold text-sm">{item.name}</p>
                        <span className="text-sm text-gray-500">x{quantity}</span>
                    </div>
                    <span className="text-sm text-gray-500">{CurrencyFormatter(item.price)}</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>{CurrencyFormatter(item.price)}</span>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 bg-gray-100 rounded-md cursor-pointer font-semibold">x</button>
                </div>
            </div>
        </div>
    )

}