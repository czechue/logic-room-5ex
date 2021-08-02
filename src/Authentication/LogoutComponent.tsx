import * as React from "react";
import { observer } from "mobx-react";
import { withInjection } from "../Core/WithPresenter";
import { AuthenticationRepository } from "../Authentication/AuthenticationRepository";

type InjectedServices = {
  authenticationRepository: AuthenticationRepository;
};

type LogoutCompProps = {
  children?: React.ReactNode;
};

const LogoutComp = observer(
  ({ authenticationRepository }: InjectedServices & LogoutCompProps) => {
    return (
      <div
        onClick={() => {
          authenticationRepository.logout();
        }}
        className='navigation-item'
        style={{ backgroundColor: "#5BCA06" }}
      >
        ← Logout
      </div>
    );
  }
);

export const LogoutComponent = withInjection<InjectedServices, LogoutCompProps>(
  {
    authenticationRepository: AuthenticationRepository,
  }
)(LogoutComp);
