/**
 * This React component is used to manage the display of search results
 * 
 * It takes in two major parameters or props
 * 1. the searchResult object
 * 2. the filter string
 * 
 * The searchResult has the following structure:
 * 
 *  {
 *      posts: {},
 *      constests: {},
 *      people: {},
 *  }
 * 
 * Some lifecycle methods will be used to setup the search result display.
 * 
 * On componentDidMount, the following will be done:
 * 
 * a. Use the filter value to setup the states of the state variables: 
 *      show_all, show_video, show_image, show_post, show_contest, show_people, all, videos, images, posts
 * b. Setup a switch as follows:
 * 
 * (if ['video', 'image', 'text'].indexOf(filter) !== -1 or filter === all)  
 *      list = searchResults.posts.byId.filter(type=filter || filter=all);
 *      if(filter === all) types = ['video', 'image', 'text', 'contest', 'person'];
 *      else types = [filter];
 *  
 * (if filter === contest or filter === all)
 *      list = searchResults.contests.byId;
 *      types = [filter];
 * 
 * (if filter === person or filter === all) 
 *      list = searchResults.people.byId;
 *      types = [filter];
 * 
 * On the render method, we have
 * 
 * for item of types
 *      if(video)
 *          <VideoItemList list />
 *      if(image)
 *          <ImageItemList list />
 *      if(test)
 *          <PostItemList list />
 *      if(contest)
 *          <ContestItemList contests />
 *      if(person)
 *          <PersonItemList people />
 * 
 */

 import React from 'react';
 import VideoItemList from './VideoItemList';
 import ImageItemList from './ImageItemList';
 import PostItemList from './PostItemList';
 import { Paper } from '@material-ui/core';

 class SearchList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            contests: [],
            people: [],
            types: [],
        }
    }

    static getDerivedStateFromProps(props) {
        const { filter, searchResult } = props;
        let list = [];
        let types = [];
        let contests = [];
        let people = [];

        if (['video', 'image', 'text'].indexOf(filter) !== -1) {
            list = [];
            for (let i in searchResult) {
                let item = searchResult[i];
                if(item.type === filter || filter === 'all'){
                    list.push(item);
                    if(filter === 'all') {
                        types = ['video', 'image', 'text', 'contest', 'person'];
                    } else {
                        types = [filter];
                    }
                }
            }
        }
   
        if (filter === 'contest') {
            contests = searchResult.contests.byId;
            types = [filter];
        }
        
        if (filter === 'person') {
            people = searchResult.contests.byId;
            types = [filter];
        }

        if (filter === 'all') {
            for (let i in searchResult) {
                let item = searchResult[i];
                list.push(item);
                types = ['video', 'image', 'text', 'contest', 'person'];
            }
        }

        return {
            list: list,
            contests: contests,
            people: people,
            types: types,
            filter: filter,
        };
    }

    render() {
        const items = this.state.types.map(item => {
            if(item === 'video')
                return <VideoItemList list={this.state.list} />
            if(item === 'image')
                return <ImageItemList list={this.state.list} />
            if(item === 'text')
                return <PostItemList list={this.state.list} />
            if(item === 'contest')
                return null; //<ContestItemList contests={this.state.contests} />
            if(item === 'person' || item === 'all')
                return null; //<PersonItemList people={this.state.people} />
        });

        return items
    }
 }

 export default SearchList;