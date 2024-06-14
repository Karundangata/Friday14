USE productsDB;
GO

CREATE PROCEDURE FilterProducts(
    @p_minPrice DECIMAL(10, 2),
    @p_maxPrice DECIMAL(10, 2),
     @p_name VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM products 
    WHERE price BETWEEN p_minPrice AND p_maxPrice 
    AND name LIKE CONCAT('%', p_name, '%');
END ;
GO