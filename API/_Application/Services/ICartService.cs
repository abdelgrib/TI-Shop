using API._Application.Dtos;

namespace API._Application.Services
{
    public interface ICartService
    {
        public bool Create(CartDto dto);
    }
}
