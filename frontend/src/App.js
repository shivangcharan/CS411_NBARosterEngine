import './App.css';
import React, { useState, useEffect } from "react";
import Tabs from "./Components/Tabs";
import Axios from 'axios';
import BasicTable from './Player_Table';
import BasicTable2 from './Teams';
import BasicTable4 from './roster'
import BasicTable3 from './Analytics';


function App() {
    return (
        <div className="App">
            <h1 className="title"> NBA Roster Engine</h1>
            <Tabs>
                <div label="Teams">
                    <BasicTable2/>
                </div>
                <div label="Players">
                    <BasicTable/>
                </div>
                <div label="Roster Engine">
                    <BasicTable4/>
                    
                </div>
                <div label="Analytics">
                    <BasicTable3/>
                </div>
            </Tabs>

        </div>
    );
}

export default App;
