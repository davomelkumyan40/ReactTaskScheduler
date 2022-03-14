import React from 'react';
import Task from './Task';

export default class Tasks extends React.Component {
    constructor(props) {
        super();
        this.props = props
    }

    render() {
        return (
            <div className="tasksContainer">
                {this.props.tasklist.map((item, index) => <Task key={index} edit={this.props.edit} delete={this.props.delete} index={index} task={item} />)}
            </div>
        );
    }
}