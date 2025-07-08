import { useState, useEffect } from "react"

const Import = () => {
const [data, setData] = useState([])

useEffect(() => {
    async function getData() {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        const conversion = await response.json()
        console.log(conversion)
        if (conversion && conversion.length) setData(conversion)
        else null
    }
// conversion is the translated json version of the data
// setData(conversion) is conversion -> data 
// JSON stringify is turning object -> string
getData()
}, [])

  return (
    <div>
        <ul>
            {data.map(posts => (
                <section key={posts.id}>
                    <li>Title = {posts.title}</li>
                    <p>Body = {posts.body}</p>

                </section>
            ))}
        </ul>
    </div>
  )
}

export default Import