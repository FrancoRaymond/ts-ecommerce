import { CurrencyFormatter } from "../utilities/CurrencyFormatter"
import type { StoreItemType } from '../types/store.ts'

type StoreItemProps = {
  item: StoreItemType
}

const StoreItem = ({ item }: StoreItemProps) => {
  return (
    <div className="w-fit bg-gray-50">
      <img src={item.image} alt={item.name} className=" rounded-md" />
      <div className="p-2 mt-3 flex flex-col gap-2">
        <h2>{item.name}</h2>
        <span className="text-gray-500 text-sm">{item.kit + " kit"}</span>
        <span className="font-semibold">{CurrencyFormatter(item.price)}</span>    
      </div>
    </div>
  )
}

export default StoreItem