
import DiscountCoupon from "./DiscountCoupon";

test("Valid Copupon", () => {
    let coupon = new DiscountCoupon(10);
    expect(coupon.discount(200)).toBe(20);
});

