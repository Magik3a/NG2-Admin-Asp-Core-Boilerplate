using System.Threading.Tasks;
using Abp.Application.Services;
using MultiAPI.Roles.Dto;

namespace MultiAPI.Roles
{
    public interface IRoleAppService : IApplicationService
    {
        Task UpdateRolePermissions(UpdateRolePermissionsInput input);
    }
}
