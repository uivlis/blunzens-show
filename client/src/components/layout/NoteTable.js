import React from 'react';
import PropTypes from 'prop-types';

const NoteTable = (props) => {
    const notes = props.notes;

    const noteRows = notes.map(note => {

        let classes = `small ${!!note.isNew ? 'table-success' : ''}`;
        
        return (
            <tr key={note.key} className={classes}>
                <td className="align-middle">{JSON.parse(note.value).author}</td>
                <td className="align-middle">
                    <span className="d-inline-block text-truncate" style={{maxWidth: '200px'}}>
                        {JSON.parse(note.value).text}
                    </span>                
                </td>
                <td className="align-middle">{JSON.parse(note.value).platform}</td>
                <td className="align-middle">{JSON.parse(note.value).tempLink}</td>
                <td className="align-middle">{JSON.parse(note.value).date}</td>
                <td className="align-middle">{JSON.parse(note.value).censorability}</td>
            </tr>
        );
    });

    return (
        <div>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th className="align-middle text-center">Author</th>
                        <th className="align-middle text-center">Text</th>
                        <th className="align-middle text-center">Platform</th>
                        <th className="align-middle text-center">TempLink</th>
                        <th className="align-middle text-center">Date</th>
                        <th className="align-middle text-center">Censorability</th>
                    </tr>
                </thead>
                <tbody>
                    {noteRows}
                </tbody>
            </table>
        </div>
    );
};

NoteTable.propTypes = {
    notes: PropTypes.array
};

export default NoteTable;