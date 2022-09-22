"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var defaultTemplates = {
  empty: function empty() {
    return 'No results';
  },
  showPreviousText: function showPreviousText() {
    return 'Show previous results';
  },
  showMoreText: function showMoreText() {
    return 'Show more results';
  },
  item: function item(data) {
    return JSON.stringify(data, null, 2);
  }
};
var _default = defaultTemplates;
exports.default = _default;