import { useState } from "react"

function AddTask ({onAdd, onChange, setBtnActive, btnActive}) {

	const [text, setText] = useState("")



	return (
		<div className="addTask">

			<div className="hide">
				<input className="checkbox" type="checkbox" onChange={onChange} name="hide"/>
				<label>Hide completed</label>
			</div>
		
		<form onSubmit={(e) => {
			e.preventDefault()
			onAdd(text)
			setText("")
		}}>
			<p className="taskk">Task</p>
			<div className="input_container">
				<input className="task_input" type="text" name="addTask" value={text} onChange={(e) => {
					(e.target.value.length <= 54 && e.target.value.length > 0) ? setBtnActive(false) : setBtnActive(true)
					setText(e.target.value)
				}}/>
				<button className="add_btn" disabled={btnActive}>Add</button>
			</div>

			{(text.length > 54) && <div className="massage">Task content can contain max 54 characters.</div>}
		</form>
		</div>
	)
}

export default AddTask