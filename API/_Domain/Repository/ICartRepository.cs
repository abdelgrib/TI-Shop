using API._Domain.Models;

namespace API._Domain.Repository
{
    public interface ICartRepository
    {
        public void Create(Cart entity);
    }
}
