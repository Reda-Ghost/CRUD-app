import React, { Component } from 'react';
import List from './component/List';
import Form from './component/Form';

class App extends Component {
	state = {
		courses: [
			{ id: 1, name: 'HTML' },
			{ id: 2, name: 'CSS' },
			{ id: 3, name: 'JavaScript' },
		],
		current: '',
	};

	updateInputValue = (e) => {
		this.setState({
			current: e.target.value,
		});
	};

	addCourse = (e) => {
		e.preventDefault();
		let { courses, current } = this.state;
		if (current) {
			courses.push({ id: courses.length + 1, name: current });
			this.setState({
				courses,
				current: '',
			});
		}
	};

	deleteCourse = (index) => {
		let { courses } = this.state;
		courses.splice(index, 1);
		this.setState({
			courses,
		});
	};

	updateCourse = (index, newVal) => {
		let { courses } = this.state;
		const course = courses[index];
		course.name = newVal;
		this.setState({
			courses,
		});
	};

	showMessageNoCourse = () => {
			return (
				<div className="no-courses">
					There is no courses to show, Please add one's
				</div>
			);
	};

	render() {
		const { courses } = this.state;
		const AllCourses = courses.map((course, index) => {
			return (
				<List
					details={course}
					key={index}
					index={index}
					deleteCourse={this.deleteCourse}
					updateCourse={this.updateCourse}
				/>
			);
		});

		return (
			<div className="App">
				<h1 className="title">CRUD Application</h1>
				<Form
					updateInputValue={this.updateInputValue}
					addCourse={this.addCourse}
					current={this.state.current}
				/>
				{this.state.courses.length === 0 ? this.showMessageNoCourse() : ''}
				{AllCourses}
			</div>
		);
	}
}

export default App;
