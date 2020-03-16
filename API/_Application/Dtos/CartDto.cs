using System.Collections.Generic;

namespace API._Application.Dtos
{
    public class CartDto
    {
        public IList<ProductDto> Products { get; set; }
    }
}
