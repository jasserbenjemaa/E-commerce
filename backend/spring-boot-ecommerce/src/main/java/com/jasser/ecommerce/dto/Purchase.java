package com.jasser.ecommerce.dto;

import com.jasser.ecommerce.entity.Address;
import com.jasser.ecommerce.entity.Customer;
import com.jasser.ecommerce.entity.Order;
import com.jasser.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
