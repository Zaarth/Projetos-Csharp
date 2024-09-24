using System.Linq;
using aula11_EF.Models;

public class Program{
    public static void Main(){
        using(var db = new AppDbContext()){
            db.Database.EnsyreCreated();
            
        }
    }
}