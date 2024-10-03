import {useEffect, useState} from 'react'
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
    const[showModal, setShowModal] = useState(false);
    const[data, setData] = useState(null);
    const NASA_KEY = import.meta.env.VITE_APOD_NASA_API_KEY;
    function toggleModal() {
        setShowModal(!showModal);
    }

    useEffect(() => {
        async function fetchData() {
            const url = 'https://api.nasa.gov/planetary/apod' + '?api_key=' + NASA_KEY

            const today = (new Date()).toDateString();
            const localKey = `NASA_${today}`;
            if(localStorage.getItem(localKey) !== null) {
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData);
                console.log(`fetched data from cache ${today}`);
                // console.log(apiData);
                return;
            }

            localStorage.clear();

            try{
                const res = await fetch(url);
                const apiData = await res.json();
                localStorage.setItem(localKey, JSON.stringify(apiData));
                setData(apiData);
                console.log(`fetched data from API ${today}`);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {data ? (<Main data={data}/>) : (
                <div className={"loadingState"}>
                    <i className={"fa-solid fa-gear"}></i>
                </div>
            )}
            {showModal && (<SideBar data={data} toggleModal={toggleModal} />)}
            {data && (<Footer data={data} toggleModal={toggleModal} />)}
        </>
    )
}

export default App
