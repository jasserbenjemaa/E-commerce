package com.jasser.ecommerce.dao;

import com.jasser.ecommerce.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "states",path = "states")
public interface StateRepository extends JpaRepository<State,Integer> {

}
