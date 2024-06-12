import React from 'react'

import Tickicon from '../../components/svgs/tickicon.svg'
import './pricingpage.css';
interface Price {
  label: string
  amount: string
  priceamount: string
  icon?: React.FunctionComponent
}
const Unlockpremium = () => {
  const prices: Price[] = [
    { label: 'Price (Monthly)', amount: '0', priceamount: '$15/mo' },
    { label: 'Price (Annually)', amount: '0', priceamount: '$12/mo' },
    { label: 'Price (Monthly)', amount: 'Unlimited', priceamount: 'Unlimited' },
    { label: 'Forms', amount: 'Unlimited', priceamount: 'Unlimited' },
    { label: 'Conditional Logic', amount: '20/mo', priceamount: 'Unlimited' },
    { label: 'Answer recall', amount: '0', priceamount: 'Unlimited' },
    { label: 'Spam prevention', amount: '0', priceamount: '$15/mo' },
    { label: 'Team collaboration', amount: '0', priceamount: '$15/mo' },
    { label: 'Custom meta data', amount: '0', priceamount: '$15/mo' },
    { label: 'Custom domain', amount: '0', priceamount: '$15/mo' },
    // { label: 'Remove HeyForm branding', amount: '0', priceamount: '$15/mo' },
    // { label: 'Theme customization', amount: '0', priceamount: '$15/mo' },
    // { label: 'Hidden fields', amount: '0', priceamount: '$15/mo' },
    // { label: 'Priority support', amount: '0', priceamount: '$15/mo' },
    // { label: 'Spam prevention', amount: '0', priceamount: '$15/mo' },
    // { label: 'Spam prevention', amount: '0', priceamount: '$15/mo' }
  ]
  return (
    <div>
      <section className="mx-auto mt-24 max-w-7xl">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Unlock all features with Premium plan
        </h2>
        <div>
          <div>
            <dl>
              <div className="grid grid-cols-3 gap-4 px-4 py-5 sm:px-6">
                <dt />
                <dd className="mt-1 text-xl font-bold sm:col-span-1 sm:mt-0">Free</dd>
                <dd className="mt-1 text-xl font-bold sm:col-span-1 sm:mt-0">Premium</dd>
              </div>
              {prices.map((price, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 rounded-md bg-zinc-50 px-4 py-5 sm:px-6"
                >
                  <dt className="px-2 py-3 text-lg font-medium text-slate-900">{price.label}</dt>
                  <dd className="py-3 text-lg text-slate-900 sm:col-span-1 sm:mt-0">
                    {price.amount}
                  </dd>
                  <dd className="py-3 text-lg text-slate-900 sm:col-span-1 sm:mt-0">
                    {price.priceamount}
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-4 rounded-md bg-zinc-50 px-4 py-5 sm:px-6">
                <dt className="px-2 py-3 text-lg font-medium text-slate-900">Spam prevention</dt>
                <dd className="py-3 text-lg text-slate-900 sm:col-span-1 sm:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </dd>
                <dd className="py-3 text-lg text-slate-900 sm:col-span-1 sm:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </dd>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-4 px-4 py-5 sm:px-6">
                <dd></dd>
                <dd className="mt-1 sm:col-span-1 sm:mt-0">
                  <a className="rounded-md bg-slate-900 px-6 py-3 text-lg font-medium text-white">
                    Sign up today
                  </a>
                </dd>
                <dd className="mt-1 sm:col-span-1 sm:mt-0">
                  <a className="rounded-md bg-slate-900 px-6 py-3 text-lg font-medium text-white">
                    Sign up today
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Unlockpremium
