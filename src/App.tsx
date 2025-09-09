import Navbar from "./components/Navbar"
import { items } from './assets/data/data.ts'
import StoreItem from "./components/StoreItem"
import { ShoppingCartProvider } from "./context/CartContext.tsx"

function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 sm:px-5 md:px-10 lg:px-24 py-18">
        {
          items.map(item  => (
            <StoreItem
              key={item.id}
              item={item}
            />
          ))
        }
      </div>
    </ShoppingCartProvider>
  )
}

export default App
