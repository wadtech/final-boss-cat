var cat = require('../final-boss-cat-es5.js'),
    test = require('tape');

test('sanity!', function(t) {
  t.equals(typeof cat.Cat, 'function', 'cat is an object')
  t.end();
})

test('cat is called simon by default', function(t) {
  var c = new cat.Cat();
  t.equals(c.name, 'Simon', 'cat is called simon')
  t.end();
})

test('cat can be named in the constructor', function(t) {
  var c = new cat.Cat('Reginald');
  t.equals(c.name, 'Reginald', 'cat is called Reginald')
  t.end();
})

test('noisy animal', function(t) {
  var c = new cat.Cat();
  t.equals('MROW', c.meow(), 'cat meow');
  t.end();
})

test('sleepy animal', function(t) {
  var c = new cat.Cat();


  c.sleep(function(){
        t.pass('yay!');
        t.end();
  });
})

test('cat eats noisily', function(t) {
  var c = new cat.Cat('FatCat');

  t.equals(c.eat(), 'nom nom nom', 'noisy cat eating');
})
