string mensagem = " Seja bem vindo ao ScreenSound";

void exibirMensagemBoasVindas(){
  
    Console.WriteLine(@"
░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗  ░██████╗░█████╗░██╗░░░██╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║  ██╔════╝██╔══██╗██║░░░██║████╗░██║██╔══██╗
╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║  ╚█████╗░██║░░██║██║░░░██║██╔██╗██║██║░░██║
░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║  ░╚═══██╗██║░░██║██║░░░██║██║╚████║██║░░██║
██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║  ██████╔╝╚█████╔╝╚██████╔╝██║░╚███║██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░╚═════╝░╚═╝░░╚══╝╚═════╝░");
    Console.WriteLine(mensagem);

}

//menu 
void ExibirOpcoesDoMenu()
{
    Console.WriteLine("\nDigite 1 para registrar uma banda");
    Console.WriteLine("Digite 2 para mostrar todas as bandas");
    Console.WriteLine("Digite 3 para avaliar uma banda");
    Console.WriteLine("Digite 4 para exibir a média de uma banda");
    Console.WriteLine("Digite -1 para sair\n");
    Console.WriteLine("Digite a sua opção:");
    string opcao =  Console.ReadLine()!;
    int opcaoEscolhida = Convert.ToInt32(opcao);
    switch (opcaoEscolhida)
    {
        case 1:
            Console.WriteLine("Registrar uma banda");
            break;

        case 2:
            Console.WriteLine("Mostrar todas as bandas");
            break;
            case 3:
            Console.WriteLine("Avaliar uma banda");
            break;
        case 4:
            Console.WriteLine("Exibir a média de uma banda");
            break;
        case -1:
            Console.WriteLine("Saindo do programa");
            break;
        default:
            Console.WriteLine("Opção inválida");
            break;
    }

        
}


exibirMensagemBoasVindas();
ExibirOpcoesDoMenu();