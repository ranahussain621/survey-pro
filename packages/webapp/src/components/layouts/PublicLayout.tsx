import type { FC } from 'react'
import Header from './Header'
import Footer from './Footer'

export const PublicLayout: FC<IComponentProps> = ({ children }) => {
  return <>
    <Header />
    {children}
    <Footer />
  </>
}