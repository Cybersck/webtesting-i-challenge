const enhancer = require('./enhancer.js');
// test away!
items = [
    {
        name: 'Barbarian Battleaxe',
        durability: 93,
        enhancement: 3
    },
    {
        name: 'Elven Bow',
        durability: 24,
        enhancement: 20
    },
    {
        name: 'Demonic Longsword',
        durability: 46,
        enhancement: 15
    }

]

describe('repair', () => {
    it('Should expect the desired behavior of repair', () => {
        items.forEach(item => {
            let newItem = enhancer.repair(item);
            expect(newItem.durability).toBe(100);
        });
    });
});

describe('success', () => {
    it('Should expect the desired behavior of successfull enhancement', () => {
        items.forEach(item => {
            let newItem = enhancer.succeed(item);
                if (item.enhancement < 20) {
                    expect(newItem.enhancement).toBe(item.enhancement+1);
                }
                else {
                    expect(newItem.enhancement).toBe(item.enhancement);
                }
        });
    });
});

describe('fails', () => {
    it('Should expect the desired behavior of failed enhancement', () => {
        items.forEach(item => {
            let newItem = enhancer.fail(item);
                if (item.enhancement < 15) {
                    expect(newItem.durability).toBe(item.durability-5);
                    console.table({name: item.name, new_durability: newItem.durability, original_durability: item.durability, expected_difference: 5});
                }
                if (item.enhancement >= 15) {
                    expect(newItem.durability).toBe(item.durability-10);
                    console.table({name: item.name, new_durability: newItem.durability, original_durability: item.durability, expected_difference: 10});
                }
                if (item.enhancement > 16) {
                    expect(newItem.enhancement).toBe(item.enhancement-1);
                    console.table({name: item.name, new_enhancement: newItem.enhancement, original_enhancement: item.enhancement, expected_difference: 1});
                }
        });
    });
});
