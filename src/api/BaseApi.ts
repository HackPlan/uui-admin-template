import { inject, injectable } from 'inversify';
import { HttpService } from '../services/HttpService';


@injectable()
export class BaseApi {
  @inject(HttpService) httpService!: HttpService
}

