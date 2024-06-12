import React from 'react'

const Frequentlyquestion = () => {
  return (
    <div className="questions__Container-sc-1ql8vqu-0 dNoCnv">
      <div className="faq m-auto max-w-2xl">
        <h2 className="mb-16 text-center text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="qaList mb-4">
          <div className="questionItem mb-8">
            <div className="questions__Title-sc-1ql8vqu-1 dVJjCm mb-2 text-xl font-bold">
              What payment methods do you accept?
            </div>
            <div className="questions__Answer-sc-1ql8vqu-2 bpVmYF">
              We accept credit cards and debit cards via Stripe. Bank transfer is also supported by
              contacting our support.
            </div>
          </div>
          <div className="questionItem mb-8">
            <div className="questions__Title-sc-1ql8vqu-1 dVJjCm mb-2 text-xl font-bold">
              Is MySurveyPro really free?
            </div>
            <div className="questions__Answer-sc-1ql8vqu-2 bpVmYF">
              Unlike some of the competitors, MySurveyPro provides a real free plan without time limit.
              Once you sign up, you automatically subscribe to our Free plan.
            </div>
          </div>
          <div className="questionItem mb-8">
            <div className="questions__Title-sc-1ql8vqu-1 dVJjCm mb-2 text-xl font-bold">
              Can I upgrade my plan anytime?
            </div>
            <div className="questions__Answer-sc-1ql8vqu-2 bpVmYF">
              Yes! You can upgrade your plan anytime you want, our billing system will calculate the
              price gap automatically, so you just need to simply pay the new invoice to complete
              the upgrade.
            </div>
          </div>
          <div className="questionItem mb-8">
            <div className="questions__Title-sc-1ql8vqu-1 dVJjCm mb-2 text-xl font-bold">
              Can I belong to multiple teams on MySurveyPro?
            </div>
            <div className="questions__Answer-sc-1ql8vqu-2 bpVmYF">
              Yes! You can use the same email address to create and join multiple teams. However,
              each one of these workspaces is on its own plan and needs to be upgraded individually.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frequentlyquestion
