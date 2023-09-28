import React from 'react'


const App = () => {
  const [count, setCount] = React.useState(window.store.count)

  React.useEffect(() => {
    window.store.subscribe(() => {
      setCount(window.store.count)
    })
  }, [])
  return (
    <>
      <h2>React Clicks Count: {count}</h2>
    </>
  )
}

export default App
