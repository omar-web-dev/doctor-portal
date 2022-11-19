import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../DashboardPage/SharedPage/Header';

const DashboardLayOut = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>



            {/* <div className='flex gap-5 max-w-[1440px] mx-auto'>
                <div className='w-1/5'>
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                    </div>
                    <div className="drawer-side">
                        <label htmlhtmlFor="dashboard-drawer" ></label>
                        <ul className="menu p-4 w-full  bg-base-100 text-base-content">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>

                        </ul>
                    </div>
                </div>
                <div className="w-4/5">
                    <Outlet />
                </div>

            </div> */}

        </div>
    );
};

export default DashboardLayOut;