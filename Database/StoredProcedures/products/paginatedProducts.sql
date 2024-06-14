USE productsDB;
GO

CREATE PROCEDURE GetPaginatedProducts(
    @p_limit INT,
    @p_offset INT
)
AS
BEGIN
    SELECT * FROM products LIMIT p_limit OFFSET p_offset;
END;
GO