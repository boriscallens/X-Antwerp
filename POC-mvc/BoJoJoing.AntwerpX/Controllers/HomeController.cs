using System.Web.Mvc;

namespace BoJoJoing.AntwerpX.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "JVRE TEST!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

    }
}
