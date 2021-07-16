import React, { useState } from 'react'

export default function App() {
  const [value, setValue] = useState({
    name: ''
  })

  const [data, setData] = useState([])

  async function fetchData() {
    const url = "http://localhost:8000/search/" + value.name;
    const response = await fetch(url);
    const res = await response.json();
    setData(res)
  }

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
    fetchData()
  }

  return (
    <div className="" style={{ backgroundColor: "rgb(125,125,125)", height: "100vh" }}>
      <input type="text" value={value.search} onChange={handleChange} name="name" />
      <div>
        {
          data !== undefined && data.length > 0 && data.map(book => <p>{book.paginas}</p>)
        }
      </div>
    </div>
  )
}
