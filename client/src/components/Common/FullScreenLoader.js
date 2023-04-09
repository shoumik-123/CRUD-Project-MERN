import React from 'react';
import Loading from 'react-fullscreen-loading';

class FullScreenLoader extends React.Component {
    render() {
        return(
            <Loading loading background="#f2f3f7" loaderColor="#02030a" />
        )
    }
}

export default FullScreenLoader;