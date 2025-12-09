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
            url: '/pages/chat/index',
        })
    }
    if(value == 3){
        Taro.redirectTo({
            url: '/pages/settings/index',
        })
    }
  }

  const tabList = [{ title: '',iconType:'home' },
     { title: '',iconType:'shopping-cart' },
     { title: '',iconType:'message' },
      {  title: '',iconType:'settings'  }]
  return (
    <View className='flex-col overflow-hidden h-screen'>
      <View  className='grow-0 w-full h-1/6'>
        <AtNoticebar marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
      </View>
      <View className='grow py-1 h-4/6 overflow-auto'>
        {children}
      </View>
      <View className='grow-0 h-1/6'>
      <AtTabBar  current={current} tabList={tabList} selectedColor={'blue'} className='bg-sky-100' onClick={handleClick}>
      </AtTabBar>
      </View>
    </View>

  )
}