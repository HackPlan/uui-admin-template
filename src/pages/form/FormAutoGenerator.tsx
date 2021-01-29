import React from 'react';
import { Card } from '../../components/Card';
import { FormGenerator } from '../../components/form/FormGenerator';
import { Page } from '../../components/Page';
import * as Yup from 'yup';
import { FormikUUIStepper, FormikUUISwitch } from '../../components/form/formik';


const GeneratedForm = FormGenerator({
  schema: Yup.object({
    // 是否填写结算银行账户
    need_account_info: Yup.boolean().label('是否填写结算银行账户').required(),
    // 超级管理员信息
    contact_info: Yup.object({
      // 超级管理员类型
      contact_type: Yup.string().label('超级管理员类型').min(1).max(2).required(),
      // 超级管理员姓名 ** 该字段需进行加密处理 **
      contact_name: Yup.string().label('超级管理员姓名').min(1).max(256).required(),
      // 超级管理员身份证件号码 ** 该字段需进行加密处理 **
      contact_id_card_number: Yup.string().label('超级管理员身份证件号码').min(1).max(256).required(),
      // 超级管理员手机 ** 该字段需进行加密处理 **
      mobile_phone: Yup.string().label('超级管理员手机').min(1).max(256).required(),
      // 超级管理员邮箱 ** 该字段需进行加密处理 **
      contact_email: Yup.string().label('超级管理员邮箱').min(1).max(256),
    }).label('超级管理员信息').required(),
    // 店铺信息
    sales_scene_info: Yup.object({
      // 店铺名称
      store_name: Yup.string().label('店铺信息').min(1).max(256).required(),
      // 小程序AppID
      mini_program_sub_appid: Yup.string().label('小程序AppID').min(1).max(256).required(),
      // 店铺链接
      store_url: Yup.string().label('店铺链接').min(1).max(1024),
      // 店铺二维码 mediaId
      store_qr_code: Yup.string().label('店铺二维码 mediaId').min(1).max(256),
    }).label('').required(),
    // 商户简称
    merchant_shortname: Yup.string().label('商户简称').min(1).max(64).required(),
    // 营业执照/登记证书信息
    test_number: Yup.number().label('测试数字').required(),
    test_number_stepper: Yup.number().label('测试Stepper').required(),
    test_boolean_switch: Yup.boolean().label('测试Switch').required(),
  }),
  component: {
    test_number_stepper: FormikUUIStepper,
    test_boolean_switch: FormikUUISwitch,
  },
  onSubmit: (values) => {
    console.log('onSubmit values', values)
  }
})

export default function FormAutoGenerator() {

  return (
    <Page>
      <Card>
        <GeneratedForm />
      </Card>
    </Page>
  )
}
