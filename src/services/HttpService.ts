import Axios, { AxiosInstance } from 'axios';
import { setupMock } from '../mock';
import { injectable } from "inversify";
import { autorun } from "mobx";
import { mobx } from '../mobx.config';

@injectable()
export class HttpService {

  public axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: 'http://localhost:12345',
      withCredentials: true,
    })
    setupMock(this.axios)

    // update Authorization header when token changed
    autorun(() => {
      const token = mobx.auth.token
      if (token) {
        this.axios.defaults.headers['Authorization'] = `Bearer ${token}`
      } else {
        this.axios.defaults.headers['Authorization'] = undefined
      }
    })
  }

}