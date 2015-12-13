describe('font-variant-ligatures', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontVariantLigatures' in style ||
           'webkitFontVariantLigatures' in style ||
           'MozFontVariantLigatures' in style,
           'to be true');
  });

  it('enables required features by default', function () {
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'liga');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'calt');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'rlig');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'clig');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'locl');
    //expect('font-variant-ligatures: normal', 'to enable opentype feature', 'ccmp');
    //expect('font-variant-ligatures: normal', 'to enable opentype feature', 'mark');
    //expect('font-variant-ligatures: normal', 'to enable opentype feature', 'mkmk');

    expect('font-variant-ligatures: normal', 'not to enable opentype feature', 'dlig');
    expect('font-variant-ligatures: normal', 'not to enable opentype feature', 'smcp');
    expect('font-variant-ligatures: normal', 'not to enable opentype feature', 'hlig');
  });

  it('enables required features when set to "normal"', function () {
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'liga');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'calt');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'rlig');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'clig');
    expect('font-variant-ligatures: normal', 'to enable opentype feature', 'locl');
    //expect('font-variant-ligatures: normal', 'to enable opentype feature', 'ccmp');
    //expect('font-variant-ligatures: normal', 'to enable opentype feature', 'mark');
    //expect('font-variant-ligatures: normal', 'to enable opentype feature', 'mkmk');

    expect('font-variant-ligatures: normal', 'not to enable opentype feature', 'dlig');
    expect('font-variant-ligatures: normal', 'not to enable opentype feature', 'smcp');
    expect('font-variant-ligatures: normal', 'not to enable opentype feature', 'hlig');
  });

  it('disables all features when set to "none"', function () {
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'liga');
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'calt');

    // "rlig" and "locl"  are not affected by "none"
    expect('font-variant-ligatures: none', 'to enable opentype feature', 'rlig');
    expect('font-variant-ligatures: none', 'to enable opentype feature', 'locl');

    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'clig');
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'ccmp');
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'mark');
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'mkmk');
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'dlig');
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'smcp');
    expect('font-variant-ligatures: none', 'not to enable opentype feature', 'hlig');
  });

  it('enables "liga" and "clig" when set to "common-ligatures"', function () {
    expect('font-variant-ligatures: common-ligatures', 'to enable opentype feature', 'liga');
    expect('font-variant-ligatures: common-ligatures', 'to enable opentype feature', 'clig');

    expect('font-variant-ligatures: common-ligatures', 'not to enable opentype feature', 'dlig');
    expect('font-variant-ligatures: common-ligatures', 'not to enable opentype feature', 'hlig');
  });

  it('disables "liga" and "clig" when set to "no-common-ligatures"', function () {
    expect('font-variant-ligatures: no-common-ligatures', 'not to enable opentype feature', 'liga');
    expect('font-variant-ligatures: no-common-ligatures', 'not to enable opentype feature', 'clig');
  });

  it('enables "dlig" when set to "discretionary-ligatures"', function () {
    expect('font-variant-ligatures: discretionary-ligatures', 'to enable opentype feature', 'dlig');
  });

  it('disables "dlig" when set to "no-discretionary-ligatures"', function () {
    expect('font-variant-ligatures: no-discretionary-ligatures', 'not to enable opentype feature', 'dlig');
  });

  it('enables "hlig" when set to "historical-ligatures"', function () {
    expect('font-variant-ligatures: historical-ligatures', 'to enable opentype feature', 'hlig');
  });

  it('disables "dlig" when set to "no-discretionary-ligatures"', function () {
    expect('font-variant-ligatures: no-historical-ligatures', 'not to enable opentype feature', 'hlig');
  });

  it('enables "calt" when set to "contextual"', function () {
    expect('font-variant-ligatures: contextual', 'to enable opentype feature', 'calt');
  });

  it('disables "calt" when set to "no-contextual"', function () {
    expect('font-variant-ligatures: no-contextual', 'not to enable opentype feature', 'calt');
  });
});
