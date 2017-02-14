using System.Data.Common;
using System.Data.Entity;
using Abp.Zero.EntityFramework;
using Microsoft.Extensions.Configuration;
using MultiAPI.Authorization.Roles;
using MultiAPI.Configuration;
using MultiAPI.MultiTenancy;
using MultiAPI.Users;
using MultiAPI.Web;

namespace MultiAPI.EntityFramework
{
    [DbConfigurationType(typeof(MultiAPIDbConfiguration))]
    public class MultiAPIDbContext : AbpZeroDbContext<Tenant, Role, User>
    {
        /* Define an IDbSet for each entity of the application */

        /* Default constructor is needed for EF command line tool. */
        public MultiAPIDbContext()
            : base(GetConnectionString())
        {

        }

        private static string GetConnectionString()
        {
            var configuration = AppConfigurations.Get(
                WebContentDirectoryFinder.CalculateContentRootFolder()
                );

            return configuration.GetConnectionString(
                MultiAPIConsts.ConnectionStringName
                );
        }

        /* This constructor is used by ABP to pass connection string.
         * Notice that, actually you will not directly create an instance of MultiAPIDbContext since ABP automatically handles it.
         */
        public MultiAPIDbContext(string nameOrConnectionString)
            : base(nameOrConnectionString)
        {

        }

        /* This constructor is used in tests to pass a fake/mock connection. */
        public MultiAPIDbContext(DbConnection dbConnection)
            : base(dbConnection, true)
        {

        }

        public MultiAPIDbContext(DbConnection dbConnection, bool contextOwnsConnection)
            : base(dbConnection, contextOwnsConnection)
        {

        }
    }

    public class MultiAPIDbConfiguration : DbConfiguration
    {
        public MultiAPIDbConfiguration()
        {
            SetProviderServices(
                "System.Data.SqlClient",
                System.Data.Entity.SqlServer.SqlProviderServices.Instance
            );
        }
    }
}
