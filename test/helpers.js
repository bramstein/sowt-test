var OPENTYPE_FEATURE_FONT_FAMILY = '__opentype-features__';

var OPENTYPE_FEATURES = {
  'kern': 90,
  'liga': 100,
  'dlig': 110,
  'c2sc': 120,
  'smcp': 130,
  'lnum': 140,
  'onum': 150,
  'pnum': 160,
  'tnum': 170,
  'ss01': 180,
  'ss02': 190,
  'ss03': 200,
  'ss04': 210,
  'ss05': 220,
  'ss06': 230,
  'ss07': 240,
  'ss08': 250,
  'ss09': 260,
  'ss10': 270,
  'ss11': 280,
  'ss12': 290,
  'ss13': 300,
  'ss14': 310,
  'ss15': 320,
  'ss16': 330,
  'ss17': 340,
  'ss18': 350,
  'ss19': 360,
  'ss20': 370,
  'sups': 380,
  'subs': 390,
  'ordn': 400,
  'salt': 410,
  'frac': 420,
  'swsh': 430,
  'calt': 440,
  'rlig': 450,
  'hlig': 460,
  'clig': 470,
  'locl': 480,
  'hist': 490,
  'c2pc': 500,
  'pcap': 510,
  'unic': 520,
  'titl': 530,
  'afrc': 540,
  'zero': 550,
  'cswh': 560,
  'ornm': 570,
  'nalt': 580
};

function getTestString(feature) {
  if (feature === 'liga') {
    return 'b';
  } else if (feature === 'calt') {
    return 'c';
  } else if (feature === 'rlig') {
    return 'd';
  } else if (feature === 'clig') {
    return 'e';
  } else if (feature === 'c2sc' || feature === 'c2pc') {
    return 'f';
  } else {
    return 'a';
  }
}

function findFeature(width) {
  for (var key in OPENTYPE_FEATURES) {
    if (OPENTYPE_FEATURES[key] === width) {
      return key;
    }
  }
  return undefined;
}

expect.addAssertion('string', '[not] to enable opentype feature', function (expect, subject, cmp) {
  var property = PrefixFree.prefixProperty(subject),
      ruler = new Ruler(getTestString(cmp));

  ruler.style('font: 1000px "' + OPENTYPE_FEATURE_FONT_FAMILY + '";' + property + ';' + subject + ';');

  if (cmp === 'locl') {
    ruler.lang('fr');
  }
  ruler.insert();

  var feature = findFeature(ruler.width());

  expect(feature, '[not] to equal', cmp);

  ruler.remove();
});

beforeEach(function (done) {
  Promise.all([
    new FontFaceObserver(OPENTYPE_FEATURE_FONT_FAMILY, {}).check('a'),
    new FontFaceObserver('__em__', {}).check('x'),
    new FontFaceObserver('__half-em__', {}).check('x')
  ]).then(function () {
    done();
  }).catch(function (e) {
    done(e);
  });
});
