package com.gqlws.controllers;

import org.springframework.stereotype.Controller;

import com.gqlws.entities.SalesPerson;
import com.gqlws.repositories.SalesPersonRepository;

@Controller
public class SalesPersonController {
	private SalesPersonRepository salesPersonRepository;

	public SalesPersonController(SalesPersonRepository salesPersonRepository) {
		super();
		this.salesPersonRepository = salesPersonRepository;
	}

	public Iterable<SalesPerson> getSalesPersons() {
		return this.salesPersonRepository.findAll();
	}
}
