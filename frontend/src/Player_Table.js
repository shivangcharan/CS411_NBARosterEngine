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

function BasicTable() {
    const classes = useStyles();
    const [playerData, setPlayerData] = useState([]);
    const [search, setSearch] = useState([]);

    const getPlayerData = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data');
             setPlayerData(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData();
    }, [])

    return (
        <div className="form">
            <div>
                <TextField
                    label = "Search: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setSearch(e.target.value)
                }}
                 />
            </div>
            <br/>



        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
                <StyledTableCell align="right">Rebounds</StyledTableCell>
                <StyledTableCell align="right">Assists</StyledTableCell>
                <StyledTableCell align="right">Steals</StyledTableCell>
                <StyledTableCell align="right">Blocks</StyledTableCell>
                <StyledTableCell align="right">Points</StyledTableCell>
                <StyledTableCell align="right">Player_ID</StyledTableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {playerData
            .filter((item) => {
                if (search == "") {
                    return item;
                }
                else if (item.Name.toLowerCase().includes(search.toLowerCase())){
                    return item;
                }
            })
            .map((item) => (
                <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                    {item.Name}
                </StyledTableCell>
                <StyledTableCell align="right">{item.Salary}</StyledTableCell>
                <StyledTableCell align="right">{item.Position}</StyledTableCell>
                <StyledTableCell align="right">{item.Accolades}</StyledTableCell>
                <StyledTableCell align="right">{item.Team}</StyledTableCell>
                <StyledTableCell align="right">{item.Rebounds}</StyledTableCell>
                <StyledTableCell align="right">{item.Assists}</StyledTableCell>
                <StyledTableCell align="right">{item.Steals}</StyledTableCell>
                <StyledTableCell align="right">{item.Blocks}</StyledTableCell>
                <StyledTableCell align="right">{item.Points}</StyledTableCell>
                <StyledTableCell align="right">{item.Player_ID}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
  );
  
}
export default BasicTable;
