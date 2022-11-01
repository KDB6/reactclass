import React from 'react';

function Banner({attr}) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]}`}>
        <h2 className="blind">배너 영역</h2>
        <div className="banner__inner">
            <h3 className="title">Pottery</h3>
            <p className="desc">
                저희는 비즈니스 캐주얼을 지향하고 있으며,<br />
                언제 어디서든 편안한 룩을 지향합니다.
            </p>
            <span className="small">Read more</span>
        </div>
    </section>
  )
}

export default Banner