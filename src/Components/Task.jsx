import React from 'react';
import ReactDOM from 'react-dom';
import editPng from '../Assets/edit.png';

export default class Task extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            text_area: this.props.task.text,
            newText: "",
            default_textValue: this.props.task.text
        }
    }

    deleteBtn_click(e) {
        this.props.delete(this.props.index);
    }

    input_textchange(e) {
        this.setState({ newText: e.target.value });
    }

    input_keyPress(e) {
        if (e.key === "Enter") {
            let date = new Date();
            let newTask = {
                id: this.props.task.id,
                text: this.state.newText,
                date: `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`,
                time: `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
            };
            this.props.edit(this.props.index, newTask);
            this.setState({ text_area: newTask.text });
            this.setState({ default_textValue: newTask.text });
        }
    }

    editBtn_click(e) {
        this.setState({ text_area: <input id="editInput" defaultValue={this.state.default_textValue} type="text" className="editInput" rows="1" onChange={(e) => this.input_textchange(e)} onKeyPress={(e) => this.input_keyPress(e)} /> });
    }

    render() {
        return (
            <div className="taskBlock">
                <div className="deleteBtn" title={`Delete Task Number ${this.props.task.id}`} onClick={(e) => this.deleteBtn_click(e)}>X</div>
                <div className="editBtn" title={`Edit Task Number ${this.props.task.id}`} onClick={(e) => this.editBtn_click(e)}><img src={editPng} /></div>
                <div className="taskNumberwrapper">
                    <div className="taskNumber">
                        <div>{this.props.task.id}</div>
                    </div>
                </div>

                <div className="taskText"><div>{this.state.text_area}</div></div>
                <div className="dateTimeWrapper">
                    <div>{this.props.task.date}</div>
                    <div>{this.props.task.time}</div>
                </div>
            </div>
        );
    }
}