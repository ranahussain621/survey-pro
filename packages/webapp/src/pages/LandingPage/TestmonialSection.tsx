import { observer } from 'mobx-react-lite'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import img1 from '../../assets/imgs/slider-1.avif'
import img2 from '../../assets/imgs/slider-2.avif'
import img3 from '../../assets/imgs/slider-3.avif'

const sliderImg = [
  {
    src: img1,
    desc: 'First impressions matter and our customers were bored of the usual forms. Servey Pro gave life to our website and made forms fun and interactive.',
    name: 'Harold Tyler',
    designation: 'Product Designer'
  },
  {
    src: img2,
    desc: ' Servey Pro makes our everyday tasks smoother. The easy-to-use UI and the numerous options to customize, makes it easy to work with. It’s become part of our business.',
    name: 'Julia Armstrong',
    designation: 'Application &amp; Web Developer'
  },
  {
    src: img3,
    desc: 'Servey Pro helped us collect and manage data without having to know any coding. We easily made amazing looking forms and launched them well before schedule.',
    name: 'Yajing Zhai',
    designation: 'Ant Group'
  }
]

const TestmonialSection = observer(() => {
  return (
    <div
      className="mt-[60px]"
      style={{
        background:
          'linear-gradient(262.15deg, rgb(252, 228, 144) 0%, rgb(55, 194, 173) 54.57%, rgb(47, 143, 255) 100%)'
      }}
    >
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper mx-auto max-w-7xl "
      >
        {sliderImg.map(item => (
          <SwiperSlide>
            <li className="py-[60px]">
              <div className="flex items-center justify-between">
                <div className="w-[60%]">
                  <div className="mb-[-60px] text-[96px] text-white">“</div>
                  <div className="text-[24px] text-white">{item.desc}</div>
                  <div className="mb-[-60px] text-end text-[96px] text-white">”</div>
                  <div className="">
                    <div className="text-white">
                      <div className="text-[15px]">{item.designation}</div>
                      <div className="text-[24px]">{item.name}</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={item.src}
                    alt="Testimonial"
                    loading="lazy"
                    width="340"
                    height="340"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
})

export default TestmonialSection
