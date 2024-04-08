import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Headers title="Akash"></Headers>
      <Headers title="Singh"></Headers>
    </div>
  )
}

const Headers = ({title}) => {
  return <div>
    {title}
  </div>
}

export default App