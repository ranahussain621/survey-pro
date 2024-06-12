import { observer } from 'mobx-react-lite'

const StepsSection = observer(() => {
  return (
    <div className="steps__Container-sc-68semg-0 hiCIrh bg-teal-100/40 pt-20">
      <div className="container m-auto">
        <h2 className="mb-4 text-center text-5xl font-bold text-slate-950">Here's how it works</h2>
        <p className="mb-10 text-center text-xl text-slate-900">
          A brief demonstration of how most people would use Survey Pro.
        </p>
        <div className="stepsGrid grid grid-cols-1 items-center md:grid-cols-2 md:gap-2">
          <div className="stepsCreateImage p-16">
            <img src="https://forms.b-cdn.net/website/home-steps-01.png" alt="Ask your questions" />
          </div>
          <div className="stepsCreateText mb-12 md:m-0 md:px-16 md:py-8 ">
            <h3 className="mb-4 text-4xl font-semibold text-slate-950">Ask your questions</h3>
            <p className="text-xl text-slate-800">
              Draft your questions, set up the conditional form logic, and customize the form style
              to match your branding.
            </p>
            <ul className="mt-4 list-disc pl-4 text-xl text-slate-800">
              <li>Pick a template, or start from scratch</li>
              <li>Up to 40+ form fields supported</li>
              <li>No coding skills required</li>
            </ul>
          </div>
          <div className="stepsDistributeText mb-12 md:m-0 md:px-16 md:py-8">
            <h3 className="mb-4 text-4xl font-semibold text-slate-950">Share to the audience</h3>
            <p className="text-xl text-slate-800">
              Share your form to your audience via a link, an email, or a QR code, or seamlessly
              embed it on your website or application.
            </p>
          </div>
          <div className="stepsDistributeImage p-16">
            <img
              src="https://forms.b-cdn.net/website/home-steps-02.png"
              alt="Share to the audience"
            />
          </div>
          <div className="stepsConnectImage p-16">
            <img
              src="https://forms.b-cdn.net/website/stepIntegrations.png"
              alt="MySurveyPro Integration"
            />
          </div>
          <div className="stepsConnectText mb-12 md:m-0 md:px-16 md:py-8">
            <h3 className="mb-4 text-4xl font-bold text-slate-950">
              Connect with your favorite tools
            </h3>
            <p className="text-xl text-slate-800">
              Connect with your favorite productivity and project management tools. Simplify and
              streamline your day-to-day activities by automating complex tasks with Survey Pro
              industry-leading integrations.
            </p>
            <a
              className="mt-6 inline-block text-lg text-black underline hover:underline"
              href="/integrations"
            >
              See all integrations
            </a>
          </div>
          <div className="stepsAnalyzeText mb-12 md:m-0 md:px-16 md:py-8">
            <h3 className="mb-4 text-4xl font-bold text-slate-950">Get insightful data</h3>
            <p className="text-lg text-slate-800">
              Simplify the process of gathering customer information, reduce administration
              overhead, and automate compliance processes. You can easily follow the progress of
              every form submitted in our real-time analytics dashboard.
            </p>
          </div>
          <div className="stepsAnalyzeImage p-16">
            <img src="https://forms.b-cdn.net/website/analytics.png" alt="MySurveyPro Analytics" />
          </div>
        </div>
      </div>
    </div>
  )
})

export default StepsSection
