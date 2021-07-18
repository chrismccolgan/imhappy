using imhappy.Models;
using imhappy.Utils;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace imhappy.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration config) : base(config) { }
        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               Name,
                                               Emoji
                                          FROM Category 
                                      ORDER BY Name";
                    var reader = cmd.ExecuteReader();
                    var categories = new List<Category>();
                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Emoji = DbUtils.GetString(reader, "Emoji")
                        });
                    }
                    reader.Close();
                    return categories;
                }
            }
        }
    }
}