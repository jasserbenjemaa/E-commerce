package com.jasser.ecommerce.service;

import com.jasser.ecommerce.dto.Purchase;
import com.jasser.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
