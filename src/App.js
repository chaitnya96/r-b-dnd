import React, { Component } from 'react';
import initialDAta from './initial'
import './App.css';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component {
  state = initialDAta

  onDragEnd = (r)=>{
    console.log(r)
  }
  render() {
    return (
      <DragDropContext
      onDragEnd={this.onDragEnd}
      >
        {
          this.state.columnOrder.map(
            columnId => {
              const column = this.state.column[columnId];
              const tasks = column.taskIds.map(tId => this.state.tasks[tId])

              return <Column key={column.id} column={column} tasks={tasks} />
            }
          )
        }
      </DragDropContext>
    );
  }
}

export default App;
