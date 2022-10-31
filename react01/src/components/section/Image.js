import React from 'react'

function Image({attr}) {
  return (
    <section id="imageType" className={`image__wrap ${attr[0]} ${attr[1]}`}>
        <h2>POTTERY</h2>
        <p>포터리는 좋은 옷을 통해 삶을 더 좋게 빚어 나갑니다.</p>
        <div className={`image__inner ${attr[2]}`}>
            <article className="image img1">
                <h3 className="image__title">우리의 목적</h3>
                <p className="image__desc">포터리는 현대사회에 알맞는 유니폼을 제안하고자 합니다. 과거의 유니폼은 한 집단에 소속된 특징을 보여주는 옷이었다면, 현대의 유니폼은 개개인의 라이프스타일 또한 대변할 수 있는 옷이 되었습니다.</p>
                <a className="image__btn" href="/" title="자세히 보기">Read more</a>
            </article>
            <article className="image img2">
                <h3 className="image__title">우리의 미션</h3>
                <p className="image__desc">
                    <br />COMPANY
                    포터리는 다양한 직군을 관찰하고 그들의 문화와 환경에 맞는 소속감과 통일성이 있는 유니폼을 제공하는 서비스를 진행합니다.
                </p>
                <a className="image__btn yellow" href="/" title="자세히 보기">Read more</a>
            </article>
        </div>
    </section>
  )
}

export default Image