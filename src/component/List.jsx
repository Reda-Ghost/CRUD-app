import React, { Component } from 'react';

class List extends Component {
	state = {
		isEdit: false,
	};

	renderCourses = () => {
		return (
			<ul className="list-courses">
				<li>
					<span>{this.props.details.name}</span>
					<button onClick={this.toggleState} className="edit">
						Edit
					</button>
					<button
						onClick={() => this.props.deleteCourse(this.props.index)}
						className="delete"
					>
						Delete
					</button>
				</li>
			</ul>
		);
	};

	toggleState = () => {
		let { isEdit } = this.state;
		this.setState({
			isEdit: !isEdit,
		});
	};

	updateCourseItem = (e) => {
		e.preventDefault();
		if (this.input.value) {
			this.props.updateCourse(this.props.index, this.input.value);
			this.toggleState();
		}
	};

	renderUpdateCourse = () => {
		return (
			<form className="course-form" onSubmit={this.updateCourseItem}>
				<div className="input-container">
					<input
						type="text"
						defaultValue={this.props.details.name}
						ref={(v) => (this.input = v)}
					/>
					<button className="update" onSubmit={this.updateCourseItem}>
						Update
					</button>
				</div>
			</form>
		);
	};

	render() {
		let { isEdit } = this.state;
		return <>{isEdit ? this.renderUpdateCourse() : this.renderCourses()}</>;
	}
}

export default List;
