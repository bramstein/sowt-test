var Ruler = function (text) {
  this.container = document.createElement('div');
  this.element = document.createElement('span');
  this.element.textContent = text;

  this.container.appendChild(this.element);
};

Ruler.prototype.insert = function () {
  document.body.appendChild(this.container);
};

Ruler.prototype.remove = function () {
  document.body.removeChild(this.container);
};

Ruler.prototype.width = function () {
  return this.element.offsetWidth;
};

Ruler.prototype.lang = function (lang) {
  this.element.lang = lang;
};

Ruler.prototype.style = function (style) {
  this.element.style.cssText = 'display: inline-block;' +
                               'position: absolute;' +
                               'visibility: hidden;' +
                               'margin: 0;' +
                               'padding: 0;' +
                               'top: 0;' +
                               'whitespace: nowrap;' +
                               style;
};
