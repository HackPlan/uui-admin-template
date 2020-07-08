import { injectable, inject } from "inversify";
import { HttpService } from "../services/HttpService";

@injectable()
export class AuthApi {

  @inject(HttpService.name) httpService!: HttpService

  async login(body: { username: string; password: string }) {
    const { data } = await this.httpService.axios.post('http://localhost:12345/login', body)
    return data
  }
}