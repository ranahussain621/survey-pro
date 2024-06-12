import { observer } from 'mobx-react-lite'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Form, Input, Modal, notification } from '@/components/ui'
import { UserService } from '@/service'
import { useStore } from '@/store'
import { clearAuthState, useAsyncEffect, useVisible } from '@/utils'
import { BACKEND_URL } from '@/consts'

const VerifyEmail: FC<IModalProps> = observer(({ visible, onClose, onComplete }) => {
    const userStore = useStore('userStore')
    const { t } = useTranslation()

    async function handleFinish(values: IMapType) {
        await UserService.verifyDeletionCode(values.code)

        // Clear the auth state and logout the user
        setTimeout(() => {
            clearAuthState()
            window.location.href = '/login'
        }, 10_000)

        onComplete?.()
        onClose?.()
    }


    const userData = localStorage.getItem('UserStore') ?? '{}';
    const userId = JSON.parse(userData);



    const handleCancelSubscription = async () => {
        try {
            // Send a POST request to your backend API
            const response = await fetch(`${BACKEND_URL}/stripe/cancel-subscription`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: userId.user.id }), // Send form data in the request body if needed
            });

            // Check if the request was successful
            if (response.ok) {
                // Handle successful response
                const data = await response.json();
                notification.success({ message: 'You have successfully cancel subscription' })



            } else {
                // Handle errors
                throw new Error('Failed to check the status');
            }
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
            notification.error({ message: 'Failed to cancel subscription: No active subscription found for the user' });
        }
    };



    return (
        <Modal contentClassName="max-w-md" visible={visible} showCloseIcon onClose={onClose}>
            <div className="space-y-6">
                <div>
                    <h1 className="text-lg font-medium leading-6 text-slate-900">
                        {t('user.settings.subscription.sub')}
                    </h1>
                    <div className="space-y-2">
                        <p className="mt-1 text-sm text-slate-500">
                            {t('user.settings.subscription.subdescription')}
                        </p>

                    </div>
                </div>


                <div className="mt-3">
                    <Button className="bg-red-500" type="danger" onClick={handleCancelSubscription}>
                        {t('user.settings.subscription.sub')}
                    </Button>
                </div>

            </div>
        </Modal>
    )
})

const DeletionWarning: FC<IModalProps> = ({ visible }) => {
    const { t } = useTranslation()
    return (
        <Modal.Confirm
            type="danger"
            visible={visible}
            title={t('user.settings.deletedAccount.delAccount')}
            maskClosable={false}
            description={
                <div className="space-y-2">
                    <p>{t('user.settings.deletedAccount.delSendEmail')}</p>
                    <p>{t('user.settings.deletedAccount.loggedOut')}</p>
                </div>
            }
        />
    )
}

export const CancelSubscription: FC = () => {
    const [verifyEmailVisible, openVerifyEmail, closeVerifyEmail] = useVisible()
    const [deletionWarningVisible, openDeletionWarning] = useVisible()
    const { t } = useTranslation()



    return (
        <div>
            <div className="block text-sm font-medium text-slate-700">
                {t('user.settings.subscription.subscription')}
            </div>
            <p className="mt-1 text-sm text-slate-500">{t('user.settings.subscription.subText')}</p>
            <div className="mt-3">
                <Button className="bg-red-500" type="danger" onClick={openVerifyEmail}>
                    {t('user.settings.subscription.sub')}
                </Button>
            </div>

            <VerifyEmail
                visible={verifyEmailVisible}
                onClose={closeVerifyEmail}
                onComplete={openDeletionWarning}
            />
            {/* <DeletionWarning visible={deletionWarningVisible} /> */}
        </div>
    )
}
