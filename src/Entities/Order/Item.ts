export default class Item {
    description: string;
    price: number;
    quantity: number;

    constructor(description: string, price: number, quantity: number) {
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    total(): number {
        return this.price * this.quantity;
    }

}