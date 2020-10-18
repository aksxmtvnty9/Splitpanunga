import React from 'react'
import PromotionsText from './PromotionsText'
import PromotionButton from './PromotionButton'
import AppleIcon from './appStore.png'
import GoogleIcon from './playStore.png'


function Promotion(){
    return(
        <div className="promotions">
            <PromotionsText class="promotions-header" text="splitpannunga on the go" />
            <PromotionsText class="promotions-center" text="Get the free Splitpannunga app and add IOUs from anywhere:" />
            <PromotionButton imgClass="promotion-img" icon={AppleIcon} />
            <PromotionButton imgClass="promotion-img-2" icon={GoogleIcon} />
            <p className="promotions-small">+ third-party apps for <span style={{color: "skyBlue"}}>Windows Phone</span></p>
            <PromotionsText class="promotions-header" text="advertisement" />
            <div className="promotions-footer">
                <PromotionsText class="promotions-footer-p" text="Copyright © 2020 Splitpannunga Inc. All rights reserved." />
            </div>
        </div>
    )
}

export default Promotion