import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class GameScoresComponent extends Component {
  @service('game-status') gameStatus;

  @computed('gameStatus.playerStatus')
  get players() {
    return this.get('gameStatus.playerStatus');
  }

  @computed('gameStatus.{dimension,filledCells}')
  get remainingCells() {
    return (
      Math.pow(this.gameStatus.dimension, 2) -
      this.get('gameStatus.filledCells')
    );
  }
}
