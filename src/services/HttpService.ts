import Axios, { AxiosInstance } from 'axios';
import { setupMock } from '../mock';
import { injectable } from "inversify";

@injectable()
export class HttpService {

  public axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: 'http://localhost:12345',
      timeout: 5000,
      withCredentials: true,
      headers: {
        'Authorization': '',
      },
    })
    setupMock(this.axios)
  }

}