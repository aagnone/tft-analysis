import styled from 'styled-components'

export const StyledBench = styled.div`
  height: 140px;
  display: grid;
  grid-template-columns: repeat(10, 100px);
  grid-gap: 10px;
  margin-bottom: 200px;
  overflow: hidden;
  padding-left: 40px;
  .card{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    overflow: hidden;
    position: relative;
    color: #fff;
    border: 2px solid black;
  }
  .txt{
    display: flex;
    width: 100%;
    z-index: 1;
    background: rgba(0,0,0,.65);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .place{ width: 75%; }
  .bg{
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`