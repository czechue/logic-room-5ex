import { injectable, inject } from "inversify";
import { AuthenticationRepository } from "./AuthenticationRepository";
// import { Router } from '../Routing/Router'
import { makeObservable, observable } from "mobx";

@injectable()
export class LoginRegisterPresenter {
  @inject(AuthenticationRepository)
  authenticationRepository!: AuthenticationRepository;

  // @inject(Router)
  // router: Router

  email = "";

  password = "";

  option = "login";

  showValidationMessage = false;

  validationMessage = "";

  constructor() {
    makeObservable(this, {
      email: observable,
      password: observable,
      option: observable,
      showValidationMessage: observable,
      validationMessage: observable,
    });
  }

  login = async () => {
    console.log(this);
    // this.router.goToId('homeLink')
  };

  register = async () => {
    console.log(this);
  };
}
