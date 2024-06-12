import { observer } from 'mobx-react-lite'
import React from 'react'

const UsageSection = observer(() => {
  return (
    <div className="usage__Container-sc-1nnysg9-0 kowXVm  bg-white pt-[120px]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="usageTitle mb-4 text-center text-5xl font-extrabold text-slate-900">
          Designed for everyone
        </h2>
        <p className="text-center text-xl text-slate-500">
          Building a form has never been such easy, no matter what roles and what age.
        </p>
        <div className="usageGrid mt-16 grid gap-3 text-center md:grid-cols-3">
          <div className="usageItem">
            <img
              className="mx-auto w-48"
              src="https://forms.b-cdn.net/website/template-examples/creators.svg"
              alt="HeyForm for creators"
            />
            <h3 className="mb-1 text-xl font-bold text-slate-700">Creators</h3>
            <ul>
              <li>
                <a
                  href="https://heyform.net/templates/customer-contact-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Contact Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/customer-feedback-survey-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Customer Feedback Survey
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/restaurant-order-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Restaurant Order form Template
                </a>
              </li>
            </ul>
          </div>
          <div className="usageItem">
            <img
              className="mx-auto w-48"
              src="https://forms.b-cdn.net/website/template-examples/product.svg"
              alt="MysurveyPro for Product Managers"
            />
            <h3 className="text-xl font-bold">Product</h3>
            <ul>
              <li>
                <a
                  href="https://heyform.net/templates/product-feedback-survey-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Product Feedback Survey
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/product-registration-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Product Registration Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/product-order-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Product Order Form Template
                </a>
              </li>
            </ul>
          </div>
          <div className="usageItem">
            <img
              className="mx-auto w-48"
              src="https://forms.b-cdn.net/website/template-examples/marketing.svg"
              alt="MysurveyPro for marketing"
            />
            <h3 className="text-xl font-bold">Marketing</h3>
            <ul>
              <li>
                <a
                  href="https://heyform.net/templates/free-trial-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Free Trial Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/newsletter-subscription-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Newsletter Subscription Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/referral-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Referral Form Template
                </a>
              </li>
            </ul>
          </div>
          <div className="usageItem">
            <img
              className="mx-auto w-48"
              src="https://forms.b-cdn.net/website/template-examples/hr.svg"
              alt="MysurveyPro for HR"
            />
            <h3 className="text-xl font-bold">HR</h3>
            <ul>
              <li>
                <a
                  href="https://heyform.net/templates/exit-interview-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Exit Interview Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/job-application-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Job Application Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/employee-satisfaction-survey-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Employee Satisfaction Survey Template
                </a>
              </li>
            </ul>
          </div>
          <div className="usageItem">
            <img
              className="mx-auto w-48"
              src="https://forms.b-cdn.net/website/template-examples/support.svg"
              alt="MysurveyPro for support"
            />
            <h3 className="text-xl font-bold">Customer Support</h3>
            <ul>
              <li>
                <a
                  href="https://heyform.net/templates/client-satisfaction-survey-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Client Satisfaction Survey Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/brand-survey-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Brand Survey Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/customer-testimonials-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Customer Testimonials Template
                </a>
              </li>
            </ul>
          </div>
          <div className="usageItem">
            <img
              className="mx-auto w-48"
              src="https://forms.b-cdn.net/website/template-examples/education.svg"
              alt="MysurveyPro for education"
            />
            <h3 className="text-xl font-bold">Education</h3>
            <ul>
              <li>
                <a
                  href="https://heyform.net/templates/student-enrolment-form-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Student Enrolment Form Template
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/teacher-feedback-form"
                  className="ttext-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Teacher Feedback Form
                </a>
              </li>
              <li>
                <a
                  href="https://heyform.net/templates/student-survey-template"
                  className="text-base text-slate-700 underline-offset-1 hover:underline"
                >
                  Student Survey Template
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

export default UsageSection
