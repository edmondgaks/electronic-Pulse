import React from 'react'
import {Button} from '../ButtonElements'
import propriatery from "../../images/proprietary.png";
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
    } from './InfoElements'

    
    function InfoSection() {

    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Proprietary Technology/ Expertise</TopLine>
                                {/* <Heading lightText={lightText}>{headline}</Heading> */}
                                <Subtitle>Wireless charging system</Subtitle>
                                <Subtitle>First Ai integrated charging system</Subtitle>
                                <Subtitle>Blockchain payment system to ease access</Subtitle>
                                
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={propriatery} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
