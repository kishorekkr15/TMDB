import { useLocation } from "react-router-dom"

const Details = () => {
  const id=useLocation()
  const posterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

  return (
    <div className="d-flex rounded container mt-4 detail">
      <div>
        <h3 className="p-3 text-center">{id.state.name}</h3>
        <img src={posterUrl(id.state.url)}/>
      </div>
      <div className="d-flex flex-column  justify-content-center p-5" >
        <p1 className="pb-5"><span>synapsis:</span><br/>{id.state.description}</p1>
        <p1><span>Rating:</span>{id.state.rating}</p1>
        <p1><span>Language:</span>{id.state.lang}</p1>
        <p1><span>Release Date:</span>{id.state.date}</p1>
      </div>
      
    </div>


  )
}
export default Details