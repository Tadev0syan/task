function ModalDelete ({active, setActive, onDelete}) {
	return (
		<div className={active ? "modal active" : "modal"}>
			<div className="modal_content" onClick={e => e.stopPropagation()}>
				<h2 className="delete">Are you sure you want to delete?</h2>
				<button className="modal_btn" onClick={() => {
					onDelete()
					setActive(false)
				}}>Yes</button>
				<button className="modal_btn" onClick={() => setActive(false)}>No</button>
			</div>
		</div>
	)
}

export default ModalDelete