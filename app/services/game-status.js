import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Player {
  @tracked id;
  @tracked score;

  constructor(id, score) {
    this.id = id;
    this.score = score;
  }
}

export default class GameStatusService extends Service {
  players = null;
  hasGameStarted = false;
  currentPlayer = 1;
  dimension = 10;
  playerStatus = [];
  filledWalls = [];
  filledCells = 0;

  setPlayers(number) {
    const playerStatus = [];
    let id = 1;

    this.set('players', number);

    while (number >= id) {
      playerStatus.push(new Player(id, 0));
      id++;
    }

    this.set('playerStatus', playerStatus);
  }

  toggleStatus() {
    this.set('hasGameStarted', !this.hasGameStarted);
  }

  nextPlayer() {
    const currentPlayer = this.currentPlayer;

    if (currentPlayer + 1 > this.players) {
      this.set('currentPlayer', 1);
    } else {
      this.set('currentPlayer', currentPlayer + 1);
    }
  }

  updateFilledWalls(row, col, player) {
    const score = this.filledWalls;

    score.push(`${row}-${col}`);
    this.set('filledWalls', score);

    // now update the score
    this.updateScore(...arguments);
  }

  updateScore(row, col, player) {
    const r = parseInt(row);
    const c = parseInt(col);
    const playerId = parseInt(player);

    const walls = this.filledWalls;
    const playerStatus = this.playerStatus;

    let scoreInc = 0;

    if (r % 2 === 0) {
      // above
      if (r > 0) {
        const one = `${r - 1}-${c - 1}`;
        const two = `${r - 1}-${c + 1}`;
        const three = `${r - 2}-${c}`;

        if (
          walls.includes(one) &&
          walls.includes(two) &&
          walls.includes(three)
        ) {
          scoreInc++;
          this.updateFilledCells(r - 1, c, player);
        }
      }
      // below
      if (r <= this.dimension * 2) {
        const one = `${r + 1}-${c - 1}`;
        const two = `${r + 1}-${c + 1}`;
        const three = `${r + 2}-${c}`;

        if (
          walls.includes(one) &&
          walls.includes(two) &&
          walls.includes(three)
        ) {
          scoreInc++;
          this.updateFilledCells(r + 1, c, player);
        }
      }
    } else {
      // left
      if (c > 0) {
        const one = `${r - 1}-${c - 1}`;
        const two = `${r + 1}-${c - 1}`;
        const three = `${r}-${c - 2}`;

        if (
          walls.includes(one) &&
          walls.includes(two) &&
          walls.includes(three)
        ) {
          scoreInc++;
          this.updateFilledCells(r, c - 1, player);
        }
      }
      //right
      if (c <= this.dimension * 2) {
        const one = `${r - 1}-${c + 1}`;
        const two = `${r + 1}-${c + 1}`;
        const three = `${r}-${c + 2}`;

        if (
          walls.includes(one) &&
          walls.includes(two) &&
          walls.includes(three)
        ) {
          scoreInc++;
          this.updateFilledCells(r, c + 1, player);
        }
      }
    }

    if (scoreInc > 0) {
      for (const status of playerStatus) {
        if (status.id === playerId) {
          status.score += scoreInc;
          this.set('playerStatus', playerStatus);
          break;
        }
      }
    }
  }

  updateFilledCells(row, col, player) {
    const cell = document.getElementById(`cell-${row}-${col}`);

    cell.classList.add(`filled-cell-${player}`);
    this.set('filledCells', this.filledCells + 1);
  }

  resetGame() {
    this.set('players', null);
    this.set('hasGameStarted', false);
    this.set('currentPlayer', 1);
    this.set('playerStatus', []);
    this.set('filledWalls', []);
    this.set('filledCells', 0);
  }
}
