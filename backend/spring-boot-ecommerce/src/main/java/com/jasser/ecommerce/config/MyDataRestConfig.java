package com.jasser.ecommerce.config;

import com.jasser.ecommerce.entity.Product;
import com.jasser.ecommerce.entity.ProductCategory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Configuration class for customizing the behavior of Spring Data REST.
 * It disables certain HTTP methods for specified domain types
 * and configures Cross-Origin Resource Sharing (CORS) if needed.
 */
@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    /**
     * Customizes the repository REST configuration.
     *
     * @param config The configuration object for repository REST settings.
     * @param cors   The CORS registry for defining CORS mappings.
     */
    private EntityManager entityManager;
    @Autowired
    public MyDataRestConfig(EntityManager theEntityManager){
        entityManager=theEntityManager;
    }
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        // Invoke default implementation for any inherited configurations
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        // Define unsupported HTTP methods
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.PATCH};

        // Disable HTTP methods for the "Product" entity: PUT, POST, and PATCH
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // Disable HTTP methods for the "ProductCategory" entity: PUT, POST, and PATCH
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
        //call an internal helper method
        exposeIds(config);
    }
    private void exposeIds(RepositoryRestConfiguration config){
        //expose entity ids

        //-get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities= entityManager.getMetamodel().getEntities();
        //-create an array of the entity type
        List<Class> entityClasses=new ArrayList<>();
        //-get the entity types for the entities
        for(EntityType tempEntitytype : entities){
            entityClasses.add(tempEntitytype.getJavaType());
        }
        //-expose the entity ids for the array of entity/domain types
        Class[] domainTypes=entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}
