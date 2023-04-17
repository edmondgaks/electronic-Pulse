import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'

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
                    <ServicesIcon src={Icon1} />
                    {/* <ServicesH2>Charging time</ServicesH2> */}
                    <ServicesP>Developing ultrafast wireless chargers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    {/* <ServicesH2>Air Pollution</ServicesH2> */}
                    <ServicesP>Fully powered solar roofs on the chargers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    {/* <ServicesH2>Lack of chargers</ServicesH2> */}
                    <ServicesP>Installing chargers on both public and private places</ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Solution
