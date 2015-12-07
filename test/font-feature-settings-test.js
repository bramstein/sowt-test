describe('font-feature-settings', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontFeatureSettings' in style ||
           'webkitFontFeatureSettings' in style ||
           'MozFontFeatureSettings' in style,
           'to be true');
  });

  it('enables OpenType features with an index, a keyword, or the a standalone feature tag', function () {
     expect('font-feature-settings: "liga"', 'to enable opentype feature', 'liga');
     expect('font-feature-settings: "liga" on', 'to enable opentype feature', 'liga');
     expect('font-feature-settings: "liga" 1', 'to enable opentype feature', 'liga');
  });

  it('disables OpenType features with an index or keyword', function () {
     expect('font-feature-settings: "liga" off', 'not to enable opentype feature', 'liga');
     expect('font-feature-settings: "liga" 0', 'not to enable opentype feature', 'liga');
  });

  it('enables selected OpenType features', function () {
    expect('font-feature-settings: "liga"', 'to enable opentype feature', 'liga');
    expect('font-feature-settings: "calt"', 'to enable opentype feature', 'calt');
    expect('font-feature-settings: "rlig"', 'to enable opentype feature', 'rlig');
    expect('font-feature-settings: "clig"', 'to enable opentype feature', 'clig');
    expect('font-feature-settings: "locl"', 'to enable opentype feature', 'locl');
    //expect('font-feature-settings: "ccmp"', 'to enable opentype feature', 'ccmp');
    //expect('font-feature-settings: "mark"', 'to enable opentype feature', 'mark');
    //expect('font-feature-settings: "mkmk"', 'to enable opentype feature', 'mkmk');

    expect('font-feature-settings: "dlig"', 'to enable opentype feature', 'dlig');
    expect('font-feature-settings: "smcp"', 'to enable opentype feature', 'smcp');
    expect('font-feature-settings: "hlig"', 'to enable opentype feature', 'hlig');
  });

  it('disables selected OpenType features', function () {
    expect('font-feature-settings: "liga" off', 'not to enable opentype feature', 'liga');
    expect('font-feature-settings: "calt" off', 'not to enable opentype feature', 'calt');
    expect('font-feature-settings: "rlig" off', 'not to enable opentype feature', 'rlig');
    expect('font-feature-settings: "clig" off', 'not to enable opentype feature', 'clig');
    expect('font-feature-settings: "locl" off', 'not to enable opentype feature', 'locl');
    //expect('font-feature-settings: "ccmp" off', 'to enable opentype feature', 'ccmp');
    //expect('font-feature-settings: "mark" off', 'to enable opentype feature', 'mark');
    //expect('font-feature-settings: "mkmk" off', 'to enable opentype feature', 'mkmk');

    expect('font-feature-settings: "dlig" off', 'not to enable opentype feature', 'dlig');
    expect('font-feature-settings: "smcp" off', 'not to enable opentype feature', 'smcp');
    expect('font-feature-settings: "hlig" off', 'not to enable opentype feature', 'hlig');
  });
});
