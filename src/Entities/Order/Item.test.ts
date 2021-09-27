import Item from "./Item";

test("Valid item", () => {
    let item = new Item("Produto A", 10, 2);
    expect(item.total()).toBe(20);
});