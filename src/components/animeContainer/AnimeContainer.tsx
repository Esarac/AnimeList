import { Badge, Button, Card } from 'react-bootstrap'
import { AnimeWithLike } from '../../models/animes'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import ErrorImg from '../../assets/epic_fail.png'
import './AnimeContainer.css'

interface Props{
    animes: AnimeWithLike[]
    onLike: (id: number) => void
}

export default function AnimeContainer(props: Props) {
    return (
        <div className="container p-2 text-monaco">
            <h1 className='text-center'>Animes</h1>
            <div className='row justify-content-center'>
                {props.animes.map(anime => AnimeElement(anime, props.onLike))}
            </div>
        </div>
    )
}

const AnimeElement = (anime: AnimeWithLike, onLike: (id: number) => void) => {
    const tags = anime.genres.map((genre, index)=>{
        return(
            <Badge key={index} bg="secondary" className='m-1'>
                <a href={genre.url}>{genre.name}</a>
            </Badge>
        )
    })

    return (
        <div className="col-12 col-md-6 col-lg-4 g-2" key={anime.mal_id}>
            <div className='border rounded bg-dark w-100 h-100 p-3 text-white'>
                <Card className="bg-dark text-white text-center text-impact">
                    <Card.Img
                        src={anime.images.jpg.image_url}
                        alt={"anime-" + anime.mal_id}
                        onError={({target, currentTarget}) =>{
                            currentTarget.onerror = null
                            currentTarget.src = ErrorImg
                        }}
                    />
                    <Card.ImgOverlay>
                        <div className="d-flex">
                            <Button
                            onClick={()=>{onLike(anime.mal_id)}}
                            variant='danger'
                            className='align-bottom'
                            >
                                {anime.like? <FaHeart/> : <FaRegHeart/>}
                            </Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
                <h2>{anime.title}</h2>
                <p>
                    <u>Score:</u> {anime.score || 0}/10
                </p>
                <div>
                    {tags}
                </div>
            </div>
            
        </div>
    )
}