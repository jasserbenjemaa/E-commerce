package com.jasser.ecommerce.config;

import com.jasser.ecommerce.entity.Product;
import com.jasser.ecommerce.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

/**
 * Configuration class for customizing the behavior of Spring Data REST.
 * It disables certain HTTP methods for specified domain types
 * and configures Cross-Origin Resource Sharing (CORS) if needed.
 */
@Configurable
public class MyDataRestConfig implements RepositoryRestConfigurer {

    /**
     * Customizes the repository REST configuration.
     *
     * @param config The configuration object for repository REST settings.
     * @param cors   The CORS registry for defining CORS mappings.
     */
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        // Invoke default implementation for any inherited configurations
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        // Define unsupported HTTP methods
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        // Disable HTTP methods for the "Product" entity: PUT, POST, and DELETE
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // Disable HTTP methods for the "ProductCategory" entity: PUT, POST, and DELETE
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }
}
