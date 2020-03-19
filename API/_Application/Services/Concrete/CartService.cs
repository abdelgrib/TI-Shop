using API._Application.Dtos;
using API._Domain.Models;
using API._Domain.Repository;
using System.Linq;

namespace API._Application.Services.Concrete
{
    public class CartService : ICartService
    {
        private readonly IProductsRepository _productsRepository;
        private readonly ICartRepository _cartRepository;
        public CartService(IProductsRepository productsRepository, ICartRepository cartRepository)
        {
            _productsRepository = productsRepository;
            _cartRepository = cartRepository;
        }

        public bool Create(CartDto dto)
        {
            if (dto?.Products == null || !dto.Products.Any())
                return false;
            /*Recalcul du montant/promos*/
            /*Vérification de disponibilité*/
            
            var productsIds = dto.Products.Select(x => x.Id);
            var products = _productsRepository.List().Where(x => productsIds.Contains(x.Id)); /*Dans la vraie vie le Where utilisé avant l'exécution de la requete avec par exemple ToList()*/
            if (products.Count() != productsIds.Count())
                return false;

            var cart = new Cart();
            cart.Products.ToList().AddRange(products);
            _cartRepository.Create(cart);
            
            return true; /*retour peut être remplacé avec une class générique Result<T>*/
        }
    }
}
