package com.gqlws.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "PRODUCTS")
public class Product {

	@Id
	@Column(name = "PRODUCT_ID")
	private String productId;

	@Column(name = "NAME")
	private String name;

	@Column(name = "SIZE")
	private int size;

	@Column(name = "VARIETY")
	private String variety;

	@Column(name = "PRICE")
	private float price;

	@Column(name = "STATUS")
	private String status;

	@OneToMany(mappedBy = "product")
	private List<OrderLine> orderLines;

	// Getters and setters
	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public String getVariety() {
		return variety;
	}

	public void setVariety(String variety) {
		this.variety = variety;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<OrderLine> getOrderLines() {
		return orderLines;
	}

	public void setOrderLines(List<OrderLine> orderLines) {
		this.orderLines = orderLines;
	}
}
