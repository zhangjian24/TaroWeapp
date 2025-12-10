import Taro from '@tarojs/taro'
import { AtTabBar,AtNoticebar } from 'taro-ui'
import { View } from '@tarojs/components'

export default function BaseLayout({current=0,children}) {
  function handleClick (value){
    if(value == 0){
        Taro.redirectTo({
            url: '/pages/index/index',
        })
    }
    if(value == 1){
        Taro.redirectTo({
            url: '/pages/shopping/index',
        })
    }
    if(value == 2){
        Taro.redirectTo({
            url: '/pages/settings/index',
        })
    }
  }

  const tabList = [{ title: '首页',iconType:'home' },
     { title: '购物',iconType:'shopping-cart' },
      {  title: '设置',iconType:'settings'  }]
  return (
    <View className='flex-col overflow-hidden h-screen'>
        <AtNoticebar marquee className='grow-0 w-full h-1/6'>
          欢迎使用小程序应用
        </AtNoticebar>
      <View className='grow py-1 h-4/6 overflow-auto'>
        {children}
      </View>
      <AtTabBar  current={current} tabList={tabList} selectedColor={'#2c5cc5'} className='bg-white grow-0 h-1/6' onClick={handleClick}>
      </AtTabBar>
    </View>

  )
}