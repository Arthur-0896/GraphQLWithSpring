package com.gqlws.controllers;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.gqlws.entities.Order;
import com.gqlws.repositories.OrdersRepository;

@Controller
public class OrderController {

	private OrdersRepository ordersRepository;

	public OrderController(OrdersRepository ordersRepository) {
		super();
		this.ordersRepository = ordersRepository;
	}

	@QueryMapping
	public Iterable<Order> orders() {
		return this.ordersRepository.findAll();
	}

}
