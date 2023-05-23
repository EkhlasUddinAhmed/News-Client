import React from 'react';
import Header from '../../Components/Shared/Header/Header';
import LeftSideBar from '../../Components/Shared/LeftSideBar/LeftSideBar';
import { Outlet } from 'react-router-dom';
import RightSideBar from '../../Components/Shared/RightSideBar/RightSideBar';
import Footer from '../../Components/Shared/Footer/Footer';
import "./Main.css";
const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container bgColor">
                <div className="row justify-content-between">
                    <div className="col-2 shadow-lg">
                      <LeftSideBar></LeftSideBar>
                    </div>
                    <div className="col-7">
                      <Outlet></Outlet>
                    </div>
                    <div className="col-3 shadow-lg">
                        <RightSideBar></RightSideBar>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;