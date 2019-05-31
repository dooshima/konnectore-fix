import React from 'react';
import MetaContentSection from '../../widgets/meta/MetaContentSection';
import { Typography } from '@material-ui/core';

class AboutComponent extends React.PureComponent
{
    render() {
        const links = [{label: "Home", route: "/"}, {label: "About Konnecotore", route: "/about"}];
        return (
            <div>
                <MetaContentSection links={links}>
                    <Typography variant="h3">About Konnectore</Typography>
                </MetaContentSection>
            </div>
            
        )
    }
}

export default AboutComponent;