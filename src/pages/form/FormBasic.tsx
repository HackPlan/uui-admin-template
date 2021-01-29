import React from 'react';
import { Card } from '../../components/Card';
import { Page } from '../../components/Page';
import { Button } from '@hackplan/uui';
import { Field, Form, Formik } from 'formik';
import { FormItem } from '../../components/form/FormItem';
import { FormikUUIDatePicker, FormikUUIHTMLSelect, FormikUUIRadioGroup, FormikUUISlider, FormikUUIStepper, FormikUUITextField } from '../../components/form/formik';
import * as Yup from 'yup';
import { FormikUUICheckboxGroup } from '../../components/form/formik/uui/FormikUUICheckboxGroup';

export default function FormBasic() {

  return (
    <Page>
      <Card>
        <Formik
          initialValues={{
            name: '',
            introduction: '',
            gender: 'male',
            birthday: '',
            school: '北京大学',
            skills: [] as string[],
            certCount: 0,
            score: 0,
          }}
          validateOnBlur={true}
          validateOnChange={false}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(1, '输入不得短于1个字')
              .max(16 , '输入不得多于4个字')
              .required('该字段是必填项'),
            introduction: Yup.string()
              .min(1, '输入不得短于1个字')
              .max(128, '输入不得多于128个字')
              .required('该字段是必填项'),
            birthday: Yup.date()
              .max(new Date(), '日期应该早于当前时间')
              .required('该字段是必填项'),
            skills: Yup.array().of(Yup.string())
              .min(1, '至少选择一个技能')
              .required('该字段是必填项'),
            score: Yup.number()
              .min(0.1, '学分至少为 0.1')
              .required('该字段是必填项'),
          })}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2))
            console.log(values)
          }}
        >
          {({ errors, values, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <FormItem label={"名字"} labelFor="name" error={errors.name}>
                  <Field
                    name="name"
                    component={FormikUUITextField}
                    className="w-64"
                  />
                </FormItem>
                <FormItem label={"介绍"} labelFor="introduction" error={errors.introduction}>
                  <Field
                    name="introduction"
                    component={FormikUUITextField}
                    className="w-64"
                  />
                </FormItem>
                <FormItem label={"性别"} labelFor="gender" error={errors.gender}>
                  <Field
                    name="gender"
                    component={FormikUUIRadioGroup}
                    options={[
                      { label: '男', value: 'male', className: "mr-2" },
                      { label: '女', value: 'female', className: "mr-2" },
                      { label: '其他', value: 'other', className: "mr-2" },
                    ]}
                  />
                </FormItem>
                <FormItem label={"生日"} labelFor="birthday" error={errors.birthday}>
                  <Field
                    name="birthday"
                    className="w-64"
                    component={FormikUUIDatePicker}
                  />
                </FormItem>
                <FormItem label={"学校"} labelFor="school" error={errors.school}>
                  <Field
                    name="school"
                    className="w-64"
                    component={FormikUUIHTMLSelect}
                    options={[
                      { label: '北京大学', value: '北京大学' },
                      { label: '重庆大学', value: '重庆大学' },
                    ]}
                  />
                </FormItem>
                <FormItem label={"证书数"} labelFor="certCount" error={errors.certCount}>
                  <Field
                    name="certCount"
                    component={FormikUUIStepper}
                  />
                </FormItem>
                <FormItem label={"学分"} labelFor="score" error={errors.score}>
                  {values.score}
                  <Field
                    name="score"
                    className="w-64"
                    component={FormikUUISlider}
                    min={0}
                    max={5.0}
                    step={0.1}
                  />
                </FormItem>
                <FormItem label={"技能"} labelFor="skills" error={errors.skills}>
                  <Field
                    name="skills"
                    className="w-64"
                    component={FormikUUICheckboxGroup}
                    options={[
                      { label: '网页', value: 'web' },
                      { label: '移动端', value: 'mobile' },
                      { label: '服务端', value: 'server' },
                      { label: '人工智能', value: 'ai' },
                    ]}
                  />
                </FormItem>
                <Button type="submit" styling={{ type: 'primary' }}>提交</Button>
              </Form>
            )
          }}
        </Formik>
      </Card>
    </Page>
  )
}
