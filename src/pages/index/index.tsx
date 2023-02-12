import React, { useCallback, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon, AtSearchBar } from 'taro-ui'

import "taro-ui/dist/style/components/icon.scss" // 按需引入
import './index.scss'
import '../../components/iconfont/icon.scss'
const Index: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const handleChange = useCallback((value)=> {
      setSearch(value)
  }, [search])
    return (
    <View className='index-wrap'>
      <View className='top-wrap'>
        <View className='search'>
          <View className='search-left'>
            <View>
              <AtIcon value='search' size={16} color='#999'></AtIcon>
              <Text className='search-text'>文案</Text>
            </View>
            <AtIcon value='camera' size={16} color='#999'></AtIcon>
          </View>
          <View className='search-right'>
            <AtIcon prefixClass='icon' value='icon-rili' color='#fff'></AtIcon>
          </View>
        </View>
      </View>
    </View>)
}
export default Index