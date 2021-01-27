import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesH1,ServicesWrapper, ServicesIcon, ServicesH2, ServicesP, ServicesCard } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="service">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduces Expenses</ServicesH2>
                    <ServicesP>We help reduces your fees and increase youroverall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
