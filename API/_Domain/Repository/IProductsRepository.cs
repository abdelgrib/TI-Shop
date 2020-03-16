using API._Domain.Models;
using System.Collections.Generic;

namespace API._Domain.Repository
{
    public interface IProductsRepository
    {
        Product Find(int id);

        IList<Product> List();
    }
}
