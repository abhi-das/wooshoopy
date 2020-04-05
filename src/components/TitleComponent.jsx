import React from 'react';

const TitleComponent = (props) => {

    const { titleText } = props.titleProps;
    const { descComp } = props.titleProps;
    return (
        <React.Fragment>
            <h4>{titleText}</h4>
            {descComp}
        </React.Fragment>
    )


}

export default TitleComponent;