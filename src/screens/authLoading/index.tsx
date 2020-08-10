import React from 'react'
import { ActivityIndicator } from 'react-native'
import { ThemeContext } from 'styled-components'

import { Content } from './styles'

const AuthLoading = () => (
  <Content>
    <ActivityIndicator size="large" />
  </Content>
)

export default AuthLoading
