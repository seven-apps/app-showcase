import styled from 'styled-components/native'

interface IText {
  color?: string
  theme: any
}

export default styled.Text`
  color: ${({ color, theme }: IText) => color || theme.colors.text[theme.mode]};
`
