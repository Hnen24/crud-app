import React , {Component , Fragment} from 'react';
import "./list.css";

class List extends Component {

  state = {
    isEdit: false,
  };

  renderList = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <span>
          <button onClick={() => this.toggle()}>edit course</button>
          <button onClick={() => this.props.deleteCourse(this.props.index)}>
            delete
          </button>
        </span>
      </li>
    );
  };

  updateCourse = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggle();
  };

  renderUpdate = () => {
    return (
      <form onSubmit={this.updateCourse}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        ></input>
        <button type="submit">update</button>
      </form>
    );
  };

  toggle = () => {
    let { isEdit } = this.state;
    this.setState({ isEdit: !isEdit });
  };

  render() {
    let { isEdit } = this.state;
    return (
      <Fragment> {isEdit ? this.renderUpdate() : this.renderList()}</Fragment>
    );
  }
}

export default List;