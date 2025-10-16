package com.gqlws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gqlws.entities.OrderLine;

public interface OrderLineRepository extends JpaRepository<OrderLine, Long>{

}
