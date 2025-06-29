import { useState } from "react";

const Show = () => {
  const [movie, setMovie] = useState([
    {id: 1, title:  "Titanic", rating: 7},
    {id: 2, title:  "Dumb", rating: 7},
 ]);

  const changeMovie= () =>
    setMovie(movie.map(m => (m.id === 1 ? {...movie, title: "John Wick", rating: 9} : m)))

  return (
    <div>
        <ul>
            {movie.map(m => (
                <li key = {m.id}>
                    <p>Movie = {m.title}</p> 
                    <p>Movie= {m.rating} </p>
                </li>
            ))}
        </ul>

      <button onClick={changeMovie}>
        Change Rating
      </button>
    </div>
  )
}

export default Show
