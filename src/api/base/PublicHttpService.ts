import Axios, { AxiosInstance } from 'axios';
import { injectable } from 'inversify';
import { setupMock } from '../../mock';

@injectable()
export class PublicHttpService {
  public axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: 'http://localhost:12345',
      withCredentials: true,
      timeout: 5000,
    })
    setupMock(this.axios)
  }
}
