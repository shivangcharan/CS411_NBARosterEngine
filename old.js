import './App.css';
import React, { useState, useEffect } from "react";
import Tabs from "./Components/Tabs";
import Axios from 'axios';
import BasicTable from './Player_Table';


function App() {
    const [teamName, setTeamName] = useState('');
    const [capRoom, setCapRoom] = useState('');
    const [total_money_spent, setTotal_money_spent] = useState('');
    const [draft_picks, setDraft_picks] = useState('');

    const [dTeamName, setTeamNameDelete] = useState('');

    const [teamList, setTeamList] = useState([]);
    const [query1List, setQuery1List] = useState([]);
    //const [query2List, setQuery2List] = useState([]);

    const [findTeam, setFindTeam] = useState('');
    const [findTeamArray, sendFindTeamArray] = useState([]);
    

    useEffect(() => {
        Axios.get('http://localhost:3002/api/get').then((response) => {
            setTeamList(response.data)
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3002/api/query1').then((response) => {
            setQuery1List(response.data)
        })
    }, [])


    const findTeamFunc = () => {
        Axios.post('http://localhost:3002/api/find', {
            teamName: findTeam,
        }).then((response) => {
            sendFindTeamArray(response.data);
        })
    };

    const addTeam = () => {
        Axios.post('http://localhost:3002/api/insert', {
            teamName: teamName,
            capRoom: capRoom,
            total_money_spent: total_money_spent,
            draft_picks: draft_picks
        }).then(() => {
            alert('success insert');
        })
    };

    const deleteTeam = (deleteTeamName) => {
        Axios.delete(`http://localhost:3002/api/delete/${deleteTeamName}`);
    };

    const updateTotalMoney = (movieName) => {
        Axios.put(`http://localhost:3002/api/update`, {
            teamName: teamName,
            total_money_spent: total_money_spent
        }).then(() => {
            alert('success insert');
        })
    };

    return (
        <div className="App">
            <h1> NBA Roster Engine</h1>
            <Tabs>
                <div label="Teams">
                    <div className="form">
                        {/* table */}
                        <h2>NBA Teams</h2>
                        <table id="team">
                            <tr>
                                <th>Team</th>
                                <th>Cap Room</th>
                                <th>Total_Money_Spent</th>
                                <th>Draft_Picks</th>
                            </tr>
                            {teamList.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.Team} </td>
                                        <td>{val.Cap_Room}</td>
                                        <td>{val.Total_Money_Spent}</td>
                                        <td>{val.Draft_Picks}</td>
                                        {/* <button onClick={deleteTeam(val.Team)}> Delete</button> */}
                                    </tr>
                                );
                                ;
                            })}
                        </table>

                        {/* Add Team */}
                        <h3>Add Team</h3>
                        <label> Team Name:</label>
                        <input type="text" name="teamName" onChange={(e) => {
                            setTeamName(e.target.value)
                        }} />
                        <label> Cap Room:</label>
                        <input type="text" name="capRoom" onChange={(e) => {
                            setCapRoom(e.target.value)
                        }} />
                        <label> Total Money Spent:</label>
                        <input type="text" name="total_money_spent" onChange={(e) => {
                            setTotal_money_spent(e.target.value)
                        }} />
                        <label> Draft Picks:</label>
                        <input type="text" name="draft_picks" onChange={(e) => {
                            setDraft_picks(e.target.value)
                        }} />
                        <button onClick={addTeam}> Submit</button>


                        {/* Delete Team */}
                        <h3>Delete Team</h3>
                        <label> Delete Team Name:</label>
                        <input type="text" name="dTeamName" onChange={(e) => {
                            setTeamNameDelete(e.target.value)
                        }} />
                        <button onClick={deleteTeam(dTeamName)}> Delete</button>

                        {/* Update total money for team */}
                        <h3>Update Team</h3>
                        <label> Update Team Name:</label>
                        <input type="text" name="teamName" onChange={(e) => {
                            setTeamName(e.target.value)
                        }} />
                        <label> Update Team Total Money Spent:</label>
                        <input type="text" name="total_money_spent" onChange={(e) => {
                            setTotal_money_spent(e.target.value)
                        }} />
                        <button onClick={updateTotalMoney}> Update</button>

                        <h3>Find Team Info</h3>
                        <label> Team Name:</label>
                        <input type="text" name="findTeam" onChange={(e) => {
                            setFindTeam(e.target.value)
                        }} />
                        <button onClick={findTeamFunc}> Submit</button>

                        <table id="team">
                            <tr>
                                <th>Team</th>
                                <th>Cap Room</th>
                                <th>Total_Money_Spent</th>
                                <th>Draft_Picks</th>
                            </tr>
                            {findTeamArray.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.Team} </td>
                                        <td>{val.Cap_Room}</td>
                                        <td>{val.Total_Money_Spent}</td>
                                        <td>{val.Draft_Picks}</td>
                                        {/* <button onClick={deleteTeam(val.Team)}> Delete</button> */}
                                    </tr>
                                );
                                ;
                            })}
                        </table>

                        {/* table */}
                        <h2>Query 1</h2>
                        <table id="team">
                            <tr>
                                <th>Team</th>
                                <th>Avg(Salary)</th>
                                <th>Count(Accolades)</th>
                            </tr>
                            {query1List.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.Team} </td>
                                        <td>{val.salaryAvg}</td>
                                        <td>{val.total_accolades}</td>
                                    </tr>
                                );
                                ;
                            })}
                        </table>

                        {/* table */}
                        {/* <h2>Query 2</h2>
                        <table id="team">
                            <tr>
                                <th>Team</th>
                                <th>Draft Picks</th>
                                <th>SUM(Salary)</th>
                            </tr>
                            {query2List.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.Team} </td>
                                        <td>{val.Draft_Picks}</td>
                                        <td>{val.salarySum}</td>
                                    </tr>
                                );
                                ;
                            })}
                        </table> */}
                    </div>
                </div>
                <div label="Players">
                    After 'while, <em>Crocodile</em>!
                    
                </div>
                <div label="Roster Engine">
                    After 'while, <em>Crocodile</em>!
                {/* <BasicTable/> */}
                </div>
            </Tabs>

        </div>


    );


}

