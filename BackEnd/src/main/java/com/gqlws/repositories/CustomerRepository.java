package com.gqlws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gqlws.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	Customer findCustomerByEmail(String email);
}
