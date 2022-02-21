import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GameRoute extends Route {
  @service('game-status') gameStatus;
  @service router;

  beforeModel() {
    if (!this.gameStatus.players) {
      this.router.transitionTo('/');
    }
  }
}
