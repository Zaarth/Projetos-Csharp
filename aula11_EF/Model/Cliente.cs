namespace aula_EF.Models{}

public class Cliente{

    public string Nome {get; set;}

    public int Id {get; set;}

    public int Idade {get; set;};

   

    public Cliente(string nome, int idade){
        Nome = nome;
        Idade = Idade;
    }

    public override string ToString(){
        return $"Nome: {Nome}, Idade: {Idade}";
    }




}