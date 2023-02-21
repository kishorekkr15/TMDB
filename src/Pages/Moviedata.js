import Moviecard from "./Moviecard"
import { useEffect, useState } from "react"
import axios from 'axios'
import { Row } from 'react-bootstrap'

const Moviedata = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=915dc9259042d246434dfa1254904d5e&language=en-US&page=1').then(response => {
      setMovies(response.data.results)
    }).catch(error => {
      console.log(error)
    })
  })

  return (
    <div>
      <Row >
        {movies.map((movie, index) => {
          return <Moviecard key={index} {...movie} />
        })}
      </Row>
    </div>
  )
}
export default Moviedata