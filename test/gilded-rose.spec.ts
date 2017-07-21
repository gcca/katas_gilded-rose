import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/item';

describe('Gilded Rose', function () {

    it('should foo', function() {
        // const gilgedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const gilgedRose = new GildedRose([
            new Item('Aged Brie', 10, 5),
            new Item('Backstage passes to a TAFKAL80ETC concert', 50, 11),
            new Item('Sulfuras, Hand of Ragnaros', 80, 0),
        ]);
        const items = gilgedRose.updateQuality();

        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(4);

        expect(items[1].quality).to.equal(50);
        expect(items[1].sellIn).to.equal(10);

        expect(items[2].quality).to.equal(80);
        expect(items[2].sellIn).to.equal(0);
    });

});
