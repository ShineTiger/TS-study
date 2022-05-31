import { useState } from "react";
import styled from "styled-components";

interface ContainerProps{
    bgColor: string;
    borderColor:string;
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
    borderColor?: string;
  }
  


function CircleState({bgColor, borderColor}: CircleProps) {
    const [value, setValue] = useState(1);//TS 값은 default값(=state)으로 state type을 추측한다. 즉, default가 1이면 setValue도 number Type일것을.
    const [input, setInput] = useState<number|string>(0);//state와 setState의 type이 다르다면 useState hooks에 type의 추측값을 추가해주면된다. 
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} ></Container>
}

export default CircleState;