using Gifter.Models;
using Gifter.Models.cs;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Delete(int id);
        List<Post> GetAll();
        List<Post> GetAllWithComments();
        Post GetById(int id);
        Post GetPostByIdWithComments(int id);
        List<Post> Search(string criterion, bool sortDescending);
        List<Post> SearchByPostDate(string someDate);
        void Update(Post post);
    }
}