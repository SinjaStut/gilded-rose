class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function decreaseQuality(item, amount = 1) {
  item.quality = Math.max(0, item.quality - amount);
}

function increaseQuality(item, amount = 1) {
  item.quality = Math.min(50, item.quality + amount);
}

function isSulfuras(item) {
  return item.name === "Sulfuras, Hand of Ragnaros";
}

function isAgedBrie(item) {
  return item.name === "Aged Brie";
}

function isBackstagePass(item) {
  return item.name === "Backstage passes to a TAFKAL80ETC concert";
}

function isConjured(item) {
  return item.name.includes("Conjured");
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (!isAgedBrie(item) && !isBackstagePass(item)) {

        if (!isSulfuras(item)) {

          if (isConjured(item)) {
            decreaseQuality(item, 2);
          } else {
            decreaseQuality(item);
          }

        }

      } else {

        increaseQuality(item);

        if (isBackstagePass(item)) {

          if (item.sellIn < 11) {
            increaseQuality(item);
          }

          if (item.sellIn < 6) {
            increaseQuality(item);
          }

        }
      }

      if (!isSulfuras(item)) {
        item.sellIn--;
      }

      if (item.sellIn < 0) {

        if (!isAgedBrie(item) && !isBackstagePass(item)) {

          if (!isSulfuras(item)) {

            if (isConjured(item)) {
              decreaseQuality(item, 2);
            } else {
              decreaseQuality(item);
            }

          }

        } else if (isBackstagePass(item)) {

          item.quality = 0;

        } else {

          increaseQuality(item);

        }
      }
    }

    return this.items;
  }
}

/*
module.exports = {
  Item,
  Shop
}
*/