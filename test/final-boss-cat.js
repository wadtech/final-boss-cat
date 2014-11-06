var cat = require('Cat'),
    test = require('tape');

test('sanity!', function(t) {
  t.equals(typeof Cat, object, 'cat is an object')
  t.end();
})

test('cat is called simon by default', function(t) {
  var c = new Cat();
  t.equals(c.name, 'Simon', 'cat is called simon')
  t.end();
})

test('cat can be named in the constructor', function(t) {
  var c = new Cat('Reginald');
  t.equals(c.name, 'Reginald', 'cat is called Reginald')
  t.end();
})

test('noisy animal', function(t) {
  var c = new Cat();
  t.equals('MEOW', c.meow(), 'cat meow');
  t.end();
})

test('sleepy animal', function(t) {
  var c = new Cat(),
      testCallback = function(){
        t.pass('yay!');
        t.end();
      };


  c.sleep(testCallback);
})

test('cat eats noisily', function(t) {
  var c = new Cat();

  t.equals(c.eat(), 'nom nom nom', 'noisy cat eating');
})
