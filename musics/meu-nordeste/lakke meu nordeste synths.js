// Aqui está a função com "partitura" da musica "Artificial Intelligence - Lakke". É executada após ser chamda pelo jogador através da barra de espaço declarada no arquivo "controles.js". a música está em 140 bpm, mas ó código dela está executando a pista em 280 para desamontoar as notas pelo pouco esçao que fica. Dessa forma fica mais distante uma nota da outra melhorando a jogabilidade e deixando a pista mais dinâmica. Após a função ser chamada a primeira linha aparece e demora 1050 milésimos de segundo pra chegar aos botões de controle (os 5 botões cinzas na area de acerto), onde é exatamente onde a música começa, declarada em "timeouts.push(setTimeout(playAudio, 1050));". A partir de então as funções de criação e animação de cada nota e das linhas de tempo e compasso são chamadas na ordem determinada pelo tempo ao lado e seguem sendo chamadas até o fim da música.

// Parâmetros
    
var timeouts = [];
var isPaused = false;
var executarTimeout;
var funcoes = [];
var temposRestantes = [];
var tempoDecorridoAntesDePausar = 0;


function meuNordesteSynths() {

//CONFIGURAÇÔES DA MÚSICA
timeDown = 140; // tempo da música em BPM.
totalNotas = 1582; // quantidade total de notas da música
limiteNota = 530; // local exato onde as notas sumirão se n for tocada
velocidadeNotas = 290; // ajusta velocidade de descida das notas. Para fazer ajuste fino e encaixar na área de acerto

limiteLinha = 122; // local exato onde as linhas sumirao
velocidadeLinha = 373; // ajusta velocidade de descida das linhas

//CONDIÇÃO DE PAUSA DA MÚSICA E DA CHAMADA DE NOTAS
if (isPaused) {
    
    for (var i = 0; i < timeouts.length; i++) {
        temposRestantes.push(timeouts[i]._idleTimeout - (Date.now() - timeouts[i]._idleStart));            
    }
    return;
}

// CHAMADAS DE NOTAS E DA MÚSICA
    timeouts.push(setTimeout(pista, 0));        // Tempo de sincronia
    timeouts.push(setTimeout(pista, 428.58));
    timeouts.push(setTimeout(pista, 857.15));
    timeouts.push(setTimeout(pista, 1285.73));
    
    timeouts.push(setTimeout(pista, 1714.30));
    timeouts.push(setTimeout(blue, 1714.30));   // começa a música audio+notas
    
    timeouts.push(setTimeout(pista, 2142.88));    
    timeouts.push(setTimeout(pista, 2571.45));

    (setTimeout(playAudio, 2714.30));              // inicio audio    

    timeouts.push(setTimeout(pista, 3000.02));      

    //5

    timeouts.push(setTimeout(pista, 3428.60));

    timeouts.push(setTimeout(pista, 3857.17));
    timeouts.push(setTimeout(yellow, 4051.45));

    timeouts.push(setTimeout(pista, 4285.75));
    timeouts.push(setTimeout(yellow, 4442.90));
    timeouts.push(setTimeout(yellow, 4647.16));

    timeouts.push(setTimeout(pista, 4714.33));

    //9

    timeouts.push(setTimeout(pista, 5142.90));

    timeouts.push(setTimeout(pista, 5571.48));

    timeouts.push(setTimeout(pista, 6000.05));    

    timeouts.push(setTimeout(pista, 6428.63));

    //13

    timeouts.push(setTimeout(pista, 6857.20));

    timeouts.push(setTimeout(pista, 7285.78));

    timeouts.push(setTimeout(pista, 7714.35));    

    timeouts.push(setTimeout(pista, 8142.93));

    //17

    timeouts.push(setTimeout(pista, 8571.50));
    timeouts.push(setTimeout(blue, 8571.50));

    timeouts.push(setTimeout(pista, 9000.08));

    timeouts.push(setTimeout(pista, 9428.65));
    timeouts.push(setTimeout(yellow, 9428.65));

    timeouts.push(setTimeout(pista, 9857.23));

    //21

    timeouts.push(setTimeout(pista, 10285.80));
    timeouts.push(setTimeout(green, 10392.95));

    timeouts.push(setTimeout(pista, 10714.38));

    timeouts.push(setTimeout(pista, 11142.95));
    timeouts.push(setTimeout(orange, 11250.10));

    timeouts.push(setTimeout(pista, 11571.53));

    //25

    timeouts.push(setTimeout(pista, 12000.10));
    timeouts.push(setTimeout(yellow, 12291.51));

    timeouts.push(setTimeout(pista, 12428.68));

    timeouts.push(setTimeout(pista, 12857.25));
    timeouts.push(setTimeout(red, 13188.66));

    timeouts.push(setTimeout(pista, 13285.83));

    //29

    timeouts.push(setTimeout(pista, 13714.40));

    timeouts.push(setTimeout(pista, 14142.98));
    timeouts.push(setTimeout(orange, 14142.98));

    timeouts.push(setTimeout(pista, 14571.55));

    timeouts.push(setTimeout(pista, 15000.13));

    //33

    timeouts.push(setTimeout(pista, 15428.71));

    timeouts.push(setTimeout(pista, 15857.28));

    timeouts.push(setTimeout(pista, 16285.86));

    timeouts.push(setTimeout(pista, 16714.43));

    //37

    timeouts.push(setTimeout(pista, 17143.00));

    timeouts.push(setTimeout(pista, 17571.58));

    timeouts.push(setTimeout(pista, 18000.15));

    timeouts.push(setTimeout(pista, 18428.73));

    //41

    timeouts.push(setTimeout(pista, 18857.30));

    timeouts.push(setTimeout(pista, 19285.88));

    timeouts.push(setTimeout(pista, 19714.45));

    timeouts.push(setTimeout(pista, 20143.02));

    //45

    timeouts.push(setTimeout(pista, 20571.60));

    timeouts.push(setTimeout(pista, 21000.17));

    timeouts.push(setTimeout(pista, 21428.75));

    timeouts.push(setTimeout(pista, 21857.32));

    //49

    timeouts.push(setTimeout(pista, 22285.89)); // entrada instrumentos
    timeouts.push(setTimeout(yellow, 22285.89));
    timeouts.push(setTimeout(blue, 22285.89));

    timeouts.push(setTimeout(pista, 22714.47));

    timeouts.push(setTimeout(pista, 23143.04));

    timeouts.push(setTimeout(pista, 23571.62));

    //53

    timeouts.push(setTimeout(pista, 24000.19));

    timeouts.push(setTimeout(pista, 24428.77));

    timeouts.push(setTimeout(pista, 24857.34));
    timeouts.push(setTimeout(orange, 24857.34));
    timeouts.push(setTimeout(green, 24857.34));

    timeouts.push(setTimeout(pista, 25285.91));

    //57

    timeouts.push(setTimeout(pista, 25714.49)); //2
    timeouts.push(setTimeout(yellow, 25714.49));
    timeouts.push(setTimeout(blue, 25714.49));

    timeouts.push(setTimeout(pista, 26143.06));

    timeouts.push(setTimeout(pista, 26571.64));

    timeouts.push(setTimeout(pista, 27000.21));

    //61

    timeouts.push(setTimeout(pista, 27428.79));

    timeouts.push(setTimeout(pista, 27857.36));

    timeouts.push(setTimeout(pista, 28285.93));
    timeouts.push(setTimeout(orange, 28285.93));
    timeouts.push(setTimeout(green, 28285.93));

    timeouts.push(setTimeout(pista, 28714.51));

    //65

    timeouts.push(setTimeout(pista, 29143.08));
    timeouts.push(setTimeout(yellow, 29143.08)); //3
    timeouts.push(setTimeout(blue, 29143.08));

    timeouts.push(setTimeout(pista, 29571.66));

    timeouts.push(setTimeout(pista, 30000.23));

    timeouts.push(setTimeout(pista, 30428.80));

    //69

    timeouts.push(setTimeout(pista, 30857.38));

    timeouts.push(setTimeout(pista, 31285.95));


    timeouts.push(setTimeout(pista, 31714.53));
    timeouts.push(setTimeout(orange, 31714.53));
    timeouts.push(setTimeout(green, 31714.53));

    timeouts.push(setTimeout(pista, 32143.10));

    //73

    timeouts.push(setTimeout(pista, 32571.68)); // 4
    timeouts.push(setTimeout(red, 32571.68));
    timeouts.push(setTimeout(yellow, 32571.68));

    timeouts.push(setTimeout(pista, 33000.25));

    timeouts.push(setTimeout(pista, 33428.82));

    timeouts.push(setTimeout(pista, 33857.40));

    //77

    timeouts.push(setTimeout(pista, 34285.97)); 

    timeouts.push(setTimeout(pista, 34714.55));

    timeouts.push(setTimeout(pista, 35143.12));

    timeouts.push(setTimeout(pista, 35571.70));

    //81

    timeouts.push(setTimeout(pista, 36000.27)); //4.1
    timeouts.push(setTimeout(yellow, 36000.27));
    timeouts.push(setTimeout(blue, 36000.27));

    timeouts.push(setTimeout(pista, 36428.84));

    timeouts.push(setTimeout(pista, 36857.42));

    timeouts.push(setTimeout(pista, 37285.99));

    //85

    timeouts.push(setTimeout(pista, 37714.57)); //4.2

    timeouts.push(setTimeout(pista, 38143.14));

    timeouts.push(setTimeout(pista, 38571.71));

    timeouts.push(setTimeout(pista, 39000.29));

    //89

    timeouts.push(setTimeout(pista, 39428.86)); // 4.3

    timeouts.push(setTimeout(pista, 39857.44));

    timeouts.push(setTimeout(pista, 40286.01));

    timeouts.push(setTimeout(pista, 40714.59));


    //93

    timeouts.push(setTimeout(pista, 41143.16)); // 4.4

    timeouts.push(setTimeout(pista, 41571.73));

    timeouts.push(setTimeout(pista, 42000.31));

    timeouts.push(setTimeout(pista, 42428.88));

    //97

    timeouts.push(setTimeout(pista, 42857.46)); // 4.5

    timeouts.push(setTimeout(pista, 43286.03));

    timeouts.push(setTimeout(pista, 43714.61));

    timeouts.push(setTimeout(pista, 44143.18));

    //101

    timeouts.push(setTimeout(pista, 44571.75)); // 4.6

    timeouts.push(setTimeout(pista, 45000.33));

    timeouts.push(setTimeout(pista, 45428.90));

    timeouts.push(setTimeout(pista, 45857.48));

    //105

    timeouts.push(setTimeout(pista, 46286.05)); // 4.7

    timeouts.push(setTimeout(pista, 46714.63));

    timeouts.push(setTimeout(pista, 47143.20));

    timeouts.push(setTimeout(pista, 47571.77));

    //109

    timeouts.push(setTimeout(pista, 48000.35)); // 4.8

    timeouts.push(setTimeout(pista, 48428.92));

    timeouts.push(setTimeout(pista, 48857.50));

    timeouts.push(setTimeout(pista, 49286.07));

    //113

    timeouts.push(setTimeout(pista, 49714.64)); // Pré drop
    timeouts.push(setTimeout(red, 49714.64));
    timeouts.push(setTimeout(orange, 49928.92));

    timeouts.push(setTimeout(pista, 50143.22));
    timeouts.push(setTimeout(yellow, 50143.22));
    timeouts.push(setTimeout(green, 50357.50));

    timeouts.push(setTimeout(pista, 50571.79));
    timeouts.push(setTimeout(blue, 50571.79));
    timeouts.push(setTimeout(green, 50786.07));

    timeouts.push(setTimeout(pista, 51000.37));
    timeouts.push(setTimeout(yellow, 51000.37));
    timeouts.push(setTimeout(yellow, 51214.65));

    //117

    timeouts.push(setTimeout(pista, 51428.94));
    timeouts.push(setTimeout(yellow, 51536.09));

    timeouts.push(setTimeout(pista, 51857.52));
    timeouts.push(setTimeout(red, 51964.66));
    timeouts.push(setTimeout(yellow, 52178.92));

    timeouts.push(setTimeout(pista, 52286.09));
    timeouts.push(setTimeout(blue, 52286.09));
    timeouts.push(setTimeout(green, 52607.50));

    timeouts.push(setTimeout(pista, 52714.66));
    timeouts.push(setTimeout(yellow, 52714.66));
    timeouts.push(setTimeout(orange, 52928.94));

    //121

    timeouts.push(setTimeout(pista, 53143.24));
    timeouts.push(setTimeout(red, 53357.52));

    timeouts.push(setTimeout(pista, 53571.81));
    timeouts.push(setTimeout(red, 53571.81));
    timeouts.push(setTimeout(orange, 53786.09));

    timeouts.push(setTimeout(pista, 54000.39));
    timeouts.push(setTimeout(green, 54000.39));
    timeouts.push(setTimeout(yellow, 54214.67));

    timeouts.push(setTimeout(pista, 54428.96));
    timeouts.push(setTimeout(orange, 54428.96));
    timeouts.push(setTimeout(blue, 54643.24));

    //125

    timeouts.push(setTimeout(pista, 54857.54));
    timeouts.push(setTimeout(green, 55071.82));

    timeouts.push(setTimeout(pista, 55286.11));
    timeouts.push(setTimeout(yellow, 55286.11));
    timeouts.push(setTimeout(orange, 55500.39));

    timeouts.push(setTimeout(pista, 55714.68));
    timeouts.push(setTimeout(green, 55714.68));
    timeouts.push(setTimeout(yellow, 55928.96));

    timeouts.push(setTimeout(pista, 56143.26));
    timeouts.push(setTimeout(orange, 56143.26));

    //129

    timeouts.push(setTimeout(pista, 56571.83)); // drop 1
    timeouts.push(setTimeout(orange, 56571.83));
    timeouts.push(setTimeout(orange, 56786.11));

    timeouts.push(setTimeout(pista, 57000.41));
    timeouts.push(setTimeout(orange, 57000.41));
    timeouts.push(setTimeout(orange, 57214.69));

    timeouts.push(setTimeout(pista, 57428.98));
    timeouts.push(setTimeout(orange, 57428.98));
    timeouts.push(setTimeout(orange, 57643.26));

    timeouts.push(setTimeout(pista, 57857.55));
    timeouts.push(setTimeout(orange, 57857.55));
    timeouts.push(setTimeout(orange, 58071.83));

    //133

    timeouts.push(setTimeout(pista, 58286.13));
    timeouts.push(setTimeout(orange, 58286.13));
    timeouts.push(setTimeout(orange, 58500.41));

    timeouts.push(setTimeout(pista, 58714.70));
    timeouts.push(setTimeout(orange, 58714.70));
    timeouts.push(setTimeout(orange, 58928.98));

    timeouts.push(setTimeout(pista, 59143.28));
    timeouts.push(setTimeout(orange, 59143.28));
    timeouts.push(setTimeout(orange, 59357.56));

    timeouts.push(setTimeout(pista, 59571.85));
    timeouts.push(setTimeout(orange, 59571.85));
    timeouts.push(setTimeout(orange, 59786.13));

    //137

    timeouts.push(setTimeout(pista, 60000.43)); // 1.2
    timeouts.push(setTimeout(yellow, 60107.57));
    timeouts.push(setTimeout(blue, 60107.57));
    timeouts.push(setTimeout(yellow, 60321.83));
    timeouts.push(setTimeout(blue, 60321.83));
    
    timeouts.push(setTimeout(pista, 60429.00));
    timeouts.push(setTimeout(yellow, 60429.00));
    timeouts.push(setTimeout(blue, 60429.00));
    timeouts.push(setTimeout(yellow, 60536.14));
    timeouts.push(setTimeout(blue, 60536.14));
    timeouts.push(setTimeout(yellow, 60750.41));    
    timeouts.push(setTimeout(blue, 60750.41));
    
    timeouts.push(setTimeout(pista, 60857.57));
    timeouts.push(setTimeout(yellow, 60857.57));
    timeouts.push(setTimeout(blue, 60857.57));
    timeouts.push(setTimeout(yellow, 60964.72));
    timeouts.push(setTimeout(blue, 60964.72));
    timeouts.push(setTimeout(yellow, 61178.98));
    timeouts.push(setTimeout(blue, 61178.98));
    
    timeouts.push(setTimeout(pista, 61286.15));
    timeouts.push(setTimeout(yellow, 61286.15));
    timeouts.push(setTimeout(blue, 61286.15));
    timeouts.push(setTimeout(yellow, 61393.29));
    timeouts.push(setTimeout(blue, 61393.29));
    timeouts.push(setTimeout(yellow, 61607.56));
    timeouts.push(setTimeout(blue, 61607.56));

    //141

    timeouts.push(setTimeout(pista, 61714.72));
    timeouts.push(setTimeout(yellow, 61714.72));
    timeouts.push(setTimeout(blue, 61714.72));
    timeouts.push(setTimeout(yellow, 61821.87));
    timeouts.push(setTimeout(blue, 61821.87));
    timeouts.push(setTimeout(yellow, 62036.13));
    timeouts.push(setTimeout(blue, 62036.13));
    
    timeouts.push(setTimeout(pista, 62143.30));
    timeouts.push(setTimeout(yellow, 62143.30));
    timeouts.push(setTimeout(blue, 62143.30));
 /*   timeouts.push(setTimeout(yellow, 62250.44));
    timeouts.push(setTimeout(blue, 62250.44));
    timeouts.push(setTimeout(yellow, 62464.71));
    timeouts.push(setTimeout(blue, 62464.71)); */
    
    timeouts.push(setTimeout(pista, 62571.87));
 /*    timeouts.push(setTimeout(yellow, 62571.87));
    timeouts.push(setTimeout(blue, 62571.87));
    timeouts.push(setTimeout(yellow, 62679.02));
    timeouts.push(setTimeout(blue, 62679.02));
    timeouts.push(setTimeout(yellow, 62893.28));
    timeouts.push(setTimeout(blue, 62893.28)); */
    
    timeouts.push(setTimeout(pista, 63000.45));
/*     timeouts.push(setTimeout(yellow, 63000.45));
    timeouts.push(setTimeout(blue, 63000.45));
    timeouts.push(setTimeout(yellow, 63107.59));
    timeouts.push(setTimeout(blue, 63107.59));
    timeouts.push(setTimeout(yellow, 63321.85));
    timeouts.push(setTimeout(blue, 63321.85)); */

    //145

    timeouts.push(setTimeout(pista, 63429.02)); // 1.3
    timeouts.push(setTimeout(orange, 63429.02));
    timeouts.push(setTimeout(yellow, 63536.16));
    timeouts.push(setTimeout(green, 63643.30));
    
    timeouts.push(setTimeout(pista, 63857.59));
    timeouts.push(setTimeout(orange, 63857.59));
    timeouts.push(setTimeout(yellow, 63964.74));
    timeouts.push(setTimeout(green, 64071.87));
    
    timeouts.push(setTimeout(pista, 64286.17));
    timeouts.push(setTimeout(orange, 64286.17));
    timeouts.push(setTimeout(yellow, 64393.31));
    timeouts.push(setTimeout(green, 64500.45));
    
    timeouts.push(setTimeout(pista, 64714.74));
    timeouts.push(setTimeout(orange, 64714.74));
    timeouts.push(setTimeout(yellow, 64821.89));
    timeouts.push(setTimeout(green, 64929.02));

    //149

    timeouts.push(setTimeout(pista, 65143.32));
    timeouts.push(setTimeout(red, 65143.32));
    timeouts.push(setTimeout(orange, 65250.46));
    timeouts.push(setTimeout(yellow, 65357.60));
    timeouts.push(setTimeout(green, 65464.73));
    
    timeouts.push(setTimeout(pista, 65571.89));
    timeouts.push(setTimeout(blue, 65571.89));
    timeouts.push(setTimeout(red, 65679.04));
    timeouts.push(setTimeout(orange, 65786.17));
    timeouts.push(setTimeout(yellow, 65893.30));
    
    timeouts.push(setTimeout(pista, 66000.47));
    timeouts.push(setTimeout(green, 66000.47));
    timeouts.push(setTimeout(blue, 66107.61));
    
    timeouts.push(setTimeout(pista, 66429.05));
    timeouts.push(setTimeout(green, 66429.05));
    timeouts.push(setTimeout(blue, 66536.19));

    //153

    timeouts.push(setTimeout(pista, 66857.63)); // 1.4
    timeouts.push(setTimeout(green, 66857.63));
    timeouts.push(setTimeout(blue, 66964.77));
    
    timeouts.push(setTimeout(pista, 67286.20));
    timeouts.push(setTimeout(green, 67286.20));
    timeouts.push(setTimeout(blue, 67393.35));
    
    timeouts.push(setTimeout(pista, 67714.78));
    timeouts.push(setTimeout(green, 67714.78));
    timeouts.push(setTimeout(blue, 67821.93));
    
    timeouts.push(setTimeout(pista, 68143.36));
    timeouts.push(setTimeout(green, 68143.36));
    timeouts.push(setTimeout(blue, 68250.50));

    //157

    timeouts.push(setTimeout(pista, 68571.94));
    timeouts.push(setTimeout(green, 68571.94));
    timeouts.push(setTimeout(blue, 68679.08));
    
    timeouts.push(setTimeout(pista, 69000.52));
    timeouts.push(setTimeout(green, 69000.52));
    timeouts.push(setTimeout(blue, 69107.66));
    
    timeouts.push(setTimeout(pista, 69429.09));
    
    timeouts.push(setTimeout(pista, 69857.67));

    //161

    timeouts.push(setTimeout(pista, 70286.25)); // 1.5 entrada triangulo

    timeouts.push(setTimeout(pista, 70714.83));

    timeouts.push(setTimeout(pista, 71143.41));

    timeouts.push(setTimeout(pista, 71571.98));

    //165

    timeouts.push(setTimeout(pista, 72000.56));

    timeouts.push(setTimeout(pista, 72429.14));

    timeouts.push(setTimeout(pista, 72857.72));
    timeouts.push(setTimeout(blue, 73072.00));

    timeouts.push(setTimeout(pista, 73286.30));
    timeouts.push(setTimeout(green, 73286.30));
    timeouts.push(setTimeout(blue, 73500.58));

    //169

    timeouts.push(setTimeout(pista, 73714.88)); // 1.6

    timeouts.push(setTimeout(pista, 74143.45));

    timeouts.push(setTimeout(pista, 74572.03));

    timeouts.push(setTimeout(pista, 75000.61));

    //173

    timeouts.push(setTimeout(pista, 75429.19));
    
    timeouts.push(setTimeout(pista, 75857.77));
    
    timeouts.push(setTimeout(pista, 76286.34));
    timeouts.push(setTimeout(green, 76393.49));
    timeouts.push(setTimeout(blue, 76500.62));
    
    timeouts.push(setTimeout(pista, 76714.92));
    timeouts.push(setTimeout(green, 76822.07));
    timeouts.push(setTimeout(blue, 76929.20));

    //177

    timeouts.push(setTimeout(pista, 77143.50));  // 1.7
    timeouts.push(setTimeout(green, 77250.65));
    timeouts.push(setTimeout(blue, 77357.78));
    
    timeouts.push(setTimeout(pista, 77572.08));
    timeouts.push(setTimeout(green, 77679.22));
    timeouts.push(setTimeout(blue, 77786.36));
    
    timeouts.push(setTimeout(pista, 78000.66));
    timeouts.push(setTimeout(green, 78107.80));
    timeouts.push(setTimeout(blue, 78214.94));
    
    timeouts.push(setTimeout(pista, 78429.23));
    timeouts.push(setTimeout(green, 78536.38));
    timeouts.push(setTimeout(blue, 78643.51));

    //181

    timeouts.push(setTimeout(pista, 78857.81));
    timeouts.push(setTimeout(green, 78964.96));
    timeouts.push(setTimeout(blue, 79072.09));
    timeouts.push(setTimeout(green, 79179.22));
    
    timeouts.push(setTimeout(pista, 79286.39));
    timeouts.push(setTimeout(blue, 79286.39));
    timeouts.push(setTimeout(green, 79393.54));
    timeouts.push(setTimeout(blue, 79500.67));
    timeouts.push(setTimeout(green, 79607.80));
    
    timeouts.push(setTimeout(pista, 79714.97));
    timeouts.push(setTimeout(blue, 79714.97));
    timeouts.push(setTimeout(green, 79822.11));
    timeouts.push(setTimeout(red, 79929.25));
    timeouts.push(setTimeout(orange, 80036.38));
    
    timeouts.push(setTimeout(pista, 80143.55));
    timeouts.push(setTimeout(yellow, 80143.55));
    timeouts.push(setTimeout(green, 80250.69));
    timeouts.push(setTimeout(blue, 80357.83));
    timeouts.push(setTimeout(red, 80464.96));

    //185

    timeouts.push(setTimeout(pista, 80572.13)); // 1.8
    timeouts.push(setTimeout(yellow, 80572.13));
    timeouts.push(setTimeout(green, 80786.40));
    
    timeouts.push(setTimeout(pista, 81000.70));
    timeouts.push(setTimeout(yellow, 81000.70));
    timeouts.push(setTimeout(green, 81214.98));
    
    timeouts.push(setTimeout(pista, 81429.28));
    timeouts.push(setTimeout(yellow, 81429.28));
    timeouts.push(setTimeout(green, 81643.56));
    
    timeouts.push(setTimeout(pista, 81857.86));
    timeouts.push(setTimeout(yellow, 81857.86));
    timeouts.push(setTimeout(green, 82072.14));

    //189

    timeouts.push(setTimeout(pista, 82286.44));
    timeouts.push(setTimeout(yellow, 82286.44));
    timeouts.push(setTimeout(green, 82500.72));
    
    timeouts.push(setTimeout(pista, 82715.02));
    timeouts.push(setTimeout(yellow, 82715.02));
    timeouts.push(setTimeout(green, 82929.30));
    
    timeouts.push(setTimeout(pista, 83143.59));
    timeouts.push(setTimeout(blue, 83143.59));
    
    timeouts.push(setTimeout(pista, 83572.17));

    //193

    timeouts.push(setTimeout(pista, 84000.75)); //drop1 mudou o groove

    timeouts.push(setTimeout(pista, 84429.33));

    timeouts.push(setTimeout(pista, 84857.91));

    timeouts.push(setTimeout(pista, 85286.48));

    //197

    timeouts.push(setTimeout(pista, 85715.06));
    timeouts.push(setTimeout(yellow, 85715.06));

    timeouts.push(setTimeout(pista, 86143.64));
    timeouts.push(setTimeout(yellow, 86143.64));

    timeouts.push(setTimeout(pista, 86572.22));
    timeouts.push(setTimeout(yellow, 86572.22));

    timeouts.push(setTimeout(pista, 87000.80));
    timeouts.push(setTimeout(yellow, 87000.80));

    //201

    timeouts.push(setTimeout(pista, 87429.38)); // 1.2.2
    timeouts.push(setTimeout(green, 87429.38));
    
    timeouts.push(setTimeout(pista, 87857.95));
    timeouts.push(setTimeout(red, 87857.95));
    timeouts.push(setTimeout(orange, 88072.23));
    
    timeouts.push(setTimeout(pista, 88286.53));
    timeouts.push(setTimeout(yellow, 88286.53));
    
    timeouts.push(setTimeout(pista, 88715.11));
    timeouts.push(setTimeout(yellow, 88715.11));

    //205

    timeouts.push(setTimeout(pista, 89143.69));
    timeouts.push(setTimeout(yellow, 89143.69));
    
    timeouts.push(setTimeout(pista, 89572.27));
    timeouts.push(setTimeout(orange, 89572.27));
    timeouts.push(setTimeout(yellow, 89786.55));
    
    timeouts.push(setTimeout(pista, 90000.84));
    timeouts.push(setTimeout(green, 90000.84));
    
    timeouts.push(setTimeout(pista, 90429.42));
    timeouts.push(setTimeout(green, 90429.42));

    //209

    timeouts.push(setTimeout(pista, 90858.00)); // 1.2.3
    timeouts.push(setTimeout(red, 90858.00));
    
    timeouts.push(setTimeout(pista, 91286.58));
    timeouts.push(setTimeout(orange, 91286.58));
    timeouts.push(setTimeout(green, 91500.86));
    
    timeouts.push(setTimeout(pista, 91715.16));
    timeouts.push(setTimeout(blue, 91715.16));
    
    timeouts.push(setTimeout(pista, 92143.73));
    timeouts.push(setTimeout(blue, 92143.73));


    //213

    timeouts.push(setTimeout(pista, 92572.31));
    timeouts.push(setTimeout(red, 92572.31));
    
    timeouts.push(setTimeout(pista, 93000.89));
    timeouts.push(setTimeout(yellow, 93000.89));
    timeouts.push(setTimeout(green, 93215.17));
    
    timeouts.push(setTimeout(pista, 93429.47));
    timeouts.push(setTimeout(blue, 93429.47));
    
    timeouts.push(setTimeout(pista, 93858.05));

    //217

    timeouts.push(setTimeout(pista, 94286.63)); // 1.2.4
    timeouts.push(setTimeout(yellow, 94393.77));
    timeouts.push(setTimeout(blue, 94393.77));
    timeouts.push(setTimeout(yellow, 94608.03));
    timeouts.push(setTimeout(blue, 94608.03));
    
    timeouts.push(setTimeout(pista, 94715.20));
    timeouts.push(setTimeout(yellow, 94715.20));
    timeouts.push(setTimeout(blue, 94715.20));
    timeouts.push(setTimeout(yellow, 94822.35));
    timeouts.push(setTimeout(blue, 94822.35));
    timeouts.push(setTimeout(yellow, 95036.61));
    timeouts.push(setTimeout(blue, 95036.61));
    
    timeouts.push(setTimeout(pista, 95143.78));
    timeouts.push(setTimeout(yellow, 95143.78));
    timeouts.push(setTimeout(blue, 95143.78));
    timeouts.push(setTimeout(yellow, 95250.93));
    timeouts.push(setTimeout(blue, 95250.93));
    timeouts.push(setTimeout(yellow, 95465.19));
    timeouts.push(setTimeout(blue, 95465.19));
    
    timeouts.push(setTimeout(pista, 95572.36));
    timeouts.push(setTimeout(yellow, 95572.36));
    timeouts.push(setTimeout(blue, 95572.36));
    timeouts.push(setTimeout(yellow, 95679.50));
    timeouts.push(setTimeout(blue, 95679.50));
    timeouts.push(setTimeout(yellow, 95893.77));
    timeouts.push(setTimeout(blue, 95893.77));

    //221

    timeouts.push(setTimeout(pista, 96000.94));
    timeouts.push(setTimeout(yellow, 96000.94));
    timeouts.push(setTimeout(blue, 96000.94));
    timeouts.push(setTimeout(yellow, 96108.08));
    timeouts.push(setTimeout(blue, 96108.08));
    timeouts.push(setTimeout(yellow, 96322.35));
    timeouts.push(setTimeout(blue, 96322.35));
    
    timeouts.push(setTimeout(pista, 96429.52));
    timeouts.push(setTimeout(yellow, 96429.52));
    timeouts.push(setTimeout(blue, 96429.52));
    timeouts.push(setTimeout(yellow, 96536.66));
    timeouts.push(setTimeout(blue, 96536.66));
    timeouts.push(setTimeout(yellow, 96750.92));
    timeouts.push(setTimeout(blue, 96750.92));
    
    timeouts.push(setTimeout(pista, 96858.09));
    timeouts.push(setTimeout(yellow, 96858.09));
    timeouts.push(setTimeout(blue, 96858.09));
    timeouts.push(setTimeout(yellow, 96965.24));
    timeouts.push(setTimeout(blue, 96965.24));
    timeouts.push(setTimeout(yellow, 97179.50));
    timeouts.push(setTimeout(blue, 97179.50));
    
    timeouts.push(setTimeout(pista, 97286.67));
    timeouts.push(setTimeout(yellow, 97286.67));
    timeouts.push(setTimeout(blue, 97286.67));
    timeouts.push(setTimeout(yellow, 97500.95));
    timeouts.push(setTimeout(blue, 97500.95));

    //225

    timeouts.push(setTimeout(pista, 97715.25)); // 1.2.5 entrada dos pads muda groove
    
    timeouts.push(setTimeout(pista, 98143.83));
    timeouts.push(setTimeout(green, 98143.83));
    timeouts.push(setTimeout(orange, 98143.83));
    timeouts.push(setTimeout(green, 98250.97));
    timeouts.push(setTimeout(orange, 98250.97));
    timeouts.push(setTimeout(green, 98465.24));
    timeouts.push(setTimeout(orange, 98465.24));
    
    timeouts.push(setTimeout(pista, 98572.41));
    timeouts.push(setTimeout(green, 98572.41));
    timeouts.push(setTimeout(orange, 98572.41));
    timeouts.push(setTimeout(green, 98679.55));
    timeouts.push(setTimeout(orange, 98679.55));
    timeouts.push(setTimeout(green, 98893.82));
    timeouts.push(setTimeout(orange, 98893.82));
    
    timeouts.push(setTimeout(pista, 99000.98));
    timeouts.push(setTimeout(green, 99000.98));
    timeouts.push(setTimeout(orange, 99000.98));
    timeouts.push(setTimeout(green, 99108.13));
    timeouts.push(setTimeout(orange, 99108.13));
    timeouts.push(setTimeout(green, 99322.39));
    timeouts.push(setTimeout(orange, 99322.39));

    //229

    timeouts.push(setTimeout(pista, 99429.56));
    timeouts.push(setTimeout(green, 99429.56));
    timeouts.push(setTimeout(orange, 99429.56));
    timeouts.push(setTimeout(green, 99536.71));
    timeouts.push(setTimeout(orange, 99536.71));
    timeouts.push(setTimeout(green, 99750.97));
    timeouts.push(setTimeout(orange, 99750.97));
    
    timeouts.push(setTimeout(pista, 99858.14));
    timeouts.push(setTimeout(green, 99858.14));
    timeouts.push(setTimeout(orange, 99858.14));
    timeouts.push(setTimeout(green, 99965.29));
    timeouts.push(setTimeout(orange, 99965.29));
    timeouts.push(setTimeout(green, 100179.55));
    timeouts.push(setTimeout(orange, 100179.55));
    
    timeouts.push(setTimeout(pista, 100286.72));
    timeouts.push(setTimeout(yellow, 100286.72));
    timeouts.push(setTimeout(red, 100286.72));
    timeouts.push(setTimeout(yellow, 100393.86));
    timeouts.push(setTimeout(red, 100393.86));
    timeouts.push(setTimeout(yellow, 100608.13));
    timeouts.push(setTimeout(red, 100608.13));
    
    timeouts.push(setTimeout(pista, 100715.30));
    timeouts.push(setTimeout(yellow, 100715.30));
    timeouts.push(setTimeout(red, 100715.30));
    timeouts.push(setTimeout(yellow, 100822.44));
    timeouts.push(setTimeout(red, 100822.44));
    timeouts.push(setTimeout(yellow, 101036.71));
    timeouts.push(setTimeout(red, 101036.71));

    //233

    timeouts.push(setTimeout(pista, 101143.88)); // 1.3.2
    
    timeouts.push(setTimeout(pista, 101572.45));
    timeouts.push(setTimeout(green, 101572.45));
    timeouts.push(setTimeout(orange, 101572.45));
    timeouts.push(setTimeout(green, 101679.60));
    timeouts.push(setTimeout(orange, 101679.60));
    timeouts.push(setTimeout(green, 101893.86));
    timeouts.push(setTimeout(orange, 101893.86));
    
    timeouts.push(setTimeout(pista, 102001.03));
    timeouts.push(setTimeout(green, 102001.03));
    timeouts.push(setTimeout(orange, 102001.03));
    timeouts.push(setTimeout(green, 102108.18));
    timeouts.push(setTimeout(orange, 102108.18));
    timeouts.push(setTimeout(green, 102322.44));
    timeouts.push(setTimeout(orange, 102322.44));
    
    timeouts.push(setTimeout(pista, 102429.61));
    timeouts.push(setTimeout(green, 102429.61));
    timeouts.push(setTimeout(orange, 102429.61));
    timeouts.push(setTimeout(green, 102536.75));
    timeouts.push(setTimeout(orange, 102536.75));
    timeouts.push(setTimeout(green, 102751.02));
    timeouts.push(setTimeout(orange, 102751.02));

    //237

    timeouts.push(setTimeout(pista, 102858.19));
    timeouts.push(setTimeout(green, 102858.19));
    timeouts.push(setTimeout(orange, 102858.19));
    timeouts.push(setTimeout(green, 102965.33));
    timeouts.push(setTimeout(orange, 102965.33));
    timeouts.push(setTimeout(green, 103179.60));
    timeouts.push(setTimeout(orange, 103179.60));
    
    timeouts.push(setTimeout(pista, 103286.77));
    timeouts.push(setTimeout(green, 103286.77));
    timeouts.push(setTimeout(orange, 103286.77));
    timeouts.push(setTimeout(green, 103393.91));
    timeouts.push(setTimeout(orange, 103393.91));
    timeouts.push(setTimeout(green, 103608.17));
    timeouts.push(setTimeout(orange, 103608.17));
    
    timeouts.push(setTimeout(pista, 103715.34));
    timeouts.push(setTimeout(yellow, 103715.34));
    timeouts.push(setTimeout(blue, 103715.34));
    timeouts.push(setTimeout(yellow, 103822.49));
    timeouts.push(setTimeout(blue, 103822.49));
    timeouts.push(setTimeout(yellow, 104036.75));
    timeouts.push(setTimeout(blue, 104036.75));
    
    timeouts.push(setTimeout(pista, 104143.92));
    timeouts.push(setTimeout(yellow, 104143.92));
    timeouts.push(setTimeout(blue, 104143.92));
    timeouts.push(setTimeout(yellow, 104251.07));
    timeouts.push(setTimeout(blue, 104251.07));
    timeouts.push(setTimeout(yellow, 104465.33));
    timeouts.push(setTimeout(blue, 104465.33));

    //241

    timeouts.push(setTimeout(pista, 104572.50)); // 1.3.3
/*     timeouts.push(setTimeout(green, 104572.50));
    timeouts.push(setTimeout(orange, 104572.50));
    timeouts.push(setTimeout(green, 104679.65));
    timeouts.push(setTimeout(orange, 104679.65));
    timeouts.push(setTimeout(green, 104893.91));
    timeouts.push(setTimeout(orange, 104893.91)); */
    
    timeouts.push(setTimeout(pista, 105001.08));
    timeouts.push(setTimeout(green, 105001.08));
    timeouts.push(setTimeout(orange, 105001.08));
    timeouts.push(setTimeout(green, 105108.22));
    timeouts.push(setTimeout(orange, 105108.22));
    timeouts.push(setTimeout(green, 105322.49));
    timeouts.push(setTimeout(orange, 105322.49));
    
    timeouts.push(setTimeout(pista, 105429.66));
    timeouts.push(setTimeout(green, 105429.66));
    timeouts.push(setTimeout(orange, 105429.66));
    timeouts.push(setTimeout(green, 105536.80));
    timeouts.push(setTimeout(orange, 105536.80));
    timeouts.push(setTimeout(green, 105751.07));
    timeouts.push(setTimeout(orange, 105751.07));
    
    timeouts.push(setTimeout(pista, 105858.23));
    timeouts.push(setTimeout(green, 105858.23));
    timeouts.push(setTimeout(orange, 105858.23));
    timeouts.push(setTimeout(green, 105965.38));
    timeouts.push(setTimeout(orange, 105965.38));
    timeouts.push(setTimeout(green, 106179.64));
    timeouts.push(setTimeout(orange, 106179.64));

    //245

    timeouts.push(setTimeout(pista, 106286.81));
    timeouts.push(setTimeout(green, 106286.81));
    timeouts.push(setTimeout(orange, 106286.81));
    timeouts.push(setTimeout(green, 106393.96));
    timeouts.push(setTimeout(orange, 106393.96));
    timeouts.push(setTimeout(green, 106608.22));
    timeouts.push(setTimeout(orange, 106608.22));
    
    timeouts.push(setTimeout(pista, 106715.39));
    timeouts.push(setTimeout(green, 106715.39));
    timeouts.push(setTimeout(orange, 106715.39));
    timeouts.push(setTimeout(green, 106822.54));
    timeouts.push(setTimeout(orange, 106822.54));
    timeouts.push(setTimeout(green, 107036.80));
    timeouts.push(setTimeout(orange, 107036.80));
    
    timeouts.push(setTimeout(pista, 107143.97));
    timeouts.push(setTimeout(red, 107143.97));
    timeouts.push(setTimeout(yellow, 107143.97));
    timeouts.push(setTimeout(red, 107251.11));
    timeouts.push(setTimeout(yellow, 107251.11));
    timeouts.push(setTimeout(red, 107465.38));
    timeouts.push(setTimeout(yellow, 107465.38));
    
    timeouts.push(setTimeout(pista, 107572.55));
    timeouts.push(setTimeout(red, 107572.55));
    timeouts.push(setTimeout(yellow, 107572.55));
    timeouts.push(setTimeout(red, 107679.69));
    timeouts.push(setTimeout(yellow, 107679.69));
    timeouts.push(setTimeout(red, 107893.96));
    timeouts.push(setTimeout(yellow, 107893.96));

    //249

    timeouts.push(setTimeout(pista, 108001.13)); // 1.3.4
/*     timeouts.push(setTimeout(yellow, 108001.13));
    timeouts.push(setTimeout(green, 108001.13));
    timeouts.push(setTimeout(yellow, 108108.27));
    timeouts.push(setTimeout(green, 108108.27));
    timeouts.push(setTimeout(yellow, 108322.53));
    timeouts.push(setTimeout(green, 108322.53)); */
    
    timeouts.push(setTimeout(pista, 108429.70));
    timeouts.push(setTimeout(yellow, 108429.70));
    timeouts.push(setTimeout(green, 108429.70));
    timeouts.push(setTimeout(yellow, 108536.85));
    timeouts.push(setTimeout(green, 108536.85));
    timeouts.push(setTimeout(yellow, 108751.11));
    timeouts.push(setTimeout(green, 108751.11));
    
    timeouts.push(setTimeout(pista, 108858.28));
    timeouts.push(setTimeout(yellow, 108858.28));
    timeouts.push(setTimeout(green, 108858.28));
    timeouts.push(setTimeout(yellow, 108965.43));
    timeouts.push(setTimeout(green, 108965.43));
    timeouts.push(setTimeout(yellow, 109179.69));
    timeouts.push(setTimeout(green, 109179.69));
    
    timeouts.push(setTimeout(pista, 109286.86));
    timeouts.push(setTimeout(yellow, 109286.86));
    timeouts.push(setTimeout(green, 109286.86));
    timeouts.push(setTimeout(yellow, 109394.00));
    timeouts.push(setTimeout(green, 109394.00));
    timeouts.push(setTimeout(yellow, 109608.27));
    timeouts.push(setTimeout(green, 109608.27));

    //253

    timeouts.push(setTimeout(pista, 109715.44));
    timeouts.push(setTimeout(yellow, 109715.44));
    timeouts.push(setTimeout(green, 109715.44));
    timeouts.push(setTimeout(yellow, 109822.58));
    timeouts.push(setTimeout(green, 109822.58));
    timeouts.push(setTimeout(yellow, 110036.85));
    timeouts.push(setTimeout(green, 110036.85));
    
    timeouts.push(setTimeout(pista, 110144.02));
    timeouts.push(setTimeout(yellow, 110144.02));
    timeouts.push(setTimeout(green, 110144.02));
    timeouts.push(setTimeout(yellow, 110251.16));
    timeouts.push(setTimeout(green, 110251.16));
    timeouts.push(setTimeout(yellow, 110465.42));
    timeouts.push(setTimeout(green, 110465.42));
    
    timeouts.push(setTimeout(pista, 110572.59));
    timeouts.push(setTimeout(green, 110572.59));
    timeouts.push(setTimeout(blue, 110572.59));
    timeouts.push(setTimeout(green, 110679.74));
    timeouts.push(setTimeout(blue, 110679.74));
    timeouts.push(setTimeout(green, 110894.00));
    timeouts.push(setTimeout(blue, 110894.00));
    
    timeouts.push(setTimeout(pista, 111001.17));
    timeouts.push(setTimeout(green, 111001.17));
    timeouts.push(setTimeout(blue, 111001.17));
    timeouts.push(setTimeout(green, 111108.32));
    timeouts.push(setTimeout(blue, 111108.32));
    timeouts.push(setTimeout(green, 111322.58));
    timeouts.push(setTimeout(blue, 111322.58));

    //257

    timeouts.push(setTimeout(pista, 111429.75)); // 1.3.5 Repetindo os pads
/*     timeouts.push(setTimeout(orange, 111429.75));
    timeouts.push(setTimeout(green, 111429.75));
    timeouts.push(setTimeout(orange, 111536.90));
    timeouts.push(setTimeout(green, 111536.90));
    timeouts.push(setTimeout(orange, 111751.16));
    timeouts.push(setTimeout(green, 111751.16)); */
    
    timeouts.push(setTimeout(pista, 111858.33));
    timeouts.push(setTimeout(orange, 111858.33));
    timeouts.push(setTimeout(green, 111858.33));
    timeouts.push(setTimeout(orange, 111965.47));
    timeouts.push(setTimeout(green, 111965.47));
    timeouts.push(setTimeout(orange, 112179.74));
    timeouts.push(setTimeout(green, 112179.74));
    
    timeouts.push(setTimeout(pista, 112286.91));
    timeouts.push(setTimeout(orange, 112286.91));
    timeouts.push(setTimeout(green, 112286.91));
    timeouts.push(setTimeout(orange, 112394.05));
    timeouts.push(setTimeout(green, 112394.05));
    timeouts.push(setTimeout(orange, 112608.32));
    timeouts.push(setTimeout(green, 112608.32));
    
    timeouts.push(setTimeout(pista, 112715.48));
    timeouts.push(setTimeout(orange, 112715.48));
    timeouts.push(setTimeout(green, 112715.48));
    timeouts.push(setTimeout(orange, 112822.63));
    timeouts.push(setTimeout(green, 112822.63));
    timeouts.push(setTimeout(orange, 113036.89));
    timeouts.push(setTimeout(green, 113036.89));

    //261

    timeouts.push(setTimeout(pista, 113144.06));
    timeouts.push(setTimeout(orange, 113144.06));
    timeouts.push(setTimeout(green, 113144.06));
    timeouts.push(setTimeout(orange, 113251.21));
    timeouts.push(setTimeout(green, 113251.21));
    timeouts.push(setTimeout(orange, 113465.47));
    timeouts.push(setTimeout(green, 113465.47));
    
    timeouts.push(setTimeout(pista, 113572.64));
    timeouts.push(setTimeout(orange, 113572.64));
    timeouts.push(setTimeout(green, 113572.64));
    timeouts.push(setTimeout(orange, 113679.79));
    timeouts.push(setTimeout(green, 113679.79));
    timeouts.push(setTimeout(orange, 113894.05));
    timeouts.push(setTimeout(green, 113894.05));
    
    timeouts.push(setTimeout(pista, 114001.22));
    timeouts.push(setTimeout(yellow, 114001.22));
    timeouts.push(setTimeout(red, 114001.22));
    timeouts.push(setTimeout(yellow, 114108.36));
    timeouts.push(setTimeout(red, 114108.36));
    timeouts.push(setTimeout(yellow, 114322.63));
    timeouts.push(setTimeout(red, 114322.63));
    
    timeouts.push(setTimeout(pista, 114429.80));
    timeouts.push(setTimeout(yellow, 114429.80));
    timeouts.push(setTimeout(red, 114429.80));
    timeouts.push(setTimeout(yellow, 114536.94));
    timeouts.push(setTimeout(red, 114536.94));
    timeouts.push(setTimeout(yellow, 114751.21));
    timeouts.push(setTimeout(red, 114751.21));

    //265

    timeouts.push(setTimeout(pista, 114858.38)); //1.3.6
/*     timeouts.push(setTimeout(orange, 114858.38));
    timeouts.push(setTimeout(green, 114858.38));
    timeouts.push(setTimeout(orange, 114965.52));
    timeouts.push(setTimeout(green, 114965.52));
    timeouts.push(setTimeout(orange, 115179.78));
    timeouts.push(setTimeout(green, 115179.78)); */
    
    timeouts.push(setTimeout(pista, 115286.95));
    timeouts.push(setTimeout(orange, 115286.95));
    timeouts.push(setTimeout(green, 115286.95));
    timeouts.push(setTimeout(orange, 115394.10));
    timeouts.push(setTimeout(green, 115394.10));
    timeouts.push(setTimeout(orange, 115608.36));
    timeouts.push(setTimeout(green, 115608.36));
    
    timeouts.push(setTimeout(pista, 115715.53));
    timeouts.push(setTimeout(orange, 115715.53));
    timeouts.push(setTimeout(green, 115715.53));
    timeouts.push(setTimeout(orange, 115822.68));
    timeouts.push(setTimeout(green, 115822.68));
    timeouts.push(setTimeout(orange, 116036.94));
    timeouts.push(setTimeout(green, 116036.94));
    
    timeouts.push(setTimeout(pista, 116144.11));
    timeouts.push(setTimeout(orange, 116144.11));
    timeouts.push(setTimeout(green, 116251.25));
    timeouts.push(setTimeout(orange, 116251.25));
    timeouts.push(setTimeout(green, 116144.11));
    timeouts.push(setTimeout(orange, 116465.52));
    timeouts.push(setTimeout(green, 116465.52));

    //269

    timeouts.push(setTimeout(pista, 116572.69));
    timeouts.push(setTimeout(orange, 116572.69));
    timeouts.push(setTimeout(green, 116572.69));
    timeouts.push(setTimeout(orange, 116679.83));
    timeouts.push(setTimeout(green, 116679.83));
    timeouts.push(setTimeout(orange, 116894.10));
    timeouts.push(setTimeout(green, 116894.10));
    
    timeouts.push(setTimeout(pista, 117001.27));
    timeouts.push(setTimeout(orange, 117001.27));
    timeouts.push(setTimeout(green, 117001.27));
    timeouts.push(setTimeout(orange, 117108.41));
    timeouts.push(setTimeout(green, 117108.41));
    timeouts.push(setTimeout(orange, 117322.67));
    timeouts.push(setTimeout(green, 117322.67));
    
    timeouts.push(setTimeout(pista, 117429.84));
    timeouts.push(setTimeout(yellow, 117429.84));
    timeouts.push(setTimeout(blue, 117429.84));
    timeouts.push(setTimeout(yellow, 117536.99));
    timeouts.push(setTimeout(blue, 117536.99));
    timeouts.push(setTimeout(yellow, 117751.25));
    timeouts.push(setTimeout(blue, 117751.25));
    
    timeouts.push(setTimeout(pista, 117858.42));
    timeouts.push(setTimeout(yellow, 117858.42));
    timeouts.push(setTimeout(blue, 117858.42));
    timeouts.push(setTimeout(yellow, 117965.57));
    timeouts.push(setTimeout(blue, 117965.57));
    timeouts.push(setTimeout(yellow, 118179.83));
    timeouts.push(setTimeout(blue, 118179.83));

    //273

    timeouts.push(setTimeout(pista, 118287.00));
/*     timeouts.push(setTimeout(orange, 118287.00));
    timeouts.push(setTimeout(green, 118287.00));
    timeouts.push(setTimeout(orange, 118394.15));
    timeouts.push(setTimeout(green, 118394.15));
    timeouts.push(setTimeout(orange, 118608.41));
    timeouts.push(setTimeout(green, 118608.41)); */
    
    timeouts.push(setTimeout(pista, 118715.58));
    timeouts.push(setTimeout(orange, 118715.58));
    timeouts.push(setTimeout(green, 118715.58));
    timeouts.push(setTimeout(orange, 118822.72));
    timeouts.push(setTimeout(green, 118822.72));
    timeouts.push(setTimeout(orange, 119036.99));
    timeouts.push(setTimeout(green, 119036.99));
    
    timeouts.push(setTimeout(pista, 119144.16));
    timeouts.push(setTimeout(orange, 119144.16));
    timeouts.push(setTimeout(green, 119144.16));
    timeouts.push(setTimeout(orange, 119251.30));
    timeouts.push(setTimeout(green, 119251.30));
    timeouts.push(setTimeout(orange, 119465.57));
    timeouts.push(setTimeout(green, 119465.57));
    
    timeouts.push(setTimeout(pista, 119572.73));
    timeouts.push(setTimeout(orange, 119572.73));
    timeouts.push(setTimeout(green, 119572.73));
    timeouts.push(setTimeout(orange, 119679.88));
    timeouts.push(setTimeout(green, 119679.88));
    timeouts.push(setTimeout(orange, 119894.14));
    timeouts.push(setTimeout(green, 119894.14));

    //277

    timeouts.push(setTimeout(pista, 120001.31));
    timeouts.push(setTimeout(orange, 120001.31));
    timeouts.push(setTimeout(green, 120001.31));
    timeouts.push(setTimeout(orange, 120108.46));
    timeouts.push(setTimeout(green, 120108.46));
    timeouts.push(setTimeout(orange, 120322.72));
    timeouts.push(setTimeout(green, 120322.72));
    
    timeouts.push(setTimeout(pista, 120429.89));
    timeouts.push(setTimeout(orange, 120429.89));
    timeouts.push(setTimeout(green, 120429.89));
    timeouts.push(setTimeout(orange, 120537.04));
    timeouts.push(setTimeout(green, 120537.04));
    timeouts.push(setTimeout(orange, 120751.30));
    timeouts.push(setTimeout(green, 120751.30));
    
    timeouts.push(setTimeout(pista, 120858.47));
    timeouts.push(setTimeout(red, 120858.47));
    timeouts.push(setTimeout(yellow, 120858.47));
    timeouts.push(setTimeout(red, 120965.61));
    timeouts.push(setTimeout(yellow, 120965.61));
    timeouts.push(setTimeout(red, 121179.88));
    timeouts.push(setTimeout(yellow, 121179.88));
    
    timeouts.push(setTimeout(pista, 121287.05));
    timeouts.push(setTimeout(red, 121287.05));
    timeouts.push(setTimeout(yellow, 121287.05));
    timeouts.push(setTimeout(red, 121394.19));
    timeouts.push(setTimeout(yellow, 121394.19));
    timeouts.push(setTimeout(red, 121608.46));
    timeouts.push(setTimeout(yellow, 121608.46));

    //281

    timeouts.push(setTimeout(pista, 121715.63));
    timeouts.push(setTimeout(red, 121715.63));
    timeouts.push(setTimeout(orange, 121822.77));
    timeouts.push(setTimeout(red, 122037.03));

    timeouts.push(setTimeout(pista, 122144.20));
    timeouts.push(setTimeout(orange, 122144.20));
    timeouts.push(setTimeout(yellow, 122251.35));
    timeouts.push(setTimeout(orange, 122465.61));

    timeouts.push(setTimeout(pista, 122572.78));
    timeouts.push(setTimeout(yellow, 122572.78));
    timeouts.push(setTimeout(green, 122679.93));
    timeouts.push(setTimeout(yellow, 122894.19));

    timeouts.push(setTimeout(pista, 123001.36));
    timeouts.push(setTimeout(green, 123001.36));
    timeouts.push(setTimeout(blue, 123108.50));
    timeouts.push(setTimeout(green, 123322.77));

    //285

    timeouts.push(setTimeout(pista, 123429.94));
    timeouts.push(setTimeout(blue, 123429.94));
    timeouts.push(setTimeout(orange, 123644.22));
    
    timeouts.push(setTimeout(pista, 123858.52));
    timeouts.push(setTimeout(green, 123858.52));
    timeouts.push(setTimeout(green, 124072.80));
    
    timeouts.push(setTimeout(pista, 124287.09));
    timeouts.push(setTimeout(yellow, 124287.09));
    timeouts.push(setTimeout(yellow, 124501.37));

    timeouts.push(setTimeout(pista, 124715.67));
    timeouts.push(setTimeout(blue, 124715.67));
    timeouts.push(setTimeout(green, 124822.82));
    timeouts.push(setTimeout(yellow, 124929.95));
    timeouts.push(setTimeout(orange, 125037.08));

    //289

    timeouts.push(setTimeout(pista, 125144.25)); // Entrada dos synths ref.
    timeouts.push(setTimeout(red, 125251.40));
    timeouts.push(setTimeout(red, 125358.53));
    timeouts.push(setTimeout(red, 125465.66));
    
    timeouts.push(setTimeout(pista, 125572.83));
    timeouts.push(setTimeout(blue, 125572.83));
    timeouts.push(setTimeout(red, 125787.11));
    timeouts.push(setTimeout(red, 125894.24));
    
    timeouts.push(setTimeout(pista, 126001.41));
    timeouts.push(setTimeout(green, 126001.41));
    timeouts.push(setTimeout(red, 126215.69));
    timeouts.push(setTimeout(red, 126322.82));
    
    timeouts.push(setTimeout(pista, 126429.98));
    timeouts.push(setTimeout(yellow, 126429.98));
    timeouts.push(setTimeout(orange, 126644.26));

    //293

    timeouts.push(setTimeout(pista, 126858.56));
    timeouts.push(setTimeout(red, 126965.71));
    timeouts.push(setTimeout(red, 127072.84));
    timeouts.push(setTimeout(red, 127179.97));
    
    timeouts.push(setTimeout(pista, 127287.14));
    timeouts.push(setTimeout(blue, 127287.14));
    timeouts.push(setTimeout(red, 127394.29));
    timeouts.push(setTimeout(green, 127501.42));
    timeouts.push(setTimeout(red, 127608.55));
    
    timeouts.push(setTimeout(pista, 127715.72));
    timeouts.push(setTimeout(yellow, 127715.72));
    timeouts.push(setTimeout(red, 127822.86));
    timeouts.push(setTimeout(green, 127930.00));
    timeouts.push(setTimeout(red, 128037.13));
    
    timeouts.push(setTimeout(pista, 128144.30));
    timeouts.push(setTimeout(yellow, 128144.30));
    timeouts.push(setTimeout(red, 128251.44));
    timeouts.push(setTimeout(orange, 128358.58));

    //297

    timeouts.push(setTimeout(pista, 128572.88)); // 1.5.2
    timeouts.push(setTimeout(red, 128680.02));
    timeouts.push(setTimeout(red, 128787.16));
    timeouts.push(setTimeout(red, 128894.28));
    
    timeouts.push(setTimeout(pista, 129001.45));
    timeouts.push(setTimeout(blue, 129001.45));
    timeouts.push(setTimeout(red, 129215.73));
    timeouts.push(setTimeout(red, 129322.86));
    
    timeouts.push(setTimeout(pista, 129430.03));
    timeouts.push(setTimeout(green, 129430.03));
    timeouts.push(setTimeout(red, 129644.31));
    timeouts.push(setTimeout(red, 129751.44));
    
    timeouts.push(setTimeout(pista, 129858.61));
    timeouts.push(setTimeout(yellow, 129858.61));
    timeouts.push(setTimeout(orange, 130072.89));

    //301

    timeouts.push(setTimeout(pista, 130287.19));
    timeouts.push(setTimeout(red, 130394.33));
    timeouts.push(setTimeout(red, 130501.47));
    timeouts.push(setTimeout(red, 130608.60));
    
    timeouts.push(setTimeout(pista, 130715.77));
    timeouts.push(setTimeout(blue, 130715.77));
    timeouts.push(setTimeout(red, 130822.91));
    timeouts.push(setTimeout(green, 130930.05));
    timeouts.push(setTimeout(red, 131037.17));
    
    timeouts.push(setTimeout(pista, 131144.34));
    timeouts.push(setTimeout(orange, 131144.34));
    timeouts.push(setTimeout(red, 131251.49));
    timeouts.push(setTimeout(yellow, 131358.62));
    timeouts.push(setTimeout(red, 131465.75));
    
    timeouts.push(setTimeout(pista, 131572.92));
    timeouts.push(setTimeout(green, 131572.92));
    timeouts.push(setTimeout(red, 131680.07));
    timeouts.push(setTimeout(blue, 131787.20));

    //305

    timeouts.push(setTimeout(pista, 132001.50)); // 1.5.3
    timeouts.push(setTimeout(red, 132108.64));
    timeouts.push(setTimeout(red, 132215.78));
    timeouts.push(setTimeout(red, 132322.91));
    
    timeouts.push(setTimeout(pista, 132430.08));
    timeouts.push(setTimeout(blue, 132430.08));
    timeouts.push(setTimeout(red, 132644.36));
    timeouts.push(setTimeout(red, 132751.49));
    
    timeouts.push(setTimeout(pista, 132858.66));
    timeouts.push(setTimeout(green, 132858.66));
    timeouts.push(setTimeout(red, 133072.94));
    timeouts.push(setTimeout(red, 133180.07));
    
    timeouts.push(setTimeout(pista, 133287.23));
    timeouts.push(setTimeout(yellow, 133287.23));
    timeouts.push(setTimeout(orange, 133501.51));

    //309

    timeouts.push(setTimeout(pista, 133715.81));
    timeouts.push(setTimeout(red, 133822.96));
    timeouts.push(setTimeout(red, 133930.09));
    timeouts.push(setTimeout(red, 134037.22));
    
    timeouts.push(setTimeout(pista, 134144.39));
    timeouts.push(setTimeout(blue, 134144.39));
    timeouts.push(setTimeout(red, 134251.54));
    timeouts.push(setTimeout(green, 134358.67));
    timeouts.push(setTimeout(red, 134465.80));
    
    timeouts.push(setTimeout(pista, 134572.97));
    timeouts.push(setTimeout(yellow, 134572.97));
    timeouts.push(setTimeout(red, 134680.11));
    timeouts.push(setTimeout(green, 134787.25));
    timeouts.push(setTimeout(red, 134894.38));
    
    timeouts.push(setTimeout(pista, 135001.55));
    timeouts.push(setTimeout(yellow, 135001.55));
    timeouts.push(setTimeout(red, 135108.69));
    timeouts.push(setTimeout(orange, 135215.83));

    //313

    timeouts.push(setTimeout(pista, 135430.13)); // 1.5.4
    timeouts.push(setTimeout(red, 135537.27));
    timeouts.push(setTimeout(red, 135644.41));
    timeouts.push(setTimeout(red, 135751.53));
    
    timeouts.push(setTimeout(pista, 135858.70));
    timeouts.push(setTimeout(blue, 135858.70));
    timeouts.push(setTimeout(red, 136072.98));
    timeouts.push(setTimeout(red, 136180.11));
    
    timeouts.push(setTimeout(pista, 136287.28));
    timeouts.push(setTimeout(green, 136287.28));
    timeouts.push(setTimeout(red, 136501.56));
    timeouts.push(setTimeout(red, 136608.69));
    
    timeouts.push(setTimeout(pista, 136715.86));
    timeouts.push(setTimeout(yellow, 136715.86));
    timeouts.push(setTimeout(orange, 136930.14));

    //317

    timeouts.push(setTimeout(pista, 137144.44));
    timeouts.push(setTimeout(red, 137251.58));
    timeouts.push(setTimeout(red, 137358.72));
    timeouts.push(setTimeout(red, 137465.85));
    
    timeouts.push(setTimeout(pista, 137573.02));
    timeouts.push(setTimeout(green, 137573.02));
    timeouts.push(setTimeout(green, 137680.16));
    timeouts.push(setTimeout(green, 137894.42));
    
    timeouts.push(setTimeout(pista, 138001.59));
    timeouts.push(setTimeout(yellow, 138001.59));
    timeouts.push(setTimeout(yellow, 138108.74));
    timeouts.push(setTimeout(yellow, 138323.00));
    
    timeouts.push(setTimeout(pista, 138430.17));
    timeouts.push(setTimeout(yellow, 138430.17));
    timeouts.push(setTimeout(blue, 138644.45));

    //321

    timeouts.push(setTimeout(pista, 138858.75)); // 1.5.5
    timeouts.push(setTimeout(red, 138965.89));
    timeouts.push(setTimeout(red, 139073.03));
    timeouts.push(setTimeout(red, 139180.16));
    
    timeouts.push(setTimeout(pista, 139287.33));
    timeouts.push(setTimeout(blue, 139287.33));
    timeouts.push(setTimeout(red, 139501.61));
    timeouts.push(setTimeout(red, 139608.74));
    
    timeouts.push(setTimeout(pista, 139715.91));
    timeouts.push(setTimeout(green, 139715.91));
    timeouts.push(setTimeout(red, 139930.19));
    timeouts.push(setTimeout(red, 140037.32));
    
    timeouts.push(setTimeout(pista, 140144.48));
    timeouts.push(setTimeout(yellow, 140144.48));
    timeouts.push(setTimeout(orange, 140358.76));

    //325

    timeouts.push(setTimeout(pista, 140573.06));
    timeouts.push(setTimeout(red, 140680.21));
    timeouts.push(setTimeout(red, 140787.34));
    timeouts.push(setTimeout(red, 140894.47));
    
    timeouts.push(setTimeout(pista, 141001.64));
    timeouts.push(setTimeout(blue, 141001.64));
    timeouts.push(setTimeout(red, 141108.79));
    timeouts.push(setTimeout(green, 141215.92));
    timeouts.push(setTimeout(red, 141323.05));
    
    timeouts.push(setTimeout(pista, 141430.22));
    timeouts.push(setTimeout(yellow, 141430.22));
    timeouts.push(setTimeout(red, 141537.36));
    timeouts.push(setTimeout(green, 141644.50));
    timeouts.push(setTimeout(red, 141751.63));
    
    timeouts.push(setTimeout(pista, 141858.80));
    timeouts.push(setTimeout(yellow, 141858.80));
    timeouts.push(setTimeout(orange, 142073.08));

    //329

    timeouts.push(setTimeout(pista, 142287.38)); // 1.5.6
    timeouts.push(setTimeout(red, 142394.52));
    timeouts.push(setTimeout(red, 142501.66));
    timeouts.push(setTimeout(red, 142608.78));
    
    timeouts.push(setTimeout(pista, 142715.95));
    timeouts.push(setTimeout(blue, 142715.95));
    timeouts.push(setTimeout(red, 142930.23));
    timeouts.push(setTimeout(red, 143037.36));
    
    timeouts.push(setTimeout(pista, 143144.53));
    timeouts.push(setTimeout(green, 143144.53));
    timeouts.push(setTimeout(red, 143358.81));
    timeouts.push(setTimeout(red, 143465.94));
    
    timeouts.push(setTimeout(pista, 143573.11));
    timeouts.push(setTimeout(yellow, 143573.11));
    timeouts.push(setTimeout(orange, 143787.39));

    //333

    timeouts.push(setTimeout(pista, 144001.69));
    timeouts.push(setTimeout(red, 144108.83));
    timeouts.push(setTimeout(red, 144215.97));
    timeouts.push(setTimeout(red, 144323.10));
    
    timeouts.push(setTimeout(pista, 144430.27));
    timeouts.push(setTimeout(blue, 144430.27));
    timeouts.push(setTimeout(red, 144537.41));
    timeouts.push(setTimeout(green, 144644.55));
    timeouts.push(setTimeout(red, 144751.67));
    
    timeouts.push(setTimeout(pista, 144858.84));
    timeouts.push(setTimeout(orange, 144858.84));
    timeouts.push(setTimeout(red, 144965.99));
    timeouts.push(setTimeout(yellow, 145073.12));
    timeouts.push(setTimeout(red, 145180.25));
    
    timeouts.push(setTimeout(pista, 145287.42));
    timeouts.push(setTimeout(green, 145287.42));
    timeouts.push(setTimeout(red, 145394.57));
    timeouts.push(setTimeout(blue, 145501.70));

    //337

    timeouts.push(setTimeout(pista, 145716.00)); // 1.5.7
    timeouts.push(setTimeout(red, 145823.14));
    timeouts.push(setTimeout(red, 145930.28));
    timeouts.push(setTimeout(red, 146037.41));
    
    timeouts.push(setTimeout(pista, 146144.58));
    timeouts.push(setTimeout(blue, 146144.58));
    timeouts.push(setTimeout(red, 146358.86));
    timeouts.push(setTimeout(red, 146465.99));
    
    timeouts.push(setTimeout(pista, 146573.16));
    timeouts.push(setTimeout(green, 146573.16));
    timeouts.push(setTimeout(red, 146787.44));
    timeouts.push(setTimeout(red, 146894.57));
    
    timeouts.push(setTimeout(pista, 147001.73));
    timeouts.push(setTimeout(yellow, 147001.73));
    timeouts.push(setTimeout(orange, 147216.01));

    //341

    timeouts.push(setTimeout(pista, 147430.31));
    timeouts.push(setTimeout(red, 147537.46));
    timeouts.push(setTimeout(red, 147644.59));
    timeouts.push(setTimeout(red, 147751.72));
    
    timeouts.push(setTimeout(pista, 147858.89));
    timeouts.push(setTimeout(blue, 147858.89));
    timeouts.push(setTimeout(red, 147966.04));
    timeouts.push(setTimeout(green, 148073.17));
    timeouts.push(setTimeout(red, 148180.30));
    
    timeouts.push(setTimeout(pista, 148287.47));
    timeouts.push(setTimeout(yellow, 148287.47));
    timeouts.push(setTimeout(red, 148394.61));
    timeouts.push(setTimeout(green, 148501.75));
    timeouts.push(setTimeout(red, 148608.88));
    
    timeouts.push(setTimeout(pista, 148716.05));
    timeouts.push(setTimeout(yellow, 148716.05));
    timeouts.push(setTimeout(red, 148823.19));
    timeouts.push(setTimeout(orange, 148930.33));

    //345

    timeouts.push(setTimeout(pista, 149144.63)); // 1.5.8
    timeouts.push(setTimeout(red, 149251.77));
    timeouts.push(setTimeout(red, 149358.91));
    timeouts.push(setTimeout(red, 149466.03));
    
    timeouts.push(setTimeout(pista, 149573.20));
    timeouts.push(setTimeout(blue, 149573.20));
    timeouts.push(setTimeout(red, 149787.48));
    timeouts.push(setTimeout(red, 149894.61));
    
    timeouts.push(setTimeout(pista, 150001.78));
    timeouts.push(setTimeout(green, 150001.78));
    timeouts.push(setTimeout(red, 150216.06));
    timeouts.push(setTimeout(red, 150323.19));
    
    timeouts.push(setTimeout(pista, 150430.36));
    timeouts.push(setTimeout(yellow, 150430.36));
    timeouts.push(setTimeout(orange, 150644.64));

    //349

    timeouts.push(setTimeout(pista, 150858.94));
    timeouts.push(setTimeout(yellow, 151073.22));
    
    timeouts.push(setTimeout(pista, 151287.52));
    timeouts.push(setTimeout(orange, 151287.52));
    timeouts.push(setTimeout(red, 151501.80));
    
    timeouts.push(setTimeout(pista, 151716.09));
    timeouts.push(setTimeout(blue, 151716.09));
    timeouts.push(setTimeout(green, 151930.37));
    
    timeouts.push(setTimeout(pista, 152144.67));
    timeouts.push(setTimeout(yellow, 152144.67));
    timeouts.push(setTimeout(orange, 152358.95));

    //353

    timeouts.push(setTimeout(pista, 152573.25)); // break
    timeouts.push(setTimeout(orange, 152573.25));
    timeouts.push(setTimeout(green, 152573.25));

    timeouts.push(setTimeout(pista, 153001.83));

    timeouts.push(setTimeout(pista, 153430.41));

    timeouts.push(setTimeout(pista, 153858.98));

    //357

    timeouts.push(setTimeout(pista, 154287.56));

    timeouts.push(setTimeout(pista, 154716.14));

    timeouts.push(setTimeout(pista, 155144.72));
    timeouts.push(setTimeout(yellow, 155144.72));
    timeouts.push(setTimeout(red, 155144.72));

    timeouts.push(setTimeout(pista, 155573.30));

    //361

    timeouts.push(setTimeout(pista, 156001.88)); // 2
    timeouts.push(setTimeout(orange, 156001.88));
    timeouts.push(setTimeout(green, 156001.88));

    timeouts.push(setTimeout(pista, 156430.45));

    timeouts.push(setTimeout(pista, 156859.03));

    timeouts.push(setTimeout(pista, 157287.61));

    //365

    timeouts.push(setTimeout(pista, 157716.19));

    timeouts.push(setTimeout(pista, 158144.77));

    timeouts.push(setTimeout(pista, 158573.34));
    timeouts.push(setTimeout(red, 158573.34));
    timeouts.push(setTimeout(yellow, 158573.34));

    timeouts.push(setTimeout(pista, 159001.92));

    //369

    timeouts.push(setTimeout(pista, 159430.50)); // 3
    timeouts.push(setTimeout(green, 159430.50));
    timeouts.push(setTimeout(orange, 159430.50));

    timeouts.push(setTimeout(pista, 159859.08));

    timeouts.push(setTimeout(pista, 160287.66));

    timeouts.push(setTimeout(pista, 160716.23));

    //373

    timeouts.push(setTimeout(pista, 161144.81));

    timeouts.push(setTimeout(pista, 161573.39));

    timeouts.push(setTimeout(pista, 162001.97));
    timeouts.push(setTimeout(yellow, 162001.97));
    timeouts.push(setTimeout(red, 162001.97));

    timeouts.push(setTimeout(pista, 162430.55));

    //377

    timeouts.push(setTimeout(pista, 162859.13)); // 4
    timeouts.push(setTimeout(green, 162859.13));
    timeouts.push(setTimeout(orange, 162859.13));

    timeouts.push(setTimeout(pista, 163287.70));

    timeouts.push(setTimeout(pista, 163716.28));

    timeouts.push(setTimeout(pista, 164144.86));

    //381

    timeouts.push(setTimeout(pista, 164573.44));

    timeouts.push(setTimeout(pista, 165002.02));

    timeouts.push(setTimeout(pista, 165430.59));
    timeouts.push(setTimeout(yellow, 165430.59));
    timeouts.push(setTimeout(red, 165430.59));

    timeouts.push(setTimeout(pista, 165859.17));

    //385

    timeouts.push(setTimeout(pista, 166287.75)); // forró
    timeouts.push(setTimeout(blue, 166287.75));
    timeouts.push(setTimeout(yellow, 166502.03));
    
    timeouts.push(setTimeout(pista, 166716.33));
    timeouts.push(setTimeout(green, 166716.33));
    timeouts.push(setTimeout(orange, 166930.61));
    
    timeouts.push(setTimeout(pista, 167144.91));
    timeouts.push(setTimeout(yellow, 167144.91));
    timeouts.push(setTimeout(red, 167359.19));
    
    timeouts.push(setTimeout(pista, 167573.48));
    timeouts.push(setTimeout(yellow, 167573.48));
    timeouts.push(setTimeout(green, 167680.63));
    timeouts.push(setTimeout(orange, 167894.89));

    //389

    timeouts.push(setTimeout(pista, 168002.06)); // 2
    timeouts.push(setTimeout(blue, 168002.06));
    timeouts.push(setTimeout(green, 168109.21));
    timeouts.push(setTimeout(yellow, 168216.34));
    timeouts.push(setTimeout(orange, 168323.47));

    timeouts.push(setTimeout(pista, 168430.64));
    timeouts.push(setTimeout(green, 168430.64));
    timeouts.push(setTimeout(orange, 168644.92));

    timeouts.push(setTimeout(pista, 168859.22));
    timeouts.push(setTimeout(yellow, 168859.22));
    timeouts.push(setTimeout(red, 169073.50));

    timeouts.push(setTimeout(pista, 169287.80));
    timeouts.push(setTimeout(orange, 169287.80));
    timeouts.push(setTimeout(red, 169394.94));

    //393

    timeouts.push(setTimeout(pista, 169716.38)); // 3
    timeouts.push(setTimeout(blue, 169716.38));
    timeouts.push(setTimeout(yellow, 169930.66));
    
    timeouts.push(setTimeout(pista, 170144.95));
    timeouts.push(setTimeout(green, 170144.95));
    timeouts.push(setTimeout(orange, 170359.23));
    
    timeouts.push(setTimeout(pista, 170573.53));
    timeouts.push(setTimeout(green, 170573.53));
    timeouts.push(setTimeout(yellow, 170680.68));
    timeouts.push(setTimeout(orange, 170787.81));
    timeouts.push(setTimeout(red, 170894.94));
    
    timeouts.push(setTimeout(pista, 171002.11));
    timeouts.push(setTimeout(blue, 171002.11));
    timeouts.push(setTimeout(green, 171002.11));
    timeouts.push(setTimeout(blue, 171109.25));
    timeouts.push(setTimeout(green, 171109.25));
    timeouts.push(setTimeout(blue, 171216.39));
    timeouts.push(setTimeout(green, 171216.39));
    timeouts.push(setTimeout(blue, 171323.52));
    timeouts.push(setTimeout(green, 171323.52));

    //397

    timeouts.push(setTimeout(pista, 171430.69)); // 4
    timeouts.push(setTimeout(blue, 171430.69));
    timeouts.push(setTimeout(green, 171537.83));
    timeouts.push(setTimeout(yellow, 171644.97));
    timeouts.push(setTimeout(orange, 171752.10));
    
    timeouts.push(setTimeout(pista, 171859.27));
    timeouts.push(setTimeout(blue, 171859.27));
    timeouts.push(setTimeout(yellow, 171966.41));
    timeouts.push(setTimeout(orange, 172073.55));
    timeouts.push(setTimeout(red, 172180.67));
    
    timeouts.push(setTimeout(pista, 172287.84));
    timeouts.push(setTimeout(green, 172287.84));
    timeouts.push(setTimeout(yellow, 172394.99));
    timeouts.push(setTimeout(orange, 172502.12));
    timeouts.push(setTimeout(red, 172609.25));
    
    timeouts.push(setTimeout(pista, 172716.42));
    timeouts.push(setTimeout(red, 172716.42));
    timeouts.push(setTimeout(orange, 172716.42));
    timeouts.push(setTimeout(orange, 172823.57));
    timeouts.push(setTimeout(yellow, 172823.57));
    timeouts.push(setTimeout(yellow, 172930.70));
    timeouts.push(setTimeout(green, 172930.70));
    timeouts.push(setTimeout(yellow, 173037.83));
    timeouts.push(setTimeout(green, 173037.83));

    //401

    timeouts.push(setTimeout(pista, 173145.00));  // 5
    timeouts.push(setTimeout(blue, 173145.00));
    timeouts.push(setTimeout(green, 173252.14));
    timeouts.push(setTimeout(yellow, 173359.28));
    timeouts.push(setTimeout(orange, 173466.41));
    
    timeouts.push(setTimeout(pista, 173573.58));
    timeouts.push(setTimeout(green, 173573.58));
    timeouts.push(setTimeout(yellow, 173680.72));
    timeouts.push(setTimeout(orange, 173787.86));
    timeouts.push(setTimeout(red, 173894.99));
    
    timeouts.push(setTimeout(pista, 174002.16));
    timeouts.push(setTimeout(green, 174002.16));
    timeouts.push(setTimeout(yellow, 174109.30));
    timeouts.push(setTimeout(orange, 174216.44));
    timeouts.push(setTimeout(red, 174323.57));
    
    timeouts.push(setTimeout(pista, 174430.73));
    timeouts.push(setTimeout(blue, 174430.73));
    timeouts.push(setTimeout(green, 174537.88));

    //405

    timeouts.push(setTimeout(pista, 174859.31)); // 6
    timeouts.push(setTimeout(blue, 174859.31));
    timeouts.push(setTimeout(green, 174966.46));
    timeouts.push(setTimeout(yellow, 175073.59));
    timeouts.push(setTimeout(orange, 175180.72));
    
    timeouts.push(setTimeout(pista, 175287.89));
    timeouts.push(setTimeout(blue, 175287.89));
    timeouts.push(setTimeout(yellow , 175395.04));
    timeouts.push(setTimeout(orange, 175502.17));
    timeouts.push(setTimeout(red, 175609.30));
    
    timeouts.push(setTimeout(pista, 175716.47));
    timeouts.push(setTimeout(green, 175716.47));
    timeouts.push(setTimeout(yellow, 175823.61));
    timeouts.push(setTimeout(orange, 175930.75));
    timeouts.push(setTimeout(red, 176037.88));
    
    timeouts.push(setTimeout(pista, 176145.05));
    timeouts.push(setTimeout(green, 176145.05));
    timeouts.push(setTimeout(yellow, 176252.19));


    //409

    timeouts.push(setTimeout(pista, 176573.63)); // 7
    timeouts.push(setTimeout(green, 176573.63));
    timeouts.push(setTimeout(red, 176680.77));
    timeouts.push(setTimeout(orange, 176787.91));
    timeouts.push(setTimeout(yellow, 176895.03));
    
    timeouts.push(setTimeout(pista, 177002.20));
    timeouts.push(setTimeout(green, 177002.20));
    timeouts.push(setTimeout(blue, 177109.35));
    timeouts.push(setTimeout(green, 177216.48));
    timeouts.push(setTimeout(blue, 177323.61));
    
    timeouts.push(setTimeout(pista, 177430.78));
    timeouts.push(setTimeout(yellow, 177430.78));
    timeouts.push(setTimeout(red, 177537.93));
    timeouts.push(setTimeout(orange, 177645.06));
    timeouts.push(setTimeout(yellow, 177752.19));
    
    timeouts.push(setTimeout(pista, 177859.36));
    timeouts.push(setTimeout(blue, 177859.36));
    timeouts.push(setTimeout(red, 177966.50));
    timeouts.push(setTimeout(orange, 178073.64));
    timeouts.push(setTimeout(yellow, 178180.77));

    //413

    timeouts.push(setTimeout(pista, 178287.94)); //8
    timeouts.push(setTimeout(orange, 178287.94));
    timeouts.push(setTimeout(red, 178395.08));
    timeouts.push(setTimeout(orange, 178502.22));
    timeouts.push(setTimeout(yellow, 178609.35));
    
    timeouts.push(setTimeout(pista, 178716.52));
    timeouts.push(setTimeout(orange, 178716.52));
    timeouts.push(setTimeout(yellow, 178823.66));
    timeouts.push(setTimeout(green, 178930.80));
    timeouts.push(setTimeout(blue, 179037.92));
    
    timeouts.push(setTimeout(pista, 179145.09));
    timeouts.push(setTimeout(orange, 179145.09));
    timeouts.push(setTimeout(yellow, 179252.24));
    timeouts.push(setTimeout(green, 179359.37));
    timeouts.push(setTimeout(blue, 179466.50));
    
    timeouts.push(setTimeout(pista, 179573.67));
    timeouts.push(setTimeout(red, 179573.67));
    timeouts.push(setTimeout(yellow, 179573.67));

    //417

    timeouts.push(setTimeout(pista, 180002.25)); // 9
    timeouts.push(setTimeout(blue, 180002.25));
    timeouts.push(setTimeout(red, 180109.39));
    timeouts.push(setTimeout(orange, 180216.53));
    timeouts.push(setTimeout(yellow, 180323.66));
    
    timeouts.push(setTimeout(pista, 180430.83));
    timeouts.push(setTimeout(green, 180430.83));
    timeouts.push(setTimeout(red, 180537.97));
    timeouts.push(setTimeout(orange, 180645.11));
    timeouts.push(setTimeout(yellow, 180752.24));
    
    timeouts.push(setTimeout(pista, 180859.41));
    timeouts.push(setTimeout(yellow, 180859.41));
    timeouts.push(setTimeout(red, 180966.55));
    timeouts.push(setTimeout(orange, 181073.69));
    timeouts.push(setTimeout(yellow, 181180.82));
    
    timeouts.push(setTimeout(pista, 181287.98));
    timeouts.push(setTimeout(orange, 181287.98));
    timeouts.push(setTimeout(red, 181395.13));
    timeouts.push(setTimeout(orange, 181502.26));
    timeouts.push(setTimeout(yellow, 181609.39));

    //421

    timeouts.push(setTimeout(pista, 181716.56)); // 10
    timeouts.push(setTimeout(blue, 181716.56));
    timeouts.push(setTimeout(red, 181823.71));
    timeouts.push(setTimeout(orange, 181930.84));
    timeouts.push(setTimeout(yellow, 182037.97));
    
    timeouts.push(setTimeout(pista, 182145.14));
    timeouts.push(setTimeout(green, 182145.14));
    timeouts.push(setTimeout(red, 182252.29));
    timeouts.push(setTimeout(orange, 182359.42));
    timeouts.push(setTimeout(yellow, 182466.55));
    
    timeouts.push(setTimeout(pista, 182573.72));
    timeouts.push(setTimeout(yellow, 182573.72));
    timeouts.push(setTimeout(red, 182680.86));
    timeouts.push(setTimeout(orange, 182788.00));
    timeouts.push(setTimeout(yellow, 182895.13));
    
    timeouts.push(setTimeout(pista, 183002.30));
    timeouts.push(setTimeout(blue, 183002.30));
    timeouts.push(setTimeout(green, 183109.44));

    //425

    timeouts.push(setTimeout(pista, 183430.88)); // 11
    timeouts.push(setTimeout(blue, 183430.88));
    timeouts.push(setTimeout(yellow, 183538.02));
    timeouts.push(setTimeout(green, 183645.16));
    timeouts.push(setTimeout(orange, 183752.28));

    timeouts.push(setTimeout(pista, 183859.45));
    timeouts.push(setTimeout(green, 183859.45));
    timeouts.push(setTimeout(orange, 183966.60));
    timeouts.push(setTimeout(yellow, 184073.73));
    timeouts.push(setTimeout(red, 184180.86));

    timeouts.push(setTimeout(pista, 184288.03));
    timeouts.push(setTimeout(yellow, 184288.03));
    timeouts.push(setTimeout(red, 184395.18));
    timeouts.push(setTimeout(orange, 184502.31));
    timeouts.push(setTimeout(blue, 184609.44));

    timeouts.push(setTimeout(pista, 184716.61));
    timeouts.push(setTimeout(orange, 184716.61));
    timeouts.push(setTimeout(blue, 184823.75));
    timeouts.push(setTimeout(red, 184930.89));
    timeouts.push(setTimeout(yellow, 185038.02));

    //429

    timeouts.push(setTimeout(pista, 185145.19)); // 12
    timeouts.push(setTimeout(red, 185145.19));
    timeouts.push(setTimeout(green, 185252.33));
    timeouts.push(setTimeout(blue, 185359.47));
    timeouts.push(setTimeout(yellow, 185466.60));

    timeouts.push(setTimeout(pista, 185573.77));
    timeouts.push(setTimeout(blue, 185573.77));
    timeouts.push(setTimeout(yellow, 185680.91));
    timeouts.push(setTimeout(green, 185788.05));
    timeouts.push(setTimeout(orange, 185895.17));

    timeouts.push(setTimeout(pista, 186002.34));
    timeouts.push(setTimeout(green, 186002.34));
    timeouts.push(setTimeout(orange, 186109.49));
    timeouts.push(setTimeout(yellow, 186216.62));
    timeouts.push(setTimeout(red, 186323.75));

    timeouts.push(setTimeout(pista, 186430.92));
    timeouts.push(setTimeout(yellow, 186430.92));
    timeouts.push(setTimeout(red, 186538.07));
    timeouts.push(setTimeout(orange, 186645.20));
    timeouts.push(setTimeout(yellow, 186752.33));

    //433

    timeouts.push(setTimeout(pista, 186859.50)); // 13
    timeouts.push(setTimeout(orange, 186859.50));
    timeouts.push(setTimeout(blue, 186966.64));
    timeouts.push(setTimeout(red, 187073.78));
    timeouts.push(setTimeout(green, 187180.91));
    
    timeouts.push(setTimeout(pista, 187288.08));
    timeouts.push(setTimeout(red, 187288.08));
    timeouts.push(setTimeout(green, 187395.22));
    timeouts.push(setTimeout(blue, 187502.36));
    timeouts.push(setTimeout(yellow, 187609.49));
    
    timeouts.push(setTimeout(pista, 187716.66));
    timeouts.push(setTimeout(blue, 187716.66));
    timeouts.push(setTimeout(yellow, 187823.80));
    timeouts.push(setTimeout(green, 187930.94));
    timeouts.push(setTimeout(orange, 188038.07));
    
    timeouts.push(setTimeout(pista, 188145.23));
    timeouts.push(setTimeout(green, 188145.23));
    timeouts.push(setTimeout(orange, 188252.38));
    timeouts.push(setTimeout(blue, 188359.51));
    timeouts.push(setTimeout(green, 188466.64));

    //437

    timeouts.push(setTimeout(pista, 188573.81)); // 14
    timeouts.push(setTimeout(blue, 188573.81));
    timeouts.push(setTimeout(yellow, 188680.96));
    timeouts.push(setTimeout(green, 188788.09));
    timeouts.push(setTimeout(orange, 188895.22));
    
    timeouts.push(setTimeout(pista, 189002.39));
    timeouts.push(setTimeout(green, 189002.39));
    timeouts.push(setTimeout(orange, 189109.54));
    timeouts.push(setTimeout(yellow, 189216.67));
    timeouts.push(setTimeout(red, 189323.80));
    
    timeouts.push(setTimeout(pista, 189430.97));
    timeouts.push(setTimeout(yellow, 189430.97));
    timeouts.push(setTimeout(red, 189538.11));
    timeouts.push(setTimeout(orange, 189645.25));
    timeouts.push(setTimeout(red, 189752.38));
    
    timeouts.push(setTimeout(pista, 189859.55));
    timeouts.push(setTimeout(blue, 189859.55));
    timeouts.push(setTimeout(green, 189966.69));
    timeouts.push(setTimeout(yellow, 190073.83));
    timeouts.push(setTimeout(orange, 190180.96));

    //441

    timeouts.push(setTimeout(pista, 190288.13)); // oração
    timeouts.push(setTimeout(red, 190288.13));
    timeouts.push(setTimeout(blue, 190395.27));
    timeouts.push(setTimeout(green, 190502.41));
    timeouts.push(setTimeout(yellow, 190609.53));

    //445

    timeouts.push(setTimeout(pista, 192002.44)); // 2

    timeouts.push(setTimeout(pista, 192431.02));

    timeouts.push(setTimeout(pista, 192859.59));

    timeouts.push(setTimeout(pista, 193288.17));

    //449

    timeouts.push(setTimeout(pista, 193716.75)); // 3

    timeouts.push(setTimeout(pista, 194145.33));

    timeouts.push(setTimeout(pista, 194573.91));

    timeouts.push(setTimeout(pista, 195002.48));

    //453

    timeouts.push(setTimeout(pista, 195431.06)); // 4

    timeouts.push(setTimeout(pista, 195859.64));

    timeouts.push(setTimeout(pista, 196288.22));

    timeouts.push(setTimeout(pista, 196716.80));

    //457

    timeouts.push(setTimeout(pista, 197145.38)); // 5

    timeouts.push(setTimeout(pista, 197573.95));

    timeouts.push(setTimeout(pista, 198002.53));

    timeouts.push(setTimeout(pista, 198431.11));

    //461

    timeouts.push(setTimeout(pista, 198859.69));

    timeouts.push(setTimeout(pista, 199288.27));

    timeouts.push(setTimeout(pista, 199716.84));

    timeouts.push(setTimeout(pista, 200145.42));

    //465

    timeouts.push(setTimeout(pista, 200574.00)); // Drop2

    timeouts.push(setTimeout(pista, 201002.58));

    timeouts.push(setTimeout(pista, 201431.16));

    timeouts.push(setTimeout(pista, 201859.73));

    //469

    timeouts.push(setTimeout(pista, 202288.31)); // 2

    timeouts.push(setTimeout(pista, 202716.89));

    timeouts.push(setTimeout(pista, 203145.47));

    timeouts.push(setTimeout(pista, 203574.05));

    //473

    timeouts.push(setTimeout(pista, 204002.63)); // 3

    timeouts.push(setTimeout(pista, 204431.20));

    timeouts.push(setTimeout(pista, 204859.78));

    timeouts.push(setTimeout(pista, 205288.36));

    //477

    timeouts.push(setTimeout(pista, 205716.94)); // 4

    timeouts.push(setTimeout(pista, 206145.52));

    timeouts.push(setTimeout(pista, 206574.09));

    timeouts.push(setTimeout(pista, 207002.67));

    //481

    timeouts.push(setTimeout(pista, 207431.25)); // 5 entra triangulo

    timeouts.push(setTimeout(pista, 207859.83));

    timeouts.push(setTimeout(pista, 208288.41));

    timeouts.push(setTimeout(pista, 208716.98));

    //485

    timeouts.push(setTimeout(pista, 209145.56)); // 6

    timeouts.push(setTimeout(pista, 209574.14));

    timeouts.push(setTimeout(pista, 210002.72));

    timeouts.push(setTimeout(pista, 210431.30));

    //489

    timeouts.push(setTimeout(pista, 210859.88)); // 7

    timeouts.push(setTimeout(pista, 211288.45));

    timeouts.push(setTimeout(pista, 211717.03));

    timeouts.push(setTimeout(pista, 212145.61));

    //493

    timeouts.push(setTimeout(pista, 212574.19)); // 8

    timeouts.push(setTimeout(pista, 213002.77));

    timeouts.push(setTimeout(pista, 213431.34));

    timeouts.push(setTimeout(pista, 213859.92));

    //497

    timeouts.push(setTimeout(pista, 214288.50)); // 9 entrada da sanfona
    timeouts.push(setTimeout(green, 214288.50));
    timeouts.push(setTimeout(red, 214395.64));
    timeouts.push(setTimeout(orange, 214502.78));
    timeouts.push(setTimeout(yellow, 214609.91));
    
    timeouts.push(setTimeout(pista, 214717.08));
    timeouts.push(setTimeout(green, 214717.08));
    timeouts.push(setTimeout(orange, 214824.22));
    timeouts.push(setTimeout(green, 214931.36));
    timeouts.push(setTimeout(orange, 215038.49));
    
    timeouts.push(setTimeout(pista, 215145.66));
    timeouts.push(setTimeout(green, 215145.66));
    timeouts.push(setTimeout(red, 215252.80));
    timeouts.push(setTimeout(orange, 215359.94));
    timeouts.push(setTimeout(yellow, 215467.07));
    
    timeouts.push(setTimeout(pista, 215574.23));
    timeouts.push(setTimeout(red, 215574.23));
    timeouts.push(setTimeout(yellow, 215681.38));
    timeouts.push(setTimeout(green, 215788.51));
    timeouts.push(setTimeout(yellow, 215895.64));

    //501

    timeouts.push(setTimeout(pista, 216002.81)); // 10
    timeouts.push(setTimeout(green, 216002.81));
    timeouts.push(setTimeout(red, 216109.96));
    timeouts.push(setTimeout(orange, 216217.09));
    timeouts.push(setTimeout(yellow, 216324.22));
    
    timeouts.push(setTimeout(pista, 216431.39));
    timeouts.push(setTimeout(green, 216431.39));
    timeouts.push(setTimeout(orange, 216538.54));
    timeouts.push(setTimeout(green, 216645.67));
    timeouts.push(setTimeout(orange, 216752.80));
    
    timeouts.push(setTimeout(pista, 216859.97));
    timeouts.push(setTimeout(green, 216859.97));
    timeouts.push(setTimeout(red, 216967.11));
    timeouts.push(setTimeout(orange, 217074.25));
    timeouts.push(setTimeout(yellow, 217181.38));
    
    timeouts.push(setTimeout(pista, 217288.55));
    timeouts.push(setTimeout(red, 217288.55));
    timeouts.push(setTimeout(green, 217395.69));
    timeouts.push(setTimeout(yellow, 217502.83));
    timeouts.push(setTimeout(green, 217609.96));

    //505

    timeouts.push(setTimeout(pista, 217717.13)); // 11
    timeouts.push(setTimeout(green, 217717.13));
    timeouts.push(setTimeout(red, 217824.27));
    timeouts.push(setTimeout(orange, 217931.41));
    timeouts.push(setTimeout(yellow, 218038.53));
    
    timeouts.push(setTimeout(pista, 218145.70));
    timeouts.push(setTimeout(green, 218145.70));
    timeouts.push(setTimeout(orange, 218252.85));
    timeouts.push(setTimeout(green, 218359.98));
    timeouts.push(setTimeout(orange, 218467.11));
    
    timeouts.push(setTimeout(pista, 218574.28));
    timeouts.push(setTimeout(green, 218574.28));
    timeouts.push(setTimeout(orange, 218681.43));
    timeouts.push(setTimeout(yellow, 218788.56));
    timeouts.push(setTimeout(green, 218895.69));
    
    timeouts.push(setTimeout(pista, 219002.86));
    timeouts.push(setTimeout(red, 219002.86));
    timeouts.push(setTimeout(yellow, 219110.00));
    timeouts.push(setTimeout(green, 219217.14));
    timeouts.push(setTimeout(yellow, 219324.27));

    //509

    timeouts.push(setTimeout(pista, 219431.44)); // 12
    timeouts.push(setTimeout(green, 219431.44));
    timeouts.push(setTimeout(red, 219538.58));
    timeouts.push(setTimeout(orange, 219645.72));
    timeouts.push(setTimeout(yellow, 219752.85));
    
    timeouts.push(setTimeout(pista, 219860.02));
    timeouts.push(setTimeout(green, 219860.02));
    timeouts.push(setTimeout(orange, 219967.16));
    timeouts.push(setTimeout(yellow, 220074.30));
    timeouts.push(setTimeout(orange, 220181.42));
    
    timeouts.push(setTimeout(pista, 220288.59));
    timeouts.push(setTimeout(red, 220288.59));
    timeouts.push(setTimeout(orange, 220288.59));
    timeouts.push(setTimeout(yellow, 220288.59));
    
    timeouts.push(setTimeout(pista, 220717.17));

    //513

    timeouts.push(setTimeout(pista, 221145.75)); // 13
    timeouts.push(setTimeout(blue, 221145.75));
    timeouts.push(setTimeout(orange, 221252.89));
    timeouts.push(setTimeout(yellow, 221360.03));
    timeouts.push(setTimeout(green, 221467.16));
    
    timeouts.push(setTimeout(pista, 221574.33));
    timeouts.push(setTimeout(blue, 221574.33));
    timeouts.push(setTimeout(yellow, 221681.47));
    timeouts.push(setTimeout(green, 221788.61));
    timeouts.push(setTimeout(yellow, 221895.74));
    
    timeouts.push(setTimeout(pista, 222002.91));
    timeouts.push(setTimeout(orange, 222002.91));
    timeouts.push(setTimeout(green, 222110.05));
    timeouts.push(setTimeout(yellow, 222217.19));
    timeouts.push(setTimeout(green, 222324.32));
    
    timeouts.push(setTimeout(pista, 222431.48));
    timeouts.push(setTimeout(orange, 222431.48));
    timeouts.push(setTimeout(green, 222538.63));
    timeouts.push(setTimeout(yellow, 222645.76));
    timeouts.push(setTimeout(green, 222752.89));

    //517

    timeouts.push(setTimeout(pista, 222860.06)); // 14
    timeouts.push(setTimeout(blue, 222860.06));
    timeouts.push(setTimeout(orange, 222967.21));
    timeouts.push(setTimeout(yellow, 223074.34));
    timeouts.push(setTimeout(green, 223181.47));
    
    timeouts.push(setTimeout(pista, 223288.64));
    timeouts.push(setTimeout(blue, 223288.64));
    timeouts.push(setTimeout(yellow, 223395.79));
    timeouts.push(setTimeout(green, 223502.92));
    timeouts.push(setTimeout(yellow, 223610.05));
    
    timeouts.push(setTimeout(pista, 223717.22));
    timeouts.push(setTimeout(green, 223717.22));
    timeouts.push(setTimeout(orange, 223824.36));
    timeouts.push(setTimeout(yellow, 223931.50));
    timeouts.push(setTimeout(green, 224038.63));
    
    timeouts.push(setTimeout(pista, 224145.80));
    timeouts.push(setTimeout(orange, 224145.80));
    timeouts.push(setTimeout(yellow, 224252.94));
    timeouts.push(setTimeout(green, 224360.08));
    timeouts.push(setTimeout(orange, 224467.21));

    //521

    timeouts.push(setTimeout(pista, 224574.38)); // 15
    timeouts.push(setTimeout(blue, 224574.38));
    timeouts.push(setTimeout(orange, 224681.52));
    timeouts.push(setTimeout(yellow, 224788.66));
    timeouts.push(setTimeout(green, 224895.78));
    
    timeouts.push(setTimeout(pista, 225002.95));
    timeouts.push(setTimeout(blue, 225002.95));
    timeouts.push(setTimeout(green, 225110.10));
    timeouts.push(setTimeout(blue, 225217.23));
    timeouts.push(setTimeout(green, 225324.36));
    
    timeouts.push(setTimeout(pista, 225431.53));
    timeouts.push(setTimeout(blue, 225431.53));
    timeouts.push(setTimeout(yellow, 225538.68));
    timeouts.push(setTimeout(green, 225645.81));
    timeouts.push(setTimeout(blue, 225752.94));
    
    timeouts.push(setTimeout(pista, 225860.11));
    timeouts.push(setTimeout(orange, 225860.11));
    timeouts.push(setTimeout(yellow, 225967.25));
    timeouts.push(setTimeout(green, 226074.39));
    timeouts.push(setTimeout(orange, 226181.52));

    //525

    timeouts.push(setTimeout(pista, 226288.69)); // 16
    timeouts.push(setTimeout(blue, 226288.69));
    timeouts.push(setTimeout(yellow, 226395.83));
    timeouts.push(setTimeout(green, 226502.97));
    timeouts.push(setTimeout(blue, 226610.10));
    
    timeouts.push(setTimeout(pista, 226717.27));
    timeouts.push(setTimeout(orange, 226717.27));
    timeouts.push(setTimeout(yellow, 226824.41));
    timeouts.push(setTimeout(green, 226931.55));
    timeouts.push(setTimeout(yellow, 227038.67));
    
    timeouts.push(setTimeout(pista, 227145.84));
    timeouts.push(setTimeout(blue, 227145.84));
    
    timeouts.push(setTimeout(pista, 227574.42));

    //529

    timeouts.push(setTimeout(pista, 228003.00)); //parte groovada
    timeouts.push(setTimeout(blue, 228003.00));
    timeouts.push(setTimeout(yellow, 228217.28));
    
    timeouts.push(setTimeout(pista, 228431.58));
    timeouts.push(setTimeout(green, 228431.58));
    timeouts.push(setTimeout(orange, 228645.86));
    
    timeouts.push(setTimeout(pista, 228860.16));
    timeouts.push(setTimeout(yellow, 228860.16));
    timeouts.push(setTimeout(red, 229074.44));
    
    timeouts.push(setTimeout(pista, 229288.73));
    timeouts.push(setTimeout(red, 229288.73));
    timeouts.push(setTimeout(orange, 229395.88));
    timeouts.push(setTimeout(yellow, 229503.01));
    timeouts.push(setTimeout(green, 229610.14));

    //533

    timeouts.push(setTimeout(pista, 229717.31));
    timeouts.push(setTimeout(blue, 229717.31));
    timeouts.push(setTimeout(yellow, 229931.59));
    
    timeouts.push(setTimeout(pista, 230145.89));
    timeouts.push(setTimeout(green, 230145.89));
    timeouts.push(setTimeout(orange, 230360.17));
    
    timeouts.push(setTimeout(pista, 230574.47));
    timeouts.push(setTimeout(yellow, 230574.47));
    timeouts.push(setTimeout(yellow, 230681.61));
    timeouts.push(setTimeout(red, 230788.75));
    
    timeouts.push(setTimeout(pista, 231003.05));
    timeouts.push(setTimeout(green, 231003.05));
    timeouts.push(setTimeout(yellow, 231110.19));
    timeouts.push(setTimeout(orange, 231217.33));
    timeouts.push(setTimeout(red, 231324.46));

    //537

    timeouts.push(setTimeout(pista, 231431.63)); // 2
    timeouts.push(setTimeout(blue, 231431.63));
    timeouts.push(setTimeout(blue, 231538.77));
    timeouts.push(setTimeout(yellow, 231645.91));
    timeouts.push(setTimeout(yellow, 231753.03));
    
    timeouts.push(setTimeout(pista, 231860.20));
    timeouts.push(setTimeout(green, 231860.20));
    timeouts.push(setTimeout(green, 231967.35));
    timeouts.push(setTimeout(orange, 232074.48));
    timeouts.push(setTimeout(orange, 232181.61));
    
    timeouts.push(setTimeout(pista, 232288.78));
    timeouts.push(setTimeout(blue, 232288.78));
    timeouts.push(setTimeout(green, 232395.93));
    timeouts.push(setTimeout(yellow, 232503.06));
    timeouts.push(setTimeout(orange, 232610.19));
    
    timeouts.push(setTimeout(pista, 232717.36));
    timeouts.push(setTimeout(red, 232717.36));
    timeouts.push(setTimeout(orange, 232824.50));
    timeouts.push(setTimeout(yellow, 232931.64));
    timeouts.push(setTimeout(green, 233038.77));

    //541

    timeouts.push(setTimeout(pista, 233145.94));
    timeouts.push(setTimeout(blue, 233145.94));
    timeouts.push(setTimeout(yellow, 233360.22));
    
    timeouts.push(setTimeout(pista, 233574.52));
    timeouts.push(setTimeout(green, 233574.52));
    timeouts.push(setTimeout(orange, 233788.80));
    
    timeouts.push(setTimeout(pista, 234003.09));
    timeouts.push(setTimeout(blue, 234003.09));
    timeouts.push(setTimeout(green, 234110.24));
    timeouts.push(setTimeout(yellow, 234217.37));
    timeouts.push(setTimeout(orange, 234324.50));
    
    timeouts.push(setTimeout(pista, 234431.67));
    timeouts.push(setTimeout(red, 234431.67));
    timeouts.push(setTimeout(blue, 234538.82));
    timeouts.push(setTimeout(green, 234645.95));
    timeouts.push(setTimeout(yellow, 234753.08));

    //545

    timeouts.push(setTimeout(pista, 234860.25)); // 3
    timeouts.push(setTimeout(blue, 234860.25));
    timeouts.push(setTimeout(green, 234967.39));
    timeouts.push(setTimeout(yellow, 235074.53));
    timeouts.push(setTimeout(orange, 235181.66));
    
    timeouts.push(setTimeout(pista, 235288.83));
    timeouts.push(setTimeout(green, 235288.83));
    timeouts.push(setTimeout(yellow, 235395.97));
    timeouts.push(setTimeout(orange, 235503.11));
    timeouts.push(setTimeout(red, 235610.24));
    
    timeouts.push(setTimeout(pista, 235717.41));
    timeouts.push(setTimeout(orange, 235717.41));
    timeouts.push(setTimeout(yellow, 235824.55));
    timeouts.push(setTimeout(orange, 235931.69));
    timeouts.push(setTimeout(red, 236038.82));
    
    timeouts.push(setTimeout(pista, 236145.98));
    timeouts.push(setTimeout(green, 236145.98));
    timeouts.push(setTimeout(blue, 236253.13));
    timeouts.push(setTimeout(yellow, 236360.26));
    timeouts.push(setTimeout(orange, 236467.39));

    //549

    timeouts.push(setTimeout(pista, 236574.56)); // 4
    timeouts.push(setTimeout(red, 236574.56));
    timeouts.push(setTimeout(orange, 236681.71));
    timeouts.push(setTimeout(yellow, 236788.84));
    timeouts.push(setTimeout(red, 236895.97));
    
    timeouts.push(setTimeout(pista, 237003.14));
    timeouts.push(setTimeout(green, 237003.14));
    timeouts.push(setTimeout(blue, 237110.29));
    timeouts.push(setTimeout(red, 237217.42));
    timeouts.push(setTimeout(yellow, 237324.55));
    
    timeouts.push(setTimeout(pista, 237431.72));
    timeouts.push(setTimeout(red, 237431.72));
    timeouts.push(setTimeout(orange, 237538.86));
    timeouts.push(setTimeout(green, 237646.00));
    timeouts.push(setTimeout(yellow, 237753.13));
    
    timeouts.push(setTimeout(pista, 237860.30));
    timeouts.push(setTimeout(green, 237860.30));
    timeouts.push(setTimeout(blue, 237967.44));
    timeouts.push(setTimeout(orange, 238074.58));
    timeouts.push(setTimeout(yellow, 238181.71));

    //553

    timeouts.push(setTimeout(pista, 238288.88)); // 5
    timeouts.push(setTimeout(orange, 238288.88));
    timeouts.push(setTimeout(yellow, 238396.02));
    timeouts.push(setTimeout(green, 238503.16));
    timeouts.push(setTimeout(red, 238610.28));
    
    timeouts.push(setTimeout(pista, 238717.45));
    timeouts.push(setTimeout(green, 238717.45));
    timeouts.push(setTimeout(blue, 238824.60));
    timeouts.push(setTimeout(red, 238931.73));
    timeouts.push(setTimeout(orange, 239038.86));
    
    timeouts.push(setTimeout(pista, 239146.03));
    timeouts.push(setTimeout(yellow, 239146.03));
    timeouts.push(setTimeout(orange, 239253.18));
    timeouts.push(setTimeout(red, 239360.31));
    timeouts.push(setTimeout(orange, 239467.44));
    
    timeouts.push(setTimeout(pista, 239574.61));
    timeouts.push(setTimeout(green, 239574.61));
    timeouts.push(setTimeout(blue, 239681.75));
    timeouts.push(setTimeout(red, 239788.89));
    timeouts.push(setTimeout(orange, 239896.02));

    //557

    timeouts.push(setTimeout(pista, 240003.19)); // virada
    timeouts.push(setTimeout(green, 240003.19));
    timeouts.push(setTimeout(blue, 240110.33));
    timeouts.push(setTimeout(red, 240217.47));
    
    timeouts.push(setTimeout(pista, 240431.77));
    timeouts.push(setTimeout(blue, 240431.77));
    timeouts.push(setTimeout(blue, 240646.05));
    
    timeouts.push(setTimeout(pista, 240860.34));
    timeouts.push(setTimeout(yellow, 240860.34));
    timeouts.push(setTimeout(yellow, 241074.62));
    
    timeouts.push(setTimeout(pista, 241288.92));
    timeouts.push(setTimeout(green, 241288.92));
    timeouts.push(setTimeout(yellow, 241342.48));
    timeouts.push(setTimeout(orange, 241396.07));
    timeouts.push(setTimeout(red, 241449.63));
    timeouts.push(setTimeout(blue, 241503.20));
    timeouts.push(setTimeout(green, 241556.76));
    timeouts.push(setTimeout(yellow, 241610.33));
    timeouts.push(setTimeout(orange, 241663.89));

    //561

    timeouts.push(setTimeout(pista, 241717.50)); // groove2
    timeouts.push(setTimeout(pista, 242146.08));
    timeouts.push(setTimeout(green, 242146.08));
    
    timeouts.push(setTimeout(pista, 242574.66));
    timeouts.push(setTimeout(yellow, 242574.66));
    
    timeouts.push(setTimeout(pista, 243003.23));
    timeouts.push(setTimeout(orange, 243003.23));
    timeouts.push(setTimeout(red, 243217.51));

    //565

    timeouts.push(setTimeout(pista, 243431.81));
    timeouts.push(setTimeout(red, 243646.09));
    
    timeouts.push(setTimeout(pista, 243860.39));
    timeouts.push(setTimeout(red, 244074.67));
    
    timeouts.push(setTimeout(pista, 244288.97));
    timeouts.push(setTimeout(red, 244503.25));
    
    timeouts.push(setTimeout(pista, 244717.55));
    timeouts.push(setTimeout(red, 244931.83));

    //569

    timeouts.push(setTimeout(pista, 245146.13)); // 2

    timeouts.push(setTimeout(pista, 245574.70));
    timeouts.push(setTimeout(green, 245574.70));

    timeouts.push(setTimeout(pista, 246003.28));
    timeouts.push(setTimeout(yellow, 246003.28));

    timeouts.push(setTimeout(pista, 246431.86));
    timeouts.push(setTimeout(orange, 246431.86));
    timeouts.push(setTimeout(red, 246646.14));

    //573

    timeouts.push(setTimeout(pista, 246860.44));
    timeouts.push(setTimeout(red, 247074.72));
    
    timeouts.push(setTimeout(pista, 247289.02));
    timeouts.push(setTimeout(orange, 247503.30));
    
    timeouts.push(setTimeout(pista, 247717.59));
    timeouts.push(setTimeout(yellow, 247931.87));
    
    timeouts.push(setTimeout(pista, 248146.17));
    timeouts.push(setTimeout(blue   , 248360.45));

    //577

    timeouts.push(setTimeout(pista, 248574.75)); // 3

    timeouts.push(setTimeout(pista, 249003.33));
    timeouts.push(setTimeout(green, 249003.33));

    timeouts.push(setTimeout(pista, 249431.91));
    timeouts.push(setTimeout(yellow, 249431.91));

    timeouts.push(setTimeout(pista, 249860.48));
    timeouts.push(setTimeout(orange, 249860.48));
    timeouts.push(setTimeout(red, 250074.76));

    //581

    timeouts.push(setTimeout(pista, 250289.06));
    timeouts.push(setTimeout(red, 250396.21));
    
    timeouts.push(setTimeout(pista, 250717.64));
    timeouts.push(setTimeout(red, 250824.79));
    
    timeouts.push(setTimeout(pista, 251146.22));
    timeouts.push(setTimeout(red, 251253.36));
    
    timeouts.push(setTimeout(pista, 251574.80));
    timeouts.push(setTimeout(red, 251681.94));

    //585

    timeouts.push(setTimeout(pista, 252003.38)); // 4

    timeouts.push(setTimeout(pista, 252431.95));
    timeouts.push(setTimeout(green, 252431.95));

    timeouts.push(setTimeout(pista, 252860.53));
    timeouts.push(setTimeout(yellow, 252860.53));

    timeouts.push(setTimeout(pista, 253289.11));
    timeouts.push(setTimeout(orange, 253396.25));
    timeouts.push(setTimeout(red, 253610.52));

    //589

    timeouts.push(setTimeout(pista, 253717.69));

    timeouts.push(setTimeout(pista, 254146.27));
    timeouts.push(setTimeout(green, 254146.27));
    timeouts.push(setTimeout(green, 254253.41));
    timeouts.push(setTimeout(green, 254467.67));

    timeouts.push(setTimeout(pista, 254574.84));
    timeouts.push(setTimeout(yellow, 254574.84));
    timeouts.push(setTimeout(yellow, 254681.99));
    timeouts.push(setTimeout(yellow, 254896.25));

    timeouts.push(setTimeout(pista, 255003.42));
    timeouts.push(setTimeout(yellow, 255003.42));
    timeouts.push(setTimeout(green, 255217.70));

    //593

    timeouts.push(setTimeout(pista, 255432.00)); // groove principal drop 2
    timeouts.push(setTimeout(red, 255539.14));
    timeouts.push(setTimeout(red, 255646.28));
    timeouts.push(setTimeout(red, 255753.41));
    
    timeouts.push(setTimeout(pista, 255860.58));
    timeouts.push(setTimeout(blue, 255860.58));
    timeouts.push(setTimeout(red, 256074.86));
    timeouts.push(setTimeout(red, 256181.99));
    
    timeouts.push(setTimeout(pista, 256289.16));
    timeouts.push(setTimeout(green, 256289.16));
    timeouts.push(setTimeout(red, 256503.44));
    timeouts.push(setTimeout(red, 256610.57));
    
    timeouts.push(setTimeout(pista, 256717.73));
    timeouts.push(setTimeout(yellow, 256717.73));
    timeouts.push(setTimeout(orange, 256932.01));

    //597

    timeouts.push(setTimeout(pista, 257146.31));
    timeouts.push(setTimeout(red, 257253.46));
    timeouts.push(setTimeout(red, 257360.59));
    timeouts.push(setTimeout(red, 257467.72));
    
    timeouts.push(setTimeout(pista, 257574.89));
    timeouts.push(setTimeout(red, 257682.04));
    timeouts.push(setTimeout(red, 257896.30));
    
    timeouts.push(setTimeout(pista, 258003.47));
    timeouts.push(setTimeout(red, 258110.61));
    timeouts.push(setTimeout(red, 258324.88));
    
    timeouts.push(setTimeout(pista, 258432.05));
    timeouts.push(setTimeout(red, 258539.19));
    timeouts.push(setTimeout(red, 258646.33));
    timeouts.push(setTimeout(red, 258753.46));

    //601

    timeouts.push(setTimeout(pista, 258860.63)); // 2 
    timeouts.push(setTimeout(red, 258967.77));
    timeouts.push(setTimeout(red, 259074.91));
    timeouts.push(setTimeout(red, 259182.03));
    
    timeouts.push(setTimeout(pista, 259289.20));
    timeouts.push(setTimeout(blue, 259289.20));
    timeouts.push(setTimeout(red, 259503.48));
    timeouts.push(setTimeout(red, 259610.61));
    
    timeouts.push(setTimeout(pista, 259717.78));
    timeouts.push(setTimeout(green, 259717.78));
    timeouts.push(setTimeout(red, 259932.06));
    timeouts.push(setTimeout(red, 260039.19));
    
    timeouts.push(setTimeout(pista, 260146.36));
    timeouts.push(setTimeout(yellow, 260146.36));
    timeouts.push(setTimeout(orange, 260360.64));

    //605

    timeouts.push(setTimeout(pista, 260574.94));
    timeouts.push(setTimeout(red, 260682.08));
    timeouts.push(setTimeout(red, 260789.22));
    timeouts.push(setTimeout(red, 260896.35));
    
    timeouts.push(setTimeout(pista, 261003.52));
    timeouts.push(setTimeout(red, 261110.66));
    timeouts.push(setTimeout(red, 261324.92));
    
    timeouts.push(setTimeout(pista, 261432.09));
    timeouts.push(setTimeout(red, 261539.24));
    timeouts.push(setTimeout(red, 261753.50));
    
    timeouts.push(setTimeout(pista, 261860.67));
    timeouts.push(setTimeout(orange, 261967.82));
    timeouts.push(setTimeout(yellow, 262074.95));
    timeouts.push(setTimeout(green, 262182.08));

    //609

    timeouts.push(setTimeout(pista, 262289.25)); // 3
    timeouts.push(setTimeout(red, 262396.40));
    timeouts.push(setTimeout(red, 262503.53));
    timeouts.push(setTimeout(red, 262610.66));
    
    timeouts.push(setTimeout(pista, 262717.81));
    timeouts.push(setTimeout(blue, 262717.81));
    timeouts.push(setTimeout(red, 262932.09));
    timeouts.push(setTimeout(red, 263039.22));
    
    timeouts.push(setTimeout(pista, 263146.38));
    timeouts.push(setTimeout(green, 263146.38));
    timeouts.push(setTimeout(red, 263360.66));
    timeouts.push(setTimeout(red, 263467.78));
    
    timeouts.push(setTimeout(pista, 263574.94));
    timeouts.push(setTimeout(yellow, 263574.94));
    timeouts.push(setTimeout(orange, 263789.22));

    //613

    timeouts.push(setTimeout(pista, 264003.50));
    timeouts.push(setTimeout(red, 264110.65));
    timeouts.push(setTimeout(red, 264217.78));
    timeouts.push(setTimeout(red, 264324.91));
    
    timeouts.push(setTimeout(pista, 264432.06));
    timeouts.push(setTimeout(red, 264539.21));
    timeouts.push(setTimeout(red, 264753.47));
    
    timeouts.push(setTimeout(pista, 264860.63));
    timeouts.push(setTimeout(red, 264967.77));
    timeouts.push(setTimeout(red, 265182.03));
    
    timeouts.push(setTimeout(pista, 265289.19));
    timeouts.push(setTimeout(yellow, 265396.33));
    timeouts.push(setTimeout(orange, 265503.47));
    timeouts.push(setTimeout(red, 265610.60));

    //617

    timeouts.push(setTimeout(pista, 265717.75)); // virada
    timeouts.push(setTimeout(red, 265717.75));
    timeouts.push(setTimeout(red, 265824.90));
    timeouts.push(setTimeout(red, 266039.16));

    timeouts.push(setTimeout(pista, 266146.31));
    timeouts.push(setTimeout(red, 266146.31));
    timeouts.push(setTimeout(red, 266253.46));
    timeouts.push(setTimeout(red, 266467.72));

    timeouts.push(setTimeout(pista, 266574.88));
    timeouts.push(setTimeout(red, 266574.88));
    timeouts.push(setTimeout(red, 266682.02));
    timeouts.push(setTimeout(red, 266896.28));

    timeouts.push(setTimeout(pista, 267003.44));
    timeouts.push(setTimeout(red, 267003.44));
    timeouts.push(setTimeout(red, 267110.58));
    timeouts.push(setTimeout(red, 267324.85));

    //621

    timeouts.push(setTimeout(pista, 267432.00));
    timeouts.push(setTimeout(red, 267539.15));
    timeouts.push(setTimeout(yellow, 267646.28));
    timeouts.push(setTimeout(red, 267753.41));
    
    timeouts.push(setTimeout(pista, 267860.56));
    timeouts.push(setTimeout(green, 267860.56));
    timeouts.push(setTimeout(red, 267967.71));
    timeouts.push(setTimeout(blue, 268074.84));
    timeouts.push(setTimeout(red, 268181.97));
    
    timeouts.push(setTimeout(pista, 268289.13));
    timeouts.push(setTimeout(orange, 268289.13));
    timeouts.push(setTimeout(red, 268396.27));
    timeouts.push(setTimeout(yellow, 268503.41));
    timeouts.push(setTimeout(red, 268610.53));
    
    timeouts.push(setTimeout(pista, 268717.69));
    timeouts.push(setTimeout(green, 268717.69));
    timeouts.push(setTimeout(red, 268824.83));
    timeouts.push(setTimeout(blue, 268931.97));
    timeouts.push(setTimeout(red, 269039.10));

    //625

    timeouts.push(setTimeout(pista, 269146.25)); // rolling bass drop2
    timeouts.push(setTimeout(red, 269253.40));
    timeouts.push(setTimeout(red, 269360.53));
    timeouts.push(setTimeout(red, 269467.66));

    timeouts.push(setTimeout(pista, 269574.81));
    timeouts.push(setTimeout(blue, 269574.81));
    timeouts.push(setTimeout(red, 269789.09));
    timeouts.push(setTimeout(red, 269896.22));

    timeouts.push(setTimeout(pista, 270003.38));
    timeouts.push(setTimeout(green, 270003.38));
    timeouts.push(setTimeout(red, 270217.66));
    timeouts.push(setTimeout(red, 270324.78));

    timeouts.push(setTimeout(pista, 270431.94));
    timeouts.push(setTimeout(yellow, 270431.94));
    timeouts.push(setTimeout(orange, 270646.22));

    //629

    timeouts.push(setTimeout(pista, 270860.50)); // 2
    timeouts.push(setTimeout(red, 270967.65));
    timeouts.push(setTimeout(red, 271074.78));
    timeouts.push(setTimeout(red, 271181.91));

    timeouts.push(setTimeout(pista, 271289.06));
    timeouts.push(setTimeout(blue, 271289.06));
    timeouts.push(setTimeout(red, 271396.21));
    timeouts.push(setTimeout(green, 271503.34));
    timeouts.push(setTimeout(red, 271610.47));

    timeouts.push(setTimeout(pista, 271717.63));
    timeouts.push(setTimeout(yellow, 271717.63));
    timeouts.push(setTimeout(red, 271824.77));
    timeouts.push(setTimeout(green, 271931.91));
    timeouts.push(setTimeout(red, 272039.03));

    timeouts.push(setTimeout(pista, 272146.19));
    timeouts.push(setTimeout(yellow, 272146.19));
    timeouts.push(setTimeout(red, 272253.33));
    timeouts.push(setTimeout(orange, 272360.47));

    //633

    timeouts.push(setTimeout(pista, 272574.75)); // 3
    timeouts.push(setTimeout(red, 272681.90));
    timeouts.push(setTimeout(red, 272789.03));
    timeouts.push(setTimeout(red, 272896.16));

    timeouts.push(setTimeout(pista, 273003.31));
    timeouts.push(setTimeout(blue, 273003.31));
    timeouts.push(setTimeout(red, 273217.59));
    timeouts.push(setTimeout(red, 273324.72));

    timeouts.push(setTimeout(pista, 273431.88));
    timeouts.push(setTimeout(green, 273431.88));
    timeouts.push(setTimeout(red, 273646.16));
    timeouts.push(setTimeout(red, 273753.28));

    timeouts.push(setTimeout(pista, 273860.44));
    timeouts.push(setTimeout(yellow, 273860.44));
    timeouts.push(setTimeout(orange, 274074.72));

    //637

    timeouts.push(setTimeout(pista, 274289.00)); // 4
    timeouts.push(setTimeout(red, 274396.15));
    timeouts.push(setTimeout(red, 274503.28));
    timeouts.push(setTimeout(red, 274610.41));

    timeouts.push(setTimeout(pista, 274717.56));
    timeouts.push(setTimeout(blue, 274717.56));
    timeouts.push(setTimeout(red, 274824.71));
    timeouts.push(setTimeout(green, 274931.84));
    timeouts.push(setTimeout(red, 275038.97));

    timeouts.push(setTimeout(pista, 275146.13));
    timeouts.push(setTimeout(orange, 275146.13));
    timeouts.push(setTimeout(red, 275253.27));
    timeouts.push(setTimeout(yellow, 275360.41));
    timeouts.push(setTimeout(red, 275467.53));

    timeouts.push(setTimeout(pista, 275574.69));
    timeouts.push(setTimeout(green, 275574.69));
    timeouts.push(setTimeout(red, 275681.83));
    timeouts.push(setTimeout(blue, 275788.97));

    //641

    timeouts.push(setTimeout(pista, 276003.25)); // 5
    timeouts.push(setTimeout(red, 276110.40));
    timeouts.push(setTimeout(red, 276217.53));
    timeouts.push(setTimeout(red, 276324.66));

    timeouts.push(setTimeout(pista, 276431.81));
    timeouts.push(setTimeout(blue, 276431.81));
    timeouts.push(setTimeout(red, 276646.09));
    timeouts.push(setTimeout(red, 276753.22));

    timeouts.push(setTimeout(pista, 276860.38));
    timeouts.push(setTimeout(green, 276860.38));
    timeouts.push(setTimeout(red, 277074.66));
    timeouts.push(setTimeout(red, 277181.78));

    timeouts.push(setTimeout(pista, 277288.94));
    timeouts.push(setTimeout(yellow, 277288.94));
    timeouts.push(setTimeout(orange, 277503.22));

    //645

    timeouts.push(setTimeout(pista, 277717.50)); // 6
    timeouts.push(setTimeout(red, 277824.65));
    timeouts.push(setTimeout(red, 277931.78));
    timeouts.push(setTimeout(red, 278038.91));

    timeouts.push(setTimeout(pista, 278146.06));
    timeouts.push(setTimeout(blue, 278146.06));
    timeouts.push(setTimeout(red, 278253.21));
    timeouts.push(setTimeout(green, 278360.34));
    timeouts.push(setTimeout(red, 278467.47));

    timeouts.push(setTimeout(pista, 278574.63));
    timeouts.push(setTimeout(yellow, 278574.63));
    timeouts.push(setTimeout(red, 278681.77));
    timeouts.push(setTimeout(green, 278788.91));
    timeouts.push(setTimeout(red, 278896.03));

    timeouts.push(setTimeout(pista, 279003.19));
    timeouts.push(setTimeout(yellow, 279003.19));
    timeouts.push(setTimeout(red, 279110.33));
    timeouts.push(setTimeout(orange, 279217.47));


    //649

    timeouts.push(setTimeout(pista, 279431.75)); // 7
    timeouts.push(setTimeout(red, 279538.90));
    timeouts.push(setTimeout(red, 279646.03));
    timeouts.push(setTimeout(red, 279753.16));
    
    timeouts.push(setTimeout(pista, 279860.31));
    timeouts.push(setTimeout(blue, 279860.31));
    timeouts.push(setTimeout(red, 280074.59));
    timeouts.push(setTimeout(red, 280181.72));
    
    timeouts.push(setTimeout(pista, 280288.88));
    timeouts.push(setTimeout(green, 280288.88));
    timeouts.push(setTimeout(red, 280503.16));
    timeouts.push(setTimeout(red, 280610.28));
    
    timeouts.push(setTimeout(pista, 280717.44));
    timeouts.push(setTimeout(yellow, 280717.44));
    timeouts.push(setTimeout(orange, 280931.72));

    //653

    timeouts.push(setTimeout(pista, 281146.00)); // 8
    timeouts.push(setTimeout(red, 281253.15));
    timeouts.push(setTimeout(red, 281360.28));
    timeouts.push(setTimeout(red, 281467.41));
    
    timeouts.push(setTimeout(pista, 281574.56));
    timeouts.push(setTimeout(blue, 281574.56));
    timeouts.push(setTimeout(blue, 281681.71));
    timeouts.push(setTimeout(blue, 281895.97));
    
    timeouts.push(setTimeout(pista, 282003.13));
    timeouts.push(setTimeout(green, 282003.13));
    timeouts.push(setTimeout(green, 282110.27));
    timeouts.push(setTimeout(green, 282324.53));
    
    timeouts.push(setTimeout(pista, 282431.69));
    timeouts.push(setTimeout(green, 282431.69));
    timeouts.push(setTimeout(blue, 282645.97));

    //657

    timeouts.push(setTimeout(pista, 282860.25)); // 2.1
    timeouts.push(setTimeout(pista, 283288.81));
    timeouts.push(setTimeout(blue, 283288.81));
    timeouts.push(setTimeout(red, 283503.09));
    timeouts.push(setTimeout(red, 283610.22));
    
    timeouts.push(setTimeout(pista, 283717.38));
    timeouts.push(setTimeout(green, 283717.38));
    timeouts.push(setTimeout(red, 283931.66));
    timeouts.push(setTimeout(red, 284038.78));
    
    timeouts.push(setTimeout(pista, 284145.94));
    timeouts.push(setTimeout(yellow, 284145.94));
    timeouts.push(setTimeout(orange, 284360.22));

    //661

    timeouts.push(setTimeout(pista, 284574.50));

    timeouts.push(setTimeout(pista, 285003.06));
    timeouts.push(setTimeout(blue, 285003.06));
    timeouts.push(setTimeout(red, 285110.21));
    timeouts.push(setTimeout(green, 285217.34));
    timeouts.push(setTimeout(red, 285324.47));

    timeouts.push(setTimeout(pista, 285431.63));
    timeouts.push(setTimeout(yellow, 285431.63));
    timeouts.push(setTimeout(red, 285538.77));
    timeouts.push(setTimeout(green, 285645.91));
    timeouts.push(setTimeout(red, 285753.03));

    timeouts.push(setTimeout(pista, 285860.19));
    timeouts.push(setTimeout(yellow, 285860.19));
    timeouts.push(setTimeout(red, 285967.33));
    timeouts.push(setTimeout(orange, 286074.47));

    //665

    timeouts.push(setTimeout(pista, 286288.75)); // 2.2

    timeouts.push(setTimeout(pista, 286717.31));
    timeouts.push(setTimeout(blue, 286717.31));
    timeouts.push(setTimeout(red, 286931.59));
    timeouts.push(setTimeout(red, 287038.72));

    timeouts.push(setTimeout(pista, 287145.88));
    timeouts.push(setTimeout(green, 287145.88));
    timeouts.push(setTimeout(red, 287360.16));
    timeouts.push(setTimeout(red, 287467.28));

    timeouts.push(setTimeout(pista, 287574.44));
    timeouts.push(setTimeout(yellow, 287574.44));
    timeouts.push(setTimeout(orange, 287788.72));

    //669

    timeouts.push(setTimeout(pista, 288003.00));

    timeouts.push(setTimeout(pista, 288431.56));
    timeouts.push(setTimeout(blue, 288431.56));
    timeouts.push(setTimeout(red, 288538.71));
    timeouts.push(setTimeout(green, 288645.84));
    timeouts.push(setTimeout(red, 288752.97));

    timeouts.push(setTimeout(pista, 288860.13));
    timeouts.push(setTimeout(orange, 288860.13));
    timeouts.push(setTimeout(red, 288967.27));
    timeouts.push(setTimeout(yellow, 289074.41));
    timeouts.push(setTimeout(red, 289181.53));

    timeouts.push(setTimeout(pista, 289288.69));
    timeouts.push(setTimeout(green, 289288.69));
    timeouts.push(setTimeout(red, 289395.83));
    timeouts.push(setTimeout(blue, 289502.97));

    //673

    timeouts.push(setTimeout(pista, 289717.25)); // 2.3
    timeouts.push(setTimeout(pista, 290145.81));
    timeouts.push(setTimeout(blue, 290145.81));
    timeouts.push(setTimeout(red, 290360.09));
    timeouts.push(setTimeout(red, 290467.22));

    timeouts.push(setTimeout(pista, 290574.38));
    timeouts.push(setTimeout(green, 290574.38));
    timeouts.push(setTimeout(red, 290788.66));
    timeouts.push(setTimeout(red, 290895.78));

    timeouts.push(setTimeout(pista, 291002.94));
    timeouts.push(setTimeout(yellow, 291002.94));
    timeouts.push(setTimeout(orange, 291217.22));

    //677

    timeouts.push(setTimeout(pista, 291431.50));

    timeouts.push(setTimeout(pista, 291860.06));
    timeouts.push(setTimeout(blue, 291860.06));
    timeouts.push(setTimeout(red, 291967.21));
    timeouts.push(setTimeout(green, 292074.34));
    timeouts.push(setTimeout(red, 292181.47));

    timeouts.push(setTimeout(pista, 292288.63));
    timeouts.push(setTimeout(yellow, 292288.63));
    timeouts.push(setTimeout(red, 292395.77));
    timeouts.push(setTimeout(green, 292502.91));
    timeouts.push(setTimeout(red, 292610.03));

    timeouts.push(setTimeout(pista, 292717.19));
    timeouts.push(setTimeout(yellow, 292717.19));
    timeouts.push(setTimeout(red, 292824.33));
    timeouts.push(setTimeout(orange, 292931.47));

    //681

    timeouts.push(setTimeout(pista, 293145.75)); // 2.4

    timeouts.push(setTimeout(pista, 293574.31));
    timeouts.push(setTimeout(blue, 293574.31));
    timeouts.push(setTimeout(red, 293788.59));
    timeouts.push(setTimeout(red, 293895.72));

    timeouts.push(setTimeout(pista, 294002.88));
    timeouts.push(setTimeout(green, 294002.88));
    timeouts.push(setTimeout(red, 294217.16));
    timeouts.push(setTimeout(red, 294324.28));

    timeouts.push(setTimeout(pista, 294431.44));
    timeouts.push(setTimeout(yellow, 294431.44));
    timeouts.push(setTimeout(orange, 294645.72));

    //685

    timeouts.push(setTimeout(pista, 294860.00));

    timeouts.push(setTimeout(pista, 295288.56));
    timeouts.push(setTimeout(blue, 295288.56));
    timeouts.push(setTimeout(red, 295395.71));
    timeouts.push(setTimeout(green, 295502.84));
    timeouts.push(setTimeout(red, 295609.97));

    timeouts.push(setTimeout(pista, 295717.13));
    timeouts.push(setTimeout(yellow, 295717.13));
    timeouts.push(setTimeout(red, 295824.27));
    timeouts.push(setTimeout(orange, 295931.41));
    timeouts.push(setTimeout(red, 296038.53));

    timeouts.push(setTimeout(pista, 296145.69));
    timeouts.push(setTimeout(blue, 296145.69));
    timeouts.push(setTimeout(red, 296252.83));
    timeouts.push(setTimeout(green, 296359.97));
    timeouts.push(setTimeout(red, 296467.10));

    //689

    timeouts.push(setTimeout(pista, 296574.25)); // altro
    timeouts.push(setTimeout(yellow, 296681.40));
    timeouts.push(setTimeout(yellow, 296788.53));
    timeouts.push(setTimeout(yellow, 296895.66));
    
    timeouts.push(setTimeout(pista, 297002.81));
    timeouts.push(setTimeout(yellow, 297217.09));
    timeouts.push(setTimeout(yellow, 297324.22));
    
    timeouts.push(setTimeout(pista, 297431.38));
    timeouts.push(setTimeout(yellow, 297645.66));
    timeouts.push(setTimeout(yellow, 297752.78));
    
    timeouts.push(setTimeout(pista, 297859.94));

    //693

    timeouts.push(setTimeout(pista, 298288.50));
    timeouts.push(setTimeout(yellow, 298395.65));
    timeouts.push(setTimeout(yellow, 298502.78));
    timeouts.push(setTimeout(yellow, 298609.91));

    timeouts.push(setTimeout(pista, 298717.06));
    timeouts.push(setTimeout(yellow, 298824.21));
    timeouts.push(setTimeout(yellow, 299038.47));

    timeouts.push(setTimeout(pista, 299145.63));
    timeouts.push(setTimeout(yellow, 299252.77));
    timeouts.push(setTimeout(yellow, 299467.03));

    timeouts.push(setTimeout(pista, 299574.19));

    //697

    timeouts.push(setTimeout(pista, 300002.75)); // 2
    timeouts.push(setTimeout(yellow, 300109.90));
    timeouts.push(setTimeout(yellow, 300217.03));
    timeouts.push(setTimeout(yellow, 300324.16));
    
    timeouts.push(setTimeout(pista, 300431.31));
    timeouts.push(setTimeout(yellow, 300645.59));
    timeouts.push(setTimeout(yellow, 300752.72));
    
    timeouts.push(setTimeout(pista, 300859.88));
    timeouts.push(setTimeout(yellow, 301074.16));
    timeouts.push(setTimeout(yellow, 301181.28));
    
    timeouts.push(setTimeout(pista, 301288.44));

    //701

    timeouts.push(setTimeout(pista, 301717.00));
    timeouts.push(setTimeout(yellow, 301824.15));
    timeouts.push(setTimeout(yellow, 301931.28));
    timeouts.push(setTimeout(yellow, 302038.41));

    timeouts.push(setTimeout(pista, 302145.56));
    timeouts.push(setTimeout(yellow, 302252.71));
    timeouts.push(setTimeout(yellow, 302466.97));

    timeouts.push(setTimeout(pista, 302574.13));
    timeouts.push(setTimeout(yellow, 302681.27));
    timeouts.push(setTimeout(yellow, 302895.53));

    timeouts.push(setTimeout(pista, 303002.69));

    //705

    timeouts.push(setTimeout(pista, 303431.25)); // 3

    timeouts.push(setTimeout(pista, 303859.81));

    timeouts.push(setTimeout(pista, 304288.38));

    timeouts.push(setTimeout(pista, 304716.94));

    //709

    timeouts.push(setTimeout(pista, 305145.50));

    timeouts.push(setTimeout(pista, 305574.06));

    timeouts.push(setTimeout(pista, 306002.63));

    timeouts.push(setTimeout(pista, 306431.19));

    //713

    timeouts.push(setTimeout(pista, 306859.75)); // 4

    timeouts.push(setTimeout(pista, 307288.31));

    timeouts.push(setTimeout(pista, 307716.88));

    timeouts.push(setTimeout(pista, 308145.44));

    //717

    timeouts.push(setTimeout(pista, 308574.00));

    timeouts.push(setTimeout(pista, 309002.56));

    timeouts.push(setTimeout(pista, 309431.13));

    timeouts.push(setTimeout(pista, 309859.69));

    //721

    timeouts.push(setTimeout(pista, 310288.25)); // altro 2

    timeouts.push(setTimeout(pista, 310716.81));

    timeouts.push(setTimeout(pista, 311145.38));

    timeouts.push(setTimeout(pista, 311573.94));

    //725

    timeouts.push(setTimeout(pista, 312002.50));

    timeouts.push(setTimeout(pista, 312431.06));

    timeouts.push(setTimeout(pista, 312859.63));

    timeouts.push(setTimeout(pista, 313288.19));

    //729

    timeouts.push(setTimeout(pista, 313716.75)); // 2

    timeouts.push(setTimeout(pista, 314145.31));

    timeouts.push(setTimeout(pista, 314573.88));

    timeouts.push(setTimeout(pista, 315002.44));

    //733

    timeouts.push(setTimeout(pista, 315431.00));

    timeouts.push(setTimeout(pista, 315859.56));

    timeouts.push(setTimeout(pista, 316288.13));

    timeouts.push(setTimeout(pista, 316716.69));

    //737

    timeouts.push(setTimeout(pista, 317145.25)); // 3

    timeouts.push(setTimeout(pista, 317573.81));

    timeouts.push(setTimeout(pista, 318002.38));

    timeouts.push(setTimeout(pista, 318430.94));

    //741

    timeouts.push(setTimeout(pista, 318859.50));

    timeouts.push(setTimeout(pista, 319288.06));

    timeouts.push(setTimeout(pista, 319716.63));

    timeouts.push(setTimeout(pista, 320145.19));

    //745

    timeouts.push(setTimeout(pista, 320573.75)); // 4

    timeouts.push(setTimeout(pista, 321002.31));

    timeouts.push(setTimeout(pista, 321430.88));

    timeouts.push(setTimeout(pista, 321859.44));

    //749

    timeouts.push(setTimeout(pista, 322288.00));

    timeouts.push(setTimeout(pista, 322716.56));

    timeouts.push(setTimeout(pista, 323145.13));

    timeouts.push(setTimeout(pista, 323573.69));

    //753

    timeouts.push(setTimeout(pista, 324002.25));
    timeouts.push(setTimeout(blue, 324002.25));

    timeouts.push(setTimeout(pista, 324430.81));

    timeouts.push(setTimeout(pista, 324859.38));

    timeouts.push(setTimeout(pista, 325287.94));

    //757

    timeouts.push(setTimeout(pista, 325716.50));

    timeouts.push(setTimeout(pista, 326145.06));

    timeouts.push(setTimeout(pista, 326573.63));

    timeouts.push(setTimeout(pista, 327002.19));

  
    
    timeouts.push(setTimeout(telaVitoria, 327323.60));
}