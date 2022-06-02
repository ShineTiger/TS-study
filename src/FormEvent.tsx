import React, { useState } from "react";
/* 
/2.5 - evnet에게 type 붙이기/
event에게 주는 type은 타겟을 확실히 하는데에있다. 
즉, 어떤Element가 event를 발생시키는가? 
*/

const FormEvent = () => {
    const [value, setValue] = useState("");
    //TS는 onChnage함수가 InputElement에 의해 실행된다. 라고 type을 내린다.
    const onChange = (event:React.FormEvent<HTMLInputElement>) =>{
        //console.log(event.currentTarget.value)
        const {currentTarget:{value},} = event; //구조분해할당. 객체의 수가 많아질수록 용이하다. 
        setValue(value);
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello",value);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={onChange} type="text" placeholder="username">
                </input>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default FormEvent;