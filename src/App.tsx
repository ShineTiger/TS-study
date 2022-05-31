
import Circle from "./Circle";

function App() {
  return (
    //(1)TS가 타입한 props는 required기 때문에 optional설정⒜ 또는 defalt설정⒝을 해주지 않으면 오류가 난다. 
    <div>
      <Circle borderColor="yellow" bgColor="teal"  />
      <Circle text="second" bgColor="tomato" />
    </div>
  );
}

export default App;
