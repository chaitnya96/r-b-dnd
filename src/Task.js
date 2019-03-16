import React from 'react';
import { Label } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd'
class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {
                    (provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                         style={{ margin: '5px' }}>{this.props.task.content}</div>
                    )
                }
            </Draggable>
        )
    }
}

export default Task