import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {


    describe("Regular Items",() => {
        const regularItems = new Shop([
        new Item("regitem", 0, 10),
        new Item("regitem", 2, 0),
        ]);
        const items = regularItems.updateQuality();

        it("should degrades Quality twice as fast,once the sell by date has passed", () => {
            expect(items[0].quality).toEqual(8);
        });

        it("should stop the quality value to be lower than zero", () => {
            expect(items[1].quality).toEqual(0);
        });

        it("should degrades sellin value and quality value", () => {
            const gildedRose = new Shop([new Item("reg item", 2, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toEqual(1);
            expect(items[0].quality).toEqual(9);
        });

    });
    describe("Aged Brie",() => {
        const agerBrieItem = new Shop([
        new Item("Aged Brie", 3, 10),
        new Item("Aged Brie", 3, 50),
        ]);
        const items = agerBrieItem.updateQuality();

        it("should increase Aged Brie's quality the older it gets", () => {
            expect(items[0].quality).toEqual(11);
        });

        it("should not exceed the Quality of 50", () => {
            expect(items[1].quality).toEqual(50);
        });

    });

    describe('Sulfuras, Hand of Ragnaros',() => {
        const sulfurasItem = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 3, 80),
        ]);
        const items = sulfurasItem.updateQuality();

        it("should not decrease Sulfuras's quality", () => {
            expect(items[0].quality).toEqual(80);
        });

        it("should not decrease Sulfuras's sellIn", () => {
            expect(items[0].sellIn).toEqual(3);
        });

    });

    describe('Backstage passes',() => {
        const sulfurasItem = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 14, 30),
        new Item('Backstage passes to a TAFKAL80ETC concert', 9, 30),
        new Item('Backstage passes to a TAFKAL80ETC concert', 2, 30),
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30),
        ]);
        const items = sulfurasItem.updateQuality();

        it("should increase quality when aging", () => {
            expect(items[0].quality).toEqual(31);
        });

        it("should increase quality when aging by 2 when 10 or less days", () => {
            expect(items[1].quality).toEqual(32);
        });

        it("should increase quality when aging by 3 when 5 or less days", () => {
            expect(items[2].quality).toEqual(33);
        });

        it("should drop to 0 after the concert", () => {
            expect(items[3].quality).toEqual(0);
        });

    });

    describe('Conjured Items', () =>{
        const conjuredItem = new Shop([
            new Item('Conjured', 14, 30),
            new Item('Conjured', 0, 30),
            new Item('Conjured', 0, 1),
            ]);
            const items = conjuredItem.updateQuality();
        it("should drop quality by 2", () => {
            expect(items[0].quality).toEqual(28);
        });

        it("should drop quality by 4", () => {
            expect(items[1].quality).toEqual(26);
        });

        it("should not drop quality below 0", () => {
            expect(items[2].quality).toEqual(0);
        });
    });
});
