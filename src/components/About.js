import React from 'react'

function About({
    about,
    title,
    imageSrc = "https://via.placeholder.com/215",
}) {
    return (
        <aside>
            <img src={imageSrc} alt={title}/>
            <p>{about}</p>
        </aside>
    )
}

export default About