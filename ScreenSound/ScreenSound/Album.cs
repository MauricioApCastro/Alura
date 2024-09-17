public class Album
{
    private List< Musica > musicas;
    public string Nome { get; set; }
    public int DuracaoTotal { get; set; }

    public void AdicionarMusica(Musica musica)
    {
        musicas.Add(musica);
    }

}
