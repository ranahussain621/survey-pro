import { observer } from 'mobx-react-lite'

import img from '../../assets/imgs/team-1.jpg'
import img1 from '../../assets/imgs/team-3.jpg'
import img2 from '../../assets/imgs/team-7.png'

const About = observer(() => {
  return (
    <>
      <div className="aboutWrap">
        <div className="bg-slate-50 py-28">
          <div className="container">
            <h1 className="mx-auto max-w-3xl text-center text-2xl font-normal leading-normal text-slate-700">
              SurveyPro is the complete online form builder, designed for the modern user. A better
              way to ask the right questions and gather data for your business.
            </h1>
          </div>
        </div>
        <div className="py-28 text-center">
          <div className="container">
            <h1 className="mb-8 text-5xl font-bold text-slate-900">Our power is in our people</h1>
            <p className="mx-auto max-w-3xl text-2xl text-slate-500">
              We are problem solvers with a can-do, attitude. We believe that the established ways
              can always be bettered. Simplification is in our DNA. And we celebrate people for who
              they are.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutTeam bg-slate-50 py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">People behind SurveyPro</h2>
            <p className="text-xl text-slate-500">
              We come from across the world and bring diverse perspectives to the table
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-4 gap-4">
            <div className="sc-bgqQcB bVBqnb hey-flex team__Member-sc-35f4ia-0 jMxmcX">
              <div className="grid h-36 w-36 place-items-center rounded-full bg-gray-200 text-2xl text-slate-900">
                GS
              </div>
              <h4 className="mt-4 text-lg font-medium text-slate-900">Ghulam Shabbir</h4>
              <p className="text-slate-500">Co-founder</p>
            </div>
            <div className="sc-bgqQcB bVBqnb hey-flex team__Member-sc-35f4ia-0 jMxmcX">
              <div className="grid h-36 w-36 place-items-center rounded-full bg-gray-200 text-2xl text-slate-900">
                AR
              </div>
              <h4 className="mt-4 text-lg font-medium text-slate-900">Attiq ur Rehman</h4>
              <p className="text-slate-500">Co-founder</p>
            </div>
            {/* <div className="sc-bgqQcB bVBqnb hey-flex team__Member-sc-35f4ia-0 jMxmcX">
              <img className="w-36 rounded-full" src={img2} loading="lazy" alt="SurveyPro Team" />
              <h4 className="mt-4 text-lg font-medium text-slate-900">ChatGPT</h4>
              <p className="text-slate-500">Chief Executive Officer</p>
            </div> */}
            <a href="#">
              <div className="joinus grid justify-items-center text-center">
                <div className="grid h-36 w-36 place-items-center rounded-full bg-gray-200 text-2xl text-slate-900">
                  You
                </div>
                <h4 className="mt-4 text-lg font-medium text-slate-900">Join us</h4>
                <p className="text-slate-500">Make a difference</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
})

export default About
