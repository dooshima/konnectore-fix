import React from 'react';
import { Avatar, List, ListSubheader, ListItem, CardContent, Typography, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import Utility from '../../services/Utility';
import SimpleTextAlert from '../../widgets/alerts/SimpleTextAlert';

const styles = theme => ({
    contestants: {
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    avatar: {
        margin: '5px 1px',
        width: 40,
        height: 40,
        borderRadius: 4,
    }
});

const contestants = [...Array(20)].map((v, i) => i);
const TopContestantsWidget = ({classes, topContestants}) => {
    console.log(topContestants);
    const allIds = Utility.isset(topContestants.allIds)? topContestants.allIds: [];
    const byId = Utility.isset(topContestants.byId)? topContestants.byId: {};
    let contestants = [];
    for(let c of allIds) {
        let item = byId[c];
        if(Utility.isset(item)) {
            contestants.push(item);
        }
    }
    return (
        <KPaper>
                <List subheader={<ListSubheader>TOP CONTESTANTS</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
            {
                contestants.map( (contestant, i) => (
                    <ListItem key={i}>
                        <img alt={Utility.person(contestant).fullName} src={Utility.person(contestant).avatar} className={classes.avatar} />
                        <ListItemText primary={Utility.person(contestant).fullName} 
                            secondary={
                                <Typography color="textSecondary">The Stage 2019</Typography>
                            } 
                        />
                    </ListItem>
                ) )
            }

            {contestants.length < 1 && <SimpleTextAlert message="No contestants found yet!" />}
            
            {false && <ListItem>
                <Typography color="textSecondary" component="a" style={{flex: 1, textAlign: 'center'}}>SEE ALL</Typography>
            </ListItem>}
            </List>
        </KPaper>
    )
}


export default withStyles(styles)(TopContestantsWidget);