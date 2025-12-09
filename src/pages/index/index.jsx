import { View,Image,Swiper, SwiperItem } from '@tarojs/components'
import BaseLayout from '../../components/BaseLayout'
import { AtDivider,AtCard } from "taro-ui"

export default function Index() {
  const imgUrls = [
    'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
    'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
    'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
  ]
  const courseList = [
    {title:'课程a',note:'2021-03-06'},
    {title:'课程b',note:'2021-03-14'},
    {title:'课程4r',note:'2021-03-22'},
  ]
  return (
    <BaseLayout current={0}>
        <View>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          duration={500}
          interval={2000}
          circular
          autoplay
          indicatorDots
        >
          {
            imgUrls.map((item, idx) => (
              <SwiperItem key={idx} className='flex justify-center justify-items-center'>
                <Image mode='widthFix' src={item} width='350' height='150' className='block'/>
              </SwiperItem>
            ))
          }
        </Swiper>
        </View>
        <View>
          <AtDivider content='' />
          <View className='mx-2 flex justify-between'>
            <text>课程</text>
            <text>全部&gt;&gt;</text>
          </View>
          <View>
          {
            courseList.map((c,idx)=>{
              return (<AtCard
                className='mx-2'
                key={idx}
                note={c.note}
                title={c.title}
                extra='>>'
              >
                这也是内容区 可以随意定义功能
              </AtCard>)
            })
          }
          </View>
        </View>
    </BaseLayout>
  )
}