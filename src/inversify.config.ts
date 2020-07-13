import { Container } from "inversify";
import { AuthApi } from "./api/AuthApi";
import { HttpService } from "./services/HttpService";
import { DataApi } from "./api/DataApi";

const container = new Container();
container.bind<AuthApi>(AuthApi.name).to(AuthApi);
container.bind<HttpService>(HttpService.name).to(HttpService);
container.bind<DataApi>(DataApi.name).to(DataApi);
export default container;