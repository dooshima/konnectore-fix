import React from 'react';
import { Grid } from '@material-ui/core';
import KFormInput from '../form/KFormInput';
import KFormSelect from '../form/KFormSelect';

class EntryFilterNav extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            category: ' ',
            sort: ' ',
        }
    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
    }

    submit = e => {
        e.preventDefault();
        if(!this.state.query) {
            alert("Please type a keyword to search");
            this.props.setSearchState(false);
            return;
        }
        this.props.handleContestSearch({q: this.state.query, contest_edition_id: this.props.currentEdition.id}, this.props.accessToken);
        this.props.setSearchState(true)
    }

    render() {
        const options = this.props.categories.map( item => ({label: item.category_name, value: item.id}));
        options.unshift({label: 'By Category', value: ' '});
        return (
            <div>
                <form onSubmit={this.submit}>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <KFormInput placeholder="Type to search" multiline={false} value={this.state.query} name="query" handleChange={this.handleChange} />
                    </Grid>
                    <Grid item md={4}>
                        <KFormSelect name="category" value={this.state.category} 
                            handleChange={this.handleChange}
                            options={options} />
                    </Grid>
                    <Grid item md={4}>
                        <KFormSelect name="sort" value={this.state.sort} 
                        handleChange={this.handleChange}
                        options={[{label: 'Sort by', value: ' '}, {label: 'Highest Vote', value: '1'}, {label: 'Least Vote', value: 2}]} />
                    </Grid>
                </Grid>
                </form>
            </div>
        )
    }
}

export default EntryFilterNav;