import React, { Component } from "react";
import Form from "./components/form/form.js";
import List from "./components/list/list.js";

class App extends Component {
  state = {
    courses: [{name: "html" }, {name: "css" }, {name: "javascript" }],
    current: "",
  };

  UpdateCourse = (e) => {
    this.setState({ current: e.target.value });
  };

  AddCourse = (e) => {
    e.preventDefault();
    let courses = this.state.courses;
    let current = this.state.current;
    courses.push({ name: current });
    this.setState({ courses });
    this.setState({current : ''});
  };

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index ,1);
    this.setState({courses});
  }

  editCourse = (index,value) => {
     let {courses} = this.state;
     let course = courses[index];
     course['name'] = value;
     this.setState({courses});
  }

  render() {
    const courseList = this.state.courses.map((course, index) => {
      return <List details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />;
    });

    return (
      <section className="App">
        <h1>Add Course </h1>
        <Form
          UpdateCourse={this.UpdateCourse}
          AddCourse={this.AddCourse}
          current={this.state.current}
        />
        <ul> {courseList} </ul>
      </section>
    );
  }
}

export default App;
