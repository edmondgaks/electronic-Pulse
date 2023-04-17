import React, {useEffect, useState} from 'react'
import Video from '../../videos/video.mp4'
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
// import fs from 'fs';
function HeroSection() {

    const [hover, setHover] = useState(false);
    const [stream, setStream] = useState(null);

    const onHover = () => {
        setHover(!hover)
    }
    // useEffect(() => {
    //     const newStream = fs.createReadStream(Video);
    //     setStream(newStream);

    //     return () => {
    //         if(newStream) {
    //             newStream.destroy();
    //         }
    //     }
    // }, []);

    return (
        <HeroContainer>
            <HeroBg>
                
                    <VideoBg src={Video} autoPlay controls muted loop type="video/mp4" />
                
            </HeroBg>
            <HeroContent>
                <HeroH1>Smart Charging</HeroH1>
                <HeroP>Charge your devices using wireless efficiently with ev-Pulsar</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection