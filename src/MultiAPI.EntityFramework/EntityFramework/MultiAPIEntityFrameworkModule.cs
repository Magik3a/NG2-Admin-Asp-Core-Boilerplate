using System.Data.Entity;
using System.Reflection;
using Abp.Modules;
using Abp.Zero.EntityFramework;

namespace MultiAPI.EntityFramework
{
    [DependsOn(
        typeof(MultiAPICoreModule), 
        typeof(AbpZeroEntityFrameworkModule))]
    public class MultiAPIEntityFrameworkModule : AbpModule
    {
        public override void PreInitialize()
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<MultiAPIDbContext>());
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}