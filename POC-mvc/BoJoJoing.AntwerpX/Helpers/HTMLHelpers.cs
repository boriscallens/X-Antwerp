﻿using System;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace BoJoJoing.AntwerpX.Helpers
{
    public  static class HtmlHelpers
    {
      
            public static MvcHtmlString MenuItem(
                this HtmlHelper htmlHelper,
                string text,
                string action,
                string controller
            )
            {
                var li = new TagBuilder("li");
                var routeData = htmlHelper.ViewContext.RouteData;
                var currentAction = routeData.GetRequiredString("action");
                var currentController = routeData.GetRequiredString("controller");
                if (string.Equals(currentAction, action, StringComparison.OrdinalIgnoreCase) &&
                    string.Equals(currentController, controller, StringComparison.OrdinalIgnoreCase))
                {
                    li.AddCssClass("current-nav");
                }
                li.InnerHtml = htmlHelper.ActionLink(text, action, controller).ToHtmlString();
                return MvcHtmlString.Create(li.ToString());
            }
        }
    
}