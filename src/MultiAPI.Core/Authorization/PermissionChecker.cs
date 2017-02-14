using Abp.Authorization;
using MultiAPI.Authorization.Roles;
using MultiAPI.MultiTenancy;
using MultiAPI.Users;

namespace MultiAPI.Authorization
{
    public class PermissionChecker : PermissionChecker<Tenant, Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {

        }
    }
}
