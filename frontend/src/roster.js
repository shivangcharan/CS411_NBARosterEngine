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
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

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

function BasicTable4() {
    const classes = useStyles();
    const [playerData, setPlayerData] = useState([]);
    const [playerData1, setPlayerData1] = useState([]);
    const [playerData2, setPlayerData2] = useState([]);
    const [playerData3, setPlayerData3] = useState([]);
    const [playerData4, setPlayerData4] = useState([]);
    const [playerData5, setPlayerData5] = useState([]);
    const [playerData6, setPlayerData6] = useState([]);
    const [playerData7, setPlayerData7] = useState([]);
    const [playerData8, setPlayerData8] = useState([]);
    const [playerData9, setPlayerData9] = useState([]);
    const [playerData10, setPlayerData10] = useState([]);
    const [playerData11, setPlayerData11] = useState([]);
    const [playerData12, setPlayerData12] = useState([]);
    const [playerData13, setPlayerData13] = useState([]);
    const [playerData14, setPlayerData14] = useState([]);

    const [playerDatat, setPlayerDatat] = useState([]);
    const [playerDatat1, setPlayerDatat1] = useState([]);
    const [playerDatat2, setPlayerDatat2] = useState([]);
    const [playerDatat3, setPlayerDatat3] = useState([]);
    const [playerDatat4, setPlayerDatat4] = useState([]);
    const [playerDatat5, setPlayerDatat5] = useState([]);
    const [playerDatat6, setPlayerDatat6] = useState([]);
    const [playerDatat7, setPlayerDatat7] = useState([]);
    const [playerDatat8, setPlayerDatat8] = useState([]);
    const [playerDatat9, setPlayerDatat9] = useState([]);
    const [playerDatat10, setPlayerDatat10] = useState([]);
    const [playerDatat11, setPlayerDatat11] = useState([]);
    const [playerDatat12, setPlayerDatat12] = useState([]);
    const [playerDatat13, setPlayerDatat13] = useState([]);
    const [playerDatat14, setPlayerDatat14] = useState([]);

    const [teamName, oldteamName] = useState('');
    const [playerName, setplayerName] = useState('');
    const [teamName2, setnewTeam] = useState('');
    const [playerName2, setplayerName2] = useState('');

    const updateplayer = () => {
        Axios.put(`http://localhost:3002/api/update2`, {
            playerName: playerName,
            playerName2: playerName2,
            teamName: teamName,
            teamName2: teamName2
        }).then(() => {
            alert('success insert');
        })
    };


    const [search, setSearch] = useState([]);

    const getPlayerData = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data1');
             setPlayerData(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData();
    }, [])

    const getPlayerData1 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data2');
             setPlayerData1(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData1();
    }, [])

    const getPlayerData2 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data3');
             setPlayerData2(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData2();
    }, [])

    const getPlayerData3 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data4');
             setPlayerData3(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData3();
    }, [])

    const getPlayerData4 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data5');
             setPlayerData4(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData4();
    }, [])

    const getPlayerData5 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data6');
             setPlayerData5(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData5();
    }, [])

    const getPlayerData6 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data7');
             setPlayerData6(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData6();
    }, [])

    const getPlayerData7 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data8');
             setPlayerData7(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData7();
    }, [])

    const getPlayerData8 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data9');
             setPlayerData8(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData8();
    }, [])

    const getPlayerData9 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data10');
             setPlayerData9(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData9();
    }, [])

    const getPlayerData10 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data11');
             setPlayerData10(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData10();
    }, [])

    const getPlayerData11 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data12');
             setPlayerData11(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData11();
    }, [])

    const getPlayerData12 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data13');
             setPlayerData12(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData12();
    }, [])

    const getPlayerData13 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data14');
             setPlayerData13(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData13();
    }, [])

    const getPlayerData14 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_data15');
             setPlayerData14(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerData14();
    }, [])






    const getPlayerDatat = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat1');
             setPlayerDatat(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat();
    }, [])

    const getPlayerDatat1 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat2');
             setPlayerDatat1(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat1();
    }, [])

    const getPlayerDatat2 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat3');
             setPlayerDatat2(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat2();
    }, [])

    const getPlayerDatat3 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat4');
             setPlayerDatat3(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat3();
    }, [])

    const getPlayerDatat4 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat5');
             setPlayerDatat4(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat4();
    }, [])

    const getPlayerDatat5 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat6');
             setPlayerDatat5(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat5();
    }, [])

    const getPlayerDatat6 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat7');
             setPlayerDatat6(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat6();
    }, [])

    const getPlayerDatat7 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat8');
             setPlayerDatat7(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat7();
    }, [])

    const getPlayerDatat8 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat9');
             setPlayerDatat8(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat8();
    }, [])

    const getPlayerDatat9 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat10');
             setPlayerDatat9(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat9();
    }, [])

    const getPlayerDatat10 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat11');
             setPlayerDatat10(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat10();
    }, [])

    const getPlayerDatat11 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat12');
             setPlayerDatat11(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat11();
    }, [])

    const getPlayerDatat12 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat13');
             setPlayerDatat12(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat12();
    }, [])

    const getPlayerDatat13 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat14');
             setPlayerDatat13(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat13();
    }, [])

    const getPlayerDatat14 = async () => {
        try {
            const data = await Axios.get('http://localhost:3002/api/player_datat15');
             setPlayerDatat14(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPlayerDatat14();
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
            


  {' '}
  {' '}
  {' '}


            {/*menu*/ }

            
            

            <div>
                <h2>Trade Players</h2>
                <TextField
                    label = "Player1 Name: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setplayerName(e.target.value)
                    }}
                />
                <TextField
                    label = "Team: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        oldteamName(e.target.value)
                    }}
                />
                <br/>
                <TextField
                    label = "Player2 Name: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setplayerName2(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                <TextField
                    label = "Team: "
                    color = "primary"
                    size = "small"
                    margin = "none"
                    onChange={(e) => {
                        setnewTeam(e.target.value)
                    }}
                />
                &nbsp;&nbsp;&nbsp;
                
                &nbsp;&nbsp;&nbsp;
                <Button color="primary" onClick={updateplayer}>Submit</Button>
            </div>






