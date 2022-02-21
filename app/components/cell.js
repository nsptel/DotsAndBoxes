import GameBoard from './game-board';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CellComponent extends GameBoard {
  @service('game-status') gameStatus;

  tagName = '';
  clickable = false;
  clicked = false;
  filledBy = null;

  init() {
    super.init(...arguments);
    if (
      (this.row % 2 === 1 && this.col % 2 === 0) ||
      (this.row % 2 === 0 && this.col % 2 === 1)
    ) {
      this.set('clickable', true);
    }
  }

  @action
  cellClicked() {
    if (this.clickable && !this.clicked) {
      // set this before updating the player from super
      this.set('filledBy', this.gameStatus.currentPlayer);

      super.cellClicked(...arguments);

      // set this to color the cell according to the player
      this.set('clicked', true);
    }
  }
}
