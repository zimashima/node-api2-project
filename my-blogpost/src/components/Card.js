import React from 'react'

export default function Card({post}) {
    return (
        <div className="card text-white bg-primary m-3 p-3" style={{maxWidth: "20rem"}}>
            <h4>{post.title}</h4>
            <p>{post.contents}</p>
            <button type="button" className="btn btn-secondary">Read Comments...</button>
        </div>
    )
}
