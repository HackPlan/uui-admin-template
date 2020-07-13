import { Table, TableColumn } from '@hackplan/uui';
import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { Page } from '../../components/Page';

export function TableBasic() {

  const [data] = useState([
    { title: '新小科技招聘会', type: '线下活动', time: '2020-03-13 13:00', location: '苏州市姑苏区' },
    { title: '多会体验活动', type: '线上活动', time: '2020-04-11 11:00', location: '' },
    { title: '有客测试活动', type: '线上活动', time: '2020-05-17 17:00', location: '' },
  ])

  const columns: TableColumn[] = [
    { title: '活动名称' },
    { title: '活动类型' },
    { title: '活动时间' },
    { title: '活动地点' },
  ]
  const rows = data.map((i) => {
    return [
      i.title,
      i.type,
      i.time,
      i.location,
    ]
  })

  return (
    <Page>
      <Card>
        <Table
          columns={columns}
          rows={rows}
        ></Table>
      </Card>
    </Page>
  )
}
