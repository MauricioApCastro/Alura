public class Musica
{
    public string nome;
    public string artista;
    public int duracao;
    public bool status = true;

    public void ExibeAlbum()
    {
        Console.WriteLine("Nome: " + nome);
        Console.WriteLine("Artista: " + artista);
        Console.WriteLine("Duraçao: " + duracao);
        string mensagem = status ? "Disponível no plano" : "Adquira o plano Plus+";
        Console.WriteLine( mensagem);
    }


}