package com.gqlws.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/*
CREATE TABLE ORDERS (
	    ORDER_ID VARCHAR(16) PRIMARY KEY,
	    CUSTOMER_ID BIGINT,
	    SALESPERSON_ID BIGINT
	);*/

@Entity
@Table(name = "ORDERS")
public class Order {

	@Id
	@Column(name = "ORDER_ID")
	private String orderId;

	@ManyToOne
	@JoinColumn(name = "CUSTOMER_ID", nullable = false, updatable = false)
	private Customer customer;

	@ManyToOne
	@JoinColumn(name = "SALESPERSON_ID", updatable = false, nullable = false)
	private SalesPerson salesPerson;

	@OneToMany(mappedBy = "order")
	private List<OrderLine> orderLines;

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public SalesPerson getSalesPerson() {
		return salesPerson;
	}

	public void setSalesPerson(SalesPerson salesPerson) {
		this.salesPerson = salesPerson;
	}

	public List<OrderLine> getOrderLines() {
		return orderLines;
	}

	public void setOrderLines(List<OrderLine> orderLines) {
		this.orderLines = orderLines;
	}

}
