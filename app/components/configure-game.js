import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ConfigureGameComponent extends Component {
  @service('game-status') gameStatus;

  players = [
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
  ];
  defaultPlayers = null;
  selectedPlayers = null;
  isPlayersDropdownOpen = false;

  init() {
    super.init(...arguments);
    this.set('defaultPlayers', this.players[0]);
    this.set('selectedPlayers', this.defaultPlayers);
    this.gameStatus.setPlayers(2);
  }

  @action
  changePlayers(num) {
    const players = this.players;
    for (const player of players) {
      if (player.value == num) {
        this.set('selectedPlayers', player);
        break;
      }
    }

    this.send('changePlayersDropdown', false);

    this.gameStatus.setPlayers(num);
  }

  @action
  changePlayersDropdown(value) {
    this.set('isPlayersDropdownOpen', value);
  }
}
