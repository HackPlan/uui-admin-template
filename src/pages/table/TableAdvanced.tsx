import { Table, TableColumn, TextField, Select, Button, Pagination } from '@hackplan/uui';
import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card';
import { Page } from '../../components/Page';
import { useInject } from '../../hooks/useInject';
import { DataApi } from '../../api/DataApi';
import { omit } from 'lodash';

export function TableAdvanced() {

  const [name, setName] = useState('')
  const [gender, setGender] = useState<'男' | '女' | null>(null)
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])

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
  }, [pagination.offset])

  const columns: TableColumn[] = [
    { title: '姓名' },
    { title: '性别' },
    { title: '年龄' },
    { title: '省份' },
    { title: '城市' },
    { title: '网站' },
    { title: '操作' },
  ]
  const rows = users.map((i: any) => {
    return [
      i.name,
      i.gender,
      i.age,
      i.province,
      i.city,
      i.website,
      <div key="action">
        <Button>编辑信息</Button>
      </div>
    ]
  })

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
            <Button onClick={() => { getUserList() }}>查询</Button>
          </div>
        </div>
      </Card>
      <Card>
        <Table
          columns={columns}
          rows={rows}
          selectedIndexes={selectedIndexes}
          onSelected={(value) => {
            setSelectedIndexes(value)
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