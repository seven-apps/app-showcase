import styled from 'styled-components/native'

import normalize from '@styles/normalize'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background[theme.mode]};
`

interface ISpace {
  space?: number
}

export const Space = styled.View`
  margin-bottom: ${({ space = 5 }: ISpace) => normalize(space)}px;
`
