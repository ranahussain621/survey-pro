import { helper, unixDate } from '@heyform-inc/utils'
import { values } from 'lodash'
import { observer } from 'mobx-react-lite'
import { Field } from 'rc-field-form'
import { stringify } from 'rc-field-form/es/useWatch'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { json } from 'react-router-dom'

import { Button, Form, Input, Modal, notification, useForm } from '@/components/ui'
import { WorkspaceService } from '@/service'
import { useStore } from '@/store'
import { useParam } from '@/utils'

export const InviteMember: FC<IModalProps> = observer(({ visible, onClose }) => {
  const { workspaceId } = useParam()
  const workspaceStore = useStore('workspaceStore')
  const [form] = useForm()
  const { t } = useTranslation()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  async function handleFinish(values: any) {
    const emails = values.emails.filter((e: string) => helper.isValid(e))

    if (helper.isEmpty(emails)) {
      setError(new Error(t('workspace.members.inputPrompt')))
      return
    }

    setLoading(true)

    try {
      await WorkspaceService.sendInvites(workspaceId, emails)
      form.resetFields()
      notification.success({
        title: t('workspace.members.send')
      })
    } catch (err: any) {
      setError(err)
    }

    setLoading(false)
  }

  return (
    <Modal contentClassName="max-w-md" visible={visible} onClose={onClose} showCloseIcon>
      <div className="space-y-6" style={{ maxWidth: '410px' }}>
        <div>
          <h1 className="text-lg font-medium leading-6 text-slate-900">
            {t('workspace.members.inviteMember')} <span>{workspaceStore.project?.name}</span>
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {t('workspace.members.inviteExplain')}{' '}
            <span className="text-slate-700">
              {unixDate(workspaceStore.workspace?.inviteCodeExpireAt || 0).format('MMMM DD, YYYY')}
            </span>
            .
          </p>
        </div>

        <Form
          initialValues={{
            emails: ['']
          }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.List name="emails">
            {(fields, { add, remove }) => {
              function handleAdd() {
                const lastFieldValue = form.getFieldValue(['emails', fields.length - 1, 'email'])
                if (lastFieldValue && lastFieldValue.trim() !== '') {
                  add('')
                } else {
                  setError(new Error(t('Please enter email')))
                }
              }

              return (
                <div>
                  {fields.map((field, index) => (
                    <div
                      key={field.key}
                      style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
                    >
                      <Form.Item
                        name={[field.name, 'email']}
                        rules={[
                          {
                            type: 'email',
                            required: false,
                            message: t('auth.signup.invalidEmail')
                          }
                        ]}
                        style={{ flex: 1, marginRight: 8 }}
                      >
                        <Input placeholder="name@example.com" />
                      </Form.Item>
                      {index > 0 && (
                        <Button
                          onClick={() => remove(field.name)}
                          style={{ marginLeft: 8, marginBottom: 20 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                        </Button>
                      )}
                    </div>
                  ))}

                  <div className="flex items-center justify-between">
                    <Button.Link onClick={handleAdd}>{t('workspace.members.Add')}</Button.Link>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      {t('workspace.members.sendBottom')}
                    </Button>
                  </div>

                  {error && <div className="form-item-error">{error.message}</div>}
                </div>
              )
            }}
          </Form.List>
        </Form>
      </div>
    </Modal>
  )
})
