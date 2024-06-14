USE productsDB;
GO
CREATE PROCEDURE SearchProduct(
    @p_name VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM products WHERE name LIKE CONCAT('%', p_name, '%');
END;
GO

