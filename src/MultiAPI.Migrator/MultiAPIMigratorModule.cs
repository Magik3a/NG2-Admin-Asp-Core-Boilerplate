using System.Data.Entity;
using System.Reflection;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Castle.MicroKernel.Registration;
using Microsoft.Extensions.Configuration;
using MultiAPI.Configuration;
using MultiAPI.EntityFramework;

namespace MultiAPI.Migrator
{
    [DependsOn(typeof(MultiAPIEntityFrameworkModule))]
    public class MultiAPIMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public MultiAPIMigratorModule()
        {
            _appConfiguration = AppConfigurations.Get(
                typeof(MultiAPIMigratorModule).Assembly.GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Database.SetInitializer<MultiAPIDbContext>(null);

            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                MultiAPIConsts.ConnectionStringName
                );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(typeof(IEventBus), () =>
            {
                IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                );
            });
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}