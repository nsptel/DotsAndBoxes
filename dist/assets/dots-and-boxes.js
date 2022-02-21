'use strict';



;define("dots-and-boxes/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "dots-and-boxes/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"dots-and-boxes/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("dots-and-boxes/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/components/cell", ["exports", "@ember/component", "@ember/template-factory", "dots-and-boxes/components/game-board", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _gameBoard, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"dots-and-boxes/components/game-board",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <td
    id='cell-{{this.row}}-{{this.col}}'
    class={{concat
      'cell'
      (if
        (get-corners this.row this.col)
        ' corner'
        (if
          this.clickable
          (if
            this.clicked
            (concat ' filled-player-' this.filledBy)
            (concat ' clickable clickable-player-' this.gameStatus.currentPlayer)
          )
          (unless this.hasBeenFilled this.filledClass)
        )
      )
    }}
    {{on 'click' this.cellClicked}}
  >
  </td>
  */
  {
    "id": "0anLYbyO",
    "block": "[[[11,\"td\"],[16,1,[29,[\"cell-\",[30,0,[\"row\"]],\"-\",[30,0,[\"col\"]]]]],[16,0,[28,[37,0],[\"cell\",[52,[28,[37,2],[[30,0,[\"row\"]],[30,0,[\"col\"]]],null],\" corner\",[52,[30,0,[\"clickable\"]],[52,[30,0,[\"clicked\"]],[28,[37,0],[\" filled-player-\",[30,0,[\"filledBy\"]]],null],[28,[37,0],[\" clickable clickable-player-\",[30,0,[\"gameStatus\",\"currentPlayer\"]]],null]],[52,[51,[30,0,[\"hasBeenFilled\"]]],[30,0,[\"filledClass\"]]]]]],null]],[4,[38,4],[\"click\",[30,0,[\"cellClicked\"]]],null],[12],[1,\"\\n\"],[13]],[],false,[\"concat\",\"if\",\"get-corners\",\"unless\",\"on\"]]",
    "moduleName": "dots-and-boxes/components/cell.hbs",
    "isStrictMode": false
  });

  let CellComponent = (_dec = (0, _service.inject)('game-status'), (_class = class CellComponent extends _gameBoard.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameStatus", _descriptor, this);

      _defineProperty(this, "tagName", '');

      _defineProperty(this, "clickable", false);

      _defineProperty(this, "clicked", false);

      _defineProperty(this, "filledBy", null);
    }

    init() {
      super.init(...arguments);

      if (this.row % 2 === 1 && this.col % 2 === 0 || this.row % 2 === 0 && this.col % 2 === 1) {
        this.set('clickable', true);
      }
    }

    cellClicked() {
      if (this.clickable && !this.clicked) {
        // set this before updating the player from super
        this.set('filledBy', this.gameStatus.currentPlayer);
        super.cellClicked(...arguments); // set this to color the cell according to the player

        this.set('clicked', true);
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameStatus", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "cellClicked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cellClicked"), _class.prototype)), _class));
  _exports.default = CellComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CellComponent);
});
;define("dots-and-boxes/components/configure-game", ["exports", "@ember/component", "@ember/template-factory", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='configureGame margin--6'>
    <div class='configureGame-formGroup configureGame-playersSelect'>
      <span class='configureGame-label configureGame-playersSelectLabel'># of
        Players</span>
      <div class='configureGame-input'>
        <div
          class='configureGame-playersSelectTrigger padding--2'
          onclick={{action 'changePlayersDropdown' true}}
        >
          <span
            class='configureGame-playersValue'
          >{{this.selectedPlayers.value}}</span>
          <span class='configureGame-selectSymbol'>&#x21D5;</span>
        </div>
        <DropdownSelect
          @options={{this.players}}
          @selectedOption={{this.selectedPlayers}}
          @isOpen={{this.isPlayersDropdownOpen}}
          @changeOption={{action 'changePlayers'}}
        />
      </div>
    </div>
  
    <div class='configureGame-formGroup configureGame-startGame'>
      <GameStatusControl />
    </div>
  </div>
  */
  {
    "id": "BxpxJNB0",
    "block": "[[[10,0],[14,0,\"configureGame margin--6\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"configureGame-formGroup configureGame-playersSelect\"],[12],[1,\"\\n    \"],[10,1],[14,0,\"configureGame-label configureGame-playersSelectLabel\"],[12],[1,\"# of\\n      Players\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"configureGame-input\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"configureGame-playersSelectTrigger padding--2\"],[15,\"onclick\",[28,[37,0],[[30,0],\"changePlayersDropdown\",true],null]],[12],[1,\"\\n        \"],[10,1],[14,0,\"configureGame-playersValue\"],[12],[1,[30,0,[\"selectedPlayers\",\"value\"]]],[13],[1,\"\\n        \"],[10,1],[14,0,\"configureGame-selectSymbol\"],[12],[1,\"⇕\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[8,[39,1],null,[[\"@options\",\"@selectedOption\",\"@isOpen\",\"@changeOption\"],[[30,0,[\"players\"]],[30,0,[\"selectedPlayers\"]],[30,0,[\"isPlayersDropdownOpen\"]],[28,[37,0],[[30,0],\"changePlayers\"],null]]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"configureGame-formGroup configureGame-startGame\"],[12],[1,\"\\n    \"],[8,[39,2],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"action\",\"dropdown-select\",\"game-status-control\"]]",
    "moduleName": "dots-and-boxes/components/configure-game.hbs",
    "isStrictMode": false
  });

  let ConfigureGameComponent = (_dec = (0, _service.inject)('game-status'), (_class = class ConfigureGameComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameStatus", _descriptor, this);

      _defineProperty(this, "players", [{
        id: 2,
        value: '2'
      }, {
        id: 3,
        value: '3'
      }, {
        id: 4,
        value: '4'
      }, {
        id: 5,
        value: '5'
      }]);

      _defineProperty(this, "defaultPlayers", null);

      _defineProperty(this, "selectedPlayers", null);

      _defineProperty(this, "isPlayersDropdownOpen", false);
    }

    init() {
      super.init(...arguments);
      this.set('defaultPlayers', this.players[0]);
      this.set('selectedPlayers', this.defaultPlayers);
      this.gameStatus.setPlayers(2);
    }

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

    changePlayersDropdown(value) {
      this.set('isPlayersDropdownOpen', value);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameStatus", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "changePlayers", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changePlayers"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changePlayersDropdown", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changePlayersDropdown"), _class.prototype)), _class));
  _exports.default = ConfigureGameComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ConfigureGameComponent);
});
;define("dots-and-boxes/components/dropdown-select", ["exports", "@ember/component", "@ember/template-factory"], function (_exports, _component, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='dropdownSelect'>
    {{#if this.isOpen}}
      <div class='dropdownSelect-options'>
        {{#each this.options as |option|}}
          <div
            class={{concat
              'dropdownSelect-option'
              (if (eq this.selectedOption.value option.value) ' selected')
            }}
            onclick={{action this.changeOption option.value}}
          >
            <span class='dropdownSelect-value'>{{option.value}}</span>
          </div>
        {{/each}}
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "G0Yvf1bV",
    "block": "[[[10,0],[14,0,\"dropdownSelect\"],[12],[1,\"\\n\"],[41,[30,0,[\"isOpen\"]],[[[1,\"    \"],[10,0],[14,0,\"dropdownSelect-options\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"options\"]]],null]],null],null,[[[1,\"        \"],[10,0],[15,0,[28,[37,3],[\"dropdownSelect-option\",[52,[28,[37,4],[[30,0,[\"selectedOption\",\"value\"]],[30,1,[\"value\"]]],null],\" selected\"]],null]],[15,\"onclick\",[28,[37,5],[[30,0],[30,0,[\"changeOption\"]],[30,1,[\"value\"]]],null]],[12],[1,\"\\n          \"],[10,1],[14,0,\"dropdownSelect-value\"],[12],[1,[30,1,[\"value\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"option\"],false,[\"if\",\"each\",\"-track-array\",\"concat\",\"eq\",\"action\"]]",
    "moduleName": "dots-and-boxes/components/dropdown-select.hbs",
    "isStrictMode": false
  });

  class DropdownSelectComponent extends _component.default {}

  _exports.default = DropdownSelectComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, DropdownSelectComponent);
});
;define("dots-and-boxes/components/game-board", ["exports", "@ember/component", "@ember/template-factory", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='gameBoard'>
    <div class='gameBoard-table'>
      <table>
        <Times @times={{this.cells}} as |row|>
          <tr class='row'>
            <Times @times={{this.cells}} as |col|>
              <Cell @row={{row}} @col={{col}} />
            </Times>
          </tr>
        </Times>
      </table>
    </div>
  </div>
  */
  {
    "id": "iIuhWpvQ",
    "block": "[[[10,0],[14,0,\"gameBoard\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"gameBoard-table\"],[12],[1,\"\\n    \"],[10,\"table\"],[12],[1,\"\\n      \"],[8,[39,0],null,[[\"@times\"],[[30,0,[\"cells\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[10,\"tr\"],[14,0,\"row\"],[12],[1,\"\\n          \"],[8,[39,0],null,[[\"@times\"],[[30,0,[\"cells\"]]]],[[\"default\"],[[[[1,\"\\n            \"],[8,[39,1],null,[[\"@row\",\"@col\"],[[30,1],[30,2]]],null],[1,\"\\n          \"]],[2]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"row\",\"col\"],false,[\"times\",\"cell\"]]",
    "moduleName": "dots-and-boxes/components/game-board.hbs",
    "isStrictMode": false
  });

  let GameBoardComponent = (_dec = (0, _service.inject)('game-status'), _dec2 = (0, _object.computed)('gameStatus.dimension'), (_class = class GameBoardComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameStatus", _descriptor, this);
    }

    get cells() {
      const dimension = this.gameStatus.dimension;
      return dimension * 2 + 1;
    }

    cellClicked(e) {
      let classes = e.target.classList;
      const cellIdSplit = e.target.id.split('-');

      if (classes.contains('clickable')) {
        // removing the clickable and clickable-player-# classes
        classes.replace('clickable', `filled-player-${this.gameStatus.currentPlayer}`); // update scores

        this.gameStatus.updateFilledWalls(cellIdSplit[1], cellIdSplit[2], this.gameStatus.currentPlayer); // call the next player

        this.gameStatus.nextPlayer();
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameStatus", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "cells", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "cells"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cellClicked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cellClicked"), _class.prototype)), _class));
  _exports.default = GameBoardComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, GameBoardComponent);
});
;define("dots-and-boxes/components/game-scores", ["exports", "@ember/component", "@ember/template-factory", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='gameScores-container'>
    <div class='gameScores-turn'>
      Player
      <span
        class='gameScores-player gameScores-player-{{this.gameStatus.currentPlayer}}'
      ></span>
      has turn
    </div>
    <div class='gameScores-scoreboard'>
      {{#each this.players as |player|}}
        <div class='gameScores-score'>
          <span
            class={{concat 'gameScores-player gameScores-player-' player.id}}
          ></span>
          :
          {{player.score}}
        </div>
      {{/each}}
    </div>
    <div class='gameScores-cellsLeft'>
      <p><span>{{this.remainingCells}}</span> cells left</p>
    </div>
  </div>
  */
  {
    "id": "H92UMioB",
    "block": "[[[10,0],[14,0,\"gameScores-container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"gameScores-turn\"],[12],[1,\"\\n    Player\\n    \"],[10,1],[15,0,[29,[\"gameScores-player gameScores-player-\",[30,0,[\"gameStatus\",\"currentPlayer\"]]]]],[12],[13],[1,\"\\n    has turn\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"gameScores-scoreboard\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"players\"]]],null]],null],null,[[[1,\"      \"],[10,0],[14,0,\"gameScores-score\"],[12],[1,\"\\n        \"],[10,1],[15,0,[28,[37,2],[\"gameScores-player gameScores-player-\",[30,1,[\"id\"]]],null]],[12],[13],[1,\"\\n        :\\n        \"],[1,[30,1,[\"score\"]]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"gameScores-cellsLeft\"],[12],[1,\"\\n    \"],[10,2],[12],[10,1],[12],[1,[30,0,[\"remainingCells\"]]],[13],[1,\" cells left\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"player\"],false,[\"each\",\"-track-array\",\"concat\"]]",
    "moduleName": "dots-and-boxes/components/game-scores.hbs",
    "isStrictMode": false
  });

  let GameScoresComponent = (_dec = (0, _service.inject)('game-status'), _dec2 = (0, _object.computed)('gameStatus.playerStatus'), _dec3 = (0, _object.computed)('gameStatus.{dimension,filledCells}'), (_class = class GameScoresComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameStatus", _descriptor, this);
    }

    get players() {
      return this.get('gameStatus.playerStatus');
    }

    get remainingCells() {
      return Math.pow(this.gameStatus.dimension, 2) - this.get('gameStatus.filledCells');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameStatus", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "players", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "players"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "remainingCells", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "remainingCells"), _class.prototype)), _class));
  _exports.default = GameScoresComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, GameScoresComponent);
});
;define("dots-and-boxes/components/game-status-control", ["exports", "@ember/component", "@ember/template-factory", "@ember/service", "@ember/object", "@ember/object/computed"], function (_exports, _component, _templateFactory, _service, _object, _computed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component",0,"@ember/service",0,"@ember/object",0,"@ember/object/computed"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='gameStatusControl-container'>
    <button
      class={{concat 'button' (if this.hasGameStarted ' button-danger')}}
      onclick={{action 'changeGameStatus'}}
      type='button'
    >
      {{#if this.hasGameStarted}}
        End Game
      {{else}}
        Start Game
      {{/if}}
    </button>
  </div>
  */
  {
    "id": "HUTckrpx",
    "block": "[[[10,0],[14,0,\"gameStatusControl-container\"],[12],[1,\"\\n  \"],[10,\"button\"],[15,0,[28,[37,0],[\"button\",[52,[30,0,[\"hasGameStarted\"]],\" button-danger\"]],null]],[15,\"onclick\",[28,[37,2],[[30,0],\"changeGameStatus\"],null]],[14,4,\"button\"],[12],[1,\"\\n\"],[41,[30,0,[\"hasGameStarted\"]],[[[1,\"      End Game\\n\"]],[]],[[[1,\"      Start Game\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"],[13]],[],false,[\"concat\",\"if\",\"action\"]]",
    "moduleName": "dots-and-boxes/components/game-status-control.hbs",
    "isStrictMode": false
  });

  let GameStatusControlComponent = (_dec = (0, _service.inject)('game-status'), _dec2 = (0, _computed.alias)('gameStatus.hasGameStarted'), (_class = class GameStatusControlComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameStatus", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);

      _initializerDefineProperty(this, "hasGameStarted", _descriptor3, this);
    }

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

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameStatus", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "hasGameStarted", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "changeGameStatus", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeGameStatus"), _class.prototype)), _class));
  _exports.default = GameStatusControlComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, GameStatusControlComponent);
});
;define("dots-and-boxes/components/times", ["exports", "@ember/component", "@ember/template-factory", "@ember/object"], function (_exports, _component, _templateFactory, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component",0,"@ember/object"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#each this.counter as |count|}}
    {{yield count}}
  {{/each}}
  */
  {
    "id": "KmnivNXs",
    "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,0,[\"counter\"]]],null]],null],null,[[[1,\"  \"],[18,2,[[30,1]]],[1,\"\\n\"]],[1]],null]],[\"count\",\"&default\"],false,[\"each\",\"-track-array\",\"yield\"]]",
    "moduleName": "dots-and-boxes/components/times.hbs",
    "isStrictMode": false
  });

  let TimesComponent = (_dec = (0, _object.computed)('times'), (_class = class TimesComponent extends _component.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "times", null);
    }

    get counter() {
      const arr = [];

      for (let i = 0; i < this.times; i++) {
        arr.push(i);
      }

      return arr;
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "counter", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "counter"), _class.prototype)), _class));
  _exports.default = TimesComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TimesComponent);
});
;define("dots-and-boxes/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/controllers/application", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationController = (_dec = (0, _service.inject)('game-status'), _dec2 = (0, _object.computed)('gameStatus.hasGameStarted'), (_class = class ApplicationController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameStatus", _descriptor, this);
    }

    get hasGameStarted() {
      return this.gameStatus.hasGameStarted;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameStatus", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "hasGameStarted", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "hasGameStarted"), _class.prototype)), _class));
  _exports.default = ApplicationController;
});
;define("dots-and-boxes/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/app-version", ["exports", "@ember/component/helper", "dots-and-boxes/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"dots-and-boxes/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("dots-and-boxes/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/equal"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/get-corners", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f

  var _default = (0, _helper.helper)(function getCorners(_ref) {
    let [row, col] = _ref;
    return row % 2 === 0 && col % 2 === 0;
  });

  _exports.default = _default;
});
;define("dots-and-boxes/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-equal"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("dots-and-boxes/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("dots-and-boxes/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("dots-and-boxes/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "dots-and-boxes/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"dots-and-boxes/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("dots-and-boxes/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("dots-and-boxes/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("dots-and-boxes/initializers/export-application-global", ["exports", "ember", "dots-and-boxes/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"dots-and-boxes/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dots-and-boxes/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("dots-and-boxes/router", ["exports", "@ember/routing/router", "dots-and-boxes/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"dots-and-boxes/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('index', {
      path: '/'
    });
    this.route('help');
    this.route('game');
  });
});
;define("dots-and-boxes/routes/game", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GameRoute = (_dec = (0, _service.inject)('game-status'), (_class = class GameRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameStatus", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

    beforeModel() {
      if (!this.gameStatus.players) {
        this.router.transitionTo('/');
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameStatus", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = GameRoute;
});
;define("dots-and-boxes/routes/help", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class HelpRoute extends _route.default {}

  _exports.default = HelpRoute;
});
;define("dots-and-boxes/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class IndexRoute extends _route.default {}

  _exports.default = IndexRoute;
});
;define("dots-and-boxes/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/services/game-status", ["exports", "@ember/service", "@glimmer/tracking"], function (_exports, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Player = (_class = class Player {
    constructor(id, score) {
      _initializerDefineProperty(this, "id", _descriptor, this);

      _initializerDefineProperty(this, "score", _descriptor2, this);

      this.id = id;
      this.score = score;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "score", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);

  class GameStatusService extends _service.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "players", null);

      _defineProperty(this, "hasGameStarted", false);

      _defineProperty(this, "currentPlayer", 1);

      _defineProperty(this, "dimension", 10);

      _defineProperty(this, "playerStatus", []);

      _defineProperty(this, "filledWalls", []);

      _defineProperty(this, "filledCells", 0);
    }

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
      this.set('filledWalls', score); // now update the score

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

          if (walls.includes(one) && walls.includes(two) && walls.includes(three)) {
            scoreInc++;
            this.updateFilledCells(r - 1, c, player);
          }
        } // below


        if (r <= this.dimension * 2) {
          const one = `${r + 1}-${c - 1}`;
          const two = `${r + 1}-${c + 1}`;
          const three = `${r + 2}-${c}`;

          if (walls.includes(one) && walls.includes(two) && walls.includes(three)) {
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

          if (walls.includes(one) && walls.includes(two) && walls.includes(three)) {
            scoreInc++;
            this.updateFilledCells(r, c - 1, player);
          }
        } //right


        if (c <= this.dimension * 2) {
          const one = `${r - 1}-${c + 1}`;
          const two = `${r + 1}-${c + 1}`;
          const three = `${r}-${c + 2}`;

          if (walls.includes(one) && walls.includes(two) && walls.includes(three)) {
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

  _exports.default = GameStatusService;
});
;define("dots-and-boxes/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "BqhLgsCj",
    "block": "[[[1,[28,[35,0],[\"DotsAndBoxes\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"application-headerPane padding--2\"],[12],[1,\"\\n  \"],[10,\"h1\"],[14,0,\"application-heading\"],[12],[1,\"DotsAndBoxes\"],[13],[1,\"\\n  \"],[10,0],[14,0,\"application-menu\"],[12],[1,\"\\n\"],[41,[30,0,[\"hasGameStarted\"]],[[[1,\"      \"],[8,[39,2],null,null,null],[1,\"\\n\"]],[]],null],[1,\"    \"],[8,[39,3],[[24,0,\"application-help button button-info margin-left--2 paddingX--3\"],[24,\"target\",\"_blank\"]],[[\"@route\"],[\"help\"]],[[\"default\"],[[[[1,\"?\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[46,[28,[37,5],null,null],null,null,null],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"if\",\"game-status-control\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "dots-and-boxes/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dots-and-boxes/templates/game", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "cdt8ySqi",
    "block": "[[[1,[28,[35,0],[\"Game\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"game-container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"game\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"game-board\"],[12],[1,\"\\n      \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"game-scores\"],[12],[1,\"\\n      \"],[8,[39,2],null,null,null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"game-board\",\"game-scores\"]]",
    "moduleName": "dots-and-boxes/templates/game.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dots-and-boxes/templates/help", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "tUzOv3il",
    "block": "[[[1,[28,[35,0],[\"Help\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"application-instructions padding-top--3\"],[12],[1,\"\\n  \"],[10,\"ol\"],[14,4,\"1\"],[12],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Choose how many players will be in the game\"],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Each turn, click between two horizontally or vertically adjacent dots to\\n      draw a line\"],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Drawing the 4th wall of a box wins it, earning you a point. When you\\n      close a box you must move again.\"],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Lines are drawn until all squares are claimed. The player with the most\\n      claimed squares wins!\"],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Be careful not to create long chains of boxes for your opponents to\\n      claim\"],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Think of creative ways to double cross your opponent, forcing them to\\n      give you the long chains!\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"page-title\"]]",
    "moduleName": "dots-and-boxes/templates/help.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dots-and-boxes/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "ssCMdRrh",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\\n\"],[41,[51,[30,0,[\"hasGameStarted\"]]],[[[1,\"  \"],[8,[39,2],null,null,null],[1,\"\\n\"]],[]],null]],[],false,[\"page-title\",\"unless\",\"configure-game\"]]",
    "moduleName": "dots-and-boxes/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dots-and-boxes/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("dots-and-boxes/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('dots-and-boxes/config/environment', [], function() {
  var prefix = 'dots-and-boxes';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dots-and-boxes/app")["default"].create({"name":"dots-and-boxes","version":"0.0.0"});
          }
        
//# sourceMappingURL=dots-and-boxes.map
