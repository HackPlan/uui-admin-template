import { Table, TableColumn } from '@hackplan/uui';
import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { Page } from '../../components/Page';

export function TableBasic() {

  const [data] = useState([
    { id: '1', title: '新小科技招聘会', type: '线下活动', time: '2020-03-13 13:00', location: '苏州市姑苏区' },
    { id: '2', title: '多会体验活动', type: '线上活动', time: '2020-04-11 11:00', location: '' },
    { id: '3', title: '有客测试活动', type: '线上活动', time: '2020-05-17 17:00', location: '' },
  ])

  const columns: TableColumn<(typeof data)[0]>[] = [
    { key: 'title', title: '活动名称' },
    { key: 'type', title: '活动类型' },
    { key: 'time', title: '活动时间' },
    { key: 'location', title: '活动地点' },
  ]

  const onRowId = (row: (typeof data)[0]) => row.id

  return (
    <Page>
      <Card>
        <Table
          columns={columns}
          rows={data}
          onRowId={onRowId}
        ></Table>
      </Card>
    </Page>
  )
}
