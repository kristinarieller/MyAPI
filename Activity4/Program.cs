using System;

namespace MyRestaurant // Note: actual namespace depends on the project name.
{
    interface MyOrder
    {
        string Customer { get; set; }
        bool Tip { get; set; }


    }

    class Joe : MyOrder
    {
        string name_of_customer = "Joe";
        bool tipped = false;
        private string meal;
        private string dish = "Chicken";
        public string Meal
        {
            get { return meal; }
            set { meal = value; }
        }

        public string Dish
        {
            get
            {
                return dish.ToUpper();
            }
            set
            {
                if (value == "Chicken")
                    dish = value;
            }
        }

     //   public delegate void Ticket(object source, EventArgs args);
     //   public event Ticket OrderPlaced;

        public string Customer
        {
            get { return name_of_customer; }

            set { name_of_customer = value; }
        }

        public bool Tip
        {
            get { return tipped; }
            set { tipped = value; }
        }

    }

    class RunIt
    {

        static void Main(string[] args)
        {
            Console.WriteLine("Ready to Order");
        }
    }
    
}