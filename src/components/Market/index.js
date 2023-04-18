import React from 'react'
import {Button} from '../ButtonElements';

// import ChartComponent from '../Chart/Chart'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,LineSeries,Inject,DateTime,Legend,Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxis} from '../data/dummy';

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
                                <Heading lightText={true}>Graph for Europe's chargers market</Heading>
                                <Subtitle darkText={darkText}>Europe Electric Vehicle chargers Market was valued at $477.2 million in 2016, and is projected to reach at $2,745.4 million by 2023, growing at a CAGR of 29.4% from 2017 to 2023.</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <ChartComponent>
                                <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
                                <SeriesCollectionDirective>
                                {lineCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)}
                                </SeriesCollectionDirective>
                        </ChartComponent>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default MarketSection