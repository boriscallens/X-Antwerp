using System.Web.Mvc;

namespace BoJoJoing.AntwerpX.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "MotherEffin HTML5 Boilerplate MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

    }
}
