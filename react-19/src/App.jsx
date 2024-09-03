import { useState, useTransition } from 'react'
import { Suspense } from "react"

import Products from "./components/Product"
import Forms from "./components/FormAction"
import UseAPI from "./components/UseAPI"

function App() {
  const [tab, setTab] = useState("home")
  const [isPending, startTransition] = useTransition()

  function switchTab(tab) {
    startTransition(() => {
      setTab(tab)
    })
  }

  function setStyles(thisTab) {
    return {
      backgroundColor: tab === thisTab ? "#262626" : "white",
      color: tab === thisTab ? "white" : "black"
    }
  }

  return (
    <main>
      <nav>
        <button
          onClick={() => switchTab("home")}
          style={setStyles("home")}
        >Home</button>
        <button
          onClick={() => switchTab("products")}
          style={setStyles("products")}
        >Products</button>
        <button
          onClick={() => switchTab("about")}
          style={setStyles("about")}
        >About</button>
        <button
          onClick={() => switchTab("form")}
          style={setStyles("form")}
        >Form</button>
        <button
          onClick={() => switchTab("useAPI")}
          style={setStyles("useAPI")}
        >Use API</button>
      </nav>
      <div>
        {isPending && <p>Loading...</p>}
        {!isPending && tab === "home" && <h1>Home page</h1>}
        {!isPending && tab === "products" && <Products />}
        {!isPending && tab === "about" && <h1>About page</h1>}
        {!isPending && tab === "form" && <Forms />}
        {!isPending && tab === "useAPI" &&
          <Suspense fallback={
            <p>Loading...</p>}>
            <UseAPI />
          </Suspense>
        }

      </div>
    </main>
  )


}


export default App
