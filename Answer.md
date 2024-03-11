# Q1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
# Answer:-
The "Product_Category" table contains attributes related to product categories such as ID, name, description, and timestamps.
The relationship between "Product" and "Product_Category" is established through the "category_id" attribute in the "Product" table. This attribute serves as a foreign key referencing the primary key "id" of the "Product_Category" table.Therefore, each product in the "Product" table is associated with a specific product category defined in the "Product_Category" table. This relationship represents a many-to-one relationship where many products can belong to one product category.


# Q2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
# Answer:-
To ensure that each product in the "Product" table has a valid   category assigned to it, you can enforce referential integrity using foreign key constraints. Specifically, you would create a foreign key constraint on the "category_id" column in the "Product" table, referencing the "id" column in the "Product_Category" table.This constraint ensures that any value entered into the "category_id" column of the "Product" table must exist as a primary key value in the "id" column of the "Product_Category" table. Thus, each product must have a valid category assigned to it.
# Note :-This is implemented in schema.js line 86
