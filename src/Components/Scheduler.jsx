import React from 'react';
import Tasks from "./Tasks";


export default class Scheduler extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = this.props.state;
    }

    addTask(task) {
        if (task.text.length > 10 && task.text.length < 100) {
            this.state.taskList.push(task);
        }
    }

    deleteTask(index) {
        if (index < this.state.taskList.length && index > -1) {
            this.state.taskList.splice(index, 1);
            this.setState({ taskList: this.state.taskList });
        }
    }

    editTask(index, task) {
        if (index < this.state.taskList.length & task.text.length > 10) {
            this.state.taskList[index] = task;
            this.setState({ taskList: this.state.taskList });
        }
    }

    button_click(e) {

        setTimeout(() => {
            let elems = document.querySelectorAll(".taskBlock");
            for (let i = 0; i < elems.length; i++) {
                elems[i].classList.add("taskBlock_active");
            }
        }, 50);

        if (this.state.taskText) {
            let date = new Date();
            this.addTask({
                id: this.state.taskList.length + 1,
                text: this.state.taskText,
                date: `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`,
                time: `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
            });
        }
        this.setState({ taskText: "" });
    }

    textarea_change(e) {
        this.setState({ taskText: e.target.value });
    }

    textarea_KeyPress(e) {
        if (e.key === "Enter")
            this.button_click();
    }

    render() {
        return (
            <div className="wrapper">
                <label className="textHeader"><span>task scheduler</span></label>
                <div className={"container"}>
                    <input type="text" className="inherit textar" onKeyPress={(e) => this.textarea_KeyPress(e)} value={this.state.taskText} onChange={(e) => this.textarea_change(e)} />
                    <button className="inherit button" onClick={(e) => { this.button_click(e) }}>Add Task</button>
                </div>
                <Tasks edit={this.editTask.bind(this)} delete={this.deleteTask.bind(this)} tasklist={this.state.taskList} />
            </div>
        );
    }
}