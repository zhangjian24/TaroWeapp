import { View } from '@tarojs/components'
import BaseLayout from '../../components/BaseLayout'
import { AtList, AtListItem } from "taro-ui"

export default function Shopping() {

  return (
    <BaseLayout current={1}>
    <AtList>
      <AtListItem
        arrow='right'
        note='2025-03-17'
        title='课程cvcv'
        extraText='总金额：12'
      />
      <AtListItem
        arrow='right'
        note='2025-03-16'
        title='课程3r43'
        extraText='总金额：23'
      />
  </AtList>
    </BaseLayout>
  )
}