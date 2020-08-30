import { injectable } from "inversify";
import { BaseApi } from "./BaseApi";

@injectable()
export class DataApi extends BaseApi {

  async userList(query?: { name?: string; gender?: string; offset?: number; limit?: number }) {
    const { data } = await this.httpService.axios.get('http://localhost:12345/userList', { params: query })
    return data
  }
}