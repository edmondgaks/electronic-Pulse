import React, { useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

import {Button} from '../ButtonElements'

function HeroSection() {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={"/videos/video.mp4"} autoPlay muted loop type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Smart Charging</HeroH1>
                <HeroP>Charge your devices using wireless efficiently with ev-Pulsar</HeroP>
                <HeroBtnWrapper>
                    <Button to='problems'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                            Explore {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection