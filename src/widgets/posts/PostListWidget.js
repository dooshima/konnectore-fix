import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import MasonryGrid from '../../components/UIC/MasonryGrid/MasonryGrid';
import ImageCard from '../../components/UIC/Posts/ImageCard/ImageCard';
import TextCard from '../../components/UIC/Posts/TextCard/TextCard';
import VideoCard from '../../components/UIC/Posts/VideoCard/VideoCard';
import PostDetailWidget from './PostDetailWidget';
import postActions from './../../reducers/post/actions';
import { connect } from 'react-redux';
import SubmissionTimeline from '../../components/Contest/Submission/SubmissionTimeline';

class PostListWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {},
        }
    }

    toggleDialog = item => {
        console.log('toggle')
        this.setState({item: item, open: !this.state.open})
    }

    likePost = post => {
        this.props.likePost({author: this.props.author.id, post_id: post.id, 'postType': post.postType}, this.props.authToken);
    }

    vote = post => {
        this.props.vote({author: this.props.author.id, post_id: post.id, 'postType': post.postType}, this.props.authToken);
    }

    sharePost = post => {
        console.log('Share Post: ' + post.id, 'Author: ' + post.author);
    }

    viewPost = post => {
        this.props.viewPost({author: this.props.author.id, post_id: post.id, 'postType': post.postType}, this.props.authToken);
    }

    addComment = (post, comment) => {
        this.props.addComment({author: this.props.author.id, post_id: post.id, comment: this.state.comment, 'postType': post.postType}, this.props.authToken);
        this.handleCommentChange("");
    }

    handleCommentChange = comment => {
        this.setState({comment});
    }

    render() {
        const props = this.props;
        const funcs = {
            likePost: this.likePost,
            toggleDialog: this.toggleDialog,
            sharePost: this.sharePost,
            viewPost: this.viewPost,
            addComment: this.addComment,
            comment: this.state.comment,
            handleCommentChange: this.handleCommentChange,
        };
        const posts = props.posts? props.posts: [];
        return (
            <React.Fragment>
                {props.listType === 'contest' && 
                    <SubmissionTimeline entries={posts} {...props} {...funcs} />
                }

                {props.listType !== 'contest' &&
                <Paper elevation={0} style={{marginTop: 30}}>
                    {posts.length > 0 && <MasonryGrid>
                    {
                    posts.map( (item, i) => {
                        let counter = Math.ceil(Math.random() * 100);
                        let chooser = counter % 2 === 0? true: false;
                        if(item) {
                            if(item.type === 'image'){
                            return <ImageCard key={i} index={i} item={item} {...props} {...funcs} />;
                            } else if (item.type === 'text') {
                            return <TextCard key={i} index={i} item={item} {...props} {...funcs}/>;
                            } else {
                            return <VideoCard key={i} item={item} {...props} {...funcs}/>
                            }
                        }
                    })
                    }
                    </MasonryGrid>}
                    {posts.length < 1 && <Typography color="textSecondary" style={{textAlign: 'center', fontSize: 15,}}>
                        No posts found!
                    </Typography>}
                </Paper>
                }
                <PostDetailWidget postItem={this.state.item} open={this.state.open} 
                    user={this.props.user} {...funcs}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.user.authToken,
        author: state.user.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        viewPost: (form, token) => {
            dispatch(postActions.handleViewPost(form, token));
        },
        likePost: (form, token) => {
            dispatch(postActions.handleLikePost(form, token));
        },
        addComment: (form, token) => {
            dispatch(postActions.handleAddComment(form, token));
        },
        vote: (form, token) => {
            dispatch(postActions.handleVote(form, token));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListWidget);