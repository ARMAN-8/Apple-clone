import React from "react";
import ReactDom from 'react-dom';
import NavBar from "../NavBar";
import MainContent from "../MainContent";
import Footer from "../Footer";

const App = () => {
    return (
        <div>
            <NavBar/>
            <MainContent/>
            <Footer/>
        </div>
    )
}
export default App;
