import React, { Component } from 'react';

class TodoListItem extends Component {
    render() {
        return (
            <div style={{ display: 'table-row' }} >
                <div style={{ display: 'table-cell' }}>
                    <input type="checkbox"
                        checked={this.props.completed}
                        onClick={() => this.props.onItemClick(this.props._id, !this.props.completed)}
                    />
                </div>
                <div style={{ display: 'table-cell', padding: '0 10px' }}>
                    {this.props.todo}
                </div>
                <div style={{ display: 'table-cell' }}>
                    <button
                        onClick={() => this.props.onRemoveClick(this.props._id)}
                    >x</button>
                </div>
            </div>
        );
    }
}

export default TodoListItem;
