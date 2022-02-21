import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, action } from '@ember/object';

export default class GameBoardComponent extends Component {
  @service('game-status') gameStatus;

  @computed('gameStatus.dimension')
  get cells() {
    const dimension = this.gameStatus.dimension;
    return dimension * 2 + 1;
  }

  @action
  cellClicked(e) {
    let classes = e.target.classList;
    const cellIdSplit = e.target.id.split('-');

    if (classes.contains('clickable')) {
      // removing the clickable and clickable-player-# classes
      classes.replace(
        'clickable',
        `filled-player-${this.gameStatus.currentPlayer}`
      );

      // update scores
      this.gameStatus.updateFilledWalls(
        cellIdSplit[1],
        cellIdSplit[2],
        this.gameStatus.currentPlayer
      );

      // call the next player
      this.gameStatus.nextPlayer();
    }
  }
}
