import { injectable, inject } from "inversify";
import { HttpService } from "../services/HttpService";

@injectable()
export class DataApi {

  @inject(HttpService.name) httpService!: HttpService

  async userList(query?: { name?: string; gender?: string; offset?: number; limit?: number }) {
    const { data } = await this.httpService.axios.get('http://localhost:12345/userList', { params: query })
    return data
  }
}