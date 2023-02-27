using ShopProducts.Models.Models;

namespace ShopProducts.API.Repositories.Contracts
{
    public interface IShopProductsRepository
    {
        Task<IEnumerable<ShopProductsModel>> GetAllProducts();

        Task<ShopProductsModel> GetProductById(int id);

        Task<IEnumerable<ShopProductsModel>> CreateShopProduct(ShopProductsModel product);

        Task<IEnumerable<ShopProductsModel>> DeleteShoProduct(int id);

        Task<IEnumerable<ShopProductsModel>> UpdateShopProduct(ShopProductsModel productToUpdate);
    }
}
