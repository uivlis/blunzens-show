import React from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        minWidth: 275,
    },
    gridList: {
        width: '90%',
        height: '90%',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const NoteTable = (props) => {
    const notes = props.notes;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={`100%`} spacing={10} className={classes.gridList} cols={4}>
                {notes.map((note) => (
                    <GridListTile key={note.key} cols={1} rows={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {`Censorability: ${(JSON.parse(note.value).censorability * 100).toFixed(2)}%`}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {JSON.parse(note.value).title}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    duckduckgo.com
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {JSON.parse(note.value).text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="secondary" href={`https://${JSON.parse(note.value).tempLink}`} target="_blank">
                                    See Original
                                </Button>
                            </CardActions>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


NoteTable.propTypes = {
    notes: PropTypes.array
};

export default NoteTable;