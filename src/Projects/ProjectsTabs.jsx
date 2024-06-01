import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProjectTabs = () => {
    return (
        <>
            <section id="projectsTabs">
                <div className="container">
                    <div className="tabs">
                        <NavLink exact to='/projects' activeClassName="active-tab"><button>All</button></NavLink>
                        <NavLink exact to='/projects/website-design' activeClassName="active-tab"><button>Website Design</button></NavLink>
                        <NavLink exact to='/projects/mobile-app-design' activeClassName="active-tab"><button>Mobile App Design</button></NavLink>
                        <NavLink exact to='/projects/web-development' activeClassName="active-tab"><button>Web Development</button></NavLink>
                    </div>
                    <Outlet/>
                </div>
            </section>
        </>
    );
};

export default ProjectTabs;
