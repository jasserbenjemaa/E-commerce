package com.jasser.ecommerce.dao;

import com.jasser.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
//@CrossOrigin("http://localhost:4200")
//@CrossOrigin({"http://localhost:4200","http://www.mycoolapp.com"})allow js of only two web browsers to get the REST api from the backend
//@CrossOrigin  allow js of any web browser to get the REST api from the backend
public interface ProductRepository extends JpaRepository<Product,Long> {
    Page<Product> findByCategoryId(@Param("id") Long id , Pageable pageable);
    Page<Product> findByNameContaining(@Param("name") String name , Pageable pageable);
}
