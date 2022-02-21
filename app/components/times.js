import Component from '@ember/component';
import { computed } from '@ember/object';

export default class TimesComponent extends Component {
  times = null;

  @computed('times')
  get counter() {
    const arr = [];

    for (let i = 0; i < this.times; i++) {
      arr.push(i);
    }

    return arr;
  }
}
