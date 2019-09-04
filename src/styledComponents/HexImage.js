import styled from "styled-components";


export const HexImage = styled.div`

  position: relative;
  width: 95px; 
  height: 54.85px;
  margin: 27.42px 0;
  background-image: url(${props => props.image});
  background-size: auto 98.1495px;
  background-position: center;
  border-left: solid 5px #000000;
  border-right: solid 5px #000000;

  .hexTop,
  .hexBottom {
    position: absolute;
    z-index: 1;
    width: 67.18px;
    height: 67.18px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 8.91px;
  }

  .hexTop:after,
  .hexBottom:after {
    content: "";
    position: absolute;
    width: 85.0000px;
    height: 49.07477288111819px;
    -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-24.5374px);
    -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-24.5374px);
    transform:          rotate(45deg) scaleY(1.7321) translateY(-24.5374px);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    background: inherit;
  }

  .hexTop {
    top: -33.5876px;
    border-top: solid 7.0711px #000000;
    border-right: solid 7.0711px #000000;
  }

  .hexTop:after {
    background-position: center top;
  }

  .hexBottom {
    bottom: -33.5876px;
    border-bottom: solid 7.0711px #000000;
    border-left: solid 7.0711px #000000;
  }

  .hexBottom:after {
    background-position: center bottom;
  }

  :after {
    content: "";
    position: absolute;
    top: 2.8868px;
    left: 0;
    width: 85.0000px;
    height: 49.0748px;
    z-index: 2;
    background: inherit;
  }
`;