import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Meme } from '../../models/memes'
import { getMemesByPage } from '../../services/memeService'
import ErrorImg from '../../assets/epic_fail.png'
import './MemeContainer.css'

function MemeContainer() {
    const [memes, setMemes] = useState<Meme[]>([])
    const [page, setPage] = useState<number>(1)
    const [haveNextPage, setHaveNextPage] = useState<boolean>(true)


    useEffect(() => {
        getMemesByPage(page)
            .then((v) => {
                setMemes(v.data)
                setHaveNextPage(v.next !== undefined)
            })
            .catch((e) => console.log(e))
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
    const isLast = () => !haveNextPage

    return (
        <div className="container p-2 text-sans">
            <h1 className='text-center'>Memes - Page {page}</h1>
            <div className='row justify-content-center'>
                {memes.map(MemeElement)}
            </div>
            <div className='row justify-content-around m-2 h4'>
                <Button
                    onClick={goPrevPage}
                    variant="dark"
                    className='col-4'
                    disabled={isFirst()}
                >
                    Prev
                </Button>
                <span className='col-2 text-center h4'>
                    {page}
                </span>
                <Button
                    onClick={goNextPage}
                    variant="dark"
                    className='col-4'
                    disabled={isLast()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

const MemeElement = (meme: Meme) => {
    const tags = meme.tags.split(',').map((value, index)=>{
        return(
            <Badge key={index} bg="secondary" className='m-1'>{value}</Badge>
        )
    })

    return (
        <div className="col-11 col-md-5 col-lg-3 m-3 p-2 border rounded border-dark" key={meme.ID}>
            <h2>{meme.name}</h2>
            <Card className="bg-dark text-white text-center text-meme">
                <Card.Img
                    src={meme.image}
                    alt={"meme-" + meme.ID}
                    onError={({target, currentTarget}) =>{
                        currentTarget.onerror = null
                        currentTarget.src = ErrorImg
                    }}  
                />
                <Card.ImgOverlay>
                    <table className='h-100 w-100'>
                        <tbody>
                            <tr>
                                <td className="align-top">
                                    <h3>{meme.topText}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-bottom">
                                    <h3>{meme.bottomText}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card.ImgOverlay>
            </Card>
            <p>
                {tags}
            </p>
        </div>
    )
}

export default MemeContainer