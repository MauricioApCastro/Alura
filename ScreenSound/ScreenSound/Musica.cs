public class Musica
{
    public string Artista { get; set; }
    public int Duracao { get; set; }
    public string Nome { get; set; }
    private bool Assinatura { get; set; }

   
    public void EscreveDisponivel(bool valor)
    {
      Assinatura = valor;
    }

    public void ExibirFichaTecnica()
    {
        Console.WriteLine($"Nome:{Nome}");
        Console.WriteLine($"Artista:{Nome}");
        Console.WriteLine($"Duração:{Nome}");
        if (Assinatura) { Console.WriteLine("Disponível no plano"); }
        else
        {
            Console.WriteLine("Adquira o plano Plus+");
        }

    }

}
