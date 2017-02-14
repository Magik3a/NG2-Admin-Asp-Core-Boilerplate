using Abp.AspNetCore.Mvc.Authorization;
using MultiAPI.Authorization;
using MultiAPI.MultiTenancy;
using Microsoft.AspNetCore.Mvc;

namespace MultiAPI.Web.Controllers
{
    [AbpMvcAuthorize(PermissionNames.Pages_Tenants)]
    public class TenantsController : MultiAPIControllerBase
    {
        private readonly ITenantAppService _tenantAppService;

        public TenantsController(ITenantAppService tenantAppService)
        {
            _tenantAppService = tenantAppService;
        }

        public ActionResult Index()
        {
            var output = _tenantAppService.GetTenants();
            return View(output);
        }
    }
}