import React, {Component} from 'react';
import Note from './Note/Note';
import AddNewNote from './AddNewNoteForm/AddNewNoteForm';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [
        {id: 1, noteContent: 'The first note'},
        {id: 2, noteContent: 'The second note'}
      ]
    }
  }

  addNewNote = (note) => {
    const BackUpState = this.state.notes;
    BackUpState.push({id: BackUpState.length + 1, noteContent: note});
    this.setState({
      notes: BackUpState
    });
  }

  render(){
    return (
      <div className="App">
        {
          this.state.notes.map((note) => {
            return (
              <Note 
                noteContent={note.noteContent}
                id={note.id}
                key={note.id} />
            )
          })
        }
        <AddNewNote addNote={this.addNewNote} />
      </div>
    );
  }
}

export default App;
