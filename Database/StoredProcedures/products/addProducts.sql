USE productsDB;
GO


CREATE PROCEDURE AddProduct(
    @p_name VARCHAR(255),
    @p_price DECIMAL(10, 2)
)
AS
BEGIN
    INSERT INTO products (name, price) VALUES (p_name, p_price);
END;