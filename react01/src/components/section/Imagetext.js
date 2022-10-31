import React from 'react'

function Imgtext({attr}) {
  return (
    <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}>
        <h2 className="blind">NEW ARRIVALS</h2>
        <div className={`imgText__inner ${attr[3]}`}>
            <div className="imgText__txt">
                <span>NEW ARRIVALS</span>
                <h3>NEW ARRIVALS</h3>
                <p>새로움의 시작</p>
                <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/">Shirt</a></li>
                    <li><a href="/">Knit</a></li>
                    <li><a href="/">T-Shirt</a></li>
                    <li><a href="/">Jacket</a></li>
                    <li><a href="/">Pants</a></li>
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