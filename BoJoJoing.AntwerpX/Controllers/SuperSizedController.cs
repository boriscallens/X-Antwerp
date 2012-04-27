using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.Web.UI;

namespace BoJoJoing.AntwerpX.Controllers
{
    public class SuperSizedController : Controller
    {
        public JsonResult GetOptionsFor(string deck)
        {
            return Json(GetSuperSizedOptions(GetSlides(deck)), JsonRequestBehavior.AllowGet);
        }

        private Slide[] GetSlides(string deck)
        {
            var filesInDeck = Directory.GetFiles(Server.MapPath(string.Format("/decks/{0}", deck))).Select(path => Path.GetFileName(path)).ToList();
            List<Slide> slides = new List<Slide>();
            foreach (var file in filesInDeck)
            {
                var relativeUrl = Url.Content(string.Format("~/decks/{0}/{1}", deck, file));
                var caption = GetCaption(deck, file);
                var quoteText = "";
                if (deck == "quotes")
                {
                    quoteText = GetQuoteText(file);
                    relativeUrl = Url.Content(string.Format("~/img/quoteImage.jpg")); // all backgrounds the same image
                }

                slides.Add(new Slide(relativeUrl, caption, quoteText));
            }
            return slides.ToArray();
        }

        private string GetQuoteText(string file)
        {
            return ControllerContext.RenderPartialToString("quoteTexts/" + Path.GetFileNameWithoutExtension(file),
                                                           "quotes");
        }

        private string GetCaption(string deck, string file)
        {
            // TODO : hoe moet ik da hier juist doorgeven zodat die gaat zoeken in /XAntwerp/Gebouw100
            return ControllerContext.RenderPartialToString(deck + "/" + Path.GetFileNameWithoutExtension(file), deck);
        }

        private static dynamic GetSuperSizedOptions(Slide[] slides)
        {

            return new
            {
                // Functionality
                slideshow = 1, 		        // Slideshow on/off
                autoplay = 0, 		        // Slideshow starts playing automatically
                start_slide = 1, 		    // Start slide (0 is random)
                stop_loop = 0, 		        // Pauses slideshow on last slide
                random = 0, 		            // Randomize slide order (Ignores start slide)
                slide_interval = 3000, 	    // Length between transitions
                transition = 1, 			    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                transition_speed = 1000, 	// Speed of transition
                new_window = 1, 		        // Image links open in new window/tab
                pause_hover = 0, 		    // Pause slideshow on hover
                keyboard_nav = 1, 		    // Keyboard navigation on/off
                performance = 3, 		    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
                image_protect = 1, 		    // Disables image dragging and right click with Javascript

                // Size & Position						   
                min_width = 0, 		        // Min width allowed (in pixels)
                min_height = 0, 		        // Min height allowed (in pixels)
                vertical_center = 1, 		// Vertically center background
                horizontal_center = 1, 		// Horizontally center background
                fit_always = 0, 		        // Image will never exceed browser width or height (Ignores min. dimensions)
                fit_portrait = 1, 		    // Portrait images will not exceed browser height
                fit_landscape = 0, 		    // Landscape images will not exceed browser width

                // Components							
                slide_links = "blank",       // Individual links for each slide (Options= false, 'num', 'name', 'blank')
                thumb_links = 1, 		    // Individual thumb links for each slide
                thumbnail_navigation = 0, 	// Thumbnail navigation

                // Theme Options			   
                progress_bar = 0, 		    // Timer for each slide							
                mouse_scrub = 1,
                slides
            };

        }
    }

    internal class Slide
    {
        public string title { get; set; }
        public string image { get; set; }
        public string quoteText { get; set; }

        public Slide(string imgUrl, string caption,  string text)
        {
            image = imgUrl;
            title = caption;
            quoteText = text;
        }
    }

    public static class RenderPartialToStringExtensions
    {
        /// <summary>
        /// render PartialView and return string
        /// </summary>
        /// <param name="context"></param>
        /// <param name="partialViewName"></param>
        /// <param name="model"></param>
        /// <returns></returns>
        public static string RenderPartialToString(this ControllerContext context, string partialViewName, object model)
        {
            return RenderPartialToStringMethod(context, partialViewName, model);
        }

        /// <summary>
        /// render PartialView and return string
        /// </summary>
        /// <param name="context"></param>
        /// <param name="partialViewName"></param>
        /// <param name="viewData"></param>
        /// <param name="tempData"></param>
        /// <returns></returns>
        public static string RenderPartialToString(ControllerContext context, string partialViewName, ViewDataDictionary viewData, TempDataDictionary tempData)
        {
            return RenderPartialToStringMethod(context, partialViewName, viewData, tempData);
        }

        public static string RenderPartialToStringMethod(ControllerContext context, string partialViewName, ViewDataDictionary viewData, TempDataDictionary tempData)
        {
            ViewEngineResult result = ViewEngines.Engines.FindPartialView(context, partialViewName);

            if (result.View != null)
            {
                StringBuilder sb = new StringBuilder();
                using (StringWriter sw = new StringWriter(sb))
                {
                    using (HtmlTextWriter output = new HtmlTextWriter(sw))
                    {
                        ViewContext viewContext = new ViewContext(context, result.View, viewData, tempData, output);
                        result.View.Render(viewContext, output);
                    }
                }

                return sb.ToString();
            }
            return String.Empty;
        }

        public static string RenderPartialToStringMethod(ControllerContext context, string partialViewName, object model)
        {
            ViewDataDictionary viewData = new ViewDataDictionary(model);
            TempDataDictionary tempData = new TempDataDictionary();
            return RenderPartialToStringMethod(context, partialViewName, viewData, tempData);
        }
    }
}