using API._Domain.Models;
using API._Domain.Repository;
using System.Collections.Generic;
using System.Linq;

namespace API._Infrastructure.Repository
{
    public class ProductsRepository : IProductsRepository
    {
        private static readonly IList<Product> Products = new List<Product>()
        {
            new Product { Id = 1, Name = "Citron", Type = ProductType.Fruit, Price = 3.5m },
            new Product { Id = 2, Name = "Clémentine", Type = ProductType.Fruit, Price = 1, Discount = 3 },
            new Product { Id = 3, Name = "Pomelo", Type = ProductType.Fruit, Price = 2.99m },
            //new Product { Id = 4, Name = "Amande", Type = ProductType.Fruit },
            //new Product { Id = 5, Name = "Pêche", Type = ProductType.Fruit },
            //new Product { Id = 6, Name = "Poire", Type = ProductType.Fruit },
            //new Product { Id = 7, Name = "Pomme", Type = ProductType.Fruit },
            //new Product { Id = 8, Name = "Kiwi", Type = ProductType.Fruit },
            //new Product { Id = 9, Name = "Raisin", Type = ProductType.Fruit },
            //new Product { Id = 10, Name = "Figue", Type = ProductType.Fruit }
        };

        public Product Find(int id)
        {
            return Products.SingleOrDefault(x => x.Id == id);
        }

        public IList<Product> List()
        {
            return Products;
        }
    }
}
