describe('font-variant-alternates', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontVariantAlternates' in style ||
           'webkitFontVariantAlternates' in style ||
           'MozFontVariantAlternates' in style,
           'to be true');
  });

  it('enables historical forms by setting historical-forms', function () {
    expect('font-variant-alternates: historical-forms', 'to enable opentype feature', 'hist');
  });

  it('enables stylistic alternates by setting stylistic(...)', function () {
    expect('font-variant-alternates: stylistic(fv-salt)', 'to enable opentype feature', 'salt');
  });

  it('enables style sets by setting styleset(...)', function () {
    for (var i = 1; i <= 20; i++) {
      var feature = 'ss' + ('00' + i).substr(-2);
      expect('font-variant-alternates: styleset(fv-' + feature + ')', 'to enable opentype feature', feature);
    }
  });

  xit('enables character variants by setting character-variant', function () {
  });

  it('enables swashes by setting swash', function () {
    expect('font-variant-alternates: swash(fv-swsh)', 'to enable opentype feature', 'swsh');
  });

  it('enables ornaments by setting ornaments', function () {
    expect('font-variant-alternates: ornaments(fv-ornm)', 'to enable opentype feature', 'ornm');
  });

  it('enables alternate annotation forms by setting annotation', function () {
    expect('font-variant-alternates: annotation(fv-nalt)', 'to enable opentype feature', 'nalt');
  });

  it('does not enable any features by default', function () {
    expect('font-variant-alternates: normal', 'not to enable opentype feature', 'hist');
    expect('font-variant-alternates: normal', 'not to enable opentype feature', 'salt');

    // ss01-ss20
    for (var i = 1; i <= 20; i++) {
      expect('font-variant-alternates: normal', 'not to enable opentype feature', 'ss' + ('00' + i).substr(-2));
    }

    // cv01-99
    for (var i = 1; i <= 99; i++) {
      expect('font-variant-alternates: normal', 'not to enable opentype feature', 'cv' + ('00' + i).substr(-2));
    }

    expect('font-variant-alternates: normal', 'not to enable opentype feature', 'swsh');
    expect('font-variant-alternates: normal', 'not to enable opentype feature', 'cswh');
    expect('font-variant-alternates: normal', 'not to enable opentype feature', 'ornm');
    expect('font-variant-alternates: normal', 'not to enable opentype feature', 'nalt');
  });
});
