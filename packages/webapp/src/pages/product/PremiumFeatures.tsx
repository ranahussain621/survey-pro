import { observer } from 'mobx-react-lite'
import React from 'react'
import './product.css'

const PremiumFeatures = observer(() => {
    return (
        <>
            <div className="py-16 bg-white overflow-hidden lg:py-32">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="relative">
                        <h2 className="text-center text-5xl leading-8 font-bold text-slate-950">Unlock the premium features</h2>
                        <p className="mt-6 max-w-3xl mx-auto text-center text-lg text-slate-700">With an active MySurveyPro Pro subscription, you get access to the best part of MySurveyPro.</p>
                    </div>
                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative px-8">
                            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Get Complete Control &amp; Manage Teams</h3>
                            <p className="mt-3 text-xl text-slate-500">Design your form exactly how you want it—quickly and easily. Invite team members and outside stakeholders to co-create forms and streamline data collection experiences that meet organizational needs and goals.</p>
                        </div>
                        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <img className="relative mx-auto" width="490" src="https://forms.b-cdn.net/website/collaboration.png" alt="" />
                        </div>
                    </div>
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:col-start-2 px-8">
                                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Build audience list</h3>
                                <p className="mt-3 text-xl text-slate-500">Work with multiple teams towards a single goal. Stop wasting time on tedious data entry tasks. Build, manage, and target a diverse set of audience with MySurveyPro. Add contacts, create groups, and send your online forms easily.</p>
                            </div>
                            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                <img className="relative mx-auto" width="490" src="https://forms.b-cdn.net/website/audience.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-blue-200/30">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <div className="">
                        <h2 className="text-4xl text-slate-950 mb-2 font-bold">Ready to dive in?</h2>
                        <p className="text-slate-700 text-xl">Start your journey now with our free trial!</p>
                    </div>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a href="https://my.MySurveyPro.net/sign-up" className="inline-flex items-center justify-center px-6 py-3 text-xl font-medium rounded-full text-slate-50 bg-slate-950">Get started - it's free</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
})

export default PremiumFeatures
