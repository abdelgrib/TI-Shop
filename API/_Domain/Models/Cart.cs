using System.Collections.Generic;

namespace API._Domain.Models
{
    public class Cart
    {
        public Cart()
        {
            Products = new List<Product>();
        }
        public int Id { get; set; }
        public IList<Product> Products { get; set; }
    }
}
