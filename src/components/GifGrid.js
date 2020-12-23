import React from 'react'
import { UseFechtGifs } from '../hooks/useFetchGift'
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const {data:images, loading} = UseFechtGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="loading animate__animated animate__flash">Loading...</p>}
            <div className="cardGrid">
                
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
