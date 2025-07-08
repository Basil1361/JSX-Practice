import { useState, useEffect } from "react"

const FetchData = () => {
    const link = "https://jsonplaceholder.typicode.com/todos"
    const [variable, setVariable] = useState([])
    useEffect(() => {
      async function List () {
        const response = await fetch(link)
        const translate = await response.json()
        if (translate && translate.length) 
        setVariable(translate)
        else
        null
      }
List()
}
,[variable]
    )
  return (
    <div>
      {variable.length > 0 ? 
        <section key={variable[0].id}>
        <li>
          {variable[0].completed.toString()}
        </li>
        <li>
        {variable[0].title}
        </li>
        </section>
        :
        <p>Loading...</p>
    }
    </div>
  )
}

export default FetchData 

// true false values are boolean, consider converting it to string first
