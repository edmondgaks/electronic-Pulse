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
                    {/* <ServicesH2>Charging time</ServicesH2> */}
                    <ServicesP>Developing ultrafast wireless chargers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={solar} />
                    {/* <ServicesH2>Air Pollution</ServicesH2> */}
                    <ServicesP>Fully powered solar roofs on the chargers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={charg} />
                    {/* <ServicesH2>Lack of chargers</ServicesH2> */}
                    <ServicesP>Installing chargers on both public and private places</ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Solution
