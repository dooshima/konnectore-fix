import React from 'react';
import { Slide } from 'react-slideshow-image';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PostDetailItemSelector from './PostDetailItemSelector';
 
const slideImages = [
  '/images/post02.png',
  '/images/post03.png',
  '/images/post01.png'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay: false,
}

const styles = theme => ({

  slideContainer: {
    width: '70%',
    margin: 'auto',
  },

  h3: {
    textAlign: 'center', 
  },
  eachSlide: {

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: 300,
    },
    '& span': {
      padding: 20,
      fontSize: 20,
      background: '#efefef',
      textAlign: 'center',
    },
  },
  eachFade: {
    display: 'flex',
    '& .image-container': {
      width: '75%',
      overflow: 'hidden',
    },
    '& .image-container img': {
      width: '100%',
    }
  },
})

class PostDetailSliderWidget extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //console.log('increment view count for postID: ' + this.props.posts[0].id);
    this.props.viewPost(this.props.posts[0]);
  }
  render() {
  const {classes, posts} = this.props;
  if(posts) {
    return (
      <Slide {...properties} style={{height: '100%',}}>
        {posts.map( item => <PostDetailItemSelector item={item} {...this.props} />)}
      </Slide>
    )
  } else {
    return <Typography>Loading ...</Typography>
  }
}
};

export default withStyles(styles)(PostDetailSliderWidget);

/*
<div className={classes.eachSlide}>
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className={classes.eachSlide}>
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className={classes.eachSlide}>
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
*/