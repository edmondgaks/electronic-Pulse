import React from 'react'
import {Button} from '../ButtonElements'
import importedImage from '../../images/svg-1.svg'

import ChartComponent from '../Chart/Chart'

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
    } from './MarketElements'


    
function MarketSection({
        id, 
        lightBg, 
        imgStart, 
        topLine, 
        headline, 
        lightText, 
        description,
        darkText,
        buttonLabel,
        img,
        alt,
        primary, 
        dark,
        dark2,
        imgPath
    }) {

                       

    return (
        <>
            <InfoContainer id="market" lightBg={false}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Market Size</TopLine>
                                <Heading lightText={true}>Headline for About</Heading>
                                <Subtitle darkText={darkText}>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {/* <Img src={importedImage} alt={alt} /> */}
                                {/* <ChartComponent /> */}
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default MarketSection