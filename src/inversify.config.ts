import { Container } from "inversify";

const container = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' });

export default container;
