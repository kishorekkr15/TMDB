import { Card, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Details from './Details'

const posterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const Moviecard = ({ poster_path, name, vote_average,overview,original_language,first_air_date}) => {
    
    const navigate=useNavigate()
    
    const data={
        name:name,
        url:poster_path,
        description:overview,
        rating:vote_average,
        lang:original_language,
        date:first_air_date

    }

    const onclick=()=>{
        navigate('/details',{state:data})
    }
    
    return (
        <>
            <Card onClick={onclick}  className="card d-flex flex-col w-25 h-25 p-5">
                <Card.Img src={posterUrl(poster_path)} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Rating:{vote_average}
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}
export default Moviecard