import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import AnimeContainer from '../components/animeContainer/AnimeContainer'
import { AnimeWithLike } from '../models/animes'
import { getMemesByPage } from '../services/animeService'


function Home() {
  const [animes, setAnimes] = useState<AnimeWithLike[]>([])
  const [page, setPage] = useState<number>(1)
  const [lastPage, setLastPage] = useState<number>(1)

  useEffect(() => {
    getMemesByPage(page)
        .then((v) => {
            setAnimes(v.data.map((anime)=>{
              return {like:false, ...anime}
            }))
            setLastPage(v.pagination.last_visible_page)
        })
        .catch((e) => {
            console.log(e)
        })
  }, [page])

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

  const like = (id: number) => {
    const anime = animes.find(anime => anime.mal_id===id) as AnimeWithLike
    anime.like = !anime.like
    
    setAnimes([...animes.filter(anime => anime.mal_id!==id), anime])
  }

  return (
    <div className='text-monaco'>
      <AnimeContainer animes={animes} onLike={like}/>
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