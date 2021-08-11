import * as React from 'react'
import { HomeComponent } from './Home/HomeComponent'
import { withInjection } from './Core/WithPresenter'
import { observer } from 'mobx-react'
import { CurrentPagePresenter } from './CurrentPagePresenter'
import { BooksComponent } from './Books/BooksComponent'
import { LoginRegisterComponent } from './Authentication/LoginRegisterComponent'

export const CurrentPageComp = observer((props: any) => {
  React.useEffect(() => {
    props.presenter.bootstrap()
  })

  const renderedComponents = [
    {
      id: 'homeLink',
      component: <HomeComponent key="homePage" />
    },
    {
      id: 'booksLink',
      component: <BooksComponent key="booksLink" />
    }
  ]
  return (
    <div>
      {props.presenter.currentRouteId === 'loginLink' ? (
        <div>
          <LoginRegisterComponent />
        </div>
      ) : (
        <div>Create the navigation menu and content pages</div>
      )}
    </div>
  )
})

export const CurrentPageComponent = withInjection({
  presenter: CurrentPagePresenter
})(CurrentPageComp)
