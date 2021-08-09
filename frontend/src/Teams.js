import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';


import {TextField} from '@material-ui/core'


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
  
  
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function BasicTable2() {
    const classes = useStyles();
    const [teamName, setTeamName] = useState('');
    const [capRoom, setCapRoom] = useState('');
    const [total_money_spent, setTotal_money_spent] = useState('');
    const [draft_picks, setDraft_picks] = useState('');
    
    const [teamList, setTeamList] = useState([]);

    const [dTeamName, setTeamNameDelete] = useState('');
    

    useEffect(() => {
        Axios.get('http://localhost:3002/api/get').then((response) => {
            setTeamList(response.data)
        })
    }, [])

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

    const updateTotalMoney = () => {
        Axios.put(`http://localhost:3002/api/update`, {
            teamName: teamName,
            total_money_spent: total_money_spent
        }).then(() => {
            alert('success insert');
        })
    };

    return (
        <div className="form">
            {/* Add Team */}
            <div> 
                <h2>Add Team</h2>
                <TextField
                    label = "Team Name: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setTeamName(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <TextField
                    label = "Cap Room: "
                    color = "primary"
                    size = "small"
                    onChange={(e) => {
                        setCapRoom(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <TextField
                    label = "Total Money Spent: "
                    color = "primary"
                    size = "small"
                    onChange={(e) => {
                        setTotal_money_spent(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <TextField
                    label = "Draft Picks: "
                    color = "primary"
                    size = "small"
                    onChange={(e) => {
                        setDraft_picks(e.target.value)
                    }}
                />
                <Button color="primary" onClick={addTeam}>Submit</Button> 
            </div>
            <br/>
            <div className="team-div">        
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Team Name</StyledTableCell>
                        <StyledTableCell align="right">Cap Room</StyledTableCell>
                        <StyledTableCell align="right">Total Money Spent</StyledTableCell>
                        <StyledTableCell align="right">Draft Picks</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {teamList.map((item) => (
                        <StyledTableRow key={item.id}>
                        <StyledTableCell component="th" scope="row">
                            {item.Team}
                        </StyledTableCell>
                        <StyledTableCell align="right">{item.Cap_Room}</StyledTableCell>
                        <StyledTableCell align="right">{item.Total_Money_Spent}</StyledTableCell>
                        <StyledTableCell align="right">{item.Draft_Picks}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            <div>
                <h2>Delete Team</h2>
                <TextField
                    label = "Team Name: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setTeamNameDelete(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <Button color="primary" onClick={deleteTeam(dTeamName)}>Submit</Button>
            </div>
            <div>
                <h2>Update Team</h2>
                <TextField
                    label = "Team Name: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setTeamName(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <TextField
                    label = "Team Money Spent: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setTotal_money_spent(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <Button color="primary" onClick={updateTotalMoney}>Submit</Button>
            </div>
            

        </div>
       
    );

}

export default BasicTable2;
