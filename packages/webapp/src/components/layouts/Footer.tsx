import { observer } from 'mobx-react-lite'

import FacebookLogo from '../../assets/svgs/facebook.svg?react'
import GitHubLogo from '../../assets/svgs/github.svg?react'
import LinkedInLogo from '../../assets/svgs/linkedin.svg?react'
import HeaderLogo from '../../assets/svgs/survey-pro-logo.png'
import TwitterLogo from '../../assets/svgs/twitter.svg?react'

const Footer = observer(() => {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
            <img src={HeaderLogo} style={{ width: '200px' }} alt="" />
            <p className="text-base text-slate-900">
              Build user-focused forms that drive impactful results
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-700 hover:text-slate-900">
                <span className="sr-only">Facebook</span>
                <FacebookLogo className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-700 hover:text-slate-900">
                <span className="sr-only">Twitter</span>
                <TwitterLogo className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-700 hover:text-slate-900">
                <span className="sr-only">Linkedin</span>
                <LinkedInLogo className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-700 hover:text-slate-900">
                <span className="sr-only">Github</span>
                <GitHubLogo className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Product
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="/product" className="text-base text-slate-800 hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/templates" className="text-base text-slate-800 hover:underline">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="/integrations" className="text-base text-slate-800 hover:underline">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="text-base text-slate-800 hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-slate-800 hover:underline">
                      Open Source
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Resources
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="/HelpCenter" className="text-base text-slate-800 hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-slate-800 hover:underline">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-base text-slate-800 hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-slate-800 hover:underline">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Company
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="/about-us" className="text-base text-slate-800 hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-base text-slate-800 hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-base text-slate-800 hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="/privacypolicy" className="text-base text-slate-800 hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-base text-slate-800 hover:underline">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8">
          <p className="text-base text-slate-800 xl:text-center">
            ©2024 Survey Pro, a side project built in public by{' '}
            <a
              href="https://isureglobalsolutions.com/"
              className="font-medium text-slate-950 underline hover:underline"
            >
              iSure Global Solutions
            </a>
            team.
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
