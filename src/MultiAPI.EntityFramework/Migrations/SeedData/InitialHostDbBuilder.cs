using MultiAPI.EntityFramework;
using EntityFramework.DynamicFilters;

namespace MultiAPI.Migrations.SeedData
{
    public class InitialHostDbBuilder
    {
        private readonly MultiAPIDbContext _context;

        public InitialHostDbBuilder(MultiAPIDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            _context.DisableAllFilters();

            new DefaultEditionsCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();
        }
    }
}
