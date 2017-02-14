using System.Linq;
using MultiAPI.EntityFramework;
using MultiAPI.MultiTenancy;

namespace MultiAPI.Migrations.SeedData
{
    public class DefaultTenantCreator
    {
        private readonly MultiAPIDbContext _context;

        public DefaultTenantCreator(MultiAPIDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateUserAndRoles();
        }

        private void CreateUserAndRoles()
        {
            //Default tenant

            var defaultTenant = _context.Tenants.FirstOrDefault(t => t.TenancyName == Tenant.DefaultTenantName);
            if (defaultTenant == null)
            {
                _context.Tenants.Add(new Tenant {TenancyName = Tenant.DefaultTenantName, Name = Tenant.DefaultTenantName});
                _context.SaveChanges();
            }
        }
    }
}
