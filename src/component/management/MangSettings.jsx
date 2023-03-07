import React from 'react';
import MangNavbar from './MangNavbar';
import MangSidebar from './MangSidebar';

export default class MangSettings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex" id="wrapper">
                    <MangSidebar />
                    <div id="page-content-wrapper">
                        <MangNavbar />
                        <div class="sub-heading px-3 py-2">
                            <h3>Settings</h3>
                        </div>
                        <div className="container-fluid Mang-Settings">
                            <h1 className="text-danger">On Going</h1>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}