namespace API._Domain.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ProductType Type { get; set; }

        /*Il préférable de d'avoir Prix et promos dans une autre table*/

        public decimal Price { get; set; }

        public int Discount { get; set; }
    }
}
