using API._Domain.Models;

namespace API._Application.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ProductType Type { get; set; }

        public decimal Price { get; set; }

        public int Discount { get; set; }

        public int Quantity { get; set; }
    }
}
