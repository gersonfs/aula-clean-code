import Order from "./Order";
import Cpf from "../ValueObjects/Cpf";
import Item from "./Order/Item";
import DiscountCoupon from "../ValueObjects/DiscountCoupon";

test("Invalid CPF", () => {

    expect( () => {
        let cpf = new Cpf("15713585011");
        let items = [
            new Item("Produto 1", 10, 1),
            new Item("Produto 2", 20, 1),
            new Item("Produto 3", 30, 1),
        ];
        new Order(cpf, items);
    }).toThrow();
});

test("Valid Order", () => {

    let cpf = new Cpf("538.417.670-95");
    let items = [
        new Item("Produto 1", 10, 1),
        new Item("Produto 2", 20, 1),
        new Item("Produto 3", 30, 1),
    ];
    let order = new Order(cpf, items);
    expect(order).toBeInstanceOf(Order);
    expect(order.totalItems()).toBe(3);
    expect(order.total()).toBe(60);
});


test("Valid Order with coupon", () => {

    let cpf = new Cpf("538.417.670-95");
    let items = [
        new Item("Produto 1", 10, 1),
        new Item("Produto 2", 20, 1),
        new Item("Produto 3", 30, 1),
    ];
    let coupon = new DiscountCoupon(10);

    let order = new Order(cpf, items, coupon);
    expect(order).toBeInstanceOf(Order);
    expect(order.totalItems()).toBe(3);
    expect(order.total()).toBe(54);
});
