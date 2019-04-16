import React from 'react';
import { Typography, List, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    content: {
        padding: theme.spacing.unit * 2,
    },
    h1: {
        marginBottom: theme.spacing.unit * 2,
    },
    h2: {
        marginBottom: theme.spacing.unit * .5,
        marginTop: theme.spacing.unit * 3,
    },
    p: {
        marginTop: theme.spacing.unit * 2,
    }
})
function GuidelinesContent(props) {
    const { classes } = props;
    return (
        <div className={classes.content}>
            <Typography color="textSecondary" className={classes.h1}>CONTEST GUIDLINES</Typography>
            <div>
            <Typography color="textSecondary">
            Of all of the millions of subjects you can read about on Wikipedia, subjects relating to Africa have the least coverage. This is due to a number of reasons, but mainly because many people do not know that they can donate their images, videos and audio to Wikipedia.
We need your help to visually celebrate the richness, diversity and beauty of Africa.
</Typography>

<Typography className={classes.h2}>What is Wiki Loves Africa?</Typography>
<Typography color="textSecondary">
It is an annual contest where anyone across Africa can contribute media that relates to that year's theme to Wikimedia Commons for use on Wikipedia and other project websites of the Wikimedia Foundation. 
Wiki Loves Africa encourages participants to contribute media (photographs, video and audio) that illustrate the specific theme for that year. Each year the theme changes and is chosen by the community from universal, visually-rich and culturally-specific topics (for example, markets, rites of passage, festivals, public art, cuisine, natural history, urbanity, daily life, notable persons, etc).
The 2019 contest will start on 1st February 2019 and close on 1st March 2019.
</Typography>

<Typography className={classes.h2}>What should we contribute ?</Typography>
<Typography color="textSecondary">
Pictures ! audios ! videos ! The theme for the 2019 contest is… Play.</Typography>

<Typography color="textSecondary">
This theme encompasses a host of approaches and is intentionally open to interpretation. The theme Play! encourages the submission of representations of joyful and serious games, sport, and recreation in the form of board or mental games, physical fun or contests, playful interactions, theatrical and musical performances, etc. 
There are several prizes to grab. Including two special prizes for photos or videos or audio that captures Women in sport or Culturally specific or traditional formal forms of play, recreation or events. 
>>Read more about the theme and get inspiration here.
</Typography>

<Typography className={classes.h2}>
What prizes are up for grabs?</Typography>

<Typography color="textSecondary">
Images submitted to the Wiki Loves Africa contest may win prizes!</Typography>
<List>
    <ListItemText>1st prize: US$1000</ListItemText>
    <ListItemText>2nd prize: US$800</ListItemText>
    <ListItemText>3rd prize: US$500</ListItemText>
</List>

<Typography>
Additional categories:<br/>
Women in Sport : US$500<br />
Culturally specific or traditional formal forms of play, recreation or events : US$500
</Typography>

<Typography color="textSecondary" className={classes.p}>
Each winner will also receive a pack of goodies (proposed: a hat “I edit Wikipedia from Africa”, a branded battery, stickers)
</Typography>

<Typography color="textSecondary" className={classes.p}>
In addition, all top-15 winners of the international contest + the additional categories will receive a hat + stickers + a certificate
</Typography>

<Typography color="textSecondary" className={classes.h2}>
Contest rules
</Typography>

<Typography color="textSecondary">
There are a few rules to respect for the images to be eligible.<br/>

Rule 1: All photos must be taken by the person submitting them. They can be either self-uploaded or uploaded during a registered mass upload session.<br />

Rule 2: Uploads can only be done from the 1st of February 2019 to 1st of March 2019. You can enter media that was taken at any time, even historical photographs (as long as you own the copyright on these photographs), but they must be uploaded during those dates.<br />

Rule 3: Images must be free of watermarks or embedded signatures to be eligible. All entries will automatically be submitted under a free licence such as Creative Commons Attribution-Share Alike 4.0 (CC-BY-SA 4.0) (or in the public domain). Read more about the cc-by-sa license here.<br />

Rule 4: All eligible pictures will be categorised under Images from Wiki Loves Africa 2019, this will be automatically assigned during the upload process. (Feel free to add other relevant category descriptions to make the images more usable.) <br />

Rule 5: Participants must enable e-mail on Wikimedia Commons so they can be contacted should their image be chosen for a prize.
Notes on video <br />
</Typography>

<Typography className={classes.p}>
Other files, such as audio and video, are welcome. For videos, please submit files in the following formats:
<br />
.ogg<br />
.ogv <br />
.webm<br />
</Typography>

<Typography color="textSecondary" className={classes.p}>
Due to complex intellectual property rights issues, Wikimedia Commons can not accept video content that is submitted in any other format. A helpful 'how to' guide on how to convert video media into these formats can be found here on Wikimedia. It is suggested that you upload video content one video at a time.
</Typography>            </div>
        </div>
    )
}

export default withStyles(styles)(GuidelinesContent);