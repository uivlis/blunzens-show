import React, { Component } from 'react';
import NoteTable from './NoteTable';
import LinearProgress from '@material-ui/core/LinearProgress';

class SpeechManager extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            notes: [{key: '', value: ''}]
        };
    }

    componentWillMount() {
        fetch('spider',{
            method: 'GET',
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
              return response.json();
          }).then(function(body){
            this.setState({ notes: body });
          }.bind(this)).catch(e => {
              console.error(e.message);
          });
    }

    render() {
        return (
            <div>
                { Object(this.state.notes[0])["key"] == "" ? 
                    <LinearProgress />
                    :
                    <NoteTable notes={this.state.notes} />
                }
            </div>
        );
    }
}

export default SpeechManager;