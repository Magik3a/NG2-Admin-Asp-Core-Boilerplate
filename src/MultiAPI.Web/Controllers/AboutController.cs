using Microsoft.AspNetCore.Mvc;

namespace MultiAPI.Web.Controllers
{
    public class AboutController : MultiAPIControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}