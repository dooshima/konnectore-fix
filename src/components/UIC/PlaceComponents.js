import React from 'react';

const PlaceComponents = props => {
    const { children, spacer } = props;
    const items = React.Children.map(children, item => {
        return <>
            {item}
        </>
    });
    return (
        <>
        {
            items.map( item => {
                return <>
                    {item}
                    <div style={{flex:1,height:spacer}} />
                </>
            })
        }
        </>
    )
};

export default PlaceComponents;
