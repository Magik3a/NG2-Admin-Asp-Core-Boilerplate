using Abp.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MultiAPI.Web.Controllers
{
    [AbpMvcAuthorize]
    public class HomeController : MultiAPIControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}