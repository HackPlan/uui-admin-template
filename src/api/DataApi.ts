import { inject, injectable } from "inversify";
import { UserBasedHttpService } from "./base/UserBasedHttpService";

@injectable()
export class DataApi {
  @inject(UserBasedHttpService) userBasedHttpService!: UserBasedHttpService

  async userList(query?: { name?: string; gender?: string; offset?: number; limit?: number }) {
    const { data } = await this.userBasedHttpService.axios.get('http://localhost:12345/userList', { params: query })
    return data
  }
}