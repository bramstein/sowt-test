describe('font shorthand syntax', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('font' in style, 'to be true');
  });

  it('parses size and family', function () {
    var style = document.createElement('div').style;

    style.font = '16px sans-serif';
    expect(style.font, 'to equal', '16px sans-serif');
    expect(style.fontFamily, 'to equal', 'sans-serif');
    expect(style.fontSize, 'to equal', '16px');
  });

  it('parses size, line height, and family', function () {
    var style = document.createElement('div').style;

    style.font = '16px/1.2 sans-serif';
    expect(style.font, 'to equal', '16px/1.2 sans-serif');
    expect(style.fontSize, 'to equal', '16px');
    expect(style.lineHeight, 'to equal', '1.2');
    expect(style.fontFamily, 'to equal', 'sans-serif');
  });

  it('parses stretch, size, line height, and family', function () {
    var style = document.createElement('div').style;

    style.font = 'condensed 16px/1.2 sans-serif';
    expect(style.font, 'to equal', 'condensed 16px/1.2 sans-serif');
    expect(style.fontStretch, 'to equal', 'condensed');
    expect(style.fontSize, 'to equal', '16px');
    expect(style.lineHeight, 'to equal', '1.2');
    expect(style.fontFamily, 'to equal', 'sans-serif');
  });

  it('parses weight, stretch, size, line height, and family', function () {
    var style = document.createElement('div').style;

    style.font = '600 condensed 16px/1.2 sans-serif';
    expect(style.font, 'to equal', '600 condensed 16px/1.2 sans-serif');
    expect(style.fontWeight, 'to equal', '600');
    expect(style.fontStretch, 'to equal', 'condensed');
    expect(style.fontSize, 'to equal', '16px');
    expect(style.lineHeight, 'to equal', '1.2');
    expect(style.fontFamily, 'to equal', 'sans-serif');
  });

  it('parses weight, stretch, size, line height, and family', function () {
    var style = document.createElement('div').style;

    style.font = '600 condensed 16px/1.2 sans-serif';
    expect(style.font, 'to equal', '600 condensed 16px/1.2 sans-serif');
    expect(style.fontWeight, 'to equal', '600');
    expect(style.fontStretch, 'to equal', 'condensed');
    expect(style.fontSize, 'to equal', '16px');
    expect(style.lineHeight, 'to equal', '1.2');
    expect(style.fontFamily, 'to equal', 'sans-serif');
  });

  it('parses variant, weight, stretch, size, line height, and family', function () {
    var style = document.createElement('div').style;

    style.font = 'small-caps 600 condensed 16px/1.2 sans-serif';
    expect(style.font, 'to equal', 'small-caps 600 condensed 16px/1.2 sans-serif');
    expect(style.fontVariant, 'to equal', 'small-caps');
    expect(style.fontWeight, 'to equal', '600');
    expect(style.fontStretch, 'to equal', 'condensed');
    expect(style.fontSize, 'to equal', '16px');
    expect(style.lineHeight, 'to equal', '1.2');
    expect(style.fontFamily, 'to equal', 'sans-serif');
  });

  it('parses style, variant, weight, stretch, size, line height, and family', function () {
    var style = document.createElement('div').style;

    style.font = 'italic small-caps 600 condensed 16px/1.2 sans-serif';
    expect(style.font, 'to equal', 'italic small-caps 600 condensed 16px/1.2 sans-serif');
    expect(style.fontStyle, 'to equal', 'italic');
    expect(style.fontVariant, 'to equal', 'small-caps');
    expect(style.fontWeight, 'to equal', '600');
    expect(style.fontStretch, 'to equal', 'condensed');
    expect(style.fontSize, 'to equal', '16px');
    expect(style.lineHeight, 'to equal', '1.2');
    expect(style.fontFamily, 'to equal', 'sans-serif');
  });

  it('supports keywords', function () {
    var style = document.createElement('div').style;

    style.font = 'caption';
    expect(style.font, 'to equal', 'caption');

    style.font = 'icon';
    expect(style.font, 'to equal', 'icon');

    style.font = 'menu';
    expect(style.font, 'to equal', 'menu');

    style.font = 'message-box';
    expect(style.font, 'to equal', 'message-box');

    style.font = 'small-caption';
    expect(style.font, 'to equal', 'small-caption');

    style.font = 'status-bar';
    expect(style.font, 'to equal', 'status-bar');
  });
});
