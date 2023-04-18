import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import timer from '../../images/timer.png';
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,

} from './ServicesElements'

function Services() {
    return (
        <ServicesContainer id='problems'>
            <ServicesH1>Problems to be Solved</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={timer} />
                    {/* <ServicesH2>Charging time</ServicesH2> */}
                    <ServicesP>Charging time</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    {/* <ServicesH2>Air Pollution</ServicesH2> */}
                    <ServicesP>Air Pollution</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    {/* <ServicesH2>Lack of chargers</ServicesH2> */}
                    <ServicesP>Lack of chargers</ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Services
