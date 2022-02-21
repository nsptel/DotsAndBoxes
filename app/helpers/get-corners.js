import { helper } from '@ember/component/helper';

export default helper(function getCorners([row, col]) {
  return row % 2 === 0 && col % 2 === 0;
});
