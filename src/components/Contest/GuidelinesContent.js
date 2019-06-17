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
});

function GuidelinesContent(props) {
    const { classes } = props;
    return (
        <div className={classes.content}>
			<Typography color="textSecondary" className={classes.h1}>CONTEST GUIDLINES</Typography>
							
			<Typography color="textSecondary" className={classes.h1}>ABOUT THE STAGE</Typography>
							
			
			<Typography color="textSecondary" className={classes.p}>The Stage is a talent hunt competition open to all Nigerian youths of 18 years and above with talents that can be showcased on a stage such as singing, acting, dancing etc.</Typography>
			
			<Typography color="textSecondary" className={classes.p}>This is the second edition of the competition. The first edition took place in 2018 and Gpenzy was crowned the overall winner and received 3 million naira and a brand new Kia Rio saloon car, Zealot was the first runner up and received Two Million naira and McChreyl rounded up the top three as the second runner up and received One Million naira.</Typography>
			
			<Typography color="textSecondary" className={classes.p}>The major objective of The Stage is to provide a platform for talented youths in Nigeria to showcase their talent and also financially empower them during this process.</Typography>
			 
			<Typography color="textSecondary" className={classes.p}>The Stage is an annual event owned and sponsored primarily by Konnectore.</Typography>
			
			<Typography className={classes.h2}>THE STAGE 2019</Typography>
			
			<Typography color="textSecondary" className={classes.p}>Registration for The Stage 2019 is free</Typography>
			
			<Typography color="textSecondary" className={classes.p}>Prizes to be won:</Typography>
			
			<ol className="guideList">
			<li>
				First Prize – Three Million naira, a Mercedes Benz Car and an ambassadorial position with Konnectore.
				</li>
			<li>
			Second Prize – Two Million naira, a Konnectore Gift Pack and an ambassadorial position with Konnectore.
			</li>
			<li>
			 Third Prize – One million naira, a Konnectore Gift Pack and an ambassadorial position with Konnectore.
			</li>
			<li>
			 Consolation Prizes – Consolation prizes to all the contestants that make it to the grand finale.
			</li>
			</ol>
			
			
			<Typography className={classes.h2}>Segments in The Stage 2019</Typography>
			<ul className="guideList">
				<li>
			 Audition Segment: This segment will take place on the Konnectore mobile application. Here, all the contestants will be instructed to upload a one minute video of them showcasing their talent and The Stage’s team of judges will select the best among them to contest in The Stage 2019.
			</li>
			<li>
			 Role Model Segment: This segment will also take place on the Konnectore mobile application. In this segment, all the qualified contestants will be instructed to upload a one minute video of them mimicking their favourite Role Model and the contestants with the lowest likes on their videos will be evicted out of The Stage 2019 while others proceed to the next segment of the competition.
			</li>
			<li>
			 Talent Segment: This segment will also take place on the Konnectore mobile application. Here, all the qualified contestants will be instructed to upload a one minute video of them showcasing their original content and the contestants with the lowest likes on their video will be evicted out of The Stage 2019 while others proceed to the next segment of the competition.
			</li>
			<li>
				People’s Choice Segment: This is the last segment that will take place on the Konnectore mobile application. Here, all the qualified contestants will be instructed to upload a two-minute video of them performing either their original content or the work of someone else. In this segment, contestants are permitted to use backup singers, props, extras or a band to enhance their performance. The goal of this segment is for a contestant to do anything in line with the contest rules and regulations to ensure that he or she makes it to the next segment of the competition.  
			</li>
			<li>
			 Fame Camp Segment: This segment will not take place on the Konnectore mobile application. Here, all the qualified contestants will meet physically in The Stage 2019’s camp facility know as Fame Camp and they will be professionally trained on how to become experts in their various crafts. They will also be taught how to effectively perform at the grand finale of the competition. All Fame Camp activities will be aired on DSTV during this period.
			</li>
			<li>
			 Grand Finale: This is the final segment of The Stage 2019 and it will take place at an event venue in Lagos. Here, all the qualified contestants will compete for who will emerge as the overall winner of The Stage 2019. The grand finale will be broadcasted live on DSTV.
			</li>
			</ul>
			
			<Typography color="textSecondary" className={classes.p}>PS: Specific details and instructions for each segment will be made available as each contestant progresses to the next segment.</Typography>
			<Typography color="textSecondary" className={classes.p}>For more information contact 0906008533 or thestage@konnectore.com</Typography>
			
				</div>
    )
}

export default withStyles(styles)(GuidelinesContent);