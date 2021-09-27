export default class DiscountCoupon {

    percentage: number;

    constructor(percentage: number) {
        this.percentage = percentage;
    }

    discount(totalProducts: number): number{
        return totalProducts * (this.percentage / 100);
    }
}