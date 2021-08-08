import { injectable } from "inversify";

@injectable()
export class Config {
  apiUrl = "";

  constructor() {
    this.apiUrl = "http://localhost:4040";
  }
}
