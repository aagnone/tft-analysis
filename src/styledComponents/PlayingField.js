import styled from 'styled-components'

export const StyledPF = styled.div`
  padding-top: 100px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 100px);
  grid-auto-rows: calc(100px - 28.87px/2);
  grid-gap: 40px 10px;
  padding-bottom: calc(50px / 1.73);
`

export const StyledHexImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-120deg);
  visibility: visible;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`

export const StyledContainer = styled.div`
  transform: rotate(-30deg);
  visibility: hidden;
  :nth-child(-n +7) {
    transform: rotate(-30deg) translate(32px, 55px);
  }
  :nth-last-child(-n + 7) {
    transform: rotate(-30deg) translate(62px, 2px);
  }
`

export const StyledHexagon = styled.div`
  width: 250px;
  height: 105px;
  transform: rotate(-60deg);
  overflow: hidden;
`