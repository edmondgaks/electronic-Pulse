import React from 'react'
import timer from '../../images/timer.png';
import airpollution from '../../images/air-pollution.png'
import lack from '../../images/lack.png';
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
                    <ServicesP>Charging time</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={airpollution} />
                    <ServicesP>Air Pollution</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={lack} />
                    <ServicesP>Lack of chargers</ServicesP>
                </ServicesCard>
            </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Services
