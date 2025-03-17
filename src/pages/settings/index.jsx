import { View } from '@tarojs/components'
import BaseLayout from '../../components/BaseLayout'
import { AtAvatar,AtDivider } from 'taro-ui'

export default function Settings() {

  return (
    <BaseLayout current={2}>
      <View className='mx-2 h-10 flex items-end'><text>昵称：阿萨德</text></View>
      <AtDivider className='h-4' content='' />
      <View className='mx-2 h-10 flex items-end'><text>头像：</text><AtAvatar className='inline-block' circle size='small' image='https://jdc.jd.com/img/200'></AtAvatar></View>
      <AtDivider className='h-4' content='' />
    </BaseLayout>
   )
}