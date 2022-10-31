import React from 'react'

function Card({attr}) {
  return (
    <section id="cardType" className={`banner__wrap ${attr[0]} ${attr[1]}`}>
        <h2>HQ Service</h2>
        <p>Headquarter, Center of POTTERY</p>
        <div className={`card__inner ${attr[2]}`}>
            <article className="card">
                <figure className="card__header">
                    <img src="assets/img/card_bg01_01.jpg" alt="포터리" />
                </figure>
                <div className="card__body">
                    <h3 className="tit">COMPANY</h3>
                    <p className="desc">
                        포터리는 다양한 직군을 관찰하고 그들의 문화와 환경에 맞는 소속감과 통일성이 있는 유니폼을 제공하는 서비스를 진행합니다.
                    </p>
                    <a className="btn" href="/">
                        Read more
                        <span aria-hidden="true">
                            <svg width="66" height="8" viewBox="0 0 66 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM65.3536 4.35356C65.5488 4.1583 65.5488 3.84171 65.3536 3.64645L62.1716 0.464471C61.9763 0.269209 61.6597 0.269209 61.4645 0.464471C61.2692 0.659734 61.2692 0.976316 61.4645 1.17158L64.2929 4.00001L61.4645 6.82843C61.2692 7.02369 61.2692 7.34028 61.4645 7.53554C61.6597 7.7308 61.9763 7.7308 62.1716 7.53554L65.3536 4.35356ZM1 4.5L65 4.50001L65 3.50001L1 3.5L1 4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header">
                    <img src="assets/img/card_bg01_02.jpg" alt="TPO" />
                </figure>
                <div className="card__body">
                    <h3 className="tit">HQ</h3>
                    <p className="desc">
                        헤드 오피스는 포터리 고유의 문화를 지향하는 사람들의 모임입니다.
                        창의적이고 생산적인 활동을 통해 영감을 주는 이들을 위해 한정적인 아이템 서비스를 진행합니다.
                    </p>
                    <a className="btn" href="/">
                        Read more
                        <span aria-hidden="true">
                            <svg width="66" height="8" viewBox="0 0 66 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM65.3536 4.35356C65.5488 4.1583 65.5488 3.84171 65.3536 3.64645L62.1716 0.464471C61.9763 0.269209 61.6597 0.269209 61.4645 0.464471C61.2692 0.659734 61.2692 0.976316 61.4645 1.17158L64.2929 4.00001L61.4645 6.82843C61.2692 7.02369 61.2692 7.34028 61.4645 7.53554C61.6597 7.7308 61.9763 7.7308 62.1716 7.53554L65.3536 4.35356ZM1 4.5L65 4.50001L65 3.50001L1 3.5L1 4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header">
                    <img src="assets/img/card_bg01_03.jpg" alt="원단" />
                </figure>
                <div className="card__body">
                    <h3 className="tit">SHARE OFFICE</h3>
                    <p className="desc">
                        오피스 문화의 개선을 주도하는 포터리의 공유 오피스 프로그램입니다.
                        창의적이고 생산적인 활동을 주도하는 이들의 커뮤니케이션과, 작업 환경의 주요 공간으로 활용됩니다.
                    </p>
                    <a className="btn" href="/">
                        Read more
                        <span aria-hidden="true">
                            <svg width="66" height="8" viewBox="0 0 66 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM65.3536 4.35356C65.5488 4.1583 65.5488 3.84171 65.3536 3.64645L62.1716 0.464471C61.9763 0.269209 61.6597 0.269209 61.4645 0.464471C61.2692 0.659734 61.2692 0.976316 61.4645 1.17158L64.2929 4.00001L61.4645 6.82843C61.2692 7.02369 61.2692 7.34028 61.4645 7.53554C61.6597 7.7308 61.9763 7.7308 62.1716 7.53554L65.3536 4.35356ZM1 4.5L65 4.50001L65 3.50001L1 3.5L1 4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Card