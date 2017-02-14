using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MultiAPI.MultiTenancy.Dto;

namespace MultiAPI.MultiTenancy
{
    public interface ITenantAppService : IApplicationService
    {
        ListResultDto<TenantListDto> GetTenants();

        Task CreateTenant(CreateTenantInput input);
    }
}
