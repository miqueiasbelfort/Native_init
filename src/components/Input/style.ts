import styled from 'styled-components/native'

export const Container = styled.TextInput`
   width: 90%;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
   height: 56px;
   color:  ${({ theme }) => theme.COLORS.TEXT};
   padding: 0 16px;
`;