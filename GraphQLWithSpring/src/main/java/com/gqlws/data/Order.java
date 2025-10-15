package com.gqlws.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

/*
CREATE TABLE ORDERS (
	    ORDER_ID VARCHAR(16) PRIMARY KEY,
	    CUSTOMER_ID BIGINT,
	    SALESPERSON_ID BIGINT
	);*/

@Entity
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ORDERS")
	private int orderId;
	
	@ManyToOne
	@JoinColumn(name = "CUSTOMER_ID" , nullable = false, updatable = false)
	private Customer customer;
	
}
