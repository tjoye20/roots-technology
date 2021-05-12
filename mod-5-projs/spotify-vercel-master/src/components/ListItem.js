import React, { useState } from 'react'

export default function ListItem({ item }) {
    const [preview, setpreview] = useState(false)
    return (
        <div className='flex-row align-center'>
            <div className='grow1'>
                <p>





                    {item.name}
                </p>
                {preview &&

                    <div>
                        <audio controls autoPlay >
                            <source src={item.preview_url} type="audio/ogg" />
Your browser does not support the audio element.
</audio>
                    </div>
                }

                <div className='flex-row flex-wrap' >
                    {item.artists.map((val, i) => {

                        return <div key={i} className='artist'>
                            {
                                val.name
                            }
                        </div>
                    })}

                </div>
            </div>
            <div className='flex-row'>
                {
                    item.preview_url &&
                    <button className='play-link' onClick={() => setpreview(!preview)}>
                        {
                            preview ? 'Stop preview' : 'preview'
                        }

                    </button>
                }
                <a target='_blank' rel="noreferrer" href={item.external_urls.spotify} className='play-link'>

                    play


</a>
            </div>




        </div>
    )
}
