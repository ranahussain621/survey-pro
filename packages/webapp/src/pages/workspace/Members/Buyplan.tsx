
import { observer } from 'mobx-react-lite'
import { useState, type FC } from 'react'

import { Modal, notification, useForm } from '@/components/ui'
import { BACKEND_URL, PRICE_KEY_FOR_MONTH, PRICE_KEY_FOR_YEAR } from '../../../consts/environments'

export const Buyplan: FC<IModalProps> = observer(({ visible, onClose }) => {

  const userStore = localStorage.getItem('UserStore') ?? '{}';
  const userId = JSON.parse(userStore);

  const [toggleborder, settoggleborder] = useState(false)
  const [formData, setFormData] = useState<any>({
    priceId: PRICE_KEY_FOR_MONTH,
    mode: "payment",
    id: userId?.user.id

  }); // Initialize state for form data

  const handleContinueClick = async () => {
    try {
      // Send a POST request to your backend API
      const response = await fetch(`${BACKEND_URL}/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data in the request body if needed
      });

      // Check if the request was successful
      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log('Response from backend:', data?.session?.url);
        if (data?.session?.url) {
          window.location = data?.session?.url;
        }
        else if (data?.session?.success === false) {
          notification.error({ message: data?.session?.message })
        }


      } else {
        // Handle errors
        throw new Error('Failed to create checkout session');
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      notification.error({ message: 'Failed to create checkout session' });
    }
  };

  return (
    <Modal contentClassName="w-[100% !important]" visible={visible} onClose={onClose} showCloseIcon>
      <div className="my-4">
        <img src="https://forms.b-cdn.net/website/upgrade.png" className="mx-auto w-48" />
        <h1 className="text-center text-2xl font-bold text-slate-900 sm:tracking-tight">
          Upgrade to unlock all features
        </h1>
        <p className="mx-auto mt-2 max-w-3xl text-center text-base text-slate-500">
          MySurveyPro is completely free to use, but if you need advanced features, consider upgrading
          to MySurveyPro Premium.
        </p>
      </div>
      <div className="mx-auto w-[80%]">
        <div>
          <div className="mb-8 flex items-center justify-center">
            <div className="sm:w-1/2 lg:w-1/3">
              <div className="space-y-4">
                <div
                  className="relative block cursor-pointer rounded-lg border border-gray-300 bg-white p-6 shadow-sm hover:border-gray-400 focus:outline-none sm:flex sm:justify-between"
                  role="radio"
                  aria-checked="true"
                  tabIndex={0}
                  onClick={() => {
                    settoggleborder(false)

                    setFormData(prev => ({
                      ...prev,
                      priceId: PRICE_KEY_FOR_MONTH,
                      mode: 'payment'
                    }))


                  }}

                >
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-xl font-medium text-slate-900">Monthly</p>
                      <div className="text-slate-500">
                        <p className="sm:inline">$15/month</p>
                      </div>
                    </div>
                    {
                      !toggleborder &&
                      <div
                        className="pointer-events-none absolute -inset-px rounded-lg border-2 border-blue-500"
                        aria-hidden="true"
                      ></div>
                    }

                  </div>
                  <div className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:block sm:text-right">
                    <div className="text-3xl font-extrabold text-slate-900">$15</div>
                    <div className="ml-1 text-slate-500 sm:ml-0">per month</div>
                  </div>
                </div>
                <div
                  className="relative block cursor-pointer rounded-lg border border-gray-300 bg-white p-6 shadow-sm hover:border-gray-400 focus:outline-none sm:flex sm:justify-between"
                  role="radio"
                  aria-checked="true"
                  tabIndex={0}
                  onClick={() => {
                    settoggleborder(true)
                    setFormData(prev => ({
                      ...prev,
                      priceId: PRICE_KEY_FOR_YEAR,
                      mode: 'subscription'
                    }))


                  }}

                >
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-xl font-medium text-slate-900">Annually</p>
                      <div className="text-slate-500">
                        <p className="sm:inline">$144/year</p>
                        <p className="ml-2 sm:inline">- save 20%</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:block sm:text-right">
                    <div className="text-3xl font-extrabold text-slate-900">$12</div>
                    <div className="ml-1 text-slate-500 sm:ml-0">per month</div>
                  </div>
                  {
                    toggleborder &&
                    <div
                      className="pointer-events-none absolute -inset-px rounded-lg border-2 border-blue-500"
                      aria-hidden="true"
                    ></div>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <button className="w-full rounded-md bg-blue-700 px-6 py-3 text-white" type="button" onClick={handleContinueClick}>
              Continue
            </button>
          </div>
        </div>
        <div className="mt-12">
          <ul className="mb-12 grid grid-cols-3 gap-4 text-lg">
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-users mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
              </svg>
              <h3 className="text-lg font-medium">Team collaboration</h3>
              <p className="text-base text-slate-500">
                Invite team members to co-create forms and streamline data collection experiences
                that meet organizational needs and goals.
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-globe mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13"></path>
                <path d="M11 17v4"></path>
                <path d="M7 21h8"></path>
              </svg>
              <h3 className="text-lg font-medium">Connect custom domain</h3>
              <p className="text-base text-slate-500">
                Add your own domains (or subdomains) to your forms and create SEO-friendly pretty
                URLs. We take care of hosting and SSL certificates for you.
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-pencil mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
              </svg>
              <h3 className="text-lg font-medium">Remove MySurveyPro branding</h3>
              <p className="text-base text-slate-500">
                Remove all MySurveyPro branding and have your forms seamlessly represent your brand.
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brush mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M3 21v-4a4 4 0 1 1 4 4h-4"></path>
                <path d="M21 3a16 16 0 0 0 -12.8 10.2"></path>
                <path d="M21 3a16 16 0 0 1 -10.2 12.8"></path>
                <path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path>
              </svg>
              <h3 className="text-lg font-medium">Theme customization</h3>
              <p className="text-base text-slate-500">
                Style your forms by customizing backgrounds, patterns, fonts, buttons, etc. to suit
                your business needs.
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-file mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              </svg>
              <h3 className="text-lg font-medium">Custom meta tags</h3>
              <p className="text-base text-slate-500">
                Optimize the SEO of your form page by setting custom meta tags, rank high in Google
                search results.
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-mail mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              <h3 className="text-lg font-medium">Build audience</h3>
              <p className="text-base text-slate-500">
                Build, manage, and target a diverse set of audience for better data collection.
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-eye-off mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
                <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
                <path d="M3 3l18 18"></path>
              </svg>
              <h3 className="text-lg font-medium">Hidden fields</h3>
              <p className="text-base text-slate-500">
                Use data that you already have, track information about your audience, and make your
                forms more personal.
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-message-reply mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                <path d="M11 8l-3 3l3 3"></path>
                <path d="M16 11h-8"></path>
              </svg>
              <h3 className="text-lg font-medium">Custom auto responses</h3>
              <p className="text-base text-slate-500">
                Automatically send your audience a customized email message when they complete the
                form.{' '}
              </p>
            </li>
            <li className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-server mb-2 mr-2 inline h-8 w-8 text-slate-500"
              >
                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                <path d="M7 8l0 .01"></path>
                <path d="M7 16l0 .01"></path>
              </svg>
              <h3 className="text-lg font-medium">API access</h3>
              <p className="text-base text-slate-500">
                Connect the form data at MySurveyPro with your online business via the API.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  )
})
