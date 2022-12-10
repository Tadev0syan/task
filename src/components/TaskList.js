import Task from "./Task";

function TaskList({tasks, onChange, hideCompleted, onDelete, setDelTaskId, setActive}) {

	if(tasks.length === 0) {
		return (
		<div className="emptyTasks">
			<p>Your life is a blank page. You write on it</p>
			<h4>So start by adding your tasks here</h4>
		</div>
		)
	} else{
	if(!hideCompleted){
		return (
			<div className="taskList">
				{
					tasks.map((task) => {
						return (
							<Task
								setActive={setActive}
								setDelTaskId={setDelTaskId}
								key={task.id}
								task={task}
								onChange={onChange}
								onDelete={onDelete}
							/>
						)
					})
				}
			</div>
		)
	} else {
		return (
			<div>
				{
					tasks.filter((task) => !task.isCompleted).map((task) => {
						return (
							<Task 
								key={task.id} 
								task={task}
								onChange={onChange}
								onDelete={onDelete}
							/>
						)
					})
				}
			</div>
		)
	}
	}

}


export default TaskList;