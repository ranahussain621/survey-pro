import { observer } from 'mobx-react-lite'

import assets from '@/assets/imgs/contact-us.png'

import '../LandingPage/CSS/Contact.scss'

const Contact = observer(() => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="company-info">
            <img
              className="notion-page-cover"
              style={{ objectPosition: 'center 40%', height: '100%', width: '100%' }}
              src={assets}
              alt="Contact-Us"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="contact">
            <h2>E-mail Us</h2>

            <form id="contact-form">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>

              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>

              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
              </p>

              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>

              <p className="full">
                <label>Message</label>
                <textarea name="message" rows={5} id="message"></textarea>
              </p>

              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
})

export default Contact
