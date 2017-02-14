using Abp.AspNetCore.Mvc.Controllers;
using Microsoft.AspNet.Identity;
using Abp.IdentityFramework;

namespace MultiAPI.Web.Controllers
{
    public abstract class MultiAPIControllerBase: AbpController
    {
        protected MultiAPIControllerBase()
        {
            LocalizationSourceName = MultiAPIConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}