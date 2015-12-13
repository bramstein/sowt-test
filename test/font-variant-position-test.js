describe('font-variant-position', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontVariantPosition' in style ||
           'webkitFontVariantPosition' in style ||
           'MozFontVariantPosition' in style,
           'to be true');
  });

  it('enables superscript by setting super', function () {
    expect('font-variant-position: super', 'to enable opentype feature', 'sups');
  });

  it('enables subscript by setting sub', function () {
    expect('font-variant-position: sub', 'to enable opentype feature', 'subs');
  });

  it('does not enable any features by default', function () {
    expect('font-variant-position: normal', 'not to enable opentype feature', 'sups');
    expect('font-variant-position: normal', 'not to enable opentype feature', 'subs');
  });
});
