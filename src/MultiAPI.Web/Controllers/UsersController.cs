using System.Threading.Tasks;
using Abp.AspNetCore.Mvc.Authorization;
using MultiAPI.Authorization;
using MultiAPI.Users;
using Microsoft.AspNetCore.Mvc;

namespace MultiAPI.Web.Controllers
{
    [AbpMvcAuthorize(PermissionNames.Pages_Users)]
    public class UsersController : MultiAPIControllerBase
    {
        private readonly IUserAppService _userAppService;

        public UsersController(IUserAppService userAppService)
        {
            _userAppService = userAppService;
        }

        public async Task<ActionResult> Index()
        {
            var output = await _userAppService.GetUsers();
            return View(output);
        }
    }
}