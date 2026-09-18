import type { Data } from "../types"
import Detail from "./detail"


interface ListData {
  items : Data[]
}

function List({items}:ListData) {
  return (
    <div>
    {items.map((item)=>(
      <Detail key={item.id} name="Apple Watch" price={30000} isSpecial={item.price>30} />
    ))}
    </div>
  )
}

export default List
