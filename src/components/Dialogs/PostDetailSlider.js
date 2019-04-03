import React from 'react';
import { Slide } from 'react-slideshow-image';
import { withStyles } from '@material-ui/core/styles';
import PostDetailItem from './PostDetailItem';
 
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

const PostDetailSlider = ({classes, posts}) => {
    return (
      <Slide {...properties} style={{height: '100%',}}>
        {posts.map( item => <PostDetailItem item={item} />)}
      </Slide>
    )
};



export default withStyles(styles)(PostDetailSlider);

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