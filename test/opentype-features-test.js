describe('OpenType features', function () {
  it('enables selected OpenType features by default', function () {
     expect('', 'to enable opentype feature', 'calt');
     expect('', 'to enable opentype feature', 'clig');
     expect('', 'to enable opentype feature', 'locl');
     expect('', 'to enable opentype feature', 'rlig');
     expect('', 'to enable opentype feature', 'kern');
     expect('', 'to enable opentype feature', 'liga');
  });
});
