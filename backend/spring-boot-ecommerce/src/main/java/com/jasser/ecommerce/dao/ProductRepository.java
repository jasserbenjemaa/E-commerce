package com.jasser.ecommerce.dao;

import com.jasser.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
//@CrossOrigin("http://localhost:4200")
//@CrossOrigin({"http://localhost:4200","http://www.mycoolapp.com"})allow js of only two web browsers to get the REST api from the backend
//@CrossOrigin  allow js of any web browser to get the REST api from the backend
public interface ProductRepository extends JpaRepository<Product,Long> {
}
