import { injectable, inject } from "inversify";
import { HttpGateway } from "../Core/HttpGateway";
// import { makeObservable, action } from 'mobx'
import { Types } from "../Core/Types";
import { Router } from '../Routing/Router'

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

  register = async (email: string, password: string): Promise<any> => {
    return this.dataGateway.post('/secure-api/michal.lester87@gmail.com/register', {email, password}) 
  }
}
