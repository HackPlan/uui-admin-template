import { injectable } from "inversify";
import { BaseApi } from "./BaseApi";

@injectable()
export class AuthApi extends BaseApi {

  async login(body: { username: string; password: string }) {
    const { data } = await this.httpService.axios.post('http://localhost:12345/login', body)
    return data
  }
}