import { h } from 'preact';
import { formatNumber } from "../../lib/formatNumber.js";
import { cx } from "../../lib/utils/index.js";
var defaultTemplates = {
  item: function item(_ref) {
    var url = _ref.url,
        label = _ref.label,
        count = _ref.count,
        cssClasses = _ref.cssClasses;
    return h("a", {
      className: cx(cssClasses.link),
      href: url
    }, h("span", {
      className: cx(cssClasses.label)
    }, label), h("span", {
      className: cx(cssClasses.count)
    }, formatNumber(count)));
  },
  showMoreText: function showMoreText(_ref2) {
    var isShowingMore = _ref2.isShowingMore;
    return isShowingMore ? 'Show less' : 'Show more';
  }
};
export default defaultTemplates;