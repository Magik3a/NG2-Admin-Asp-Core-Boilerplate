using Abp.AspNetCore.Mvc.Views;
using Abp.Runtime.Session;
using Microsoft.AspNetCore.Mvc.Razor.Internal;

namespace MultiAPI.Web.Views
{
    public abstract class MultiAPIRazorPage<TModel> : AbpRazorPage<TModel>
    {
        [RazorInject]
        public IAbpSession AbpSession { get; set; }

        protected MultiAPIRazorPage()
        {
            LocalizationSourceName = MultiAPIConsts.LocalizationSourceName;
        }
    }
}
