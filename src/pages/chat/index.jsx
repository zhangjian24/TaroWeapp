import { View,Image,Swiper, SwiperItem } from '@tarojs/components'
import BaseLayout from '../../components/BaseLayout'
import { AtCard,AtTextarea, AtForm,AtButton  } from "taro-ui"
import { useState } from 'react';
import {sendMessage} from '../../api/chat'
import Markdown from 'react-markdown'

export default function Index() {
   const [ques, setQues] = useState(''); // 定义内部状态
   const [resp, setResp] = useState(''); // 定义内部状态

  return (
    <BaseLayout current={2}>
      <view>
          <AtForm>
            <AtCard title='问题'>
            <AtTextarea 
              className='border-1 m-2'
              value={ques}
              placeholder='请输入问题'
              onChange={(e)=>{
                console.log(e);
                setQues(e);
              }}
            />
            </AtCard>
            <AtButton 
             type='primary'
             size='normal'
             className='w-1/6 my-2'
             onClick={(e)=>{
              if(!ques) return false;
              sendMessage(ques).then(setResp).catch(e=>console.log(e));
            }}>发送</AtButton>
          <AtCard title='回答'>
          </AtCard>
          <view className='block p-8'>
            <Markdown>{resp}</Markdown>
            </view>
          </AtForm>
        </view>
    </BaseLayout>
  )
}