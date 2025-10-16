package com.gqlws.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gqlws.entities.Order;

public interface OrdersRepository extends JpaRepository<Order, String> {

}