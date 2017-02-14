using System.Reflection;
using Abp.AutoMapper;
using Abp.Modules;
using MultiAPI.Authorization;

namespace MultiAPI
{
    [DependsOn(
        typeof(MultiAPICoreModule), 
        typeof(AbpAutoMapperModule))]
    public class MultiAPIApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<MultiAPIAuthorizationProvider>();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}