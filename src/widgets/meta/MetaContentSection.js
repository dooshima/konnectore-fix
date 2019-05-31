import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MetaPrimaryNav from './MetaPrimaryNav';
import MetaBreadcrumbs from './MetaBreadcrumbs';
import Utility from '../../services/Utility';

const useStyles = makeStyles(theme => ({
    contentWrapper: {
        backgroundColor: '#EDEDED',
        position: 'relative',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        minHeight: '100vh',
    },
    metaContent: {
        margin: '0 10%',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
        backgroundColor: 'white',
        minHeight: 400,
    },
    content: {
        padding: 40,
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        }
    }
}));
function MetaContentSection({children, links}) {
    const classes = useStyles();
    const routes = Utility.isset(links)? links: [];
    return (
        <div className={classes.contentWrapper}>
            <MetaPrimaryNav />
            <div className={classes.metaContent}>
                <MetaBreadcrumbs links={routes} />
                <div className={classes.content}>
                {children}
                </div>
            </div>
        </div>
    )
}

export default MetaContentSection;