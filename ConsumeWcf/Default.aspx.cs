using System;
using System.Collections.Generic;
using System.Web.UI;

namespace ConsumeWcf
{
    public class eval
    {
        public int id { get; set; }
        public string name { get; set; }

        public Lazy<int> _getOrderCount = new Lazy<int>(() => getcount());
        //public Lazy<int> getOrderCount
        //{
        //    get { return getcount(); }
        //    set { getOrderCount = value; }
        //}

        public static int getcount()
        {
            return 10;
        }
    }

    //public class Customer
    //{
    //    private Lazy<List<Order>> _Orders = null;
    //    public List<Order> Orders
    //    {
    //        get
    //        {
    //            return _Orders.Value;
    //        }
    //    }
    //    public Customer()
    //    {
    //        // Makes a database trip
    //        _CustomerName = "Shiv";
    //        _Orders = new Lazy<List<Order>>(() => LoadOrders());
    //    }
    //}

    internal class Order
    {
    }

    public partial class _Default : Page
    {
        
        
        protected void Page_Load(object sender, EventArgs e)
        {
            eval o = new eval();
            o.name = "Neeraj ";
            string g = o.name; 
        }
    }
}