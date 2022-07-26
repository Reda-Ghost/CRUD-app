import React from "react";

const Form = (props) => {
  return (
		<form className="main-course-form" onSubmit={props.addCourse}>
			<div className="main-input-container">
				<input
					type="text"
					id="course-input"
					placeholder="Enter Your Course"
					value={props.current}
					onChange={props.updateInputValue}
				/>
				<button type="submit" className="add">
					Add
				</button>
			</div>
		</form>
	);
}

export default Form