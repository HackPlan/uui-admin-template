import Axios, { AxiosInstance } from 'axios';
import { injectable } from 'inversify';
import { setupMock } from '../../mock';

@injectable()
export class UserBasedHttpService {
  public axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: 'http://localhost:12345',
      withCredentials: true,
      timeout: 5000,
      headers: {
        'Authorization': '',
      },
    })
    setupMock(this.axios)
  }

  setToken(token: string) {
    this.axios.defaults.headers['Authorization'] = `user_token ${token}`
  }
}
