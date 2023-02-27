using Microsoft.EntityFrameworkCore;
using ShopProducts.API.Data;
using ShopProducts.API.Repositories.Contracts;
using ShopProducts.Models.Models;

namespace ShopProducts.API.Repositories
{
    public class ShopProductsRepository : IShopProductsRepository
    {
        private readonly ShoProductsContext _shoProductsContext;

        /// <summary>
        /// ctor
        /// </summary>
        /// <param name="shoProductsContext"></param>
        public ShopProductsRepository(ShoProductsContext shoProductsContext)
        {
            _shoProductsContext = shoProductsContext;
        }

        
        /// <summary>
        /// Get all the products from the database 
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<ShopProductsModel>> GetAllProducts()
        {
            return await _shoProductsContext.ShopProducts.ToListAsync();
        }

        /// <summary>
        /// Get a product by his ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ShopProductsModel> GetProductById(int id)
        {
            return await _shoProductsContext.ShopProducts.SingleOrDefaultAsync(s => s.id == id);
        }

        /// <summary>
        /// Create a new SHop product and save it 
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        public async Task<IEnumerable<ShopProductsModel>> CreateShopProduct(ShopProductsModel product)
        {
            _shoProductsContext.Add(product);
            await _shoProductsContext.SaveChangesAsync();
            return _shoProductsContext.ShopProducts;
        }

        /// <summary>
        /// Delete shop product
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<IEnumerable<ShopProductsModel>> DeleteShoProduct(int id)
        {
            var product = await _shoProductsContext.ShopProducts.FindAsync(id);
            if (product != null)
            {
                _shoProductsContext.Remove(product);
                await _shoProductsContext.SaveChangesAsync();
                return _shoProductsContext.ShopProducts;
            }

            return default!;
        }

        /// <summary>
        /// Update an existing shop product 
        /// </summary>
        /// <param name="productToUpdate"></param>
        /// <returns></returns>
        public async Task<IEnumerable<ShopProductsModel>> UpdateShopProduct(ShopProductsModel productToUpdate)
        {
            var product = await _shoProductsContext.ShopProducts.FindAsync(productToUpdate.id);
            if (product != null)
            {
                product.code = productToUpdate.code;
                product.name = productToUpdate.name;    
                product.description = productToUpdate.description;
                product.price = productToUpdate.price;
                product.quantity = productToUpdate.quantity;
                product.inventoryStatus = productToUpdate.inventoryStatus;
                product.category = productToUpdate.category;
                product.image = productToUpdate.image;
                product.rating = productToUpdate.rating;

                await _shoProductsContext.SaveChangesAsync();
                return _shoProductsContext.ShopProducts;

            }
            return default!;
        }

    }
}
