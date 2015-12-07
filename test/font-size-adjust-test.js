describe('font-size-adjust', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontSizeAdjust' in style ||
           'webkitSizeAdjust' in style ||
           'MozFontSizeAdjust' in style,
           'to be true');
  });

  it('does not affect font-size when set to none', function () {
    var ruler = new Ruler('x');

    ruler.style('font: 100px __em__; font-size-adjust: none;');
    ruler.insert();

    expect(ruler.width(), 'to equal', 100);

    ruler.remove();
  });

  it('increases font-size when set to large values', function () {
    var ruler = new Ruler('x');

    ruler.style('font: 100px __em__; font-size-adjust: 2;');
    ruler.insert();

    expect(ruler.width(), 'to equal', 400);

    ruler.remove();
  });

  it('decreases font-size when set to small values', function () {
    var ruler = new Ruler('x');

    ruler.style('font: 100px __em__; font-size-adjust: 0.25;');
    ruler.insert();

    expect(ruler.width(), 'to equal', 50);

    ruler.remove();
  });
});
