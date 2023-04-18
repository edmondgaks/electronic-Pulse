import React from 'react'
import problem from "../../images/problem.png";
import {InfoContainer,
        InfoWrapper,
        InfoRow,
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        ImgWrap,
        Img,
    } from './WhyElements'

    
    function WhySection() {

    return (
        <>
            <InfoContainer id="whyus">
                <InfoWrapper>
                    <InfoRow>
                        <Column2>
                            <ImgWrap>
                                <Img src={problem} />
                            </ImgWrap>
                        </Column2>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Why Us (ev-Pulsar)</TopLine>
                                {/* <Heading lightText={lightText}>{headline}</Heading> */}
                                <Subtitle>ev-Pulsar is working on forefront Technologies</Subtitle>
                                <Subtitle>We are drown to the vision of building great products</Subtitle>
                                <Subtitle>We collaborate with every personnel willing to make a change and invent</Subtitle>
                                
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default WhySection
