import React from 'react'
import { useFormik, FormikProps } from 'formik'
import * as Yup from 'yup'

import { InputText, Button, Text } from '@components'
import { setItem } from '@services/asyncStorage'
import { USER_KEY } from '@constants/asyncStorage'
import { useAuth } from '@services/store'
import { Container, Space } from './styles'

interface IFormValues {
  email: string
  password: string
}

export default () => {
  const { setUser } = useAuth()

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
  }: FormikProps<IFormValues> = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('O e-mail digitado não é válido.')
        .required('Por favor, preencher o campo com seu e-mail.'),
      password: Yup.string()
        .min(4, 'A senha precisa ter no mínimo 4 caracteres.')
        .required('Por favor, preencher o campo com sua senha.'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async () => {
      const user = { ...values, name: 'user' }
      await setItem(USER_KEY, user)
      setUser(user)
    },
  })

  return (
    <Container>
      <InputText
        label="Email"
        value={values.email}
        onChange={handleChange('email')}
        error={errors.email}
        placeholder="Preencha seu e-mail"
      />
      <Space />

      <InputText
        label="Senha"
        value={values.password}
        onChange={handleChange('password')}
        error={errors.password}
        placeholder="Preencha sua senha"
        isPassword
      />

      <Space space={15} />

      <Button onPress={handleSubmit}>
        <Text color="#fff">{'Login'}</Text>
      </Button>
    </Container>
  )
}
