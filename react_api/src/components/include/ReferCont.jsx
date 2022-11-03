import React from 'react'

const ReferText = ({num, name, desc, star}) => {
    return (
        <li>
            <a href="/">
                <span className="num">{num}</span>
                <span className="name">{name}</span>
                <span className="desc">
                    {desc}
                </span>
                <span className="star">{star}</span>
            </a>
        </li>
    )
}

const ReferCont = ({prop}) => {
  return (
    <section className='cont__refer'>
        <div className="container">
            <div className="refer__inner">
                <h2>CSS</h2>
                <ul className='refer__list'>
                  {prop.map((info, idx) => (
                    <ReferText key={idx} info={info} />
                  ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ReferCont