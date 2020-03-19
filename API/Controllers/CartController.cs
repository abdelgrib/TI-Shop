using API._Application.Dtos;
using API._Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        [HttpPost]
        public IActionResult Create(CartDto dto)
        {
            var result = _cartService.Create(dto);
            if (!result)
                return BadRequest();
            return Ok();
        }
    }
}
