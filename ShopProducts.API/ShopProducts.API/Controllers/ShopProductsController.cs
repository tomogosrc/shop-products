using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopProducts.API.Repositories.Contracts;
using ShopProducts.Models.Models;

namespace ShopProducts.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopProductsController : ControllerBase
    {
        private readonly IShopProductsRepository _shopProductsRepository;

        public ShopProductsController(IShopProductsRepository shopProductsRepository)
        {
            _shopProductsRepository = shopProductsRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShopProductsModel>>> GetAllShopProducts()
        {
            try
            {
                var products = await _shopProductsRepository.GetAllProducts();

                if (products == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(products);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet("{productId:int}")]
        public async Task<ActionResult<ShopProductsModel>> GetProductById(int productId)
        {
            try
            {
                var product = await _shopProductsRepository.GetProductById(productId);

                if (product == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(product);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ShopProductsModel>> CreateShopProduct(ShopProductsModel product)
        {
            try
            {
                return Ok(await _shopProductsRepository.CreateShopProduct(product));

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult<IEnumerable<ShopProductsModel>>> UpdateShopProduct(ShopProductsModel product)
        {
            try
            {
                var products = await _shopProductsRepository.UpdateShopProduct(product);

                if (products == default)
                {
                    return BadRequest("Product not found");
                }
                else
                {
                    return Ok(products);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<IEnumerable<ShopProductsModel>>> DeleteShopProduct(int id)
        {
            try
            {
                var products = await _shopProductsRepository.DeleteShoProduct(id);

                if (products == default)
                {
                    return BadRequest("Product not found");
                }
                else
                {
                    return Ok(products);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
