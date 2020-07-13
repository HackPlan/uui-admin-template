import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { Page } from '../../components/Page';
import { RadioGroup, TextField, TextArea, Radio, DatePicker, HTMLSelect, Checkbox, Button } from '@hackplan/uui';

export function FormBasic() {

  const [name, setName] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [gender, setGender] = useState('male')
  const [birthday, setBirthday] = useState<Date | null>(null)
  const [school, setSchool] = useState('北京大学')
  const [skillsWeb, setSkillsWeb] = useState(false)
  const [skillsMobile, setSkillsMobile] = useState(false)
  const [skillsServer, setSkillsServer] = useState(false)
  const [skillsAI, setSkillsAI] = useState(false)


  return (
    <Page>
      <Card>
        <LabeledControl>
          <Label>名字</Label>
          <TextField className="w-64" value={name} onChange={(value) => setName(value)} />
        </LabeledControl>
        <LabeledControl>
          <Label>介绍</Label>
          <TextArea className="w-64" value={introduction} onChange={(value) => setIntroduction(value)} />
        </LabeledControl>
        <LabeledControl>
          <Label>性别</Label>
          <RadioGroup name="gender" value={gender} onChange={(value) => { setGender(value) }}>
            <Radio label={'男'} value={'male'} className={"mr-2"}></Radio>
            <Radio label={'女'} value={'female'} className={"mr-2"}></Radio>
            <Radio label={'其他'} value={'other'} className={"mr-2"}></Radio>
          </RadioGroup>
        </LabeledControl>
        <LabeledControl>
          <Label>生日</Label>
          <DatePicker className="w-64" value={birthday} onChange={(value) => setBirthday(value)} />
        </LabeledControl>
        <LabeledControl>
          <Label>学校</Label>
          <HTMLSelect
            className="w-64"
            options={[
              { label: '北京大学', value: '北京大学' },
              { label: '重庆大学', value: '重庆大学' },
            ]}
            value={school}
            onChange={(value) => setSchool(value)}
          />
        </LabeledControl>
        <LabeledControl>
          <Label>技能</Label>
          <div className="flex flex-col">
            <Checkbox
              label={'网页'}
              checked={skillsWeb}
              onChange={(value) => { setSkillsWeb(value) }}
            />
            <Checkbox
              label={'移动端'}
              checked={skillsMobile}
              onChange={(value) => { setSkillsMobile(value) }}
            />
            <Checkbox
              label={'服务端'}
              checked={skillsServer}
              onChange={(value) => { setSkillsServer(value) }}
            />
            <Checkbox
              label={'AI'}
              checked={skillsAI}
              onChange={(value) => { setSkillsAI(value) }}
            />
          </div>
        </LabeledControl>
        <LabeledControl>
          <Label></Label>
          <Button>提交</Button>
        </LabeledControl>
      </Card>
    </Page>
  )
}

const LabeledControl = (props: any) => {
  return (
    <div className="flex row mb-4">
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