using imhappy.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace imhappy.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _momentRepository;
        public CategoryController(ICategoryRepository momentRepository)
        {
            _momentRepository = momentRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_momentRepository.GetAll());
        }
    }
}