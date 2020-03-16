using API._Application.Dtos;
using System.Collections.Generic;

namespace API._Application.Services
{
    public interface IProductsService
    {
        ProductDto Find(int id);

        IList<ProductDto> List();
    }
}
