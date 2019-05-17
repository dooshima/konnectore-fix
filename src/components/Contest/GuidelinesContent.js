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
            <div>
            <Typography color="textSecondary">
            The Stage is a talent hunt competition open to all Nigerian youths above 18
years with talents that can be showcased on a stage such as musicians,
dancers, actors, comedians etc.

</Typography>

<Typography color="textSecondary">
This is the second edition of the competition. The first edition took place in
2018 and Gpenzy emerged as the overall winner and recieved 3million
naira and a brand new Kia Rio, Zealot emerged as the first runner up and
received One Million naira and Mcchreyl emerged as the second runner up
and received One Million naira.</Typography>
<Typography color="textSecondary">
The major objective of The Stage is to provide a platform for talented
youths in Nigeria to showcase their talent and also financially empower
them during this process.
</Typography>

<Typography className={classes.h2}>THE STAGE 2019:</Typography>
<Typography color="textSecondary">
Registration for The Stage 2019 is free</Typography>

<Typography color="textSecondary">
This theme encompasses a host of approaches and is intentionally open to interpretation. The theme Play! encourages the submission of representations of joyful and serious games, sport, and recreation in the form of board or mental games, physical fun or contests, playful interactions, theatrical and musical performances, etc. 
There are several prizes to grab. Including two special prizes for photos or videos or audio that captures Women in sport or Culturally specific or traditional formal forms of play, recreation or events. 
>>Read more about the theme and get inspiration here.
</Typography>

<Typography className={classes.h2}>
PRICES</Typography>

<Typography color="textSecondary">
Images submitted to the Wiki Loves Africa contest may win prizes!</Typography>
<List>
    <ListItemText>1. First Prize – Three Million Naira + Mercedes Benz Car + Becoming an
ambassador of Konnector</ListItemText>
    <ListItemText>2. SecondPrize – Two Million naira + Konnectore Gift Pack + Becoming
an Ambassador of Konnector</ListItemText>
    <ListItemText>3. Third Prize – One million naira + Konnectore Gift Pack + Becoming an
Ambassador of Konnector</ListItemText>
	<ListItemText>4. Consolation Prizes – Consolation prizes to all contestants that
makes it to the grandfinale</ListItemText>
</List>

<Typography color="textSecondary" className={classes.h2}>
Segments in The Stage 2019
</Typography>

<ul>
	<li>
		<Typography color="textSecondary" className={classes.p}>
			Audition Segment:This segment will take place on Konnectore. Here
all contestants will be instructed to upload a one-minute video of
them showcasing their talent and The Stage team of judges will
select the best among them to contest in the Stage 2019.
		</Typography>
	</li>
	<li>
		<Typography color="textSecondary" className={classes.p}>
			RoleModelSegment:Thissegmentwillalsotakeplaceon
Konnectore.Inthissegment,allthequalifiedcontestantswillbe
instructedtouploadoneminutevideoofthem mimickingtheir
favouriteRoleModelandcontestantswiththelowestlikesontheir
videowillbeevictedoutofTheStage2019whileothersproceedto
thenextsegmentofthecompetition
		</Typography>
	</li>
	<li>
		<Typography color="textSecondary" className={classes.p}>
			TalentSegment:ThissegmentwillalsotakeplaceonKonnectore.
Hereallthequalifiedcontestantswillbeinstructedtouploadone
minutevideoofthem showcasingtheiroriginalcontentandnota
copyrightandcontestantswiththelowestlikesontheirvideowillbe
evictedoutofTheStage2019whileothersproceedtothenext
segmentofthecompetition
		</Typography>
	</li>
	<li>
		<Typography color="textSecondary" className={classes.p}>
			People’sChoiceSegment:Thisisthelastsegmentthatwilltake
placeonKonnectore.Hereallthequalifiedcontestantswillbe
instructedtouploadatwominutesvideoofthem performingeither
theirorigianlcontentoracopyright.Inthissegmentcontestantsare
permittedtousebackupsorabandtoenhancetheirperformance.
Thegoalofthissegmentforacontestantisforsuchacontestantto
doanythinginlinewiththecontestrulesandregulationstoensure
he/shemakesittothenextsegmentofthecompetition
		</Typography>
	</li>
	<li>
		<Typography color="textSecondary" className={classes.p}>
			FameCampSegment:Thissegmentwillnottakeplaceon
Konnectore.Hereallthequalifiedcontestantswillmeetphysicallyin
thestage2019campfacilityknowasFameCampandtheywillbe
professionallytrainedonhowtobecomeexpertsintheirvarious
craftsandhowtoeffectiveperform atthegrandfinaleofthe
competition.FameCampactivitieswillbebroadcastedonDSTV
duringthisperiod
		</Typography>
	</li>
	<li>
		<Typography color="textSecondary" className={classes.p}>
			GrandFinale:Thisisthefinalsegmentofthestage2019anditwill
takeplaceataneventvenueinLagos.Hereallthequalified
contestantswillcompeteforwhowillemergeasthewinnerofthe
stage2019.ThegrandfinalewillbebroadcastedliveonDSTV.
		</Typography>
	</li>
</ul>

<Typography color="textSecondary" className={classes.p}>
PS:Specificdetailsandinstructionsforeachsegmentwillbemade
availableaseachcontestantprogressestothenextsegment
</Typography>

<Typography color="textSecondary" className={classes.p}>
Formoreinformationcontact0906008533orthestage@konnectore.com
</Typography>           </div>
        </div>
    )
}

export default withStyles(styles)(GuidelinesContent);