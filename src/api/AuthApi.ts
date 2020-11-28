import { inject, injectable } from "inversify";
import { UserBasedHttpService } from "./base/UserBasedHttpService";

@injectable()
export class AuthApi {
  @inject(UserBasedHttpService) userBasedHttpService!: UserBasedHttpService

  async login(body: { username: string; password: string }) {
    const { data } = await this.userBasedHttpService.axios.post('http://localhost:12345/login', body)
    return data
  }
}