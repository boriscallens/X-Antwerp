using System.Web.Mvc;

namespace BoJoJoing.AntwerpX.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.DeckName = "xantwerp";
            return View();
        }

        public ActionResult Location()
        {
            ViewBag.DeckName = "location";
            return View();
        }

        public ActionResult Design()
        {
            ViewBag.DeckName = "ontwerp";
            return View();
        }

        public ActionResult Quotes()
        {
            ViewBag.DeckName = "quotes";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.DeckName = "contact";
            return View();
        }

        public ActionResult UnderConstruction()
        {
            return null;
        }
    }
}
