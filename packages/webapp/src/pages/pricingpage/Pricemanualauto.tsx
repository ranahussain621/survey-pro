import React from 'react'

const Pricemanualauto = () => {
  return (
    <div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div className="relative">
        <div className="absolute inset-0 h-3/4" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center">
            <button className="rounded-l-md border border-slate-900 bg-slate-900 px-4 py-2 text-white">
              Monthly
            </button>
            <button className="rounded-r-md border border-slate-900 bg-white px-4 py-2 text-slate-900">
              Annually
            </button>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <div className="flex flex-wrap overflow-hidden rounded-lg border border-slate-300 bg-transparent px-10 py-20">
              <div className="w-full md:w-1/2">
                <div>
                  <h3
                    className="mb-6 inline-flex rounded-sm border border-slate-900 px-4 py-1 text-sm font-bold uppercase tracking-wide"
                    id="tier-standard"
                  >
                    Free
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-7xl font-extrabold text-slate-950">
                  ${/* */}0
                </div>
                <p className="mt-5 font-medium text-slate-900">Per member, per month</p>
              </div>
              <div className="mt-8 flex w-full flex-1 flex-col justify-between sm:mt-0 md:w-1/2">
                <ul role="list" className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Unlimited forms</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">20 responses/mo</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Unlimited questions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Conditional Logic</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Spam prevention</p>
                  </li>
                </ul>
              </div>
              <div className="mt-8 w-full rounded-md shadow">
                <a
                  href="https://my.heyform.net/sign-up"
                  className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                  aria-describedby="tier-standard"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="flex flex-wrap overflow-hidden rounded-lg border border-lime-700 bg-lime-100 px-10 py-20">
              <div className="w-full md:w-1/2">
                <div>
                  <h3
                    className="mb-6 inline-flex rounded-sm border border-slate-900 px-4 py-1 text-sm font-bold uppercase tracking-wide"
                    id="tier-standard"
                  >
                    Premium
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-7xl font-extrabold text-slate-950">
                  ${/* */}15
                </div>
                <p className="mt-5 font-medium text-slate-900">Per member, per month</p>
              </div>
              <div className="mt-8 flex w-full flex-1 flex-col justify-between sm:mt-0 md:w-1/2">
                <ul role="list" className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Team collaboration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Custom domain</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">
                      Remove MySurveyPro branding
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Theme customization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-slate-900">Hidden fields</p>
                  </li>
                </ul>
              </div>
              <div className="mt-8 w-full rounded-md shadow">
                <a
                  href="https://my.heyform.net/sign-up"
                  className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                  aria-describedby="tier-standard"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricemanualauto
