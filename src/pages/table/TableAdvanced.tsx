import { Table, TableColumn, TextField, Select, Button, Pagination } from '@hackplan/uui';
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card';
import { Page } from '../../components/Page';
import { useInject } from '../../hooks/useInject';
import { DataApi } from '../../api/DataApi';
import { omit } from 'lodash';

export default function TableAdvanced() {

  const [name, setName] = useState('')
  const [gender, setGender] = useState<'男' | '女' | null>(null)
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([])

  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 10,
    count: 0,
  })

  const dataApi = useInject(DataApi)

  const [users, setUsers] = useState<any[]>([])

  const getUserList = async () => {
    dataApi.userList({
      ...pagination,
      name: name || undefined,
      gender: gender || undefined,
    }).then((data) => {
      console.log(data)
      setUsers(data.rows)
      setPagination(omit(data, 'rows') as any)
    })
  }

  useEffect(() => {
    getUserList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.offset])

  const columns: TableColumn<any>[] = [
    { key: 'name', title: '姓名' },
    { key: 'gender', title: '性别' },
    { key: 'age', title: '年龄' },
    { key: 'province', title: '省份' },
    { key: 'city', title: '城市' },
    { key: 'website', title: '网站' },
    { key: 'actions', title: '操作', onRowRender: () => (
      <div key="action">
        <Button styling={{ type: 'primary' }}>编辑信息</Button>
      </div>
    ) },
  ]
  const onRowId = (row: any) => row.id

  return (
    <Page>
      <Card>
        <div className="flex flex-row items-center">
          <LabeledControl>
            <Label>姓名</Label>
            <TextField className="w-64" value={name} onChange={(value) => setName(value)} />
          </LabeledControl>
          <LabeledControl>
            <Label>性别</Label>
            <Select
              value={gender}
              onChange={(value) => { setGender(value) }}
              options={[
                { label: '男', value: '男' },
                { label: '女', value: '女' },
              ]}
            />
          </LabeledControl>
          <div className="ml-4">
            <Button styling={{ type: 'primary' }} onClick={() => { getUserList() }}>查询</Button>
          </div>
        </div>
      </Card>
      <Card>
        <Table
          columns={columns}
          rows={users}
          onRowId={onRowId}
          selectedRowIds={selectedRowIds}
          onSelected={(value) => {
            setSelectedRowIds(value)
          }}
        ></Table>
        <div className="mt-4 flex flex-row justify-end">
          <Pagination
            value={pagination}
            onChange={(value) => {
              setPagination(value);
            }}
          >
            <Pagination.PageInfo />
            <Pagination.PagePrevButton />
            <Pagination.PageList />
            <Pagination.PageNextButton />
          </Pagination>
        </div>
      </Card>
    </Page>
  )
}

const LabeledControl = (props: any) => {
  return (
    <div className="flex row items-center">
      {props.children}
    </div>
  )
}
const Label = (props: any) => {
  return (
    <label className="flex justify-end items-center mr-2 w-24 h-8">
      {props.children}
    </label>
  )
}