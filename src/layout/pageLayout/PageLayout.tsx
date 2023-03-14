import React from 'react'

import './PageLayout.scss';

type PageLayoutProps = {
  children: React.ReactNode
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <div className="pageLayout">
        {children}
    </div>
  )
}

export default PageLayout