export default App;





<div label="Teams">
                    <div className="form">
                        {/* table */}
                        <h2>NBA Teams</h2>
                        <table id="team">
                            <tr>
                                <th>Team</th>
                                <th>Cap Room</th>
                                <th>Total_Money_Spent</th>
                                <th>Draft_Picks</th>
                            </tr>
                            {teamList.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.Team} </td>
                                        <td>{val.Cap_Room}</td>
                                        <td>{val.Total_Money_Spent}</td>
                                        <td>{val.Draft_Picks}</td>
                                        {/* <button onClick={deleteTeam(val.Team)}> Delete</button> */}
                                    </tr>
                                );
                                ;
                            })}
                        </table>
                            
                        {/* Add Team */}
                        <h3>Add Team</h3>
                        <TextField
                            label = "Team Name:"
                            color = "primary"
                            size = "small"
                            margin = "none"
                            onChange={(e) => {
                                setTeamName(e.target.value)
                            }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <TextField
                            label = "Cap Room:"
                            color = "primary"
                            size = "small"
                            onChange={(e) => {
                                setCapRoom(e.target.value)
                            }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <TextField
                            label = "Total Money Spent:"
                            color = "primary"
                            size = "small"
                            onChange={(e) => {
                                setTotal_money_spent(e.target.value)
                            }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <TextField
                            label = "Draft Picks:"
                            color = "primary"
                            size = "small"
                            onChange={(e) => {
                                setDraft_picks(e.target.value)
                            }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={addTeam}> Submit</button>


                        {/* Delete Team */}
                        <h3>Delete Team</h3>
                        <label> Delete Team Name:</label>
                        <input type="text" name="dTeamName" onChange={(e) => {
                            setTeamNameDelete(e.target.value)
                        }} />
                        <button onClick={deleteTeam(dTeamName)}> Delete</button>

                        {/* Update total money for team */}
                        <h3>Update Team</h3>
                        <label> Update Team Name:</label>
                        <input type="text" name="teamName" onChange={(e) => {
                            setTeamName(e.target.value)
                        }} />
                        <label> Update Team Total Money Spent:</label>
                        <input type="text" name="total_money_spent" onChange={(e) => {
                            setTotal_money_spent(e.target.value)
                        }} />
                        <button onClick={updateTotalMoney}> Update</button>

                        <h3>Find Team Info</h3>
                        <label> Team Name:</label>
                        <input type="text" name="findTeam" onChange={(e) => {
                            setFindTeam(e.target.value)
                        }} />
                        <button onClick={findTeamFunc}> Submit</button>

                        <table id="team">
                            <tr>
                                <th>Team</th>
                                <th>Cap Room</th>
                                <th>Total_Money_Spent</th>
                                <th>Draft_Picks</th>
                            </tr>
                            {findTeamArray.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.Team} </td>
                                        <td>{val.Cap_Room}</td>
                                        <td>{val.Total_Money_Spent}</td>
                                        <td>{val.Draft_Picks}</td>
                                        {/* <button onClick={deleteTeam(val.Team)}> Delete</button> */}
                                    </tr>
                                );
                                ;
                            })}
                        </table>

                    </div>
                </div>
