import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/WithPresenter'

export const HomeComp = observer(() => {
  return (
    <>
      <h3>Home</h3>
    </>
  )
})

export const HomeComponent = withInjection({})(HomeComp)
