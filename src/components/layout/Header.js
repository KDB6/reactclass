import React from 'react'

function header(props) {
  return (
    <section id="headerType" className={`header__wrap ${props.fonts}`}>
        <div className="header__inner">
            <div className="header__logo">
                <a href="/">Pottery<em></em></a>
            </div>
            <div className="header__menu overlay">
                <ul>
                    <li className="active"><a href="#headerType">Header</a></li>
                    <li><a href="#sliderType">22AW Lookbook</a></li>
                    <li><a href="#imgTextType">NEW ARRIVALS</a></li>
                    <li><a href="#cardType">HQ Service</a></li>
                    <li><a href="#bannerType">Pottery</a></li>
                </ul>
            </div>
            <div className="header__member">
                <a href="/">Login</a>
            </div>
            <div className="header__ham">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </section>
  )
}

export default header