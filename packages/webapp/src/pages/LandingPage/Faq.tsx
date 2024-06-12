import { observer } from 'mobx-react-lite'

import assets from '@/assets/imgs/FAQ.jpg'

const Faq = observer(() => {
  return (
    <>
      <div className="notion-page-scroller">
        <main
          className="notion-page d-flex notion-page-has-cover notion-page-has-icon notion-page-has-text-icon notion-full-page p-2 "
          style={{
            justifyContent: 'center',
            paddingLeft: '450px',
            paddingTop: '40px',
            paddingBottom: 'calc(max(5vh, 32px)) !important',
            lineHeight: '1.65'
          }}
        >
          <div className="notion-page-cover-wrapper">
            <img
              className="notion-page-cover"
              style={{
                objectPosition: 'center 10.999999999999996%',
                height: '200px',
                width: '400px'
              }}
              src={assets}
              alt="FAQs"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* <div
            className="notion-page-icon-hero notion-page-icon-span"
            style={{
              fontSize: '78px',
              lineHeight: '1.1',
              marginLeft: '0',
              position: 'relative',
              display: 'block'
            }}
          >
            <span className="notion-page-icon" role="img" aria-label="❓">
              ❓
            </span>
          </div> */}
          <h1 className="notion-title" style={{ fontWeight: 'bolder', fontSize: '40px' }}>
            FAQs
          </h1>
          <div className="notion-page-content notion-page-content-has-aside">
            <article className="notion-page-content-inner">
              <details className="notion-toggle notion-block-3ec8f00dd46d4c8e816ee56370bbee18">
                <summary style={{ fontWeight: 'bold' }}>
                  What browsers and devices are supported by SurveyPro?
                </summary>
                <div>
                  <div
                    className="notion-text notion-block-eeadf15e77a84b3b852446ba57b57183"
                    style={{ marginLeft: '20px' }}
                  >
                    SurveyPro is supported in all the latest versions of Chrome, Safari, Firefox,
                    Microsoft Edge, and Opera browsers.
                  </div>
                </div>
              </details>
              <details className="notion-toggle notion-block-e982e6ce771248ffb22db565cfc913ea">
                <summary style={{ fontWeight: 'bold' }}>
                  Can I use SurveyPro without an internet connection?
                </summary>
                <div>
                  <div
                    className="notion-text notion-block-fd137d402a2e49dfbbee9fea69ef3efc"
                    style={{ marginLeft: '20px' }}
                  >
                    There’s no “offline mode” with SurveyPro. It’s designed to work only with an
                    internet connection, which you need to load the form, and also to submit
                    responses.
                  </div>
                </div>
              </details>
              <details className="notion-toggle notion-block-55cf63e415244e4a91be0bd57451e647">
                <summary style={{ fontWeight: 'bold' }}>Can I use SurveyPro for free?</summary>
                <div>
                  <div
                    className="notion-text notion-block-c28a476035744c198bfd1a8eae839cab"
                    style={{ marginLeft: '20px' }}
                  >
                    Yes, you can use SurveyPro for free. Once you login to SurveyPro you
                    automatically subscribe to the basic plan.
                  </div>
                </div>
              </details>
              <details className="notion-toggle notion-block-7ba43b0c6f194ef4999a19e0ffe1c265">
                <summary style={{ fontWeight: 'bold' }}>
                  How secure is my data with SurveyPro?
                </summary>
                <div>
                  <div
                    className="notion-text notion-block-b302be62d8be4c40aea74accf03527e3"
                    style={{ marginLeft: '20px' }}
                  >
                    SurveyPro takes the security of your data very seriously. All SurveyPro
                    standalone form links and embed codes are secure (SSL) by default.
                  </div>
                </div>
              </details>
              <details className="notion-toggle notion-block-b9622c1c818b424d94ba138038c27334">
                <summary style={{ fontWeight: 'bold' }}>
                  Do I need coding experience to create a form?
                </summary>
                <div>
                  <div
                    className="notion-text notion-block-225d4bfe79ae4858a22950982a908b40"
                    style={{ marginLeft: '20px' }}
                  >
                    Not at all! With SurveyPro drag-and-drop feature, you don’t need any coding
                    experience to create the perfect form for your needs. With our template Gallery
                    and Theme Designer, you can easily create forms and change the style of your
                    form with just a few clicks.
                  </div>
                </div>
              </details>
              <div className="notion-blank notion-block-4f5dd687b36d43529740181502a8eecc"> </div>
            </article>
          </div>
        </main>
      </div>
    </>
  )
})

export default Faq
