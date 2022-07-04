import React from 'react';
import { SideBar } from '../sideBar';
import './style.scss'

interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({ }) => {
    return (
        <div className="App">
            <SideBar />
            <div className="page">
                <span className="top-tag-html">&lt;/html&gt;</span>

                <span className="tags top-tags">&lt;body&gt;</span>

                {/* <Outlet /> */}
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    );
}