import { Container } from "inversify";
import { AuthApi } from "./api/AuthApi";
import { HttpService } from "./services/HttpService";

const container = new Container();
container.bind<AuthApi>(AuthApi.name).to(AuthApi);
container.bind<HttpService>(HttpService.name).to(HttpService);
export default container;