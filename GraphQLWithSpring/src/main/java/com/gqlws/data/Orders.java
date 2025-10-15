package com.gqlws.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/*
CREATE TABLE ORDERS (
	    ORDER_ID VARCHAR(16) PRIMARY KEY,
	    CUSTOMER_ID BIGINT,
	    SALESPERSON_ID BIGINT
	);*/

@Entity
@Table(name = "ORDERS")
public class Orders {

	@Id
	@Column(name = "ORDER_ID")
	private String orderId;

	@ManyToOne
	@JoinColumn(name = "CUSTOMER_ID", nullable = false, updatable = false)
	private Customer customer;

	@ManyToOne
	@JoinColumn(name = "SALESPERSON_ID", updatable = false, nullable = false)
	private SalesPerson salesPerson;
}
