let team = {
  _players: [{firstName: 'Pablo', lastName: 'Sanchez', age: 11}, {firstName: 'Ferrerro', lastName: 'Rochez', age: 12}, {firstName: 'Cristiano', lastName: 'Ronaldo', age: 10}],
  _games: [{opponent: 'Broncos', teamPoints: 42,opponentPoints: 27},{opponent: 'Lovare', teamPoints: 37,opponentPoints: 40}, {opponent: 'Sorrori', teamPoints: 30,opponentPoints: 25}],

  get players() {
    return this._players
  },

  get games() {
    return this._games
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },

  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('Lisa', 12, 13)
team.addGame('Lovare', 20, 9)
team.addGame('Gina', 10, 7)
console.log(team.players)
console.log(team.games)