import { observer } from 'mobx-react-lite'

import img1 from '@/assets/imgs/customer-01.jpg'
import img2 from '@/assets/imgs/customer-02.jpg'
import img3 from '@/assets/imgs/customer-03.jpg'
import img4 from '@/assets/imgs/customer-04.jpg'
import img5 from '@/assets/imgs/customer-05.jpg'

const BrandingSecton = observer(() => {
  return (
    <div className="bg-white py-28">
      {/* <div className="brandWrap"> */}
      <div className="mx-auto max-w-7xl text-slate-900 md:px-12">
        <div className="container">
          <h1 className="mb-16 text-center text-3xl font-medium text-slate-950">
            Trusted by brands from every walk of life
          </h1>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src={img1} width="120" height="82" alt="Boston University" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src={img2} width="120" height="82" alt="Yottachain" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src={img3} width="120" height="82" alt="Ant Group" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src={img4} width="120" height="82" alt="Georgia Tech'" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src={img5} width="120" height="82" alt="NsFocus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default BrandingSecton
