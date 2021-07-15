import { FC } from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

const SubOne: FC = () => {
  return (
    <View>
      <Button
        type="primary"
        onClick={() => {
          console.log('Taro ==> ', Taro);
          Taro.showModal({ content: 'modal', title: 'Tip' });
        }}
      >
        测试
      </Button>
    </View>
  )
}

export default SubOne;