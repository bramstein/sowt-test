describe('font-color-formats', function () {
  it('supports SBIX color format', function () {
    expect(document.documentElement.classList.contains('chromacheck-sbix'), 'to be true');
  });

  it('supports SVG-in-OpenType color format', function () {
    expect(document.documentElement.classList.contains('chromacheck-svg'), 'to be true');
  });

  it('supports COLR/CPAL color format', function () {
    expect(document.documentElement.classList.contains('chromacheck-colr'), 'to be true');
  });

  it('supports CBDT/CBLC color format', function () {
    expect(document.documentElement.classList.contains('chromacheck-cbdt'), 'to be true');
  });
});
