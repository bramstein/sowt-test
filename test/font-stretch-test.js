describe('font-stretch', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontStretch' in style, 'to be true');
  });

  it('accepts all values', function () {
    var style = document.createElement('div').style;

    style.fontStretch = 'ultra-condensed';
    expect(style.fontStretch, 'to equal', 'ultra-condensed');

    style.fontStretch = 'extra-condensed';
    expect(style.fontStretch, 'to equal', 'extra-condensed');

    style.fontStretch = 'condensed';
    expect(style.fontStretch, 'to equal', 'condensed');

    style.fontStretch = 'normal';
    expect(style.fontStretch, 'to equal', 'normal');

    style.fontStretch = 'semi-expanded';
    expect(style.fontStretch, 'to equal', 'semi-expanded');

    style.fontStretch = 'expanded';
    expect(style.fontStretch, 'to equal', 'expanded');

    style.fontStretch = 'extra-expanded';
    expect(style.fontStretch, 'to equal', 'extra-expanded');

    style.fontStretch = 'ultra-expanded';
    expect(style.fontStretch, 'to equal', 'ultra-expanded');
  });
});
