package com.jasser.ecommerce.controller;

import com.jasser.ecommerce.dto.Purchase;
import com.jasser.ecommerce.dto.PurchaseResponse;
import com.jasser.ecommerce.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/checkout")
public class CheckoutController {
    private CheckoutService checkoutService;
    @Autowired
    public CheckoutController(CheckoutService checkoutService){
        this.checkoutService=checkoutService;
    }
    @PostMapping("/purchase")
    public PurchaseResponse placeOrer(@RequestBody Purchase purchase){
        PurchaseResponse purchaseResponse = checkoutService.placeOrder((purchase));
        return purchaseResponse;
    }
}
