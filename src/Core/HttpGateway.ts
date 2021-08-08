import { injectable, inject } from "inversify";
import { Config } from "./Config";

@injectable()
export class HttpGateway {
  @inject(Config)
  config!: Config;

  get = async (path: string) => {
    const response = await fetch(this.config.apiUrl + path);
    const dto = response.json();
    return dto;
  };

  post = async (path: string, requestDto: any) => {
    const response = await fetch(this.config.apiUrl + path, {
      method: "POST",
      body: JSON.stringify(requestDto),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseDto = response.json();
    return responseDto;
  };
}
