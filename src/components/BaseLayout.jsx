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

  const tabList = [{ title: '',iconType:'home' },
     { title: '',iconType:'shopping-cart' },
      {  title: '',iconType:'settings'  }]
  return (
    <View className='at-row'>
    <View className='at-col'>
      <View  className='at-row'>
      <View className='at-col'>
        <AtNoticebar marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
      </View>
      </View>
      <View className='at-row'>
      <View className='at-col'>
        {children}
      </View>
      </View>
      <View className='at-row'>
      <View className='at-col'>
      <AtTabBar fixed current={current} tabList={tabList} selectedColor={'blue'} className="bg-sky-100" onClick={handleClick}>
      </AtTabBar>
      </View>
      </View>
    </View>
    </View>

  )
}