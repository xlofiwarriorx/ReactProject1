import React from 'react';

const Input = (props) => {

	// let ref = React.createRef()
	// let doSmthng = () => {
	// 	let value = ref.current.value
	// 	alert(value)
	// }
	let ref = React.createRef()


	return (
      <div>
        <textarea value={props.value} onChange={()=>{props.change(ref)}} ref={ref}/>
        <button onClick={()=>{props.onClick(ref)}}>{props.buttonName}</button>
      </div>
	);
};

export default Input;