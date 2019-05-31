import React from 'react';
import MetaContentSection from '../../widgets/meta/MetaContentSection';
import { Typography } from '@material-ui/core';

class FAQComponent extends React.PureComponent
{
    render() {
        const links = [{label: "Home", route: "/"}, {label: "FAQ", route: "/faq"}];
        return (
            <div>
                <MetaContentSection links={links}>
                    <Typography variant="h3">Frequently Asked Questions</Typography>
                </MetaContentSection>
            </div>
            
        )
    }
}

export default FAQComponent;