describe('font-variant', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontVariant' in style ||
           'webkitFontVariant' in style ||
           'MozFontVariant' in style,
           'to be true');
  });

  it('enables real small caps by setting small-caps', function () {
    expect('font-variant: small-caps', 'to enable opentype feature', 'smcp');
  });

  it('supports all position values', function () {
    expect('font-variant: super', 'to enable opentype feature', 'sups');
    expect('font-variant: sub', 'to enable opentype feature', 'subs');
  });

  it('supports all numeric values', function () {
    expect('font-variant: lining-nums', 'to enable opentype feature', 'lnum');
    expect('font-variant: oldstyle-nums', 'to enable opentype feature', 'onum');
    expect('font-variant: proportional-nums', 'to enable opentype feature', 'pnum');
    expect('font-variant: tabular-nums', 'to enable opentype feature', 'tnum');
    expect('font-variant: diagonal-fractions', 'to enable opentype feature', 'frac');
    expect('font-variant: stacked-fractions', 'to enable opentype feature', 'afrc');
    expect('font-variant: ordinal', 'to enable opentype feature', 'ordn');
    expect('font-variant: slashed-zero', 'to enable opentype feature', 'zero');
  });

  it('supports all caps values', function () {
    expect('font-variant: small-caps', 'to enable opentype feature', 'smcp');
    expect('font-variant: all-small-caps', 'to enable opentype feature', 'smcp');
    expect('font-variant: all-small-caps', 'to enable opentype feature', 'c2sc');
    expect('font-variant: petite-caps', 'to enable opentype feature', 'pcap');
    expect('font-variant: all-petite-caps', 'to enable opentype feature', 'pcap');
    expect('font-variant: all-petite-caps', 'to enable opentype feature', 'c2pc');
    expect('font-variant: unicase', 'to enable opentype feature', 'unic');
    expect('font-variant: titling-caps', 'to enable opentype feature', 'titl');
  });

  it('supports all ligature values', function () {
    expect('font-variant: common-ligatures', 'to enable opentype feature', 'liga');
    expect('font-variant: common-ligatures', 'to enable opentype feature', 'clig');

    expect('font-variant: no-common-ligatures', 'not to enable opentype feature', 'liga');
    expect('font-variant: no-common-ligatures', 'not to enable opentype feature', 'clig');
 
    expect('font-variant: discretionary-ligatures', 'to enable opentype feature', 'dlig');
    expect('font-variant: no-discretionary-ligatures', 'not to enable opentype feature', 'dlig');
   
    expect('font-variant: historical-ligatures', 'to enable opentype feature', 'hlig');
    expect('font-variant: no-historical-ligatures', 'not to enable opentype feature', 'hlig');

    expect('font-variant: contextual', 'to enable opentype feature', 'calt');
    expect('font-variant: no-contextual', 'not to enable opentype feature', 'calt');
  });

  it('supports all alternates values', function () {
    expect('font-variant: historical-forms', 'to enable opentype feature', 'hist');
    expect('font-variant: stylistic(fv-salt)', 'to enable opentype feature', 'salt');

    for (var i = 1; i <= 20; i++) {
      var feature = 'ss' + ('00' + i).substr(-2);
      expect('font-variant: styleset(fv-' + feature + ')', 'to enable opentype feature', feature);
    }

    expect('font-variant: swash(fv-swsh)', 'to enable opentype feature', 'swsh');
    expect('font-variant: ornaments(fv-ornm)', 'to enable opentype feature', 'ornm');
    expect('font-variant: annotation(fv-nalt)', 'to enable opentype feature', 'nalt');
  });

  it('enables selected features by default', function () {
     expect('font-variant: normal', 'to enable opentype feature', 'calt');
     expect('font-variant: normal', 'to enable opentype feature', 'clig');
     expect('font-variant: normal', 'to enable opentype feature', 'locl');
     expect('font-variant: normal', 'to enable opentype feature', 'rlig');
     expect('font-variant: normal', 'to enable opentype feature', 'kern');
     expect('font-variant: normal', 'to enable opentype feature', 'liga');
  })

  it('does not enable most features by default', function () {
    expect('font-variant: normal', 'not to enable opentype feature', 'sups');
    expect('font-variant: normal', 'not to enable opentype feature', 'subs');
    expect('font-variant: normal', 'not to enable opentype feature', 'lnum');
    expect('font-variant: normal', 'not to enable opentype feature', 'onum');
    expect('font-variant: normal', 'not to enable opentype feature', 'pnum');
    expect('font-variant: normal', 'not to enable opentype feature', 'tnum');
    expect('font-variant: normal', 'not to enable opentype feature', 'frac');
    expect('font-variant: normal', 'not to enable opentype feature', 'afrc');
    expect('font-variant: normal', 'not to enable opentype feature', 'ordn');
    expect('font-variant: normal', 'not to enable opentype feature', 'zero');
    expect('font-variant: normal', 'not to enable opentype feature', 'smcp');
    expect('font-variant: normal', 'not to enable opentype feature', 'c2sc');
    expect('font-variant: normal', 'not to enable opentype feature', 'c2pc');
    expect('font-variant: normal', 'not to enable opentype feature', 'pcap');
    expect('font-variant: normal', 'not to enable opentype feature', 'unic');
    expect('font-variant: normal', 'not to enable opentype feature', 'titl');
    expect('font-variant: normal', 'not to enable opentype feature', 'dlig');
    expect('font-variant: normal', 'not to enable opentype feature', 'smcp');
    expect('font-variant: normal', 'not to enable opentype feature', 'hlig');
    expect('font-variant: normal', 'not to enable opentype feature', 'hist');
    expect('font-variant: normal', 'not to enable opentype feature', 'salt');
    expect('font-variant: normal', 'not to enable opentype feature', 'swsh');
    expect('font-variant: normal', 'not to enable opentype feature', 'cswh');
    expect('font-variant: normal', 'not to enable opentype feature', 'ornm');
    expect('font-variant: normal', 'not to enable opentype feature', 'nalt');

    // ss01-ss20
    for (var i = 1; i <= 20; i++) {
      expect('font-variant: normal', 'not to enable opentype feature', 'ss' + ('00' + i).substr(-2));
    }

    // cv01-99
    for (var i = 1; i <= 99; i++) {
      expect('font-variant: normal', 'not to enable opentype feature', 'cv' + ('00' + i).substr(-2));
    }
  });
});
