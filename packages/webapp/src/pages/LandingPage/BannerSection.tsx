import { observer } from 'mobx-react-lite'

import img from '../../assets/imgs/banner.avif'

const BannerSection = observer(() => {
  return (
    <div className="bgHero py-12">
      <div className="relative z-10 mx-auto max-w-7xl px-8 text-slate-900 md:px-12">
        <div className="pt-8 text-center sm:pt-24">
          <h1 className="mx-auto max-w-3xl text-3xl font-semibold text-slate-950 md:text-5xl lg:text-7xl">
            Build user-focused forms that drive impactful results
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-700 md:text-xl">
            Empower your audience by crafting user-centric forms that truly make a difference.
            Simplify data collection, engage users, and achieve meaningful results - all while
            staying budget-friendly.
          </p>
          <div className="mt-8 pb-8">
            <div className="flex flex-col items-center justify-center space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
              <a
                className="w-auto rounded-full bg-blue-500/30 px-4 py-3 text-base font-medium text-slate-950 hover:bg-blue-600/30 sm:text-lg md:px-8 md:py-3"
                title="home.signUp"
                href="#"
              >
                Get started - it's free
              </a>
              <a
                className="w-auto rounded-full border-2 border-slate-950 px-4 py-3 text-base font-medium text-slate-950 sm:text-lg md:px-8 md:py-3"
                title="home.signUp"
                href="#"
              >
                Take a tour{' '}
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <img
              alt="MysurveyPro"
              fetchPriority="high"
              width="650"
              height="500"
              decoding="async"
              data-nimg="1"
              className="w-full rounded-lg shadow-sm"
              style={{ color: 'transparent' }}
              src={img}
            />
          </div>
        </div>
      </div>
    </div>
  )
})

export default BannerSection
