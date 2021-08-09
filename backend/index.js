const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

var db = mysql.createConnection({
    host:'34.66.45.242',
    user: 'root',
    password:'PrN94acnqrBt2ipE',
    database:'game_stats',
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/get", (require, response) => {
    const sqlSelect = "SELECT * FROM team_info";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

app.post('/api/find', (require, response) => {
    const teamName = require.body.teamName;
    // console.log(teamName);
    const sqlInsert = 'SELECT * FROM team_info WHERE Team = ?'
    db.query(sqlInsert, teamName, (err, result) => {
        // console.log(result);
        response.send(result);
    })
});

app.post('/api/insert', (require, response) => {
    const teamName = require.body.teamName;
    const capRoom = require.body.capRoom;
    const total_money_spent = require.body.total_money_spent;
    const draft_picks = require.body.draft_picks;
    console.log(teamName);
    const sqlInsert = 'INSERT INTO team_info (Team, Cap_Room, Total_Money_Spent, Draft_Picks) VALUES (?, ?, ?, ?);'
    db.query(sqlInsert, [teamName, capRoom, total_money_spent, draft_picks], (err, result) => {
        console.log(err);
    })
});

app.delete("/api/delete/:deleteTeamName", (require, response) => {
    const deleteTeamName = require.params.deleteTeamName;
    const sqlDelete = 'DELETE FROM team_info WHERE Team = ?';
    db.query(sqlDelete, deleteTeamName, (err, result) => {
        if (err) 
        console.log(error);
    })
});

app.put("/api/update/", (require, response) => {
    const teamName = require.body.teamName;
    const total_money_spent = require.body.total_money_spent;
    
    const sqlUpdate = 'UPDATE team_info SET Total_Money_Spent = ? WHERE Team = ?';
    db.query(sqlUpdate, [total_money_spent,teamName], (err, result) => {
        if (err) 
        console.log(error);
    })
});


app.put("/api/update2/", (require, response) => {
    const playerName = require.body.playerName;
    const playerName2 = require.body.playerName2;
    const teamName = require.body.teamName;
    const teamName2 = require.body.teamName2;
    const sqlUpdate = 'UPDATE player SET team = ? WHERE name = ?';
    db.query(sqlUpdate, [teamName2, playerName], (err, result) => {
        if (err) 
        console.log(error);
    })
    const sqlUpdate2 = 'UPDATE player SET team = ? WHERE name = ?';
    db.query(sqlUpdate2, [teamName, playerName2], (err, result) => {
        if (err) 
        console.log(error);
    })
});


// Player Data 
app.get("/api/player_data", (require, response) => {
    const sqlSelect = 'SELECT * FROM player natural join game_stat';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

// Query 1 

app.get("/api/query1", (require, response) => {
    const sqlSelect = 'select Team, AVG(Salary) as salaryAvg, COUNT(Accolades) as total_accolades from player natural join game_stat where Salary > 20000000 group by Team;';
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

// Activate PS 
app.post('/api/activatePS', (require, response) => {
    const sqlInsert = 'CALL nba_prod()';
    db.query(sqlInsert, (err, result) => {
        console.log(err);
    })
});

// PS queries 
app.get("/api/ps1", (require, response) => {
    const sqlSelect = "SELECT * FROM FinalTable1";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

app.get("/api/ps2", (require, response) => {
    const sqlSelect = "SELECT * FROM FinalTable2";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

app.get("/api/ps3", (require, response) => {
    const sqlSelect = "SELECT * FROM FinalTable3";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

app.get("/api/player_data1", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Chicago Bulls"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data2", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Cleveland Cavaliers"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data3", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Detroit Pistons"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data4", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Indiana Pacers"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data5", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Milwaukee Bucks"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data6", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Atlanta Hawks"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data7", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Charlotte Hornets"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data8", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Miami Heat"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data9", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Orlando Magic"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data10", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Washington Wizards"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data11", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Boston Celtics"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data12", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Brooklyn Nets"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data13", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "New York Knicks"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data14", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Philadelphia 76ers"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_data15", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Toronto Raptors"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});









app.get("/api/player_datat1", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Denver Nuggets"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat2", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Minnesota Timberwolves"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat3", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Oklahoma City Thunder"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat4", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Portland Trail Blazers"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat5", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Utah Jazz"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat6", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Golden State Warriors"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat7", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "LA Clippers"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat8", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Los Angeles Lakers"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat9", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Phoenix Suns"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat10", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Sacramento Kings"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat11", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Dallas Mavericks"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat12", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Houston Rockets"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat13", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "Memphis Grizzlies"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat14", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "New Orleans Pelicans"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});

app.get("/api/player_datat15", (require, response) => {
    const sqlSelect = 'SELECT * FROM player WHERE team = "San Antonio Spurs"';
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        response.send(result);
    });
});











app.listen(3002, () => {
    console.log("running on port 3002");
})

