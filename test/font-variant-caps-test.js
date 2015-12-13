describe('font-variant-caps', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontVariantCaps' in style ||
           'webkitFontVariantCaps' in style ||
           'MozFontVariantCaps' in style,
           'to be true');
  });

  it('enables small caps by setting small-caps', function () {
    expect('font-variant-caps: small-caps', 'to enable opentype feature', 'smcp');
  });

  it('enables small capitals for both upper and lowercase letters by setting all-small-caps', function () {
    expect('font-variant-caps: all-small-caps', 'to enable opentype feature', 'smcp');
    expect('font-variant-caps: all-small-caps', 'to enable opentype feature', 'c2sc');
  });

  it('enables petite capitals by setting petite-caps', function () {
    expect('font-variant-caps: petite-caps', 'to enable opentype feature', 'pcap');
  });

  it('enables all petite capitals for both upper and lowercase letters by setting all-petite-caps', function () {
    expect('font-variant-caps: all-petite-caps', 'to enable opentype feature', 'pcap');
    expect('font-variant-caps: all-petite-caps', 'to enable opentype feature', 'c2pc');
  });

  it('enables a mixture of small capitals for uppercase letters with normal lowercase letters by setting unicase', function () {
    expect('font-variant-caps: unicase', 'to enable opentype feature', 'unic');
  });

  it('enables titling capitals by setting titling-caps', function () {
    expect('font-variant-caps: titling-caps', 'to enable opentype feature', 'titl');
  });

  it('does not enable any features by default', function () {
    expect('font-variant-caps: normal', 'not to enable opentype feature', 'smcp');
    expect('font-variant-caps: normal', 'not to enable opentype feature', 'c2sc');
    expect('font-variant-caps: normal', 'not to enable opentype feature', 'c2pc');
    expect('font-variant-caps: normal', 'not to enable opentype feature', 'pcap');
    expect('font-variant-caps: normal', 'not to enable opentype feature', 'unic');
    expect('font-variant-caps: normal', 'not to enable opentype feature', 'titl');
  });
});
