using System.Runtime.InteropServices;

public class Program{
    
    public static void Main(string[] args){

        //Conversão implícita
        int numInt = 45;
        double numDouble = numInt;
        Console.WriteLine("Conversão implícita de int para double: ");
        Console.WriteLine($"Int: {numInt}, Double: {numDouble}");


        //Conversão usando o conver
        double valorDouble = 7.45;
        int valorConvertido = Convert.ToInt32(valorDouble);
        string textoValor = "123";
        int textoConvertido = Convert.ToInt32(textoValor);
        Console.WriteLine($"Double: {valorDouble}, Inteiro = {valorConvertido}");
        Console.WriteLine($"String: {textoValor}, Inteiro = {textoConvertido}");



        //Conversão explícita usando o casting
        double x = 9.75;
        int a = (int)x;
        Console.WriteLine($"Double: {x}, Inteiro: {a}");
        
        //Conversão usando Parse
        string textDecimal = "12.75";
        double decimalString = double.Parse(textDecimal);
        Console.WriteLine($"String = {textDecimal}, Decimal = {decimalString}");

        char caractere = 'A';
        int codigoAscii = (int)caractere;
        Console.WriteLine($"Char: {caractere}, Ascii: {codigoAscii}");
    }


}