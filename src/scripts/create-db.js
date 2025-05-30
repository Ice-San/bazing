if(!localStorage.getItem("users")) {
    let users = [
        {
            email: "bazing@gmail.com",
            password: "bazing_adm_2025!?",
            username: "Bazing ADM",
            userType: 0,
            profilePicture: "",
            balance: 0.00
        }
    ];

    localStorage.setItem("users", JSON.stringify(users));
}

if(!localStorage.getItem("books")) {
    let books = [
        {
            categoria: "biology",
            livros: [
            { name: "a-falsa-medida-do-homem", price: 17.99, stock: 312, sells: 684, description: "" },
            { name: "comporte-se", price: 9.49, stock: 553, sells: 432, description: "\"Comporte-se: a biologia humana em nosso melhor e pior\" é um livro de não-ficção de 2017 escrito por Robert Sapolsky. Ele descreve como vários processos biológicos influenciam o comportamento humano em escalas que variam de menos de um segundo antes da ação a milhares de anos atrás." },
            { name: "determined", price: 14.99, stock: 127, sells: 215, description: "" },
            { name: "gene-egoista", price: 13.49, stock: 641, sells: 891, description: "" },
            { name: "the-gut-brain-paradox", price: 11.29, stock: 343, sells: 708, description: "" }
            ]
        },
        {
            categoria: "comedy",
            livros: [
            { name: "cade-voce-bernadette", price: 15.89, stock: 221, sells: 976, description: "" },
            { name: "dirty-job", price: 12.59, stock: 98, sells: 864, description: "" },
            { name: "is-this-anything", price: 16.79, stock: 302, sells: 508, description: "" },
            { name: "less", price: 10.99, stock: 431, sells: 377, description: "Arthur Less está a chegar aos cinquenta anos. É um homem de boa índole e que tem uma carreira de escritor discreta e demasiado mediana. Muitos anos antes, fora o jovem amante de um génio da literatura e aprendera a ocupar um lugar de irrelevância ou periferia. Agora, luta com as suas dúvidas e inseguranças, e tenta sobreviver num meio de egos devoradores. Um dia é convidado para um casamento que descobre ser o do seu ex-namorado com outra pessoa. Assim começa o longo périplo que antecede o seu quinquagésimo aniversário: tentando fugir ao casamento, Less começa a aceitar todo o tipo de convites para participar em leituras, festivais literários, palestras um pouco por todo o mundo. De França à Índia, da Alemanha ao Japão, do México a Itália, Arthur Less quase se apaixona, quase desiste, quase morre, mas acaba por encontrar o seu caminho de regresso a casa e à vida." },
            { name: "lucky-jim", price: 13.75, stock: 712, sells: 284, description: "Jim Dixon sente tudo, menos sorte. Na universidade, ele precisa atender às ordens do distraído e enfadonho professor Welch para ter alguma esperança de manter seu emprego. Pior, ele conseguiu se envolver com a nada excitante, mas neurótica Margaret Peel, amiga do Professor. Em suma, o pub é o único lugar amigável para se estar. Sua miséria é completada em uma reunião terrível de fim de semana do clã Welch com a chegada do filho Bertrand. Não tanto pelo fato de Bertrand falar alto e grosseiro - o que ele é -, mas por ter como companheira Christine Callaghan, o tipo de mulher maravilhosa e inatingível com a qual Jim só pode sonhar." }
            ]
        },
        {
            categoria: "criminal",
            livros: [
            { name: "cold-blood", price: 18.39, stock: 193, sells: 999, description: "" },
            { name: "good-girl-bad-girl", price: 10.29, stock: 283, sells: 334, description: "Seis anos atrás, Evie Cormac foi descoberta, suja e faminta, escondida em um quarto secreto após um crime chocante. Agora, prestes a atingir a maioridade, Evie é danificada, autodestrutiva e nunca revelou sua verdadeira identidade. O psicólogo forense Cyrus Haven, assombrado por seu próprio passado, está investigando a morte da campeã de patinação artística Jodie Sheehan. Quando Cyrus é chamado para avaliar Evie, ela ameaça perturbar o caso e destruir sua vida ordenada. Porque Evie tem um dom único e perigoso - ela sabe quando alguém está mentindo. E ninguém está dizendo a verdade." },
            { name: "murdle", price: 13.99, stock: 577, sells: 456, description: "Murdle apresenta 100 enigmas de mistério para os leitores resolverem usando lógica e dedução. Com diferentes níveis de dificuldade, o livro oferece horas de diversão enquanto os leitores assumem o papel de detetives para solucionar crimes fictícios." },
            { name: "the-house-maid", price: 14.59, stock: 488, sells: 589, description: "" }
            ]
        },
        {
            categoria: "history",
            livros: [
            { name: "america", price: 15.49, stock: 801, sells: 783, description: "" },
            { name: "snafu", price: 12.99, stock: 344, sells: 402, description: "" }
            ]
        },
        {
            categoria: "horror",
            livros: [
            { name: "the-shining", price: 16.99, stock: 321, sells: 930, description: "" }
            ]
        },
        {
            categoria: "hq",
            livros: [
            { name: "fantastic-four", price: 11.59, stock: 657, sells: 586, description: "" },
            { name: "miles-morales", price: 14.89, stock: 221, sells: 671, description: "" },
            { name: "secret-wars", price: 13.75, stock: 134, sells: 745, description: "" },
            { name: "spider-man", price: 17.49, stock: 712, sells: 812, description: "" }
            ]
        },
        {
            categoria: "manga",
            livros: [
            { name: "dragon-ball", price: 12.99, stock: 399, sells: 740, description: "" },
            { name: "my-hero-academia", price: 10.49, stock: 624, sells: 667, description: "" },
            { name: "naruto", price: 13.99, stock: 543, sells: 498, description: "" }
            ]
        },
        {
            categoria: "psychology",
            livros: [
            { name: "read-people-like-a-book", price: 11.75, stock: 882, sells: 371, description: "" },
            { name: "stop-overthining", price: 13.25, stock: 720, sells: 287, description: "" }
            ]
        },
        {
            categoria: "romance",
            livros: [
            { name: "how-to-end-a-love-story", price: 15.99, stock: 234, sells: 625, description: "" },
            { name: "mr-wrong-number", price: 9.99, stock: 871, sells: 541, description: "" }
            ]
        },
        {
            categoria: "sci-fi",
            livros: [
            { name: "metal-storm", price: 18.49, stock: 455, sells: 770, description: "" }
            ]
        },
        {
            categoria: "technology",
            livros: [
            { name: "clean-code", price: 17.99, stock: 504, sells: 981, description: "" },
            { name: "design-patterns", price: 16.49, stock: 319, sells: 894, description: "" },
            { name: "steve-jobs", price: 14.29, stock: 268, sells: 822, description: "" }
            ]
        },
        {
            categoria: "terror",
            livros: [
            { name: "the-resurrectionist", price: 13.99, stock: 391, sells: 612, description: "" }
            ]
        }
    ];

    localStorage.setItem("books", JSON.stringify(books));
}

if(!localStorage.getItem("cart")) {
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
}