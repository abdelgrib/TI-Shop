using API._Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productsService.List());
        }

        [HttpGet("{id}", Name = "GetByIdRoute")]
        public IActionResult Get(int id)
        {
            var product = _productsService.Find(id);
            
            if (product == null)
                return NotFound();

            return Ok(product);
        }
    }
}
