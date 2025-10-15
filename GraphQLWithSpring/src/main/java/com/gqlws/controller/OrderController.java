package com.gqlws.controller;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.gqlws.data.Orders;
import com.gqlws.data.OrdersRepository;

@Controller
public class OrderController {

	private OrdersRepository ordersRepository;

	public OrderController(OrdersRepository ordersRepository) {
		super();
		this.ordersRepository = ordersRepository;
	}

	@QueryMapping
	public Iterable<Orders> orders() {
		return this.ordersRepository.findAll();
	}

}
