using Microsoft.EntityFrameworkCore;
using ShopProducts.Models.Models;
namespace ShopProducts.API.Data
{
    public class ShoProductsContext :DbContext
    {
        public ShoProductsContext(DbContextOptions<ShoProductsContext> options) : base(options) { }

        public DbSet<ShopProductsModel> ShopProducts => Set<ShopProductsModel>();

    }
}
