using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace MultiAPI.EntityFramework.Repositories
{
    public abstract class MultiAPIRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<MultiAPIDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected MultiAPIRepositoryBase(IDbContextProvider<MultiAPIDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class MultiAPIRepositoryBase<TEntity> : MultiAPIRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected MultiAPIRepositoryBase(IDbContextProvider<MultiAPIDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
