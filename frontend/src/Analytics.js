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


function BasicTable3() {
    const classes = useStyles();
        
    const [ps1List, setPS1ist] = useState([]);
    const [ps2List, setPS2List] = useState([]);
    const [ps3List, setPS3List] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3002/api/ps1').then((response) => {
            setPS1ist(response.data)
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3002/api/ps2').then((response) => {
            setPS2List(response.data)
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3002/api/ps3').then((response) => {
            setPS3List(response.data)
        })
    }, [])

    const runPS = () => {
        Axios.post('http://localhost:3002/api/activatePS', {
        }).then(() => {
            alert('success insert');
        })
    };

    return (
        <div className="form">
            {/* Add Team */}
            <div> 
                <h2>Data Analytics</h2>
                
                <Button color="primary" onClick={runPS}>Submit</Button> 
            </div>
            <br/>
            <h2>Roster Competitiveness</h2>

            <div className="team-div">        
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Team Name</StyledTableCell>
                        <StyledTableCell align="right">Salary</StyledTableCell>
                        <StyledTableCell align="right">Count Accolades</StyledTableCell>
                        <StyledTableCell align="right">Player Value</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ps1List.map((item) => (
                        <StyledTableRow key={item.id}>
                        <StyledTableCell component="th" scope="row">
                            {item.Team}
                        </StyledTableCell>
                        <StyledTableCell align="right">{item.Salary}</StyledTableCell>
                        <StyledTableCell align="right">{item.Count_Acco}</StyledTableCell>
                        <StyledTableCell align="right">{item.Player_Value}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            
            <h2>Future Trajectory</h2>
            {/* Second ps */}
            <div className="team-div">        
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Team Name</StyledTableCell>
                        <StyledTableCell align="right">Draft Picks</StyledTableCell>
                        <StyledTableCell align="right">Total Salary</StyledTableCell>
                        <StyledTableCell align="right">Future Prediction</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ps2List.map((item) => (
                        <StyledTableRow key={item.id}>
                        <StyledTableCell component="th" scope="row">
                            {item.Team}
                        </StyledTableCell>
                        <StyledTableCell align="right">{item.Draft_Picks}</StyledTableCell>
                        <StyledTableCell align="right">{item.Total_Salary}</StyledTableCell>
                        <StyledTableCell align="right">{item.Future_Prediction}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
                        
            <h2>Star Power</h2>
            <div className="team-div">        
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Team Name</StyledTableCell>
                        <StyledTableCell align="right">ALL STARS Count</StyledTableCell>
                        <StyledTableCell align="right">Star Power</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ps3List.map((item) => (
                        <StyledTableRow key={item.id}>
                        <StyledTableCell component="th" scope="row">
                            {item.Team}
                        </StyledTableCell>
                        <StyledTableCell align="right">{item.Cnt_All_Stars}</StyledTableCell>
                        <StyledTableCell align="right">{item.Star_Power}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            
        </div>
       
    );

}

export default BasicTable3;
