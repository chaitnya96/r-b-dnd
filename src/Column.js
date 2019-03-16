import React from 'react'
import { Segment, Label } from 'semantic-ui-react';
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

export default class Column extends React.Component {
    render() {
        return (
            <Segment style={{ width: '200px', margin: '5px' }}>
                <Label>
                    {this.props.column.title}
                </Label>
                <Droppable droppableId={this.props.column.id}>
                    {
                        (provided) => (
                            <div
                                className='ui segment'
                                style={{'inlineSize': 'fit-content'}}
                                ref={provided.innerRef}
                            >
                                {this.props.tasks.map((task,index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                            </div> 
                        )
                    }
                </Droppable>
            </Segment>
        )
    }
}

