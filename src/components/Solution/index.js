import React from 'react'
import clock from '../../images/clock.png'
import solar from '../../images/solar-energy.png';
import charg from '../../images/phone-charger.png';

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,

} from './SolutionElements'

function Solution() {
    return (
        <ServicesContainer id='solution'>
            <ServicesH1>Solutions</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={clock} />
                    <ServicesP>Developing ultrafast wireless chargers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={solar} />
                    <ServicesP>Fully powered solar roofs on the chargers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={charg} />
                    <ServicesP>Installing chargers on both public and private places</ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Solution
