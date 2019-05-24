import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, AppBar, Toolbar, Button, CardActions, Grid, LinearProgress } from '@material-ui/core';
import KButton from '../UIC/KButton';
import OnboardMenu from './OnboardMenu';
import KBigButton from '../UIC/KBigButton';
import CategoryButton from './CategoryButton';
import KBigButtonOutlined from '../UIC/KBigButtonOutlined';
import OnboardToolbar from './OnboardToolbar';

const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    wrapper: {
        width: '80%',
        margin: '100px auto 20px'
    },
    card: {
        width: 'auto',
        //margin: '100px auto 20px',
        padding: 16,
        flexDirection: 'column',
        marginTop: 20,
    },
    formControl: {
        width: '100%',
        marginTop: '1.8em',
    },
    bootstrapRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
      },
    bootstrapInput: {
        borderRadius: 20,
        position: 'relative',
        backgroundColor: '#f8f8f8',
        border: '1px solid transparent',
        fontSize: 14,
        color: '#a2a2a2',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 20,
          borderColor: 'transparent',
          boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#a2a2a2',
            fontSize: 14,
        }
      },
    bootstrapFormLabel: {
        fontSize: 16,
    },
    footer: {display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'},
    appBar: {
          backgroundColor: '#e19f47',
          border: 'none',
    },
    alertText: {
          color: 'white',
          fontSize: theme.typography.fontSize * 1.5,
          textTransform: 'none',
          fontWeight: 300,
          opacity: 0.8,
          
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    content: {
        marginBottom: 20,
    },
    next: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    span: {
        fontSize: theme.typography.fontSize,
        color: '#aaa',
    },
    linearColorPrimary: {
        backgroundColor: '#b2dfdb',
      },
      linearBarColorPrimary: {
        backgroundColor: '#00695c',
      },
      loaderHolder: {
        flex: 1,
        marginBottom: theme.spacing.unit * 0,
      }
});

class ChooseCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategories: [],
            categories: [],
        }
    }

    componentDidMount() {
        const talentCategories = this.props.talentCategories;
        const categories = talentCategories.map( (cat, i) => cat.category_name );
        this.setState({talentCategories: talentCategories, categories: categories});
    }

    toggleCategory = (category) => {
        const index = this.state.selectedCategories.findIndex(cat => cat.id === category.id);
        if(index === -1) {
            this.setState({
                selectedCategories: [...this.state.selectedCategories, category]
            })
        } else {
            let selectedCat = this.state.selectedCategories;
            selectedCat.splice(selectedCat.indexOf(category), 1);
            this.setState({
                selectedCategories: selectedCat,
            });
        }
    }

    render() {
    const { classes, currentScreen } = this.props;
    //const talents = selected.map( s => s.id );
    this.props.setSelected(this.state.selectedCategories);
    console.log(this.props.signupRedirect);
    if(this.props.signupRedirect) {
        this.props.redirect();
    }
    return (
        <div className={classes.main}>
        
        <OnboardToolbar />
        {
            this.props.authLoading && <div className={classes.loaderHolder}><LinearProgress
            classes={{
                colorPrimary: classes.linearColorPrimary,
                barColorPrimary: classes.linearBarColorPrimary,
            }}
            /></div>
        }
        <div className={classes.wrapper}>
        <Grid container spacing={0}>
            <Grid item md={3}>
                <OnboardMenu currentScreen={currentScreen} />
            </Grid>
            <Grid item md={9} style={{paddingLeft: 80,}}>
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    Let’s get you to stardom!
                </Typography>
                <Typography variant="title" color="textSecondary">
                    Build up your profile so your friends can connect with you. <span className={classes.span}>Choose as many as applicable</span>
                </Typography>
                <div>
                    <Typography color="error">{this.props.authError}</Typography>
                </div>
                <KCard className={classes.card}>
                    <CardContent className={classes.content}>
                        {this.props.talentCategories.map( (cat, i) => <CategoryButton key={i} index={cat.id} id={cat.id} category={cat} selected={this.state.selectedCategories.findIndex(c => c.id === cat.id) !== -1} toggleCategory={this.toggleCategory} />)}
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <div className={classes.next}>
                            <KBigButtonOutlined variant="outlined" onClick={() => this.props.setScreen('ConnectWithPeople')} label="Maybe later" size="small" />
                            <KBigButton onClick={this.props.submit} label="Done!" size="small" />
                        </div>
                    </CardActions>
                </KCard>
                
            </Grid>
        </Grid>
        </div>
        </div>
    )
                                        }
};

ChooseCategory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseCategory);