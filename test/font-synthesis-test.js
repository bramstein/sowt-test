describe('font-synthesis', function () {
  it('supports the syntax', function () {
    var style = document.body.style;

    expect('fontSynthesis' in style ||
           'webkitFontSynthesis' in style ||
           'MozFontFontSynthesis' in style,
           'to be true');
  });

  /**
   * Unfortunately there is no good way to detect faux
   * bold or italic programatically across all browsers.
   *
   * This is because some browsers do not change glyph
   * metrics when applying faux styles.
   */
});
