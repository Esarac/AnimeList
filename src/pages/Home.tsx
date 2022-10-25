import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import AnimeContainer from '../components/animeContainer/AnimeContainer'
import { AnimeWithLike } from '../models/animes'
import { getAnimesByPage } from '../services/animeService'
import store from '../config/redux/store'
import { addFavorite, deleteFavorite } from '../services/userService'


function Home() {
    const [animes, setAnimes] = useState<AnimeWithLike[]>([])
    const [page, setPage] = useState<number>(1)
    const [lastPage, setLastPage] = useState<number>(1)

    useEffect(() => {
        obtainAnimes(page)
    }, [page])

    const obtainAnimes = (pageNumber: number) => {
        getAnimesByPage(pageNumber)
            .then((v) => {
                setAnimes(v.data.map((anime) => {
                    const likedAnime = store.getState().actual?.favorites.find((favoriteAnime)=> favoriteAnime.mal_id === anime.mal_id)
                    console.log("likedAnime ", likedAnime)
                    const like = likedAnime? true : false
                    return { like, ...anime }
                }))
                setLastPage(v.pagination.last_visible_page)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const goPrevPage = () => {
        if (isFirst())
            return

        setPage(page - 1)
    }

    const goNextPage = () => {
        if (isLast())
            return

        setPage(page + 1)
    }

    const isFirst = () => page <= 1
    const isLast = () => page >= lastPage

    const like = async (id: number) => {
        const anime = animes.find(anime => anime.mal_id === id) as AnimeWithLike
        if(anime.like){
            const favAnime = store.getState().actual?.favorites.find(actAnime => actAnime.mal_id === anime.mal_id) as AnimeWithLike
            await deleteFavorite(favAnime)
        }
        else{
            anime.like = true
            await addFavorite(anime);
        }
        
        obtainAnimes(page);
    }

    return (
        <div className='text-monaco'>
            <h1 className='text-center'>Animes</h1>
            <AnimeContainer animes={animes} onLike={like} />
            <div className='row gx-2 justify-content-around m-2'>
                <Button
                    onClick={goPrevPage}
                    variant="dark"
                    className='col'
                    disabled={isFirst()}
                >
                    {"<"}
                </Button>
                <span className='col text-center h4'>
                    {page}
                </span>
                <Button
                    onClick={goNextPage}
                    variant="dark"
                    className='col'
                    disabled={isLast()}
                >
                    {">"}
                </Button>
            </div>
        </div>
    )
}

export default Home