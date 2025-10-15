package com.gqlws.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	Customer findCustomerByEmail(String email);
}
