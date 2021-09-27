import Cpf from "../ValueObjects/Cpf";
import Item from "./Order/Item";
import DiscountCoupon from "../ValueObjects/DiscountCoupon";

export default class Order {

    cpf: Cpf;
    items: Item[];
    coupon?: DiscountCoupon;

    constructor(cpf: Cpf, items: Item[], coupon?: DiscountCoupon) {

        if (items.length === 0) {
            throw new Error('You need to add at least one item!');
        }

        this.cpf = cpf;
        this.items = items;
        this.coupon = coupon;
    }

    totalItems(): number {
        return this.items.length;
    }

    totalProducts(): number {
        let total: number = 0;
        for (let item of this.items) {
            total += item.total();
        }

        return total;
    }

    total(): number {
        return this.totalProducts() - this.discount();
    }

    discount(): number {
        if(!this.coupon) {
            return 0;
        }

        return this.coupon.discount(this.totalProducts());
    }

}