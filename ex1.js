var texto = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

var saoPaulo = texto.substr(93,9);

var lasVegas = texto.substr(643,9);

var moscou = texto.substr(1281,6);

var regioesSp = texto.substr(357,77);

var roteiroSp = regioesSp.split(";");

var regioesLv = texto.substr(955,84);

var roteiroLv = regioesLv.split(";");

var regioesMsc = texto.substr(1491,92);

var roteiroMsc = regioesMsc.split(";");

var pontosSp = roteiroSp.length;

var pontosLv = roteiroLv.length;

var pontosMsc = roteiroMsc.length;

var centroSp = texto.substr(447,67);

var downtown = texto.substr(1056,93);

document.getElementById("titulo1").innerHTML= saoPaulo;
document.getElementById("regioesSp").innerHTML= regioesSp;
document.getElementById("pontosSp").innerHTML= `O total de pontos turísticos apresentados no Roteiro A é de: ${pontosSp} pontos`;
document.getElementById("centroSp").innerHTML = centroSp;

document.getElementById("titulo2").innerHTML = lasVegas;
document.getElementById("regioesLv").innerHTML= regioesLv;
document.getElementById("pontosLv").innerHTML= `O total de pontos turísticos apresentados no Roteiro A é de: ${pontosLv} pontos`;
document.getElementById("downtown").innerHTML = downtown;

document.getElementById("titulo3").innerHTML = moscou;
document.getElementById("regioesMsc").innerHTML= regioesMsc;
document.getElementById("pontosMsc").innerHTML= `O total de pontos turísticos apresentados no Roteiro A é de: ${pontosLv} pontos`;

// alert(saoPaulo);

// alert(lasVegas);

// alert(moscou);

// alert(roteiroSp);

// alert(roteiroLv);

// alert(pontosSp);

// alert(pontosLv);

// alert(pontosMsc);