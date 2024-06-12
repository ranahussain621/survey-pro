import { observer } from 'mobx-react-lite'

import BannerSection from './BannerSection'
import BrandingSecton from './BrandingSecton'

import StepsSection from './StepsSection'
import TestmonialSection from './TestmonialSection'
import UsageSection from './UsageSection'

const LandingPage = observer(() => {
  return (
    <div>

      <BannerSection />
      <BrandingSecton />
      <StepsSection />
      <UsageSection />
      <TestmonialSection />
    </div>
  )
})

export default LandingPage
