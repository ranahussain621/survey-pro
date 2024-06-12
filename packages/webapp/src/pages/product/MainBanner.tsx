import { observer } from 'mobx-react-lite'
import React from 'react'
import './product.css'

const MainBanner = observer(() => {
    return (
        <>
            <div className="productHero py-32">
                <div className="container-product">
                    <div className="productBanner max-w-3xl text-center mx-auto">
                        <h1 className="text-5xl text-slate-950 font-bold mb-6">Build forms that convert better</h1>
                        <p className="text-xl text-slate-700">From quizzes and
                            polls to surveys and events, with our
                            people-friendly form builder, creating and
                            customizing forms has never been easier -
                            and you don't even need to know a single
                            line of code!</p>
                    </div>
                </div>
            </div>
        </>
    )
})

export default MainBanner
