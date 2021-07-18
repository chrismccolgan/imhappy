using imhappy.Models;
using System.Collections.Generic;

namespace imhappy.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
    }
}
