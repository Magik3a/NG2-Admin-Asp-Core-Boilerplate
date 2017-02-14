using System.Reflection;
using Abp.AspNetCore;
using Abp.AspNetCore.Configuration;
using Abp.Modules;
using MultiAPI.Configuration;
using MultiAPI.EntityFramework;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Zero.Configuration;

namespace MultiAPI.Web.Startup
{
    [DependsOn(
        typeof(MultiAPIApplicationModule), 
        typeof(MultiAPIEntityFrameworkModule), 
        typeof(AbpAspNetCoreModule))]
    public class MultiAPIWebModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public MultiAPIWebModule(IHostingEnvironment env)
        {
            _appConfiguration = AppConfigurations.Get(env.ContentRootPath, env.EnvironmentName);
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(MultiAPIConsts.ConnectionStringName);

            //Use database for language management
            Configuration.Modules.Zero().LanguageManagement.EnableDbLocalization();

            Configuration.Navigation.Providers.Add<MultiAPINavigationProvider>();

            Configuration.Modules.AbpAspNetCore()
                .CreateControllersForAppServices(
                    typeof(MultiAPIApplicationModule).Assembly
                );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}