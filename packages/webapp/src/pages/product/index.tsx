import { observer } from 'mobx-react-lite'
import React from 'react'
import MainBanner from './MainBanner'
import Features from './Features'
import IntegrationsList from './IntegrationsList'
import PremiumFeatures from './PremiumFeatures'

const Product = observer(() => {
    return (
        <>
            <MainBanner />
            <Features />
            <IntegrationsList />
            <PremiumFeatures />
        </>
    )
})

export default Product
