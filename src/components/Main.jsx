import React from 'react';

const Main = (props) => {
    const { data } = props
    return (
        <div className="imgContainer">
            <img src="KeshriXLabs.png" className={"kxl-logo"}/>
            <img src={data.url} alt="man gradient photo"
                 className={"bgImage"}
            />
        </div>
    );
};

export default Main;