import React from 'react'
import tesla from "../../images/tesla.jpg";
import ionity from '../../images/ionity.jpg'
import chargingpoint from '../../images/chargingpoint.jpg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,

} from './CompElements'

function Competition() {
    return (
        <ServicesContainer id='competition'>
            <ServicesH1>Competition</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={ionity} />
                    <ServicesH2>Ionity</ServicesH2>
                    <ServicesP>They are not doing wireless charging</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={tesla} />
                    <ServicesH2>Tesla</ServicesH2>
                    <ServicesP>Failed to reduce the charging time</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={chargingpoint} />
                    <ServicesH2>Charging Point</ServicesH2>
                    <ServicesP>Failed to innovate their product</ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Competition
