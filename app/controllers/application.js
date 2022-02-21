import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service('game-status') gameStatus;

  @computed('gameStatus.hasGameStarted')
  get hasGameStarted() {
    return this.gameStatus.hasGameStarted;
  }
}
