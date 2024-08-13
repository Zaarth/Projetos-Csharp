using System;

public class Program{
    public static void Main(string[] args){
        //Cadastrar os dados de pessoa
        Console.WriteLine("Cadastro de pessoa!");
        Console.Write("Nome: ");
        string nomePessoa = Console.ReadLine();
        Console.Write("Idade: ");
        int idadePessoa = int.Parse(Console.ReadLine());

        Pessoa pessoa1 = new Pessoa(nomePessoa,idadePessoa);

        Console.WriteLine(pessoa1.ToString());
    }
}