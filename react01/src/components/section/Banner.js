import React from 'react';

const bannerTitle = {
    blind: "배너 영역",
    title: "Pottery",
    desc: "저희는 비즈니스 캐주얼을 지향하고 있으며, 언제 어디서든 편안한 룩을 지향합니다.",
    more: "small"
}

function Banner({attr}) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]}`}>
        <h2 className="blind">{bannerTitle.blind}</h2>
        <div className="banner__inner">
            <h3 className="title">{bannerTitle.title}</h3>
            <p className="desc">
                {bannerTitle.desc}
            </p>
            <span className="small">{bannerTitle.more}</span>
        </div>
    </section>
  )
}

export default Banner