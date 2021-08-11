import { injectable } from "inversify";

@injectable()
export class Config {
  apiUrl = "";

  constructor() {
    this.apiUrl = "https://api.logicroom.co";
  }
}
