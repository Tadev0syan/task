function Task ({task, onChange, onDelete, setDelTaskId, setActive}) {
	return (
		<div className="task">
			<label>
				<input className="checkbox" type="checkbox" checked={task.isCompleted} onChange={(e) => {
					onChange({
						...task,
						isCompleted: e.target.checked
					})
				}}/>
				{task.text}
				<button
					className="del_btn"
					onClick={() => {
						setActive(true)
						setDelTaskId(task.id)
				}}>X</button>
			</label>
			<hr />
		</div>
	)
}

export default Task