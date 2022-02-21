import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class GameStatusControlComponent extends Component {
  @service('game-status') gameStatus;
  @service router;

  @alias('gameStatus.hasGameStarted') hasGameStarted;

  @action
  changeGameStatus() {
    const currentStatus = this.hasGameStarted;
    this.gameStatus.toggleStatus();
    if (currentStatus) {
      this.gameStatus.resetGame();
      this.router.transitionTo('application');
    } else {
      this.router.transitionTo('game');
    }
  }
}
