import { observer } from 'mobx-react-lite'
import React from 'react'
import './product.css'
import Fields from '@/assets/svgs/product/fields.svg?react'
import Submission from '@/assets/svgs/product/submission.svg?react'
import Gallery from '@/assets/svgs/product/gallery.svg?react'
import Spam from '@/assets/svgs/product/spam.svg?react'
import Logic from '@/assets/svgs/product/logic.svg?react'
import Hash from '@/assets/svgs/product/hash.svg?react'
import Setting from '@/assets/svgs/product/setting.svg?react'
import Recall from '@/assets/svgs/product/recall.svg?react'






const Features = observer(() => {
    const features = [
        {
            title: 'unlimited Form fields',
            des: 'Access to all of the form fields to create forms with a variety of purposes.',
            icon: <Fields />
        },
        {
            title: 'Unlimited submissions',
            des: 'Collect as many responses as you want and we will be your back, forget about the limit.',
            icon: <Submission />
        },
        {
            title: 'Template gallery',
            des: 'Start your form by picking a pre-made one from our template gallery will save you a lot of time.',
            icon: <Gallery />
        },
        {
            title: 'Spam prevention',
            des: 'Protect your forms from spam and junk with Google reCAPTCHA and Geetest.',
            icon: <Spam />
        },
        {
            title: 'Conditional Logic',
            des: 'Set up your forms with if/then conditions to intelligently collect more accurate responses.',
            icon: <Logic />
        },
        {
            title: 'Embed to website',
            des: 'Embed your forms anywhere by placing the generated code snippet to your website or applications.',
            icon: <Hash />
        },
        {
            title: 'custom form layout',
            des: 'Choose and decide how you would like the form look like.',
            icon: <Setting />
        },
        {
            title: 'Answer recall',
            des: 'Pipe your answers to a new question so you can ask questions accordingly.',
            icon: <Recall />
        },
    ]

    return (
        <>
            <div className="bg-white py-32">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-5xl font-bold text-slate-950 text-left mb-4">Unlock the most features at no cost</h2>
                    <p className="mt-2 text-lg text-slate-700 mx-auto text-left mb-16">Create as many free online forms as you like - they'll never expire! Enjoy 99% of our features without spending a single penny! Why spend hundreds of dollars with our competitors when you can get it for free with MySurveyPro?</p>
                    <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">

                        {features.map((items, i) => {
                            return (
                                <>


                                    <div>


                                        <div>
                                            <span className="flex items-left justify-left">
                                                {items.icon}
                                            </span>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-lg font-bold text-slate-900">{items.title}</h3>
                                            <p className="mt-1 text-base text-slate-500 leading-normal">{items.des}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
            </div>
        </>
    )
})

export default Features
