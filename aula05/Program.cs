public class Program{
    
    public static void Main(string[] args){
        int numInt = 45;
        double numDouble = numInt;
        Console.WriteLine("Conversão implícita de int para double: ");
        Console.WriteLine($"Int: {numInt}, Double: {numDouble}");

        double valorDouble = 7.45;
        int valorConvertido = Convert.ToInt32(valorDouble);
        string textoValor = "123";
        int textoConvertido = Convert.ToInt32(textoValor);
        Console.WriteLine($"Double: {valorDouble}, Inteiro = {valorConvertido}");
        Console.WriteLine($"String: {textoValor}, Inteiro = {textoConvertido}");

    }


}