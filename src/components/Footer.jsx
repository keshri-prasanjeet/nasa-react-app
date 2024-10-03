import React from 'react';

const Footer = (props) => {
    const { toggleModal, data } = props
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = data.hdurl;  // Assuming 'hdurl' is the field for the HD image URL
        link.download = `${data.title}.jpg`;  // Optional: You can name the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <footer>
            <div className="bgGradient"></div>
            <div className={"footerContent"}>
                <div>
                    <h1>NASA APOD</h1>
                    <h2>{data.title}</h2>
                </div>
                <button onClick={toggleModal} className={"infoButton"}>
                    <i className="fa-solid fa-info"></i>
                </button>
            </div>
            <div className={"hdDownload"}>
                <button className={"download"} onClick={handleDownload}>Download in HD</button>
            </div>
        </footer>
    );
};

export default Footer;