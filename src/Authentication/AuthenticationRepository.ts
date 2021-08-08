import { injectable, inject } from "inversify";
import { HttpGateway } from "../Core/HttpGateway";
// import { makeObservable, action } from 'mobx'
import { Types } from "../Core/Types";
// import { Router } from '../Routing/Router'

@injectable()
export class AuthenticationRepository {
  // @inject(Router)
  // router

  @inject(Types.IDataGateway)
  dataGateway!: HttpGateway;

  constructor() {}

  logout = async () => {
    // this.router.goToId("loginLink");
    console.log(";2");
  };
}
