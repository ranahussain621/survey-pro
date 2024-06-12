import { useCallback, useEffect } from 'react'
import { useTranslation as useReactTranslation } from 'react-i18next'

import { IMapType } from '@/components/ui/typing'

import { useStore } from '../store'

export function useTranslation(overrideLng?: string) {
  const { t: _t, i18n } = useReactTranslation()
  const { state } = useStore()

  const t = useCallback((key: string, options?: IMapType) => {
    return _t(key, {
      ...options,
      lng: overrideLng || state.locale
    })
  }, [])

  return { t, i18n }
}
