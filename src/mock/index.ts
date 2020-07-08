import Mock from 'mockjs';
import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';

export default Mock.mock('http://localhost:12345/login', 'post', {
  'token': Mock.Random.word(16),
})

export const setupMock = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios)

  mock.onPost('/login').reply(200, Mock.mock({
    token: Mock.Random.word(16),
    user: {
      name: Mock.Random.name(),
      avatar: Mock.Random.image(),
      email: Mock.Random.email(),
    }
  }))
}