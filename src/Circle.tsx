import styled from "styled-components";
/* 
interface는 컴포넌트에 들어가는 프롭에 대한 타입을 정해주는것이라 생각하면 편하다. (객체로들어감)
(**컴포넌트가 반환하는 것이 라이브러리에서 생겨난 거라면+타입이 다르다면 또다른 interface를 만들어서 붙여주어야 한다. )
*/

//Container는 스타일컴포넌트. (1)을 받아서 붙여준다.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

//(1) style components에 들어가는 prop설명 to. TS
interface ContainerProps {
  bgColor: string;
}

//Circle컴포넌트에게 CircleProps라고 type을 붙여줌
function Circle({ bgColor }: CircleProps) {

  return <Container bgColor={bgColor} />;
}

export default Circle;
