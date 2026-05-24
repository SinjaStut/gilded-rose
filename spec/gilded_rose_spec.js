//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("normal items degrade in quality", function () {

  const items = [new Item("normal item", 10, 20)];
  const shop = new Shop(items);

  shop.updateQuality();

  expect(items[0].sellIn).toBe(9);
  expect(items[0].quality).toBe(19);

});

it("aged brie increases in quality", function () {
  const items = [new Item("Aged Brie", 10, 20)];
  const shop = new Shop(items);

  shop.updateQuality();

  expect(items[0].sellIn).toBe(9);
  expect(items[0].quality).toBe(21);
});

});
