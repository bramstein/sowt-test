describe('font-variant-numeric', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontVariantNumeric' in style ||
           'webkitFontVariantNumeric' in style ||
           'MozFontVariantNumeric' in style,
           'to be true');
  });

  it('enables lining numerals by setting lining-nums', function () {
    expect('font-variant-numeric: lining-nums', 'to enable opentype feature', 'lnum');
  });

  it('enables old-style numerals by setting oldstyle-nums', function () {
    expect('font-variant-numeric: oldstyle-nums', 'to enable opentype feature', 'onum');
  });

  it('enables proportional numerals by setting proportional-nums', function () {
    expect('font-variant-numeric: proportional-nums', 'to enable opentype feature', 'pnum');
  });

  it('enables tabular numerals by setting tabular-nums', function () {
    expect('font-variant-numeric: tabular-nums', 'to enable opentype feature', 'tnum');
  });

  it('enables diagonal fractions by setting diagonal-fractions', function () {
    expect('font-variant-numeric: diagonal-fractions', 'to enable opentype feature', 'frac');
  });

  it('enables stacked fractions by setting stacked-fractions', function () {
    expect('font-variant-numeric: stacked-fractions', 'to enable opentype feature', 'afrc');
  });

  it('enables ordinal letterforms by setting ordinal', function () {
    expect('font-variant-numeric: ordinal', 'to enable opentype feature', 'ordn');
  });

  it('enables slashed zeros by setting slashed-zero', function () {
    expect('font-variant-numeric: slashed-zero', 'to enable opentype feature', 'zero');
  });

  it('does not enable any features by default', function () {
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'lnum');
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'onum');
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'pnum');
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'tnum');
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'frac');
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'afrc');
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'ordn');
    expect('font-variant-numeric: normal', 'not to enable opentype feature', 'zero');
  });
});
