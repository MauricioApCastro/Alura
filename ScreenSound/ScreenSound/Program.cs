﻿Musica musica1 = new Musica();

musica1.Artista = "The Police";
musica1.Nome = "Roxanne";
musica1.Duracao = 273;
musica1.EscreveDisponivel(true);


Musica musica2 = new Musica();

musica2.Artista = "U2";
musica2.Nome = "Vertigo";
musica2.Duracao = 367;
musica2.EscreveDisponivel(false);

Console.WriteLine(musica1.DescricaoCompleta);
musica1.ExibirFichaTecnica();
Console.WriteLine(musica2.DescricaoCompleta);
musica2.ExibirFichaTecnica();







