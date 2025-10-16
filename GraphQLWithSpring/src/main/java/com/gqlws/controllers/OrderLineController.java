package com.gqlws.controllers;

import org.springframework.stereotype.Controller;

import com.gqlws.entities.OrderLine;
import com.gqlws.repositories.OrderLineRepository;

@Controller
public class OrderLineController {
	private OrderLineRepository orderLineRepository;

	public OrderLineController(OrderLineRepository orderLineRepository) {
		super();
		this.orderLineRepository = orderLineRepository;
	}
	
	public Iterable<OrderLine> getOrderLines() {
		return this.orderLineRepository.findAll();
	}
}