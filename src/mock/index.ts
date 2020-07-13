import Mock from 'mockjs';
import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';
import { range, random } from 'lodash';


const userListCount = 123

const userListData = Mock.mock({
  rows: range(1, userListCount).map(() => {
    return Mock.mock({
      name: Mock.Random.cname(),
      gender: ['男', '女'][random(0, 1)],
      age: Mock.Random.integer(12, 65),
      province: Mock.Random.province(),
      city: Mock.Random.city(),
      website: Mock.Random.url('http', 'uui.cool')
    })
  }),
  userListCount,
})

export const setupMock = (axios: AxiosInstance) => {
  Mock.setup({
    timeout: '200-600',
  })

  const mock = new MockAdapter(axios)

  mock.onPost('/login').reply(200, Mock.mock({
    token: Mock.Random.word(16),
    user: {
      name: Mock.Random.name(),
      avatar: Mock.Random.image(),
      email: Mock.Random.email(),
    }
  }))


  mock.onGet('/userList').reply((config) => {
    const offset = config.params?.offset || 0
    const limit = config.params?.limit || 30
    const name = config.params?.name
    const gender = config.params?.gender
    const rows = userListData.rows.filter((i: any) => {
      if (name && !i.name.includes(name)) return false
      if (gender && i.gender !== gender) return false
      return true
    })
    return [
      200,
      {
        ...userListData,
        rows: rows.slice(offset, offset + limit),
        offset, limit,
        count: rows.length,
      },
    ]
  })
}