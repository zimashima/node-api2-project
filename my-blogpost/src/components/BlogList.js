import React from 'react'
import Card from './Card'

export default function BlogList({posts}) {
    return (
        <div className="d-flex flex-wrap justify-content-around m-5">
            {
                posts.map((post,index) => (
                    <Card key={index} post={post}/>
                ))
            }
        </div>
    )
}
