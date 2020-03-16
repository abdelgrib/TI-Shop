using API._Application.Dtos;
using API._Domain.Models;
using API._Domain.Repository;
using System.Collections.Generic;
using System.Linq;

namespace API._Application.Services.Concrete
{
    /*Pas de véréfications*/
    public class ProductsService : IProductsService
    {
        private readonly IProductsRepository _productsRepository;
        public ProductsService(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        public ProductDto Find(int id)
        {
            return Map(_productsRepository.Find(id));
        }

        public IList<ProductDto> List()
        {
            var products = _productsRepository.List();
            return products.Select(x => Map(x)).ToList();
        }

        /*One peut utiliser AutoMapper*/
        private ProductDto Map(Product product)
        {
            if (product == null)
                return null;
            return new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Type = product.Type
            };
        }
    }
}
