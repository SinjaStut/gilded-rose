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

it("sulfuras does not change", function () {
  const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
  const shop = new Shop(items);

  shop.updateQuality();

  expect(items[0].sellIn).toBe(0);
  expect(items[0].quality).toBe(80);
});

it("backstage passes increase in quality", function () {
  const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)];
  const shop = new Shop(items);

  shop.updateQuality();

  expect(items[0].sellIn).toBe(14);
  expect(items[0].quality).toBe(21);
});

it("quality is never negative", function () {

  const items = [new Item("normal item", 10, 0)];
  const shop = new Shop(items);

  shop.updateQuality();

  expect(items[0].quality).toBe(0);

});

});
