import React, {useEffect, useState} from 'react'

const App = () => {
  const [count, setCount] = useState(window.store.count)

  useEffect(() => {
    window.store.subscribe(() => {
      setCount(window.store.count)
    })
  }, [])

  return (
    <div>
      <h2>React Clicks Count: {count}</h2>
    </div>
  )
}

export default App
