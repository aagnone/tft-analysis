import styled from 'styled-components'

export const StyledChampion = styled.div`
  display: inline-block;
  background-image: url(${props => props.champImage});
  border: none;
  height: 100px;
  width: 100px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 15px;
  cursor: pointer;
`