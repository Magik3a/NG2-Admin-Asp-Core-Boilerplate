using System.Threading.Tasks;
using Abp.Application.Services;
using MultiAPI.Sessions.Dto;

namespace MultiAPI.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
