const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Lincon pereira",
        alternativas: [
            {
                texto: "apelido",
                afirmacao: ["No início ficou com medo do que essa tecnologia pode fazer. ",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ]
            },
            {
                texto: "nome",
                afirmacao: ["Quis saber como usar IA no seu dia a dia.",
                    "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia."
                ]
            }
        ]        alternativas: [uhuhuy
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: ["Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                ]
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: ["Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: ["Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ]
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: ["Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: ["Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade, por isso vem estimulando pessoas em suas redes sociais a fazer pintura em aquarela."
                ]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: ["Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                    "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através da arte.",
                    "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem ideias do papel."
                ]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

mostraPergunta();