using System;
using System.Collections.Generic;
using System.Linq;

/*O método Where é um metodo de extensão da LINQ()*/ 
public class Program{
    public static void Main(string[] args){
    
    List<int> numeros = new List<int> {1,2,3,4,5,6,7,8,9,10};

    //Usando Lambda para filtrar números pares
    List<int> numerosPares = numeros.Where(n => n % 2 == 0).ToList();

    Console.WriteLine("Numeros Pares: ");
    numerosPares.ForEach (n => Console.WriteLine(n));

    List<string> frutas = new List<string> {"Maça", "Banana", "Manga", "Abacaxi", "Melancia", "Jabuicaba"};

    List<string> frutasOrdenadas = frutas.OrderBy(f => f).ToList();
    List<string> frutasComM = frutasOrdenadas.Where(f => f.StartsWith("M")).ToList();

    Console.WriteLine("Frutas ordenadas que começam com 'M': ");
    frutasComM.ForEach(f => Console.WriteLine(f));

    List<Pessoa> pessoas = new List<Pessoa>{
        new Pessoa("David", 20),
        new Pessoa("Felipe", 27),
        new Pessoa("Isadora", 22),
        new Pessoa("Arthur", 55),
        new Pessoa("Laura", 72),
    };

    List<Pessoa> pessoasFiltradas = pessoas.Where(p => p.Idade > 25).OrderBy(p => p.Nome).ToList();
    Console.WriteLine("Pessoas com idade maior que 25, ordenadas por nome: ");
    pessoasFiltradas.ForEach(p => Console.WriteLine($"Nome: {p.Nome}, Idade: {p.Idade}"));

    }
}
