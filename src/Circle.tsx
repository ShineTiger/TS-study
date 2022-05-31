import styled from "styled-components";
/* 
/2.2 - interface : props에게 type 붙이기/
interface는 컴포넌트에 들어가는 프롭에 대한 타입을 정해주는것이라 생각하면 편하다. (객체로들어감)
(**컴포넌트가 반환하는 것이 라이브러리에서 생겨난 거라면+타입이 다르다면 또다른 interface를 만들어서 붙여주어야 한다. )

/2.3 - Optional Props : required 되는 props를 옵션형식처럼 만들기+디폴트값 붙이기/
props는 기본적으로 required를 가진다. 
*/

interface ContainerProps {
    bgColor: string;
    borderColor: string;
  }

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor}; 
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {  
    bgColor: string;
    //⒜borderColor는 string이거나 undefined일수도 있다 => TS의 optional
    //borderColor?: string | undefined 로도 적을수 있다.
    borderColor?: string;
    text?: string;//⒞
}




//⒝⒝CircleProps라는 interface를 받는 Circle 컴포넌트는 text라는 props를 "first" 라는 텍스트를 인수(디폴트)로쓰지만, 상위컴포넌트에서 받아오는 text props가 있을경우 이것을쓴다. 
function Circle({ bgColor, borderColor, text = "first" }: CircleProps) {

  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}> {text} </Container>; 
  //⒝널병합연산자 사용: 왼쪽 피연산자가 null or undefined일때 우측연산자를 반환, 그렇지 않으면 왼쪽을 반환한다. 
  //white를 defalut로 밀고싶다면 {borderColor ?? "white"} 와 같이 적어줄수도있다. 
}

export default Circle;
