public class Musica
{
    public string artista;
    public int duracao;
    public string nome;
    private bool assinatura;

   
    public void EscreveDisponivel(bool valor)
    {
      assinatura = valor;
    }

    public void ExibirFichaTecnica()
    {
        Console.WriteLine($"Nome:{nome}");
        Console.WriteLine($"Artista:{nome}");
        Console.WriteLine($"Duração:{nome}");
        if (assinatura) { Console.WriteLine("Disponível no plano"); }
        else
        {
            Console.WriteLine("Adquira o plano Plus+");
        }

    }

}
