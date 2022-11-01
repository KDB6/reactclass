import React from 'react'

const imageText = {
    blind: "NEW ARRIVALS",
    miniTitle: "NEW ARRIVALS",
    title: "NEW ARRIVALS",
    sub: "새로움의 시작",
}

const imageLink = [
    {aLink: "/", desc: "All"},
    {aLink: "/", desc: "Shirt"},
    {aLink: "/", desc: "Knit"},
    {aLink: "/", desc: "T-Shirt"},
    {aLink: "/", desc: "Jacket"},
    {aLink: "/", desc: "Pants"},
]

const ImageLinkCont = ({aLink, desc}) => {
    <li><a href={`${aLink}`}>{desc}</a></li>
}

function Imgtext({attr}) {
  return (
    <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}>
        <h2 className="blind">{imageText.blind}</h2>
        <div className={`imgText__inner ${attr[3]}`}>
            <div className="imgText__txt">
                <span>{imageText.miniTitle}</span>
                <h3>{imageText.title}</h3>
                <p>{imageText.sub}</p>
                <ul>
                    { imageLink.map(info => (
                        <ImageLinkCont 
                            aLink = {info.aLink}
                            desc = {info.desc}
                        />
                    ))}
                </ul>
            </div>
            <div className="imgText__img img1">
                <a href="/">NEW ARRIVALS</a>
            </div>
            <div className="imgText__img img2">
                <a href="/" className="blue">BEST</a>
            </div>
        </div>
    </section>
  )
}

export default Imgtext