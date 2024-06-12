
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { useParam } from '@/utils'
import './temp.css'
import formImg from '../../assets/imgs/360degreefeedback.png';
import gallupImg from '../../assets/imgs/gallubQ12.png';

import { ProjectLayout } from './views/ProjectLayout'

const Templates = observer(() => {
    const { t } = useTranslation()
    const { projectId } = useParam()


    const template = [
        {
            title: '360 Template ',
            description: `360 reviews are increasingly popular in the workplace, and with good reason. 
            Done right, they improve performance management processes and can positively impact company culture`,
            img: formImg
        },
        {
            title: `Gallup's 12 Survey`,
            description: `The goal of the Q12 engagement survey is not to have employees complete a 
            survey and move on. The goal is to start a conversation between managers and each of 
            their employees. And this is a survey that does just that -- it allows employees to 
            communicate their needs, 
            allowing your managers to know which needs they should work harder to meet.`,
            img: gallupImg
        },

    ]





    // Table columns


    return (
        <ProjectLayout>

            <div className="mt-8 text-sm text-slate-700">
                {t('project.templatesProject.tagLine')}{' '}

            </div>

            <div className="templates-row mt-5">
                {
                    template.map((item, i) => {
                        return (
                            <>
                                <div className="temp-card">
                                    <img src={item.img} alt="" />
                                    <div className="temp-title">
                                        {item.title}
                                    </div>
                                    <div className="temp-desc">
                                        <p>
                                            {
                                                item.description.length > 100 ? (`${item.description.slice(0, 100)}...`) : item.description
                                            }
                                        </p>

                                    </div>
                                    <div className="temp-navigate">
                                        <a href="#">Use Template</a>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }


            </div>

        </ProjectLayout>
    )
})

export default Templates
