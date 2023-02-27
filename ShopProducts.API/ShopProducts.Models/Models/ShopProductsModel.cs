using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProducts.Models.Models
{
    public class ShopProductsModel
    {
        public int id { get; set; }
        public string code { get; set; } = null!;
        public string name { get; set; } = null!;
        public string description { get; set; } = null!;
        public int price { get; set; }
        public int quantity { get; set; }
        public string inventoryStatus { get; set; } = null!;
        public string category { get; set; } = null!;
        public string image { get; set; } = null!;
        public int rating { get; set; }
    }
}
