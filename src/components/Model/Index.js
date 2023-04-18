import React from 'react'
import value from '../../images/value.png';
import logistics from '../../images/logistics.png'
import visit from '../../images/visitor (2).png';
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,

} from './ModelElements'

function Model() {
    return (
        <ServicesContainer id='problems'>
            <ServicesH1>Business Model</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={value} />
                    <ServicesP>We are manufacturing wireless chargers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={logistics} />
                    <ServicesP>The chargers will be distributed through a site</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={visit} />
                    <ServicesP>Visit phase for clients at our company every 2 months</ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Model
