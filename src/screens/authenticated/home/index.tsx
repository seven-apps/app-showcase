import React from 'react'

import { Button, Text } from '@components'
import { useAuth } from '@services/store'
import { removeItem } from '@services/asyncStorage'
import { USER_KEY } from '@constants/asyncStorage'
import { Container } from './styles'

export default () => {
  const { setUser, user } = useAuth()

  const onLogout = React.useCallback(async () => {
    await removeItem(USER_KEY)
    setUser(undefined)
  }, [])

  return (
    <Container>
      <Text>{`${user.name} / ${user.email}`}</Text>
      <Button onPress={onLogout}>
        <Text color="#fff">{'Sair'}</Text>
      </Button>
    </Container>
  )
}
