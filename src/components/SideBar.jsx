import React from 'react';

const SideBar = (props) => {
    const { toggleModal, data} = props;
    return (
        <div className="sidebar">
            <div className={"bgOverlay"}  onClick={toggleModal}></div>
            <div className={"sidebarContents"}>
                <h2>{data.title}</h2>
                <div className={"descriptionContainer"}>
                    <p className={"descriptionTitle"}>Description</p>
                    <p>{data.explanation}</p>
                </div>
                <button  onClick={toggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default SideBar;