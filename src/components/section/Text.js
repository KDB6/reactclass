import React from 'react';

const textText = {
    title: "POTTERY"
}

const textCard = [
    {
        title: '"섬세한"',
        desc: "옷의 쓰임새에 알맞게 제작된 제품들은 높은 신뢰성과 내구성을 보입니다. 옷을 입는 상황에서의 편리함, 그리고 옷을 입지 않았을 때의 외양, 소재의 성능 등 세부적인 제작 요소들을 제어하고 제품의 완결성을 높입니다.",
        href: "/",
        btn: "Read more"
    },
    {
        title: '"드러내지 않는"',
        desc: "우리의 제품과 브랜드는 고객에게 본질의 형태로 자연스럽게 인식되는 것을 목표로 합니다. 외양에서 드러나는 표식과 불필요한 디테일들을 제거하고, 오랫동안 호흡하며 알 수 있는 옷의 힘에 집중합니다. 드러내지 않는 디테일과 브랜드 라벨링은 옷이 보여줄 수 있는 힘을 더 강조합니다.",
        href: "/",
        btn: "Read more"
    },
    {
        title: '"기준이 되는"',
        desc: "우리의 제품은 현대 사회의 표준이 될 수 있는 유니폼의 시작으로부터 만들어집니다. 모호함과 복잡함의 연속이 되는 시대에, 하나의 완성도 높은 제품을 선보임으로써 기준이 되고자 합니다. 간결함을 바탕으로, 우리가 추구하는 ‘기준이 되는 옷’을 만드는 데는 퀄리티 높은 소재와 철저한 공정이 개입됩니다.",
        href: "/",
        btn: "Read more"
    },
    {
        title: '"정돈된 편안함"',
        desc: "우리는 일련의 과정을 통해, 포터리가 생각하는 정돈된 실루엣의 완성을 목표로 합니다. 의류의 가장 기초가 되는 ‘소재’를 바탕으로 하여, 우리가 추구하는 정돈된 실루엣의 형태로 옷을 완성합니다. 정돈된 것들은 우리에게 편안함을 줍니다.",
        href: "/",
        btn: "Read more"
    },
    {
        title: '"절제된 위트"',
        desc: "우리는 포터리만의 ‘해학’을 가지고, 절제된 언어로 말을 건넵니다. 문장의 말미에 걸쳐 있는 재미의 반전 요소처럼, 브랜드 곳곳에 담겨 있는 재치 있는 디테일들은 포터리가 추구하는 절제된 위트를 규정합니다. 포터리가 만들어낸 옷들의 반듯하고 절제된 이미지 속에서, 우리는 각각의 요소와 소재를 비틀어 개개인에게 여유와 재미를 전달합니다.",
        href: "/",
        btn: "Read more"
    },
    {
        title: '"엄격한 기준"',
        desc: "우리에게 옷은 경험하지 못한 이상적인 세계를 엮어주는 하나의 통로입니다. 최상의 경험을 위해서는 기존에 겪지 못했던 최상의 소재를 선별해내야 합니다. 그리고 엄격한 감독을 통해 만들어내는 과정에 밀착하여 완결성을 높여야 합니다. 포터리의 옷들이 만들어지는 과정부터 고객에게 전달되는 그 순간까지, 우리는 이를 하나의 긴 여정으로 보고, 엄격한 기준으로 접근합니다.",
        href: "/",
        btn: "Read more"
    },
]

const TextCard = ({title, desc, href, btn}) => {
    return <div className="text t1">
                <h3 className="text__title">{title}</h3>
                <p className="text__desc">{desc}</p>
                <a className="text__btn" href={`${href}`}>{btn}</a>
            </div>
}

function Text({attr}) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
        <span></span>
        <h2 className="mb70">{textText.title}</h2>
        <div className={`text__inner ${attr[2]}`}>
            { textCard.map(info => (
                <TextCard 
                    title = {info.title}
                    desc = {info.desc}
                    href = {info.href}
                    btn = {info.btn}
                />
            ))}
        </div>
    </section>
  )
}

export default Text