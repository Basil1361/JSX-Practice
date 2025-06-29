import { useState } from "react";

const Counter3 = () => {
  const [movie, setMovie] = useState({
    title:  "Titanic",
    rating: 7
  });

  const changeRating = () => 
    setMovie({...movie, rating: 5})


  return (
    <div>
      <p>
        Title:  {movie.title}
        </p>
      <p>
        Rating: {movie.rating}
        </p>
      <button onClick={changeRating}>
        Change Rating
      </button>
    </div>
  )
}

export default Counter3
