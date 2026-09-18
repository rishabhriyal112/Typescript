import Counter from "./components/Counter"
import Detail from "./components/detail"


function App() {
  return (
    <div>
      <Detail name="Iphone 18" price={150000} />
      <Counter/>
    </div>
  )
}

export default App