<br/>

          

            <h2>Chicago Bulls</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <br />
  <br />

        <h2>Cleveland Cavaliers</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData1
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Detroit Pistons</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData2
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Indiana Pacers</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerData3
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>
<h2>Milwaukee Bucks</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData4
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Atlanta Hawks</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData5
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Charlotte Hornets</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData6
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Miami Heat</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData7
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Orlando Magic</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData8
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Washington Wizards</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData9
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Boston Celtics</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData10
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Brooklyn Nets</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData11
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>New York Knicks</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData12
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Philadelphia 76ers</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData13
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <h2>Toronto Raptors</h2>




        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Salary</StyledTableCell>
                <StyledTableCell align="right">Position</StyledTableCell>
                <StyledTableCell align="right">Accolades</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {playerData14
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
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>




        <h2>Denver Nuggets</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<br />
<br />

<h2>Minnesota Timberwolves</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat1
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Oklahoma City Thunder</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat2
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Portland Trail Blazers</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
<TableHead>
<TableRow>
<StyledTableCell>Name</StyledTableCell>
<StyledTableCell align="right">Salary</StyledTableCell>
<StyledTableCell align="right">Position</StyledTableCell>
<StyledTableCell align="right">Accolades</StyledTableCell>
<StyledTableCell align="right">Team</StyledTableCell>
</TableRow>
</TableHead>
<TableBody>
{playerDatat3
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
</StyledTableRow>
))}
</TableBody>
</Table>
</TableContainer>
<h2>Utah Jazz</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat4
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Golden State Warriors</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat5
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>LA Clippers</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat6
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Los Angeles Lakers</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat7
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Phoenix Suns</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat8
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Sacramento Kings</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat9
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Dallas Mavericks</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat10
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Houston Rockets</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat11
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>Memphis Grizzlies</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat12
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>New Orleans Pelicans</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat13
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

<h2>San Antonio Spurs</h2>




<TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
    <TableHead>
    <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Salary</StyledTableCell>
        <StyledTableCell align="right">Position</StyledTableCell>
        <StyledTableCell align="right">Accolades</StyledTableCell>
        <StyledTableCell align="right">Team</StyledTableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {playerDatat14
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
        </StyledTableRow>
    ))}
    </TableBody>
</Table>
</TableContainer>

        </div>
  );
  
}
export default BasicTable4;
