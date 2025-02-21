class Program{

    public static void Main(string [] args){
        Pessoa objPessoa = new Pessoa("David");
        Console.WriteLine("Antes do método (Classe): " + objPessoa.ToString());
        AlteraNomeClasse(objPessoa);
        Console.WriteLine("Depois do método (Classe): " + objPessoa.ToString());

        PessoaStruct pessoaStruct = new PessoaStruct("Arthur");
        Console.WriteLine("Antes do método (struct): " + pessoaStruct.ToString());
        AlteraNomeStruct(pessoaStruct);
        Console.WriteLine("Depois do método (struct): " + pessoaStruct.ToString());
    }

    public static void AlteraNomeClasse(Pessoa objAux){
        objAux.Nome = "Felipe";
    }

    public static void AlteraNomeStruct(PessoaStruct objAux){
        objAux.NomeStruct = "Isadora";
    }
}