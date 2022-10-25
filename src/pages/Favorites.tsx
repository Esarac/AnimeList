import { useEffect, useState } from 'react'
import { AnimeWithLike } from '../models/animes'
import store from '../config/redux/store'
import { deleteFavorite } from '../services/userService'
import AnimeContainer from '../components/animeContainer/AnimeContainer'

function Favorites() {
  const [animes, setAnimes] = useState<AnimeWithLike[]>([])

  useEffect(() => {
    obtainLikedAnimes()
  }, [])

  const obtainLikedAnimes = () => {
    const actualUser = store.getState().actual
    if (actualUser) {
      setAnimes(actualUser.favorites)
    }
  }

  const unlike = async (id: number) => {
    const anime = animes.find(anime => anime.mal_id === id) as AnimeWithLike
    if (anime.like){
      const favAnime = store.getState().actual?.favorites.find(actAnime => actAnime.mal_id === anime.mal_id) as AnimeWithLike
      await deleteFavorite(favAnime)
    }

    obtainLikedAnimes();
  }

  return (
    <div className='text-monaco'>
      <h1 className='text-center'>Favorites</h1>
      <AnimeContainer animes={animes} onLike={unlike} />
    </div>
  )
}

export default Favorites