import { Header } from "./components/header/Header"
import { Hero } from "./components/hero"

import { AosInit } from "./lib/aosInit";

function App() {
  return (
    <>
      <AosInit />
      <div className="max-w-7xl mx-auto p-4">
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default App
