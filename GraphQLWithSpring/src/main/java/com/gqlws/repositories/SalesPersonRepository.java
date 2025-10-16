package com.gqlws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gqlws.entities.SalesPerson;

public interface SalesPersonRepository extends JpaRepository<SalesPerson, Long> {

}
