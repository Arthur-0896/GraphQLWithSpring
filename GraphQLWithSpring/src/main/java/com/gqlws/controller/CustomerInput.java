package com.gqlws.controller;

import com.gqlws.data.Customer;

public class CustomerInput {
	// CUSTOMER_ID BIGINT PRIMARY KEY AUTO_INCREMENT,
	// FIRST_NAME VARCHAR(64),
	// LAST_NAME VARCHAR(64),
	// EMAIL VARCHAR(128) UNIQUE,
	// PHONE VARCHAR(32),
	// ADDRESS VARCHAR(256),
	// CITY VARCHAR(64),
	// STATE CHAR(2),
	// ZIPCODE VARCHAR(12)

	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private String address;
	private String city;
	private String state;
	private String zipCode;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipcode(String zipcode) {
		this.zipCode = zipcode;
	}

	public Customer getCustomerEntity() {
		Customer customer = new Customer();
		
		customer.setFirstName(this.firstName);
		customer.setLastName(this.lastName);
		customer.setEmail(this.email);
		customer.setPhone(this.phone);
		customer.setAddress(this.address);
		customer.setCity(this.city);
		customer.setState(this.state);
		customer.setZipCode(this.zipCode);
		
		return customer;
	}
}
