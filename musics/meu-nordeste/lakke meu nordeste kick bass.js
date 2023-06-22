    var timeouts = [];
    var isPaused = false;
    var executarTimeout;
    var funcoes = [];
    var temposRestantes = [];
    var tempoDecorridoAntesDePausar = 0;


function meuNordesteKickBass() {
    
    timeDown = 140; // tempo da música em BPM.
    totalNotas = 1427; // quantidade total de notas da música
    limiteNota = 530; // local exato onde as notas sumirão se n for tocada
    velocidadeNotas = 290; // ajusta velocidade de descida das notas. Para fazer ajuste fino e encaixar na área de acerto
    
    limiteLinha = 122; // local exato onde as linhas sumirao
    velocidadeLinha = 373; // ajusta velocidade de descida das linhas

    if (isPaused) {
        
        for (var i = 0; i < timeouts.length; i++) {
            temposRestantes.push(timeouts[i]._idleTimeout - (Date.now() - timeouts[i]._idleStart));            
        }
        return;
    }

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
    timeouts.push(setTimeout(red, 13178.66));

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
    timeouts.push(setTimeout(green, 22285.89));

    timeouts.push(setTimeout(pista, 22714.47));

    timeouts.push(setTimeout(pista, 23143.04));

    timeouts.push(setTimeout(pista, 23571.62));

    //53

    timeouts.push(setTimeout(pista, 24000.19));

    timeouts.push(setTimeout(pista, 24428.77));

    timeouts.push(setTimeout(pista, 24857.34));
    timeouts.push(setTimeout(yellow, 24857.34));

    timeouts.push(setTimeout(pista, 25285.91));

    //57

    timeouts.push(setTimeout(pista, 25714.49)); //2
    timeouts.push(setTimeout(green, 25714.49));

    timeouts.push(setTimeout(pista, 26143.06));

    timeouts.push(setTimeout(pista, 26571.64));

    timeouts.push(setTimeout(pista, 27000.21));

    //61

    timeouts.push(setTimeout(pista, 27428.79));

    timeouts.push(setTimeout(pista, 27857.36));

    timeouts.push(setTimeout(pista, 28285.93));
    timeouts.push(setTimeout(yellow, 28285.93));

    timeouts.push(setTimeout(pista, 28714.51));

    //65

    timeouts.push(setTimeout(pista, 29143.08));
    timeouts.push(setTimeout(green, 29143.08)); //3

    timeouts.push(setTimeout(pista, 29571.66));

    timeouts.push(setTimeout(pista, 30000.23));

    timeouts.push(setTimeout(pista, 30428.80));

    //69

    timeouts.push(setTimeout(pista, 30857.38));

    timeouts.push(setTimeout(pista, 31285.95));


    timeouts.push(setTimeout(pista, 31714.53));
    timeouts.push(setTimeout(yellow, 31714.53));

    timeouts.push(setTimeout(pista, 32143.10));

    //73

    timeouts.push(setTimeout(pista, 32571.68)); // 4
    timeouts.push(setTimeout(orange, 32571.68));

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
    timeouts.push(setTimeout(green, 36000.27));

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
    timeouts.push(setTimeout(red, 56571.83));
    timeouts.push(setTimeout(orange, 56678.98));
    timeouts.push(setTimeout(orange, 56786.11));
    timeouts.push(setTimeout(orange, 56893.24));

    timeouts.push(setTimeout(pista, 57000.41));
    timeouts.push(setTimeout(red, 57000.41));
    timeouts.push(setTimeout(orange, 57214.69));
    timeouts.push(setTimeout(orange, 57321.82));

    timeouts.push(setTimeout(pista, 57428.98));
    timeouts.push(setTimeout(red, 57428.98));
    timeouts.push(setTimeout(orange, 57643.26));
    timeouts.push(setTimeout(orange, 57750.39));

    timeouts.push(setTimeout(pista, 57857.55));
    timeouts.push(setTimeout(orange, 57857.55));

    //133

    timeouts.push(setTimeout(pista, 58286.13)); 
    timeouts.push(setTimeout(red, 58286.13));
    timeouts.push(setTimeout(orange, 58393.27));
    timeouts.push(setTimeout(orange, 58500.41));
    timeouts.push(setTimeout(orange, 58607.54));

    timeouts.push(setTimeout(pista, 58714.70));
    timeouts.push(setTimeout(red, 58714.70));
    timeouts.push(setTimeout(orange, 58821.85));
    timeouts.push(setTimeout(orange, 59036.11));

    timeouts.push(setTimeout(pista, 59143.28));
    timeouts.push(setTimeout(red, 59143.28));
    timeouts.push(setTimeout(orange, 59250.42));
    timeouts.push(setTimeout(orange, 59357.56));
    timeouts.push(setTimeout(orange, 59464.69));

    timeouts.push(setTimeout(pista, 59571.85));
    timeouts.push(setTimeout(red, 59571.85));
    timeouts.push(setTimeout(orange, 59679.00));
    timeouts.push(setTimeout(orange, 59786.13));

    //137

    timeouts.push(setTimeout(pista, 60000.43)); // 1.2
    timeouts.push(setTimeout(red, 60000.43));
    timeouts.push(setTimeout(orange, 60107.57));
    timeouts.push(setTimeout(orange, 60214.71));
    timeouts.push(setTimeout(orange, 60321.83));

    timeouts.push(setTimeout(pista, 60429.00));
    timeouts.push(setTimeout(red, 60429.00));
    timeouts.push(setTimeout(orange, 60643.28));
    timeouts.push(setTimeout(orange, 60750.41));

    timeouts.push(setTimeout(pista, 60857.57));
    timeouts.push(setTimeout(red, 60857.57));
    timeouts.push(setTimeout(orange, 61071.85));
    timeouts.push(setTimeout(orange, 61178.98));

    timeouts.push(setTimeout(pista, 61286.15));
    timeouts.push(setTimeout(orange, 61286.15));

    //141

    timeouts.push(setTimeout(pista, 61714.72));
    timeouts.push(setTimeout(red, 61714.72));
    timeouts.push(setTimeout(orange, 61821.87));
    timeouts.push(setTimeout(orange, 61929.00));
    timeouts.push(setTimeout(orange, 62036.13));

    timeouts.push(setTimeout(pista, 62143.30));
    timeouts.push(setTimeout(red, 62143.30));
    timeouts.push(setTimeout(orange, 62357.58));
    timeouts.push(setTimeout(orange, 62464.71));

    timeouts.push(setTimeout(pista, 62571.87));
    timeouts.push(setTimeout(red, 62571.87));
    timeouts.push(setTimeout(orange, 62679.02));
    timeouts.push(setTimeout(orange, 62786.15));
    timeouts.push(setTimeout(orange, 62893.28));

    timeouts.push(setTimeout(pista, 63000.45));
    timeouts.push(setTimeout(yellow, 63000.45));

    //145

    timeouts.push(setTimeout(pista, 63429.02)); // 1.3
    timeouts.push(setTimeout(red, 63429.02));
    timeouts.push(setTimeout(orange, 63536.16));
    timeouts.push(setTimeout(orange, 63643.30));
    timeouts.push(setTimeout(orange, 63750.43));

    timeouts.push(setTimeout(pista, 63857.59));
    timeouts.push(setTimeout(red, 63857.59));
    timeouts.push(setTimeout(orange, 64071.87));
    timeouts.push(setTimeout(orange, 64179.00));

    timeouts.push(setTimeout(pista, 64286.17));
    timeouts.push(setTimeout(red, 64286.17));
    timeouts.push(setTimeout(orange, 64500.45));
    timeouts.push(setTimeout(orange, 64607.58));

    timeouts.push(setTimeout(pista, 64714.74));
    timeouts.push(setTimeout(orange, 64714.74));

    //149

    timeouts.push(setTimeout(pista, 65143.32));
    timeouts.push(setTimeout(red, 65143.32));
    timeouts.push(setTimeout(orange, 65250.46));
    timeouts.push(setTimeout(orange, 65357.60));
    timeouts.push(setTimeout(orange, 65464.73));

    timeouts.push(setTimeout(pista, 65571.89));
    timeouts.push(setTimeout(red, 65571.89));
    timeouts.push(setTimeout(orange, 65679.04));
    timeouts.push(setTimeout(orange, 65893.30));

    timeouts.push(setTimeout(pista, 66000.47));
    timeouts.push(setTimeout(red, 66000.47));
    timeouts.push(setTimeout(orange, 66107.61));
    timeouts.push(setTimeout(orange, 66214.75));
    timeouts.push(setTimeout(orange, 66321.88));

    timeouts.push(setTimeout(pista, 66429.05));
    timeouts.push(setTimeout(red, 66429.05));
    timeouts.push(setTimeout(orange, 66536.19));
    timeouts.push(setTimeout(orange, 66643.33));

    //153

    timeouts.push(setTimeout(pista, 66857.63)); // 1.4
    timeouts.push(setTimeout(red, 66857.63));
    timeouts.push(setTimeout(orange, 66964.77));
    timeouts.push(setTimeout(orange, 67071.90));
    timeouts.push(setTimeout(orange, 67179.03));

    timeouts.push(setTimeout(pista, 67286.20));
    timeouts.push(setTimeout(red, 67286.20));
    timeouts.push(setTimeout(orange, 67500.48));
    timeouts.push(setTimeout(orange, 67607.61));

    timeouts.push(setTimeout(pista, 67714.78));
    timeouts.push(setTimeout(red, 67714.78));
    timeouts.push(setTimeout(orange, 67929.06));
    timeouts.push(setTimeout(orange, 68036.19));

    timeouts.push(setTimeout(pista, 68143.36));
    timeouts.push(setTimeout(orange, 68143.36));

    //157

    timeouts.push(setTimeout(pista, 68571.94));
    timeouts.push(setTimeout(red, 68571.94));
    timeouts.push(setTimeout(orange, 68679.08));
    timeouts.push(setTimeout(orange, 68786.22));
    timeouts.push(setTimeout(orange, 68893.35));

    timeouts.push(setTimeout(pista, 69000.52));
    timeouts.push(setTimeout(red, 69000.52));
    timeouts.push(setTimeout(orange, 69107.66));
    timeouts.push(setTimeout(orange, 69321.92));

    timeouts.push(setTimeout(pista, 69429.09));
    timeouts.push(setTimeout(red, 69429.09));
    timeouts.push(setTimeout(orange, 69536.24));

    timeouts.push(setTimeout(pista, 69857.67));
    timeouts.push(setTimeout(yellow, 69857.67));

    //161

    timeouts.push(setTimeout(pista, 70286.25)); // 1.5 entrada triangulo
    timeouts.push(setTimeout(red, 70286.25));
    timeouts.push(setTimeout(orange, 70393.40));
    timeouts.push(setTimeout(orange, 70500.53));
    timeouts.push(setTimeout(orange, 70607.66));

    timeouts.push(setTimeout(pista, 70714.83));
    timeouts.push(setTimeout(red, 70714.83));
    timeouts.push(setTimeout(orange, 70929.11));
    timeouts.push(setTimeout(orange, 71036.24));

    timeouts.push(setTimeout(pista, 71143.41));
    timeouts.push(setTimeout(red, 71143.41));
    timeouts.push(setTimeout(orange, 71357.69));
    timeouts.push(setTimeout(orange, 71464.82));

    timeouts.push(setTimeout(pista, 71571.98));
    timeouts.push(setTimeout(orange, 71571.98));

    //165

    timeouts.push(setTimeout(pista, 72000.56));
    timeouts.push(setTimeout(red, 72000.56));
    timeouts.push(setTimeout(orange, 72107.71));
    timeouts.push(setTimeout(orange, 72214.84));
    timeouts.push(setTimeout(orange, 72321.97));

    timeouts.push(setTimeout(pista, 72429.14));
    timeouts.push(setTimeout(red, 72429.14));
    timeouts.push(setTimeout(orange, 72536.29));
    timeouts.push(setTimeout(orange, 72750.55));

    timeouts.push(setTimeout(pista, 72857.72));
    timeouts.push(setTimeout(red, 72857.72));
    timeouts.push(setTimeout(orange, 72964.86));
    timeouts.push(setTimeout(orange, 73072.00));
    timeouts.push(setTimeout(orange, 73179.13));

    timeouts.push(setTimeout(pista, 73286.30));
    timeouts.push(setTimeout(red, 73286.30));
    timeouts.push(setTimeout(orange, 73393.44));
    timeouts.push(setTimeout(orange, 73500.58));

    //169

    timeouts.push(setTimeout(pista, 73714.88)); // 1.6
    timeouts.push(setTimeout(red, 73714.88));
    timeouts.push(setTimeout(orange, 73822.02));
    timeouts.push(setTimeout(orange, 73929.15));
    timeouts.push(setTimeout(orange, 74036.28));

    timeouts.push(setTimeout(pista, 74143.45));
    timeouts.push(setTimeout(red, 74143.45));
    timeouts.push(setTimeout(orange, 74357.73));
    timeouts.push(setTimeout(orange, 74464.86));

    timeouts.push(setTimeout(pista, 74572.03));
    timeouts.push(setTimeout(red, 74572.03));
    timeouts.push(setTimeout(orange, 74786.31));
    timeouts.push(setTimeout(orange, 74893.44));

    timeouts.push(setTimeout(pista, 75000.61));
    timeouts.push(setTimeout(orange, 75000.61));

    //173

    timeouts.push(setTimeout(pista, 75429.19));
    timeouts.push(setTimeout(red, 75429.19));
    timeouts.push(setTimeout(orange, 75536.33));
    timeouts.push(setTimeout(orange, 75643.47));
    timeouts.push(setTimeout(orange, 75750.60));

    timeouts.push(setTimeout(pista, 75857.77));
    timeouts.push(setTimeout(red, 75857.77));
    timeouts.push(setTimeout(orange, 75964.91));
    timeouts.push(setTimeout(orange, 76179.17));

    timeouts.push(setTimeout(pista, 76286.34));
    timeouts.push(setTimeout(red, 76286.34));
    timeouts.push(setTimeout(orange, 76393.49));
    timeouts.push(setTimeout(orange, 76500.62));
    timeouts.push(setTimeout(orange, 76607.75));

    timeouts.push(setTimeout(pista, 76714.92));
    timeouts.push(setTimeout(yellow, 76714.92));

    //177

    timeouts.push(setTimeout(pista, 77143.50));  // 1.7
    timeouts.push(setTimeout(red, 77143.50));
    timeouts.push(setTimeout(orange, 77250.65));
    timeouts.push(setTimeout(orange, 77357.78));
    timeouts.push(setTimeout(orange, 77464.91));

    timeouts.push(setTimeout(pista, 77572.08));
    timeouts.push(setTimeout(red, 77572.08));
    timeouts.push(setTimeout(orange, 77786.36));
    timeouts.push(setTimeout(orange, 77893.49));

    timeouts.push(setTimeout(pista, 78000.66));
    timeouts.push(setTimeout(red, 78000.66));
    timeouts.push(setTimeout(orange, 78214.94));
    timeouts.push(setTimeout(orange, 78322.07));

    timeouts.push(setTimeout(pista, 78429.23));
    timeouts.push(setTimeout(orange, 78429.23));

    //181

    timeouts.push(setTimeout(pista, 78857.81));
    timeouts.push(setTimeout(red, 78857.81));
    timeouts.push(setTimeout(orange, 78964.96));
    timeouts.push(setTimeout(orange, 79072.09));
    timeouts.push(setTimeout(orange, 79179.22));

    timeouts.push(setTimeout(pista, 79286.39));
    timeouts.push(setTimeout(red, 79286.39));
    timeouts.push(setTimeout(orange, 79393.54));
    timeouts.push(setTimeout(orange, 79607.80));

    timeouts.push(setTimeout(pista, 79714.97));
    timeouts.push(setTimeout(red, 79714.97));
    timeouts.push(setTimeout(orange, 79822.11));
    timeouts.push(setTimeout(orange, 79929.25));
    timeouts.push(setTimeout(orange, 80036.38));

    timeouts.push(setTimeout(pista, 80143.55));
    timeouts.push(setTimeout(red, 80143.55));
    timeouts.push(setTimeout(orange, 80250.69));
    timeouts.push(setTimeout(orange, 80357.83));

    //185

    timeouts.push(setTimeout(pista, 80572.13)); // 1.8
    timeouts.push(setTimeout(red, 80572.13));
    timeouts.push(setTimeout(orange, 80679.27));
    timeouts.push(setTimeout(orange, 80786.40));
    timeouts.push(setTimeout(orange, 80893.53));

    timeouts.push(setTimeout(pista, 81000.70));
    timeouts.push(setTimeout(red, 81000.70));
    timeouts.push(setTimeout(orange, 81214.98));
    timeouts.push(setTimeout(orange, 81322.11));

    timeouts.push(setTimeout(pista, 81429.28));
    timeouts.push(setTimeout(red, 81429.28));
    timeouts.push(setTimeout(orange, 81643.56));
    timeouts.push(setTimeout(orange, 81750.69));

    timeouts.push(setTimeout(pista, 81857.86));
    timeouts.push(setTimeout(orange, 81857.86));

    //189

    timeouts.push(setTimeout(pista, 82286.44));
    timeouts.push(setTimeout(red, 82286.44));
    timeouts.push(setTimeout(orange, 82393.58));
    timeouts.push(setTimeout(orange, 82500.72));
    timeouts.push(setTimeout(orange, 82607.85));

    timeouts.push(setTimeout(pista, 82715.02));
    timeouts.push(setTimeout(red, 82715.02));
    timeouts.push(setTimeout(orange, 82822.16));
    timeouts.push(setTimeout(orange, 83036.42));

    timeouts.push(setTimeout(pista, 83143.59));
    timeouts.push(setTimeout(red, 83143.59));

    timeouts.push(setTimeout(pista, 83572.17));

    //193

    timeouts.push(setTimeout(pista, 84000.75)); //drop1 mudou o groove
    timeouts.push(setTimeout(red, 84000.75));
    timeouts.push(setTimeout(orange, 84107.90));
    timeouts.push(setTimeout(orange, 84215.03));
    timeouts.push(setTimeout(orange, 84322.16));

    timeouts.push(setTimeout(pista, 84429.33));
    timeouts.push(setTimeout(red, 84429.33));
    timeouts.push(setTimeout(orange, 84643.61));
    timeouts.push(setTimeout(orange, 84750.74));

    timeouts.push(setTimeout(pista, 84857.91));
    timeouts.push(setTimeout(red, 84857.91));
    timeouts.push(setTimeout(orange, 85072.19));
    timeouts.push(setTimeout(orange, 85179.32));

    timeouts.push(setTimeout(pista, 85286.48));
    timeouts.push(setTimeout(red, 85286.48));

    //197

    timeouts.push(setTimeout(pista, 85715.06));
    timeouts.push(setTimeout(red, 85715.06));
    timeouts.push(setTimeout(orange, 85822.21));
    timeouts.push(setTimeout(orange, 85929.34));
    timeouts.push(setTimeout(orange, 86036.47));

    timeouts.push(setTimeout(pista, 86143.64));
    timeouts.push(setTimeout(red, 86143.64));
    timeouts.push(setTimeout(orange, 86250.79));
    timeouts.push(setTimeout(orange, 86465.05));

    timeouts.push(setTimeout(pista, 86572.22));
    timeouts.push(setTimeout(red, 86572.22));
    timeouts.push(setTimeout(orange, 86786.50));
    timeouts.push(setTimeout(orange, 86893.63));

    timeouts.push(setTimeout(pista, 87000.80));
    timeouts.push(setTimeout(red, 87000.80));
    timeouts.push(setTimeout(orange, 87215.08));

    //201

    timeouts.push(setTimeout(pista, 87429.38)); // 1.2.2
    timeouts.push(setTimeout(red, 87429.38));
    timeouts.push(setTimeout(orange, 87536.52));
    timeouts.push(setTimeout(orange, 87643.65));
    timeouts.push(setTimeout(orange, 87750.78));

    timeouts.push(setTimeout(pista, 87857.95));
    timeouts.push(setTimeout(red, 87857.95));
    timeouts.push(setTimeout(orange, 88072.23));
    timeouts.push(setTimeout(orange, 88179.36));

    timeouts.push(setTimeout(pista, 88286.53));
    timeouts.push(setTimeout(red, 88286.53));
    timeouts.push(setTimeout(orange, 88500.81));
    timeouts.push(setTimeout(orange, 88607.94));

    timeouts.push(setTimeout(pista, 88715.11));
    timeouts.push(setTimeout(red, 88715.11));

    //205

    timeouts.push(setTimeout(pista, 89143.69));
    timeouts.push(setTimeout(red, 89143.69));
    timeouts.push(setTimeout(orange, 89250.83));
    timeouts.push(setTimeout(orange, 89357.97));
    timeouts.push(setTimeout(orange, 89465.10));

    timeouts.push(setTimeout(pista, 89572.27));
    timeouts.push(setTimeout(red, 89572.27));
    timeouts.push(setTimeout(orange, 89679.41));
    timeouts.push(setTimeout(orange, 89893.67));

    timeouts.push(setTimeout(pista, 90000.84));
    timeouts.push(setTimeout(red, 90000.84));
    timeouts.push(setTimeout(orange, 90215.12));
    timeouts.push(setTimeout(orange, 90322.25));

    timeouts.push(setTimeout(pista, 90429.42));
    timeouts.push(setTimeout(yellow, 90429.42));

    //209

    timeouts.push(setTimeout(pista, 90858.00)); // 1.2.3
    timeouts.push(setTimeout(red, 90858.00));
    timeouts.push(setTimeout(orange, 90965.15));
    timeouts.push(setTimeout(orange, 91072.28));
    timeouts.push(setTimeout(orange, 91179.41));

    timeouts.push(setTimeout(pista, 91286.58));
    timeouts.push(setTimeout(red, 91286.58));
    timeouts.push(setTimeout(orange, 91500.86));
    timeouts.push(setTimeout(orange, 91607.99));

    timeouts.push(setTimeout(pista, 91715.16));
    timeouts.push(setTimeout(red, 91715.16));
    timeouts.push(setTimeout(orange, 91929.44));
    timeouts.push(setTimeout(orange, 92036.57));

    timeouts.push(setTimeout(pista, 92143.73));
    timeouts.push(setTimeout(red, 92143.73));

    //213

    timeouts.push(setTimeout(pista, 92572.31));
    timeouts.push(setTimeout(red, 92572.31));
    timeouts.push(setTimeout(orange, 92679.46));
    timeouts.push(setTimeout(orange, 92786.59));
    timeouts.push(setTimeout(orange, 92893.72));

    timeouts.push(setTimeout(pista, 93000.89));
    timeouts.push(setTimeout(red, 93000.89));
    timeouts.push(setTimeout(orange, 93108.04));
    timeouts.push(setTimeout(orange, 93322.30));

    timeouts.push(setTimeout(pista, 93429.47));
    timeouts.push(setTimeout(red, 93429.47));
    timeouts.push(setTimeout(orange, 93643.75));
    timeouts.push(setTimeout(orange, 93750.88));

    timeouts.push(setTimeout(pista, 93858.05));
    timeouts.push(setTimeout(red, 93858.05));
    timeouts.push(setTimeout(orange, 94072.33));

    //217

    timeouts.push(setTimeout(pista, 94286.63)); // 1.2.4
    timeouts.push(setTimeout(red, 94286.63));
    timeouts.push(setTimeout(orange, 94393.77));
    timeouts.push(setTimeout(orange, 94500.90));
    timeouts.push(setTimeout(orange, 94608.03));

    timeouts.push(setTimeout(pista, 94715.20));
    timeouts.push(setTimeout(red, 94715.20));
    timeouts.push(setTimeout(orange, 94929.48));
    timeouts.push(setTimeout(orange, 95036.61));

    timeouts.push(setTimeout(pista, 95143.78));
    timeouts.push(setTimeout(red, 95143.78));
    timeouts.push(setTimeout(orange, 95358.06));
    timeouts.push(setTimeout(orange, 95465.19));

    timeouts.push(setTimeout(pista, 95572.36));
    timeouts.push(setTimeout(red, 95572.36));

    //221

    timeouts.push(setTimeout(pista, 96000.94));
    timeouts.push(setTimeout(red, 96000.94));
    timeouts.push(setTimeout(orange, 96108.08));
    timeouts.push(setTimeout(orange, 96215.22));
    timeouts.push(setTimeout(orange, 96322.35));

    timeouts.push(setTimeout(pista, 96429.52));
    timeouts.push(setTimeout(red, 96429.52));
    timeouts.push(setTimeout(red, 96536.66));
    timeouts.push(setTimeout(red, 96750.92));

    timeouts.push(setTimeout(pista, 96858.09));
    timeouts.push(setTimeout(red, 96858.09));
    timeouts.push(setTimeout(red, 96965.24));
    timeouts.push(setTimeout(red, 97179.50));

    timeouts.push(setTimeout(pista, 97286.67));
    timeouts.push(setTimeout(red, 97286.67));
    timeouts.push(setTimeout(red, 97500.95));

    //225

    timeouts.push(setTimeout(pista, 97715.25)); // 1.2.5 entrada dos pads muda groove
    timeouts.push(setTimeout(orange, 97715.25));

    timeouts.push(setTimeout(pista, 98143.83));
    timeouts.push(setTimeout(red, 98143.83));
    timeouts.push(setTimeout(orange, 98358.11));
    timeouts.push(setTimeout(orange, 98465.24));

    timeouts.push(setTimeout(pista, 98572.41));
    timeouts.push(setTimeout(red, 98572.41));
    timeouts.push(setTimeout(orange, 98786.69));
    timeouts.push(setTimeout(orange, 98893.82));

    timeouts.push(setTimeout(pista, 99000.98));
    timeouts.push(setTimeout(red, 99000.98));

    //229

    timeouts.push(setTimeout(pista, 99429.56));
    timeouts.push(setTimeout(red, 99429.56));
    timeouts.push(setTimeout(orange, 99536.71));
    timeouts.push(setTimeout(orange, 99643.84));
    timeouts.push(setTimeout(orange, 99750.97));

    timeouts.push(setTimeout(pista, 99858.14));
    timeouts.push(setTimeout(red, 99858.14));
    timeouts.push(setTimeout(orange, 99965.29));
    timeouts.push(setTimeout(orange, 100179.55));

    timeouts.push(setTimeout(pista, 100286.72));
    timeouts.push(setTimeout(red, 100286.72));
    timeouts.push(setTimeout(orange, 100393.86));
    timeouts.push(setTimeout(orange, 100501.00));
    timeouts.push(setTimeout(orange, 100608.13));

    timeouts.push(setTimeout(pista, 100715.30));
    timeouts.push(setTimeout(red, 100715.30));
    timeouts.push(setTimeout(orange, 100822.44));
    timeouts.push(setTimeout(orange, 100929.58));

    //233

    timeouts.push(setTimeout(pista, 101143.88)); // 1.3.2
    timeouts.push(setTimeout(red, 101143.88));
    timeouts.push(setTimeout(orange, 101358.16));
    timeouts.push(setTimeout(orange, 101465.28));

    timeouts.push(setTimeout(pista, 101572.45));
    timeouts.push(setTimeout(red, 101572.45));
    timeouts.push(setTimeout(orange, 101786.73));
    timeouts.push(setTimeout(orange, 101893.86));

    timeouts.push(setTimeout(pista, 102001.03));
    timeouts.push(setTimeout(red, 102001.03));
    timeouts.push(setTimeout(orange, 102215.31));
    timeouts.push(setTimeout(orange, 102322.44));

    timeouts.push(setTimeout(pista, 102429.61));
    timeouts.push(setTimeout(red, 102429.61));

    //237

    timeouts.push(setTimeout(pista, 102858.19));
    timeouts.push(setTimeout(red, 102858.19));
    timeouts.push(setTimeout(orange, 102965.33));
    timeouts.push(setTimeout(orange, 103072.47));
    timeouts.push(setTimeout(orange, 103179.60));

    timeouts.push(setTimeout(pista, 103286.77));
    timeouts.push(setTimeout(red, 103286.77));
    timeouts.push(setTimeout(orange, 103393.91));
    timeouts.push(setTimeout(orange, 103608.17));

    timeouts.push(setTimeout(pista, 103715.34));
    timeouts.push(setTimeout(red, 103715.34));
    timeouts.push(setTimeout(orange, 103822.49));
    timeouts.push(setTimeout(orange, 103929.62));
    timeouts.push(setTimeout(orange, 104036.75));

    timeouts.push(setTimeout(pista, 104143.92));
    timeouts.push(setTimeout(yellow, 104143.92));

    //241

    timeouts.push(setTimeout(pista, 104572.50)); // 1.3.3
    timeouts.push(setTimeout(orange, 104572.50));

    timeouts.push(setTimeout(pista, 105001.08));
    timeouts.push(setTimeout(red, 105001.08));
    timeouts.push(setTimeout(orange, 105215.36));
    timeouts.push(setTimeout(orange, 105322.49));

    timeouts.push(setTimeout(pista, 105429.66));
    timeouts.push(setTimeout(red, 105429.66));
    timeouts.push(setTimeout(orange, 105643.94));
    timeouts.push(setTimeout(orange, 105751.07));

    timeouts.push(setTimeout(pista, 105858.23));
    timeouts.push(setTimeout(red, 105858.23));

    //245

    timeouts.push(setTimeout(pista, 106286.81));
    timeouts.push(setTimeout(red, 106286.81));
    timeouts.push(setTimeout(orange, 106393.96));
    timeouts.push(setTimeout(orange, 106501.09));
    timeouts.push(setTimeout(orange, 106608.22));

    timeouts.push(setTimeout(pista, 106715.39));
    timeouts.push(setTimeout(red, 106715.39));
    timeouts.push(setTimeout(orange, 106822.54));
    timeouts.push(setTimeout(orange, 107036.80));

    timeouts.push(setTimeout(pista, 107143.97));
    timeouts.push(setTimeout(red, 107143.97));
    timeouts.push(setTimeout(orange, 107251.11));
    timeouts.push(setTimeout(orange, 107358.25));
    timeouts.push(setTimeout(orange, 107465.38));

    timeouts.push(setTimeout(pista, 107572.55));
    timeouts.push(setTimeout(red, 107572.55));
    timeouts.push(setTimeout(orange, 107679.69));
    timeouts.push(setTimeout(orange, 107786.83));

    //249

    timeouts.push(setTimeout(pista, 108001.13)); // 1.3.4
    timeouts.push(setTimeout(red, 108001.13));
    timeouts.push(setTimeout(red, 108322.53));

    timeouts.push(setTimeout(pista, 108429.70));

    timeouts.push(setTimeout(pista, 108858.28));
    timeouts.push(setTimeout(red, 108858.28));
    timeouts.push(setTimeout(red, 109179.69));

    timeouts.push(setTimeout(pista, 109286.86));

    //253

    timeouts.push(setTimeout(pista, 109715.44));
    timeouts.push(setTimeout(red, 109715.44));
    timeouts.push(setTimeout(red, 110036.85));

    timeouts.push(setTimeout(pista, 110144.02));
    timeouts.push(setTimeout(red, 110465.42));

    timeouts.push(setTimeout(pista, 110572.59));
    timeouts.push(setTimeout(red, 110572.59));
    timeouts.push(setTimeout(red, 110679.74));
    timeouts.push(setTimeout(red, 110894.00));

    timeouts.push(setTimeout(pista, 111001.17));
    timeouts.push(setTimeout(red, 111001.17));
    timeouts.push(setTimeout(red, 111215.45));

    //257

    timeouts.push(setTimeout(pista, 111429.75)); // 1.3.5
    timeouts.push(setTimeout(orange, 111429.75));

    timeouts.push(setTimeout(pista, 111858.33));
    timeouts.push(setTimeout(red, 111858.33));
    timeouts.push(setTimeout(orange, 112072.61));
    timeouts.push(setTimeout(orange, 112179.74));

    timeouts.push(setTimeout(pista, 112286.91));
    timeouts.push(setTimeout(red, 112286.91));
    timeouts.push(setTimeout(orange, 112501.19));
    timeouts.push(setTimeout(orange, 112608.32));

    timeouts.push(setTimeout(pista, 112715.48));
    timeouts.push(setTimeout(red, 112715.48));

    //261

    timeouts.push(setTimeout(pista, 113144.06));
    timeouts.push(setTimeout(red, 113144.06));
    timeouts.push(setTimeout(orange, 113251.21));
    timeouts.push(setTimeout(orange, 113358.34));
    timeouts.push(setTimeout(orange, 113465.47));

    timeouts.push(setTimeout(pista, 113572.64));
    timeouts.push(setTimeout(red, 113572.64));
    timeouts.push(setTimeout(orange, 113679.79));
    timeouts.push(setTimeout(orange, 113894.05));

    timeouts.push(setTimeout(pista, 114001.22));
    timeouts.push(setTimeout(red, 114001.22));
    timeouts.push(setTimeout(orange, 114108.36));
    timeouts.push(setTimeout(orange, 114215.50));
    timeouts.push(setTimeout(orange, 114322.63));

    timeouts.push(setTimeout(pista, 114429.80));
    timeouts.push(setTimeout(red, 114429.80));
    timeouts.push(setTimeout(orange, 114536.94));
    timeouts.push(setTimeout(orange, 114644.08));

    //265

    timeouts.push(setTimeout(pista, 114858.38)); //1.3.6
    timeouts.push(setTimeout(red, 114858.38));
    timeouts.push(setTimeout(orange, 115072.66));
    timeouts.push(setTimeout(orange, 115179.78));

    timeouts.push(setTimeout(pista, 115286.95));
    timeouts.push(setTimeout(red, 115286.95));
    timeouts.push(setTimeout(orange, 115501.23));
    timeouts.push(setTimeout(orange, 115608.36));

    timeouts.push(setTimeout(pista, 115715.53));
    timeouts.push(setTimeout(red, 115715.53));
    timeouts.push(setTimeout(orange, 115929.81));
    timeouts.push(setTimeout(orange, 116036.94));

    timeouts.push(setTimeout(pista, 116144.11));
    timeouts.push(setTimeout(red, 116144.11));

    //269

    timeouts.push(setTimeout(pista, 116572.69));
    timeouts.push(setTimeout(red, 116572.69));
    timeouts.push(setTimeout(orange, 116679.83));
    timeouts.push(setTimeout(orange, 116786.97));
    timeouts.push(setTimeout(orange, 116894.10));

    timeouts.push(setTimeout(pista, 117001.27));
    timeouts.push(setTimeout(red, 117001.27));
    timeouts.push(setTimeout(orange, 117108.41));
    timeouts.push(setTimeout(orange, 117322.67));

    timeouts.push(setTimeout(pista, 117429.84));
    timeouts.push(setTimeout(red, 117429.84));
    timeouts.push(setTimeout(orange, 117536.99));
    timeouts.push(setTimeout(orange, 117644.12));
    timeouts.push(setTimeout(orange, 117751.25));

    timeouts.push(setTimeout(pista, 117858.42));
    timeouts.push(setTimeout(yellow, 117858.42));

    //273

    timeouts.push(setTimeout(pista, 118287.00));
    timeouts.push(setTimeout(orange, 118287.00));

    timeouts.push(setTimeout(pista, 118715.58));
    timeouts.push(setTimeout(red, 118715.58));
    timeouts.push(setTimeout(orange, 118929.86));
    timeouts.push(setTimeout(orange, 119036.99));

    timeouts.push(setTimeout(pista, 119144.16));
    timeouts.push(setTimeout(red, 119144.16));
    timeouts.push(setTimeout(orange, 119358.44));
    timeouts.push(setTimeout(orange, 119465.57));

    timeouts.push(setTimeout(pista, 119572.73));
    timeouts.push(setTimeout(red, 119572.73));

    //277

    timeouts.push(setTimeout(pista, 120001.31));
    timeouts.push(setTimeout(red, 120001.31));
    timeouts.push(setTimeout(orange, 120108.46));
    timeouts.push(setTimeout(orange, 120215.59));
    timeouts.push(setTimeout(orange, 120322.72));

    timeouts.push(setTimeout(pista, 120429.89));
    timeouts.push(setTimeout(red, 120429.89));
    timeouts.push(setTimeout(orange, 120537.04));
    timeouts.push(setTimeout(orange, 120751.30));

    timeouts.push(setTimeout(pista, 120858.47));
    timeouts.push(setTimeout(red, 120858.47));
    timeouts.push(setTimeout(orange, 120965.61));
    timeouts.push(setTimeout(orange, 121072.75));
    timeouts.push(setTimeout(orange, 121179.88));

    timeouts.push(setTimeout(pista, 121287.05));
    timeouts.push(setTimeout(red, 121287.05));
    timeouts.push(setTimeout(orange, 121394.19));
    timeouts.push(setTimeout(orange, 121501.33));

    //281

    timeouts.push(setTimeout(pista, 121715.63));
    timeouts.push(setTimeout(red, 121715.63));
    timeouts.push(setTimeout(red, 121822.77));
    timeouts.push(setTimeout(red, 122037.03));

    timeouts.push(setTimeout(pista, 122144.20));
    timeouts.push(setTimeout(red, 122144.20));
    timeouts.push(setTimeout(red, 122251.35));
    timeouts.push(setTimeout(red, 122465.61));

    timeouts.push(setTimeout(pista, 122572.78));
    timeouts.push(setTimeout(red, 122572.78));
    timeouts.push(setTimeout(red, 122679.93));
    timeouts.push(setTimeout(red, 122894.19));

    timeouts.push(setTimeout(pista, 123001.36));
    timeouts.push(setTimeout(red, 123001.36));
    timeouts.push(setTimeout(red, 123108.50));
    timeouts.push(setTimeout(red, 123322.77));

    //285

    timeouts.push(setTimeout(pista, 123429.94));
    timeouts.push(setTimeout(red, 123429.94));
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
    timeouts.push(setTimeout(red, 125144.25));
    timeouts.push(setTimeout(orange, 125251.40));
    timeouts.push(setTimeout(orange, 125358.53));
    timeouts.push(setTimeout(orange, 125465.66));

    timeouts.push(setTimeout(pista, 125572.83));
    timeouts.push(setTimeout(red, 125572.83));
    timeouts.push(setTimeout(orange, 125787.11));
    timeouts.push(setTimeout(orange, 125894.24));

    timeouts.push(setTimeout(pista, 126001.41));
    timeouts.push(setTimeout(red, 126001.41));
    timeouts.push(setTimeout(orange, 126215.69));
    timeouts.push(setTimeout(orange, 126322.82));

    timeouts.push(setTimeout(pista, 126429.98));
    timeouts.push(setTimeout(yellow, 126429.98));

    //293

    timeouts.push(setTimeout(pista, 126858.56));
    timeouts.push(setTimeout(red, 126858.56));
    timeouts.push(setTimeout(orange, 126965.71));
    timeouts.push(setTimeout(orange, 127072.84));
    timeouts.push(setTimeout(orange, 127179.97));

    timeouts.push(setTimeout(pista, 127287.14));
    timeouts.push(setTimeout(red, 127287.14));
    timeouts.push(setTimeout(orange, 127394.29));
    timeouts.push(setTimeout(orange, 127608.55));

    timeouts.push(setTimeout(pista, 127715.72));
    timeouts.push(setTimeout(red, 127715.72));
    timeouts.push(setTimeout(orange, 127822.86));
    timeouts.push(setTimeout(orange, 127930.00));
    timeouts.push(setTimeout(orange, 128037.13));

    timeouts.push(setTimeout(pista, 128144.30));
    timeouts.push(setTimeout(red, 128144.30));
    timeouts.push(setTimeout(orange, 128251.44));
    timeouts.push(setTimeout(orange, 128358.58));

    //297

    timeouts.push(setTimeout(pista, 128572.88)); // 1.5.2
    timeouts.push(setTimeout(red, 128572.88));
    timeouts.push(setTimeout(orange, 128680.02));
    timeouts.push(setTimeout(orange, 128787.16));
    timeouts.push(setTimeout(orange, 128894.28));

    timeouts.push(setTimeout(pista, 129001.45));
    timeouts.push(setTimeout(red, 129001.45));
    timeouts.push(setTimeout(orange, 129215.73));
    timeouts.push(setTimeout(orange, 129322.86));

    timeouts.push(setTimeout(pista, 129430.03));
    timeouts.push(setTimeout(red, 129430.03));
    timeouts.push(setTimeout(orange, 129644.31));
    timeouts.push(setTimeout(orange, 129751.44));

    timeouts.push(setTimeout(pista, 129858.61));
    timeouts.push(setTimeout(yellow, 129858.61));

    //301

    timeouts.push(setTimeout(pista, 130287.19));
    timeouts.push(setTimeout(red, 130287.19));
    timeouts.push(setTimeout(orange, 130394.33));
    timeouts.push(setTimeout(orange, 130501.47));
    timeouts.push(setTimeout(orange, 130608.60));

    timeouts.push(setTimeout(pista, 130715.77));
    timeouts.push(setTimeout(red, 130715.77));
    timeouts.push(setTimeout(orange, 130822.91));
    timeouts.push(setTimeout(orange, 131037.17));

    timeouts.push(setTimeout(pista, 131144.34));
    timeouts.push(setTimeout(red, 131144.34));
    timeouts.push(setTimeout(orange, 131251.49));
    timeouts.push(setTimeout(orange, 131358.62));
    timeouts.push(setTimeout(orange, 131465.75));

    timeouts.push(setTimeout(pista, 131572.92));
    timeouts.push(setTimeout(green, 131572.92));

    //305

    timeouts.push(setTimeout(pista, 132001.50)); // 1.5.3
    timeouts.push(setTimeout(red, 132001.50));
    timeouts.push(setTimeout(orange, 132108.64));
    timeouts.push(setTimeout(orange, 132215.78));
    timeouts.push(setTimeout(orange, 132322.91));

    timeouts.push(setTimeout(pista, 132430.08));
    timeouts.push(setTimeout(red, 132430.08));
    timeouts.push(setTimeout(orange, 132644.36));
    timeouts.push(setTimeout(orange, 132751.49));

    timeouts.push(setTimeout(pista, 132858.66));
    timeouts.push(setTimeout(red, 132858.66));
    timeouts.push(setTimeout(orange, 133072.94));
    timeouts.push(setTimeout(orange, 133180.07));

    timeouts.push(setTimeout(pista, 133287.23));
    timeouts.push(setTimeout(yellow, 133287.23));

    //309

    timeouts.push(setTimeout(pista, 133715.81));
    timeouts.push(setTimeout(red, 133715.81));
    timeouts.push(setTimeout(orange, 133822.96));
    timeouts.push(setTimeout(orange, 133930.09));
    timeouts.push(setTimeout(orange, 134037.22));

    timeouts.push(setTimeout(pista, 134144.39));
    timeouts.push(setTimeout(red, 134144.39));
    timeouts.push(setTimeout(orange, 134251.54));
    timeouts.push(setTimeout(orange, 134465.80));

    timeouts.push(setTimeout(pista, 134572.97));
    timeouts.push(setTimeout(red, 134572.97));
    timeouts.push(setTimeout(orange, 134680.11));
    timeouts.push(setTimeout(orange, 134787.25));
    timeouts.push(setTimeout(orange, 134894.38));

    timeouts.push(setTimeout(pista, 135001.55));
    timeouts.push(setTimeout(red, 135001.55));
    timeouts.push(setTimeout(orange, 135108.69));
    timeouts.push(setTimeout(orange, 135215.83));

    //313

    timeouts.push(setTimeout(pista, 135430.13)); // 1.5.4
    timeouts.push(setTimeout(red, 135430.13));
    timeouts.push(setTimeout(orange, 135537.27));
    timeouts.push(setTimeout(orange, 135644.41));
    timeouts.push(setTimeout(orange, 135751.53));

    timeouts.push(setTimeout(pista, 135858.70));
    timeouts.push(setTimeout(red, 135858.70));
    timeouts.push(setTimeout(orange, 136072.98));
    timeouts.push(setTimeout(orange, 136180.11));

    timeouts.push(setTimeout(pista, 136287.28));
    timeouts.push(setTimeout(red, 136287.28));
    timeouts.push(setTimeout(orange, 136501.56));
    timeouts.push(setTimeout(orange, 136608.69));

    timeouts.push(setTimeout(pista, 136715.86));
    timeouts.push(setTimeout(yellow, 136715.86));

    //317

    timeouts.push(setTimeout(pista, 137144.44));
    timeouts.push(setTimeout(red, 137144.44));
    timeouts.push(setTimeout(orange, 137251.58));
    timeouts.push(setTimeout(orange, 137358.72));
    timeouts.push(setTimeout(orange, 137465.85));

    timeouts.push(setTimeout(pista, 137573.02));
    timeouts.push(setTimeout(red, 137573.02));
    timeouts.push(setTimeout(red, 137680.16));
    timeouts.push(setTimeout(red, 137894.42));

    timeouts.push(setTimeout(pista, 138001.59));
    timeouts.push(setTimeout(red, 138001.59));
    timeouts.push(setTimeout(red, 138108.74));
    timeouts.push(setTimeout(red, 138323.00));

    timeouts.push(setTimeout(pista, 138430.17));
    timeouts.push(setTimeout(red, 138430.17));
    timeouts.push(setTimeout(red, 138644.45));

    //321

    timeouts.push(setTimeout(pista, 138858.75)); // 1.5.5
    timeouts.push(setTimeout(red, 138858.75));
    timeouts.push(setTimeout(orange, 138965.89));
    timeouts.push(setTimeout(orange, 139073.03));
    timeouts.push(setTimeout(orange, 139180.16));

    timeouts.push(setTimeout(pista, 139287.33));
    timeouts.push(setTimeout(red, 139287.33));
    timeouts.push(setTimeout(orange, 139501.61));
    timeouts.push(setTimeout(orange, 139608.74));

    timeouts.push(setTimeout(pista, 139715.91));
    timeouts.push(setTimeout(red, 139715.91));
    timeouts.push(setTimeout(orange, 139930.19));
    timeouts.push(setTimeout(orange, 140037.32));

    timeouts.push(setTimeout(pista, 140144.48));
    timeouts.push(setTimeout(yellow, 140144.48));

    //325

    timeouts.push(setTimeout(pista, 140573.06));
    timeouts.push(setTimeout(red, 140573.06));
    timeouts.push(setTimeout(orange, 140680.21));
    timeouts.push(setTimeout(orange, 140787.34));
    timeouts.push(setTimeout(orange, 140894.47));

    timeouts.push(setTimeout(pista, 141001.64));
    timeouts.push(setTimeout(red, 141001.64));
    timeouts.push(setTimeout(orange, 141108.79));
    timeouts.push(setTimeout(orange, 141323.05));

    timeouts.push(setTimeout(pista, 141430.22));
    timeouts.push(setTimeout(red, 141430.22));
    timeouts.push(setTimeout(orange, 141537.36));
    timeouts.push(setTimeout(orange, 141644.50));
    timeouts.push(setTimeout(orange, 141751.63));

    timeouts.push(setTimeout(pista, 141858.80));
    timeouts.push(setTimeout(red, 141858.80));
    timeouts.push(setTimeout(orange, 141965.94));
    timeouts.push(setTimeout(orange, 142073.08));

    //329

    timeouts.push(setTimeout(pista, 142287.38)); // 1.5.6
    timeouts.push(setTimeout(red, 142287.38));
    timeouts.push(setTimeout(orange, 142394.52));
    timeouts.push(setTimeout(orange, 142501.66));
    timeouts.push(setTimeout(orange, 142608.78));

    timeouts.push(setTimeout(pista, 142715.95));
    timeouts.push(setTimeout(red, 142715.95));
    timeouts.push(setTimeout(orange, 142930.23));
    timeouts.push(setTimeout(orange, 143037.36));

    timeouts.push(setTimeout(pista, 143144.53));
    timeouts.push(setTimeout(red, 143144.53));
    timeouts.push(setTimeout(orange, 143358.81));
    timeouts.push(setTimeout(orange, 143465.94));

    timeouts.push(setTimeout(pista, 143573.11));
    timeouts.push(setTimeout(yellow, 143573.11));

    //333

    timeouts.push(setTimeout(pista, 144001.69));
    timeouts.push(setTimeout(red, 144001.69));
    timeouts.push(setTimeout(orange, 144108.83));
    timeouts.push(setTimeout(orange, 144215.97));
    timeouts.push(setTimeout(orange, 144323.10));

    timeouts.push(setTimeout(pista, 144430.27));
    timeouts.push(setTimeout(red, 144430.27));
    timeouts.push(setTimeout(orange, 144537.41));
    timeouts.push(setTimeout(orange, 144751.67));

    timeouts.push(setTimeout(pista, 144858.84));
    timeouts.push(setTimeout(red, 144858.84));
    timeouts.push(setTimeout(orange, 144965.99));
    timeouts.push(setTimeout(orange, 145073.12));
    timeouts.push(setTimeout(orange, 145180.25));

    timeouts.push(setTimeout(pista, 145287.42));
    timeouts.push(setTimeout(green, 145287.42));

    //337

    timeouts.push(setTimeout(pista, 145716.00)); // 1.5.7
    timeouts.push(setTimeout(red, 145716.00));
    timeouts.push(setTimeout(orange, 145823.14));
    timeouts.push(setTimeout(orange, 145930.28));
    timeouts.push(setTimeout(orange, 146037.41));

    timeouts.push(setTimeout(pista, 146144.58));
    timeouts.push(setTimeout(red, 146144.58));
    timeouts.push(setTimeout(orange, 146358.86));
    timeouts.push(setTimeout(orange, 146465.99));

    timeouts.push(setTimeout(pista, 146573.16));
    timeouts.push(setTimeout(red, 146573.16));
    timeouts.push(setTimeout(orange, 146787.44));
    timeouts.push(setTimeout(orange, 146894.57));

    timeouts.push(setTimeout(pista, 147001.73));
    timeouts.push(setTimeout(yellow, 147001.73));

    //341

    timeouts.push(setTimeout(pista, 147430.31));
    timeouts.push(setTimeout(red, 147430.31));
    timeouts.push(setTimeout(orange, 147537.46));
    timeouts.push(setTimeout(orange, 147644.59));
    timeouts.push(setTimeout(orange, 147751.72));

    timeouts.push(setTimeout(pista, 147858.89));
    timeouts.push(setTimeout(red, 147858.89));
    timeouts.push(setTimeout(orange, 147966.04));
    timeouts.push(setTimeout(orange, 148180.30));

    timeouts.push(setTimeout(pista, 148287.47));
    timeouts.push(setTimeout(red, 148287.47));
    timeouts.push(setTimeout(orange, 148394.61));
    timeouts.push(setTimeout(orange, 148501.75));
    timeouts.push(setTimeout(orange, 148608.88));

    timeouts.push(setTimeout(pista, 148716.05));
    timeouts.push(setTimeout(red, 148716.05));
    timeouts.push(setTimeout(orange, 148823.19));
    timeouts.push(setTimeout(orange, 148930.33));

    //345

    timeouts.push(setTimeout(pista, 149144.63)); // 1.5.8
    timeouts.push(setTimeout(red, 149144.63));
    timeouts.push(setTimeout(orange, 149251.77));
    timeouts.push(setTimeout(orange, 149358.91));
    timeouts.push(setTimeout(orange, 149466.03));

    timeouts.push(setTimeout(pista, 149573.20));
    timeouts.push(setTimeout(red, 149573.20));
    timeouts.push(setTimeout(orange, 149787.48));
    timeouts.push(setTimeout(orange, 149894.61));

    timeouts.push(setTimeout(pista, 150001.78));
    timeouts.push(setTimeout(red, 150001.78));
    timeouts.push(setTimeout(orange, 150216.06));
    timeouts.push(setTimeout(orange, 150323.19));

    timeouts.push(setTimeout(pista, 150430.36));
    timeouts.push(setTimeout(yellow, 150430.36));

    //349

    timeouts.push(setTimeout(pista, 150858.94));
    timeouts.push(setTimeout(red, 150858.94));

    timeouts.push(setTimeout(pista, 151287.52));
    timeouts.push(setTimeout(red, 151287.52));

    timeouts.push(setTimeout(pista, 151716.09));
    timeouts.push(setTimeout(red, 151716.09));

    timeouts.push(setTimeout(pista, 152144.67));
    timeouts.push(setTimeout(red, 152144.67));

    //353

    timeouts.push(setTimeout(pista, 152573.25)); // break
    timeouts.push(setTimeout(green, 152573.25));

    timeouts.push(setTimeout(pista, 153001.83));

    timeouts.push(setTimeout(pista, 153430.41));

    timeouts.push(setTimeout(pista, 153858.98));

    //357

    timeouts.push(setTimeout(pista, 154287.56));

    timeouts.push(setTimeout(pista, 154716.14));

    timeouts.push(setTimeout(pista, 155144.72));
    timeouts.push(setTimeout(yellow, 155144.72));

    timeouts.push(setTimeout(pista, 155573.30));

    //361

    timeouts.push(setTimeout(pista, 156001.88)); // 2
    timeouts.push(setTimeout(green, 156001.88));

    timeouts.push(setTimeout(pista, 156430.45));

    timeouts.push(setTimeout(pista, 156859.03));

    timeouts.push(setTimeout(pista, 157287.61));

    //365

    timeouts.push(setTimeout(pista, 157716.19));

    timeouts.push(setTimeout(pista, 158144.77));

    timeouts.push(setTimeout(pista, 158573.34));
    timeouts.push(setTimeout(yellow, 158573.34));

    timeouts.push(setTimeout(pista, 159001.92));

    //369

    timeouts.push(setTimeout(pista, 159430.50)); // 3
    timeouts.push(setTimeout(green, 159430.50));

    timeouts.push(setTimeout(pista, 159859.08));

    timeouts.push(setTimeout(pista, 160287.66));

    timeouts.push(setTimeout(pista, 160716.23));

    //373

    timeouts.push(setTimeout(pista, 161144.81));

    timeouts.push(setTimeout(pista, 161573.39));

    timeouts.push(setTimeout(pista, 162001.97));
    timeouts.push(setTimeout(yellow, 162001.97));

    timeouts.push(setTimeout(pista, 162430.55));

    //377

    timeouts.push(setTimeout(pista, 162859.13)); // 4
    timeouts.push(setTimeout(green, 162859.13));

    timeouts.push(setTimeout(pista, 163287.70));

    timeouts.push(setTimeout(pista, 163716.28));

    timeouts.push(setTimeout(pista, 164144.86));

    //381

    timeouts.push(setTimeout(pista, 164573.44));

    timeouts.push(setTimeout(pista, 165002.02));

    timeouts.push(setTimeout(pista, 165430.59));
    timeouts.push(setTimeout(yellow, 165430.59));

    timeouts.push(setTimeout(pista, 165859.17));

    //385

    timeouts.push(setTimeout(pista, 166287.75)); // forró
    timeouts.push(setTimeout(green, 166287.75));
    timeouts.push(setTimeout(green, 166609.16));

    timeouts.push(setTimeout(pista, 166716.33));
    timeouts.push(setTimeout(green, 166716.33));
    timeouts.push(setTimeout(yellow, 166930.61));

    timeouts.push(setTimeout(pista, 167144.91));
    timeouts.push(setTimeout(green, 167144.91));
    timeouts.push(setTimeout(green, 167466.32));

    timeouts.push(setTimeout(pista, 167573.48));
    timeouts.push(setTimeout(green, 167573.48));
    timeouts.push(setTimeout(yellow, 167787.76));

    //389

    timeouts.push(setTimeout(pista, 168002.06)); // 2
    timeouts.push(setTimeout(green, 168002.06));
    timeouts.push(setTimeout(green, 168323.47));

    timeouts.push(setTimeout(pista, 168430.64));
    timeouts.push(setTimeout(green, 168430.64));
    timeouts.push(setTimeout(yellow, 168644.92));

    timeouts.push(setTimeout(pista, 168859.22));
    timeouts.push(setTimeout(green, 168859.22));
    timeouts.push(setTimeout(green, 169180.63));

    timeouts.push(setTimeout(pista, 169287.80));
    timeouts.push(setTimeout(green, 169287.80));
    timeouts.push(setTimeout(yellow, 169502.08));

    //393

    timeouts.push(setTimeout(pista, 169716.38)); // 3
    timeouts.push(setTimeout(green, 169716.38));
    timeouts.push(setTimeout(green, 170037.78));

    timeouts.push(setTimeout(pista, 170144.95));
    timeouts.push(setTimeout(green, 170144.95));
    timeouts.push(setTimeout(yellow, 170359.23));

    timeouts.push(setTimeout(pista, 170573.53));
    timeouts.push(setTimeout(green, 170573.53));
    timeouts.push(setTimeout(green, 170894.94));

    timeouts.push(setTimeout(pista, 171002.11));
    timeouts.push(setTimeout(green, 171002.11));
    timeouts.push(setTimeout(yellow, 171216.39));

    //397

    timeouts.push(setTimeout(pista, 171430.69)); // 4
    timeouts.push(setTimeout(green, 171430.69));
    timeouts.push(setTimeout(green, 171752.10));

    timeouts.push(setTimeout(pista, 171859.27));
    timeouts.push(setTimeout(green, 171859.27));
    timeouts.push(setTimeout(red, 172073.55));

    timeouts.push(setTimeout(pista, 172287.84));
    timeouts.push(setTimeout(green, 172609.25));

    timeouts.push(setTimeout(pista, 172716.42));
    timeouts.push(setTimeout(yellow, 172716.42));
    timeouts.push(setTimeout(yellow, 172823.57));
    timeouts.push(setTimeout(yellow, 173037.83));

    //401

    timeouts.push(setTimeout(pista, 173145.00));  // 5
    timeouts.push(setTimeout(green, 173145.00));
    timeouts.push(setTimeout(green, 173466.41));

    timeouts.push(setTimeout(pista, 173573.58));
    timeouts.push(setTimeout(green, 173573.58));
    timeouts.push(setTimeout(yellow, 173787.86));

    timeouts.push(setTimeout(pista, 174002.16));
    timeouts.push(setTimeout(green, 174002.16));
    timeouts.push(setTimeout(green, 174323.57));

    timeouts.push(setTimeout(pista, 174430.73));
    timeouts.push(setTimeout(green, 174430.73));
    timeouts.push(setTimeout(yellow, 174645.01));

    //405

    timeouts.push(setTimeout(pista, 174859.31)); // 6
    timeouts.push(setTimeout(green, 174859.31));
    timeouts.push(setTimeout(green, 175180.72));

    timeouts.push(setTimeout(pista, 175287.89));
    timeouts.push(setTimeout(green, 175287.89));
    timeouts.push(setTimeout(yellow, 175502.17));

    timeouts.push(setTimeout(pista, 175716.47));
    timeouts.push(setTimeout(green, 175716.47));
    timeouts.push(setTimeout(green, 176037.88));

    timeouts.push(setTimeout(pista, 176145.05));
    timeouts.push(setTimeout(green, 176145.05));
    timeouts.push(setTimeout(yellow, 176359.33));

    //409

    timeouts.push(setTimeout(pista, 176573.63)); // 7
    timeouts.push(setTimeout(red, 176573.63));
    timeouts.push(setTimeout(blue, 176573.63));

    timeouts.push(setTimeout(pista, 177002.20));
    timeouts.push(setTimeout(green, 177002.20));

    timeouts.push(setTimeout(pista, 177430.78));
    timeouts.push(setTimeout(yellow, 177430.78));
    timeouts.push(setTimeout(orange, 177645.06));

    timeouts.push(setTimeout(pista, 177859.36));
    timeouts.push(setTimeout(green, 177859.36));

    //413

    timeouts.push(setTimeout(pista, 178287.94)); //8
    timeouts.push(setTimeout(yellow, 178287.94));

    timeouts.push(setTimeout(pista, 178716.52));
    timeouts.push(setTimeout(orange, 178716.52));

    timeouts.push(setTimeout(pista, 179145.09));
    timeouts.push(setTimeout(red, 179145.09));
    timeouts.push(setTimeout(yellow, 179359.37));

    timeouts.push(setTimeout(pista, 179573.67));
    timeouts.push(setTimeout(orange, 179573.67));

    //417

    timeouts.push(setTimeout(pista, 180002.25)); // 9
    timeouts.push(setTimeout(blue, 180002.25));
    timeouts.push(setTimeout(yellow, 180216.53));

    timeouts.push(setTimeout(pista, 180430.83));
    timeouts.push(setTimeout(green, 180430.83));
    timeouts.push(setTimeout(orange, 180645.11));

    timeouts.push(setTimeout(pista, 180859.41));
    timeouts.push(setTimeout(yellow, 180859.41));
    timeouts.push(setTimeout(red, 181073.69));

    timeouts.push(setTimeout(pista, 181287.98));
    timeouts.push(setTimeout(orange, 181287.98));

    //421

    timeouts.push(setTimeout(pista, 181716.56)); // 10
    timeouts.push(setTimeout(blue, 181716.56));
    timeouts.push(setTimeout(yellow, 181930.84));

    timeouts.push(setTimeout(pista, 182145.14));
    timeouts.push(setTimeout(green, 182145.14));

    timeouts.push(setTimeout(pista, 182573.72));
    timeouts.push(setTimeout(orange, 182573.72));
    timeouts.push(setTimeout(yellow, 182788.00));

    timeouts.push(setTimeout(pista, 183002.30));
    timeouts.push(setTimeout(red, 183002.30));

    //425

    timeouts.push(setTimeout(pista, 183430.88)); // 11
    timeouts.push(setTimeout(blue, 183430.88));
    timeouts.push(setTimeout(green, 183538.02));
    timeouts.push(setTimeout(yellow, 183645.16));
    timeouts.push(setTimeout(orange, 183752.28));

    timeouts.push(setTimeout(pista, 183859.45));
    timeouts.push(setTimeout(red, 183859.45));
    timeouts.push(setTimeout(blue, 183966.60));
    timeouts.push(setTimeout(green, 184073.73));
    timeouts.push(setTimeout(yellow, 184180.86));

    timeouts.push(setTimeout(pista, 184288.03));
    timeouts.push(setTimeout(orange, 184288.03));
    timeouts.push(setTimeout(red, 184395.18));
    timeouts.push(setTimeout(blue, 184502.31));
    timeouts.push(setTimeout(green, 184609.44));

    timeouts.push(setTimeout(pista, 184716.61));
    timeouts.push(setTimeout(yellow, 184716.61));
    timeouts.push(setTimeout(orange, 184823.75));
    timeouts.push(setTimeout(red, 184930.89));
    timeouts.push(setTimeout(blue, 185038.02));

    //429

    timeouts.push(setTimeout(pista, 185145.19)); // 12
    timeouts.push(setTimeout(green, 185145.19));
    timeouts.push(setTimeout(yellow, 185252.33));
    timeouts.push(setTimeout(orange, 185359.47));
    timeouts.push(setTimeout(red, 185466.60));

    timeouts.push(setTimeout(pista, 185573.77));
    timeouts.push(setTimeout(blue, 185573.77));
    timeouts.push(setTimeout(green, 185680.91));
    timeouts.push(setTimeout(yellow, 185788.05));
    timeouts.push(setTimeout(orange, 185895.17));

    timeouts.push(setTimeout(pista, 186002.34));
    timeouts.push(setTimeout(red, 186002.34));
    timeouts.push(setTimeout(blue, 186109.49));
    timeouts.push(setTimeout(green, 186216.62));
    timeouts.push(setTimeout(yellow, 186323.75));

    timeouts.push(setTimeout(pista, 186430.92));
    timeouts.push(setTimeout(orange, 186430.92));
    timeouts.push(setTimeout(red, 186538.07));

    //433

    timeouts.push(setTimeout(pista, 186859.50)); // 13

    timeouts.push(setTimeout(pista, 187288.08));

    timeouts.push(setTimeout(pista, 187716.66));

    timeouts.push(setTimeout(pista, 188145.23));

    //437

    timeouts.push(setTimeout(pista, 188573.81)); // 14

    timeouts.push(setTimeout(pista, 189002.39));

    timeouts.push(setTimeout(pista, 189430.97));

    timeouts.push(setTimeout(pista, 189859.55));

    //441

    timeouts.push(setTimeout(pista, 190288.13)); // oração

    timeouts.push(setTimeout(pista, 190716.70));

    timeouts.push(setTimeout(pista, 191145.28));

    timeouts.push(setTimeout(pista, 191573.86));

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
    timeouts.push(setTimeout(red, 200574.00));
    timeouts.push(setTimeout(orange, 200681.14));

    timeouts.push(setTimeout(pista, 201002.58));
    timeouts.push(setTimeout(red, 201002.58));
    timeouts.push(setTimeout(orange, 201109.72));


    timeouts.push(setTimeout(pista, 201431.16));
    timeouts.push(setTimeout(red, 201431.16));
    timeouts.push(setTimeout(orange, 201538.30));

    timeouts.push(setTimeout(pista, 201859.73));
    timeouts.push(setTimeout(red, 201859.73));
    timeouts.push(setTimeout(orange, 201966.88));

    //469

    timeouts.push(setTimeout(pista, 202288.31)); // 2
    timeouts.push(setTimeout(red, 202288.31));
    timeouts.push(setTimeout(orange, 202395.46));

    timeouts.push(setTimeout(pista, 202716.89));
    timeouts.push(setTimeout(red, 202716.89));
    timeouts.push(setTimeout(orange, 202824.04));

    timeouts.push(setTimeout(pista, 203145.47));
    timeouts.push(setTimeout(red, 203145.47));
    timeouts.push(setTimeout(orange, 203252.61));

    timeouts.push(setTimeout(pista, 203574.05));
    timeouts.push(setTimeout(red, 203574.05));
    timeouts.push(setTimeout(orange, 203681.19));

    //473

    timeouts.push(setTimeout(pista, 204002.63)); // 3
    timeouts.push(setTimeout(red, 204002.63));
    timeouts.push(setTimeout(orange, 204109.77));

    timeouts.push(setTimeout(pista, 204431.20));
    timeouts.push(setTimeout(red, 204431.20));
    timeouts.push(setTimeout(orange, 204538.35));

    timeouts.push(setTimeout(pista, 204859.78));
    timeouts.push(setTimeout(red, 204859.78));
    timeouts.push(setTimeout(orange, 204966.93));

    timeouts.push(setTimeout(pista, 205288.36));
    timeouts.push(setTimeout(red, 205288.36));
    timeouts.push(setTimeout(orange, 205395.50));

    //477

    timeouts.push(setTimeout(pista, 205716.94)); // 4
    timeouts.push(setTimeout(red, 205716.94));
    timeouts.push(setTimeout(orange, 205824.08));

    timeouts.push(setTimeout(pista, 206145.52));
    timeouts.push(setTimeout(red, 206145.52));
    timeouts.push(setTimeout(orange, 206252.66));

    timeouts.push(setTimeout(pista, 206574.09));
    timeouts.push(setTimeout(red, 206574.09));

    timeouts.push(setTimeout(pista, 207002.67));

    //481

    timeouts.push(setTimeout(pista, 207431.25)); // 5
    timeouts.push(setTimeout(red, 207431.25));
    timeouts.push(setTimeout(orange, 207538.39));

    timeouts.push(setTimeout(pista, 207859.83));
    timeouts.push(setTimeout(red, 207859.83));
    timeouts.push(setTimeout(orange, 207966.97));

    timeouts.push(setTimeout(pista, 208288.41));
    timeouts.push(setTimeout(red, 208288.41));
    timeouts.push(setTimeout(orange, 208395.55));

    timeouts.push(setTimeout(pista, 208716.98));
    timeouts.push(setTimeout(red, 208716.98));
    timeouts.push(setTimeout(orange, 208824.13));

    //485

    timeouts.push(setTimeout(pista, 209145.56)); // 6
    timeouts.push(setTimeout(red, 209145.56));
    timeouts.push(setTimeout(orange, 209252.71));

    timeouts.push(setTimeout(pista, 209574.14));
    timeouts.push(setTimeout(red, 209574.14));
    timeouts.push(setTimeout(orange, 209681.29));

    timeouts.push(setTimeout(pista, 210002.72));
    timeouts.push(setTimeout(red, 210002.72));
    timeouts.push(setTimeout(orange, 210109.86));

    timeouts.push(setTimeout(pista, 210431.30));
    timeouts.push(setTimeout(red, 210431.30));
    timeouts.push(setTimeout(orange, 210538.44));

    //489

    timeouts.push(setTimeout(pista, 210859.88)); // 7
    timeouts.push(setTimeout(red, 210859.88));
    timeouts.push(setTimeout(orange, 210967.02));

    timeouts.push(setTimeout(pista, 211288.45));
    timeouts.push(setTimeout(red, 211288.45));
    timeouts.push(setTimeout(orange, 211395.60));

    timeouts.push(setTimeout(pista, 211717.03));
    timeouts.push(setTimeout(red, 211717.03));
    timeouts.push(setTimeout(orange, 211824.18));

    timeouts.push(setTimeout(pista, 212145.61));
    timeouts.push(setTimeout(red, 212145.61));
    timeouts.push(setTimeout(orange, 212252.75));

    //493

    timeouts.push(setTimeout(pista, 212574.19)); // 8
    timeouts.push(setTimeout(red, 212574.19));
    timeouts.push(setTimeout(orange, 212681.33));

    timeouts.push(setTimeout(pista, 213002.77));
    timeouts.push(setTimeout(red, 213002.77));
    timeouts.push(setTimeout(orange, 213109.91));

    timeouts.push(setTimeout(pista, 213431.34));
    timeouts.push(setTimeout(red, 213431.34));

    timeouts.push(setTimeout(pista, 213859.92));

    //497

    timeouts.push(setTimeout(pista, 214288.50)); // 9
    timeouts.push(setTimeout(red, 214288.50));
    timeouts.push(setTimeout(orange, 214395.64));

    timeouts.push(setTimeout(pista, 214717.08));
    timeouts.push(setTimeout(red, 214717.08));
    timeouts.push(setTimeout(orange, 214824.22));

    timeouts.push(setTimeout(pista, 215145.66));
    timeouts.push(setTimeout(red, 215145.66));
    timeouts.push(setTimeout(orange, 215252.80));

    timeouts.push(setTimeout(pista, 215574.23));
    timeouts.push(setTimeout(red, 215574.23));
    timeouts.push(setTimeout(orange, 215681.38));

    //501

    timeouts.push(setTimeout(pista, 216002.81)); // 10
    timeouts.push(setTimeout(red, 216002.81));
    timeouts.push(setTimeout(orange, 216109.96));

    timeouts.push(setTimeout(pista, 216431.39));
    timeouts.push(setTimeout(red, 216431.39));
    timeouts.push(setTimeout(orange, 216538.54));

    timeouts.push(setTimeout(pista, 216859.97));
    timeouts.push(setTimeout(red, 216859.97));
    timeouts.push(setTimeout(orange, 216967.11));

    timeouts.push(setTimeout(pista, 217288.55));
    timeouts.push(setTimeout(red, 217288.55));
    timeouts.push(setTimeout(orange, 217395.69));

    //505

    timeouts.push(setTimeout(pista, 217717.13)); // 11
    timeouts.push(setTimeout(red, 217717.13));
    timeouts.push(setTimeout(orange, 217824.27));

    timeouts.push(setTimeout(pista, 218145.70));
    timeouts.push(setTimeout(red, 218145.70));
    timeouts.push(setTimeout(orange, 218252.85));

    timeouts.push(setTimeout(pista, 218574.28));
    timeouts.push(setTimeout(red, 218574.28));
    timeouts.push(setTimeout(orange, 218681.43));

    timeouts.push(setTimeout(pista, 219002.86));
    timeouts.push(setTimeout(red, 219002.86));
    timeouts.push(setTimeout(orange, 219110.00));

    //509

    timeouts.push(setTimeout(pista, 219431.44)); // 12
    timeouts.push(setTimeout(red, 219431.44));
    timeouts.push(setTimeout(orange, 219538.58));

    timeouts.push(setTimeout(pista, 219860.02));
    timeouts.push(setTimeout(red, 219860.02));
    timeouts.push(setTimeout(orange, 219967.16));

    timeouts.push(setTimeout(pista, 220288.59));
    timeouts.push(setTimeout(red, 220288.59));

    timeouts.push(setTimeout(pista, 220717.17));

    //513

    timeouts.push(setTimeout(pista, 221145.75)); // 13
    timeouts.push(setTimeout(red, 221145.75));
    timeouts.push(setTimeout(orange, 221252.89));

    timeouts.push(setTimeout(pista, 221574.33));
    timeouts.push(setTimeout(red, 221574.33));
    timeouts.push(setTimeout(orange, 221681.47));

    timeouts.push(setTimeout(pista, 222002.91));
    timeouts.push(setTimeout(red, 222002.91));
    timeouts.push(setTimeout(orange, 222110.05));

    timeouts.push(setTimeout(pista, 222431.48));
    timeouts.push(setTimeout(red, 222431.48));
    timeouts.push(setTimeout(orange, 222538.63));

    //517

    timeouts.push(setTimeout(pista, 222860.06)); // 14
    timeouts.push(setTimeout(red, 222860.06));
    timeouts.push(setTimeout(orange, 222967.21));

    timeouts.push(setTimeout(pista, 223288.64));
    timeouts.push(setTimeout(red, 223288.64));
    timeouts.push(setTimeout(orange, 223395.79));

    timeouts.push(setTimeout(pista, 223717.22));
    timeouts.push(setTimeout(red, 223717.22));
    timeouts.push(setTimeout(orange, 223824.36));

    timeouts.push(setTimeout(pista, 224145.80));
    timeouts.push(setTimeout(red, 224145.80));
    timeouts.push(setTimeout(orange, 224252.94));

    //521

    timeouts.push(setTimeout(pista, 224574.38)); // 15
    timeouts.push(setTimeout(red, 224574.38));
    timeouts.push(setTimeout(orange, 224681.52));

    timeouts.push(setTimeout(pista, 225002.95));
    timeouts.push(setTimeout(red, 225002.95));
    timeouts.push(setTimeout(orange, 225110.10));

    timeouts.push(setTimeout(pista, 225431.53));
    timeouts.push(setTimeout(red, 225431.53));
    timeouts.push(setTimeout(orange, 225538.68));

    timeouts.push(setTimeout(pista, 225860.11));
    timeouts.push(setTimeout(red, 225860.11));
    timeouts.push(setTimeout(orange, 225967.25));

    //525

    timeouts.push(setTimeout(pista, 226288.69)); // 16
    timeouts.push(setTimeout(red, 226288.69));
    timeouts.push(setTimeout(orange, 226395.83));

    timeouts.push(setTimeout(pista, 226717.27));
    timeouts.push(setTimeout(red, 226717.27));
    timeouts.push(setTimeout(orange, 226824.41));

    timeouts.push(setTimeout(pista, 227145.84));
    timeouts.push(setTimeout(red, 227145.84));

    timeouts.push(setTimeout(pista, 227574.42));

    //529

    timeouts.push(setTimeout(pista, 228003.00)); //parte groovada
    timeouts.push(setTimeout(yellow, 228003.00));

    timeouts.push(setTimeout(pista, 228431.58));
    timeouts.push(setTimeout(red, 228431.58));
    timeouts.push(setTimeout(orange, 228645.86));

    timeouts.push(setTimeout(pista, 228860.16));
    timeouts.push(setTimeout(red, 228860.16));

    timeouts.push(setTimeout(pista, 229288.73));
    timeouts.push(setTimeout(red, 229288.73));
    timeouts.push(setTimeout(orange, 229610.14));

    //533

    timeouts.push(setTimeout(pista, 229717.31));
    timeouts.push(setTimeout(red, 229717.31));
    timeouts.push(setTimeout(orange, 229931.59));

    timeouts.push(setTimeout(pista, 230145.89));
    timeouts.push(setTimeout(red, 230145.89));
    timeouts.push(setTimeout(orange, 230360.17));

    timeouts.push(setTimeout(pista, 230574.47));
    timeouts.push(setTimeout(red, 230574.47));

    timeouts.push(setTimeout(pista, 231003.05));
    timeouts.push(setTimeout(red, 231003.05));

    //537

    timeouts.push(setTimeout(pista, 231431.63)); // 2
    timeouts.push(setTimeout(yellow, 231431.63));

    timeouts.push(setTimeout(pista, 231860.20));
    timeouts.push(setTimeout(red, 231860.20));
    timeouts.push(setTimeout(orange, 232074.48));

    timeouts.push(setTimeout(pista, 232288.78));
    timeouts.push(setTimeout(red, 232288.78));

    timeouts.push(setTimeout(pista, 232717.36));
    timeouts.push(setTimeout(red, 232717.36));
    timeouts.push(setTimeout(orange, 233038.77));

    //541

    timeouts.push(setTimeout(pista, 233145.94));
    timeouts.push(setTimeout(red, 233145.94));
    timeouts.push(setTimeout(orange, 233360.22));

    timeouts.push(setTimeout(pista, 233574.52));
    timeouts.push(setTimeout(red, 233574.52));
    timeouts.push(setTimeout(orange, 233788.80));

    timeouts.push(setTimeout(pista, 234003.09));
    timeouts.push(setTimeout(red, 234003.09));

    timeouts.push(setTimeout(pista, 234431.67));
    timeouts.push(setTimeout(green, 234431.67));

    //545

    timeouts.push(setTimeout(pista, 234860.25)); // 3
    timeouts.push(setTimeout(yellow, 234860.25));

    timeouts.push(setTimeout(pista, 235288.83));
    timeouts.push(setTimeout(red, 235288.83));
    timeouts.push(setTimeout(orange, 235503.11));

    timeouts.push(setTimeout(pista, 235717.41));
    timeouts.push(setTimeout(red, 235717.41));

    timeouts.push(setTimeout(pista, 236145.98));
    timeouts.push(setTimeout(red, 236145.98));
    timeouts.push(setTimeout(orange, 236467.39));

    //549

    timeouts.push(setTimeout(pista, 236574.56)); // 4
    timeouts.push(setTimeout(red, 236574.56));
    timeouts.push(setTimeout(orange, 236788.84));

    timeouts.push(setTimeout(pista, 237003.14));
    timeouts.push(setTimeout(red, 237003.14));
    timeouts.push(setTimeout(orange, 237217.42));

    timeouts.push(setTimeout(pista, 237431.72));
    timeouts.push(setTimeout(red, 237431.72));

    timeouts.push(setTimeout(pista, 237860.30));
    timeouts.push(setTimeout(red, 237860.30));

    //553

    timeouts.push(setTimeout(pista, 238288.88)); // 5
    timeouts.push(setTimeout(yellow, 238288.88));

    timeouts.push(setTimeout(pista, 238717.45));
    timeouts.push(setTimeout(red, 238717.45));

    timeouts.push(setTimeout(pista, 239146.03));
    timeouts.push(setTimeout(red, 239146.03));

    timeouts.push(setTimeout(pista, 239574.61));
    timeouts.push(setTimeout(red, 239574.61)); 

    //557

    timeouts.push(setTimeout(pista, 240003.19)); // virada
    timeouts.push(setTimeout(red, 240003.19));

    timeouts.push(setTimeout(pista, 240431.77));
    timeouts.push(setTimeout(blue, 240431.77));
    timeouts.push(setTimeout(blue, 240646.05));

    timeouts.push(setTimeout(pista, 240860.34));
    timeouts.push(setTimeout(green, 240860.34));
    timeouts.push(setTimeout(green, 241074.62));

    timeouts.push(setTimeout(pista, 241288.92));
    timeouts.push(setTimeout(blue, 241288.92));
    timeouts.push(setTimeout(green, 241396.07));
    timeouts.push(setTimeout(yellow, 241503.20));
    timeouts.push(setTimeout(orange, 241610.33));

    //561

    timeouts.push(setTimeout(pista, 241717.50)); // groove2
    timeouts.push(setTimeout(yellow, 241717.50));

    timeouts.push(setTimeout(pista, 242146.08));
    timeouts.push(setTimeout(red, 242146.08));

    timeouts.push(setTimeout(pista, 242574.66));
    timeouts.push(setTimeout(yellow, 242574.66));

    timeouts.push(setTimeout(pista, 243003.23));
    timeouts.push(setTimeout(red, 243003.23));

    //565

    timeouts.push(setTimeout(pista, 243431.81));
    timeouts.push(setTimeout(yellow, 243431.81));

    timeouts.push(setTimeout(pista, 243860.39));
    timeouts.push(setTimeout(red, 243860.39));
    timeouts.push(setTimeout(orange, 244074.67));

    timeouts.push(setTimeout(pista, 244288.97));
    timeouts.push(setTimeout(red, 244288.97));
    timeouts.push(setTimeout(orange, 244503.25));

    timeouts.push(setTimeout(pista, 244717.55));
    timeouts.push(setTimeout(red, 244717.55));
    timeouts.push(setTimeout(orange, 244931.83));

    //569

    timeouts.push(setTimeout(pista, 245146.13)); // 2
    timeouts.push(setTimeout(red, 245146.13));

    timeouts.push(setTimeout(pista, 245574.70));
    timeouts.push(setTimeout(red, 245574.70));

    timeouts.push(setTimeout(pista, 246003.28));
    timeouts.push(setTimeout(yellow, 246003.28));

    timeouts.push(setTimeout(pista, 246431.86));
    timeouts.push(setTimeout(red, 246431.86));

    //573

    timeouts.push(setTimeout(pista, 246860.44)); 
    timeouts.push(setTimeout(yellow, 246860.44));

    timeouts.push(setTimeout(pista, 247289.02));
    timeouts.push(setTimeout(red, 247289.02));
    timeouts.push(setTimeout(orange, 247503.30));

    timeouts.push(setTimeout(pista, 247717.59));
    timeouts.push(setTimeout(red, 247717.59));
    timeouts.push(setTimeout(orange, 247931.87));

    timeouts.push(setTimeout(pista, 248146.17));
    timeouts.push(setTimeout(red, 248146.17));
    timeouts.push(setTimeout(orange, 248360.45));

    //577

    timeouts.push(setTimeout(pista, 248574.75)); // 3
    timeouts.push(setTimeout(red, 248574.75));

    timeouts.push(setTimeout(pista, 249003.33));
    timeouts.push(setTimeout(red, 249003.33));

    timeouts.push(setTimeout(pista, 249431.91));
    timeouts.push(setTimeout(yellow, 249431.91));

    timeouts.push(setTimeout(pista, 249860.48));
    timeouts.push(setTimeout(red, 249860.48));

    //581

    timeouts.push(setTimeout(pista, 250289.06));
    timeouts.push(setTimeout(yellow, 250289.06));

    timeouts.push(setTimeout(pista, 250717.64));
    timeouts.push(setTimeout(red, 250717.64));
    timeouts.push(setTimeout(orange, 250931.92));

    timeouts.push(setTimeout(pista, 251146.22));
    timeouts.push(setTimeout(red, 251146.22));
    timeouts.push(setTimeout(orange, 251360.50));

    timeouts.push(setTimeout(pista, 251574.80));
    timeouts.push(setTimeout(red, 251574.80));
    timeouts.push(setTimeout(orange, 251789.08));

    //585

    timeouts.push(setTimeout(pista, 252003.38)); // 4
    timeouts.push(setTimeout(orange, 252003.38));
    timeouts.push(setTimeout(orange, 252324.78));

    timeouts.push(setTimeout(pista, 252431.95));

    timeouts.push(setTimeout(pista, 252860.53));
    timeouts.push(setTimeout(orange, 252860.53));
    timeouts.push(setTimeout(orange, 253181.94));

    timeouts.push(setTimeout(pista, 253289.11));


    //589

    timeouts.push(setTimeout(pista, 253717.69));
    timeouts.push(setTimeout(orange, 253717.69));
    timeouts.push(setTimeout(orange, 254039.10));

    timeouts.push(setTimeout(pista, 254146.27));
    timeouts.push(setTimeout(orange, 254146.27));

    timeouts.push(setTimeout(pista, 254574.84));
    timeouts.push(setTimeout(orange, 254574.84));
    timeouts.push(setTimeout(orange, 254681.99));
    timeouts.push(setTimeout(orange, 254896.25));

    timeouts.push(setTimeout(pista, 255003.42));
    timeouts.push(setTimeout(orange, 255003.42));
    timeouts.push(setTimeout(orange, 255217.70));

    //593

    timeouts.push(setTimeout(pista, 255432.00)); // groove principal drop 2
    timeouts.push(setTimeout(red, 255432.00));
    timeouts.push(setTimeout(orange, 255539.14));
    timeouts.push(setTimeout(orange, 255646.28));
    timeouts.push(setTimeout(orange, 255753.41));

    timeouts.push(setTimeout(pista, 255860.58));
    timeouts.push(setTimeout(red, 255860.58));
    timeouts.push(setTimeout(orange, 256074.86));
    timeouts.push(setTimeout(orange, 256181.99));

    timeouts.push(setTimeout(pista, 256289.16));
    timeouts.push(setTimeout(red, 256289.16));
    timeouts.push(setTimeout(orange, 256503.44));
    timeouts.push(setTimeout(orange, 256610.57));

    timeouts.push(setTimeout(pista, 256717.73));
    timeouts.push(setTimeout(yellow, 256717.73));

    //597

    timeouts.push(setTimeout(pista, 257146.31));
    timeouts.push(setTimeout(red, 257146.31));
    timeouts.push(setTimeout(orange, 257253.46));
    timeouts.push(setTimeout(orange, 257360.59));
    timeouts.push(setTimeout(orange, 257467.72));

    timeouts.push(setTimeout(pista, 257574.89));
    timeouts.push(setTimeout(red, 257574.89));
    timeouts.push(setTimeout(orange, 257682.04));
    timeouts.push(setTimeout(orange, 257896.30));

    timeouts.push(setTimeout(pista, 258003.47));
    timeouts.push(setTimeout(red, 258003.47));
    timeouts.push(setTimeout(orange, 258110.61));
    timeouts.push(setTimeout(orange, 258324.88));

    timeouts.push(setTimeout(pista, 258432.05));
    timeouts.push(setTimeout(red, 258432.05));
    timeouts.push(setTimeout(orange, 258539.19));
    timeouts.push(setTimeout(orange, 258646.33));
    timeouts.push(setTimeout(orange, 258753.46));

    //601

    timeouts.push(setTimeout(pista, 258860.63)); // 2 
    timeouts.push(setTimeout(red, 258860.63));
    timeouts.push(setTimeout(orange, 258967.77));
    timeouts.push(setTimeout(orange, 259074.91));
    timeouts.push(setTimeout(orange, 259182.03));

    timeouts.push(setTimeout(pista, 259289.20));
    timeouts.push(setTimeout(red, 259289.20));
    timeouts.push(setTimeout(orange, 259503.48));
    timeouts.push(setTimeout(orange, 259610.61));

    timeouts.push(setTimeout(pista, 259717.78));
    timeouts.push(setTimeout(red, 259717.78));
    timeouts.push(setTimeout(orange, 259932.06));
    timeouts.push(setTimeout(orange, 260039.19));

    timeouts.push(setTimeout(pista, 260146.36));
    timeouts.push(setTimeout(yellow, 260146.36));

    //605

    timeouts.push(setTimeout(pista, 260574.94));
    timeouts.push(setTimeout(red, 260574.94));
    timeouts.push(setTimeout(orange, 260682.08));
    timeouts.push(setTimeout(orange, 260789.22));
    timeouts.push(setTimeout(orange, 260896.35));

    timeouts.push(setTimeout(pista, 261003.52));
    timeouts.push(setTimeout(red, 261003.52));
    timeouts.push(setTimeout(orange, 261110.66));
    timeouts.push(setTimeout(orange, 261324.92));

    timeouts.push(setTimeout(pista, 261432.09));
    timeouts.push(setTimeout(red, 261432.09));
    timeouts.push(setTimeout(orange, 261539.24));
    timeouts.push(setTimeout(orange, 261753.50));

    timeouts.push(setTimeout(pista, 261860.67));
    timeouts.push(setTimeout(red, 261860.67));
    timeouts.push(setTimeout(orange, 261967.82));
    timeouts.push(setTimeout(orange, 262074.95));
    timeouts.push(setTimeout(orange, 262182.08));

    //609

    timeouts.push(setTimeout(pista, 262289.25)); // 3
    timeouts.push(setTimeout(red, 262289.25));
    timeouts.push(setTimeout(orange, 262396.40));
    timeouts.push(setTimeout(orange, 262503.53));
    timeouts.push(setTimeout(orange, 262610.66));

    timeouts.push(setTimeout(pista, 262717.81));
    timeouts.push(setTimeout(red, 262717.81));
    timeouts.push(setTimeout(orange, 262932.09));
    timeouts.push(setTimeout(orange, 263039.22));

    timeouts.push(setTimeout(pista, 263146.38));
    timeouts.push(setTimeout(red, 263146.38));
    timeouts.push(setTimeout(orange, 263360.66));
    timeouts.push(setTimeout(orange, 263467.78));

    timeouts.push(setTimeout(pista, 263574.94));
    timeouts.push(setTimeout(yellow, 263574.94));

    //613

    timeouts.push(setTimeout(pista, 264003.50));
    timeouts.push(setTimeout(red, 264003.50));
    timeouts.push(setTimeout(orange, 264110.65));
    timeouts.push(setTimeout(orange, 264217.78));
    timeouts.push(setTimeout(orange, 264324.91));

    timeouts.push(setTimeout(pista, 264432.06));
    timeouts.push(setTimeout(red, 264432.06));
    timeouts.push(setTimeout(orange, 264539.21));
    timeouts.push(setTimeout(orange, 264753.47));

    timeouts.push(setTimeout(pista, 264860.63));
    timeouts.push(setTimeout(red, 264860.63));
    timeouts.push(setTimeout(orange, 264967.77));
    timeouts.push(setTimeout(orange, 265182.03));

    timeouts.push(setTimeout(pista, 265289.19));
    timeouts.push(setTimeout(red, 265289.19));
    timeouts.push(setTimeout(orange, 265396.33));
    timeouts.push(setTimeout(orange, 265503.47));
    timeouts.push(setTimeout(orange, 265610.60));

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
    timeouts.push(setTimeout(red, 267432.00));

    timeouts.push(setTimeout(pista, 267860.56));

    timeouts.push(setTimeout(pista, 268289.13));

    timeouts.push(setTimeout(pista, 268717.69));

    //625

    timeouts.push(setTimeout(pista, 269146.25)); // rolling bass drop2
    timeouts.push(setTimeout(red, 269146.25));
    timeouts.push(setTimeout(orange, 269253.40));
    timeouts.push(setTimeout(orange, 269360.53));
    timeouts.push(setTimeout(orange, 269467.66));

    timeouts.push(setTimeout(pista, 269574.81));
    timeouts.push(setTimeout(red, 269574.81));
    timeouts.push(setTimeout(orange, 269681.96));
    timeouts.push(setTimeout(orange, 269789.09));
    timeouts.push(setTimeout(orange, 269896.22));

    timeouts.push(setTimeout(pista, 270003.38));
    timeouts.push(setTimeout(red, 270003.38));
    timeouts.push(setTimeout(orange, 270110.52));
    timeouts.push(setTimeout(orange, 270217.66));
    timeouts.push(setTimeout(orange, 270324.78));

    timeouts.push(setTimeout(pista, 270431.94));
    timeouts.push(setTimeout(red, 270431.94));
    timeouts.push(setTimeout(orange, 270539.08));
    timeouts.push(setTimeout(orange, 270646.22));
    timeouts.push(setTimeout(orange, 270753.35));

    //629

    timeouts.push(setTimeout(pista, 270860.50)); // 2
    timeouts.push(setTimeout(red, 270860.50));
    timeouts.push(setTimeout(orange, 270967.65));
    timeouts.push(setTimeout(orange, 271074.78));
    timeouts.push(setTimeout(orange, 271181.91));

    timeouts.push(setTimeout(pista, 271289.06));
    timeouts.push(setTimeout(red, 271289.06));
    timeouts.push(setTimeout(orange, 271396.21));
    timeouts.push(setTimeout(orange, 271503.34));
    timeouts.push(setTimeout(orange, 271610.47));

    timeouts.push(setTimeout(pista, 271717.63));
    timeouts.push(setTimeout(red, 271717.63));
    timeouts.push(setTimeout(orange, 271824.77));
    timeouts.push(setTimeout(orange, 271931.91));
    timeouts.push(setTimeout(orange, 272039.03));

    timeouts.push(setTimeout(pista, 272146.19));
    timeouts.push(setTimeout(red, 272146.19));
    timeouts.push(setTimeout(orange, 272253.33));
    timeouts.push(setTimeout(orange, 272360.47));
    timeouts.push(setTimeout(orange, 272467.60));

    //633

    timeouts.push(setTimeout(pista, 272574.75)); // 3
    timeouts.push(setTimeout(red, 272574.75));
    timeouts.push(setTimeout(orange, 272681.90));
    timeouts.push(setTimeout(orange, 272789.03));
    timeouts.push(setTimeout(orange, 272896.16));

    timeouts.push(setTimeout(pista, 273003.31));
    timeouts.push(setTimeout(red, 273003.31));
    timeouts.push(setTimeout(orange, 273110.46));
    timeouts.push(setTimeout(orange, 273217.59));
    timeouts.push(setTimeout(orange, 273324.72));

    timeouts.push(setTimeout(pista, 273431.88));
    timeouts.push(setTimeout(red, 273431.88));
    timeouts.push(setTimeout(orange, 273539.02));
    timeouts.push(setTimeout(orange, 273646.16));
    timeouts.push(setTimeout(orange, 273753.28));

    timeouts.push(setTimeout(pista, 273860.44));
    timeouts.push(setTimeout(red, 273860.44));
    timeouts.push(setTimeout(orange, 273967.58));
    timeouts.push(setTimeout(orange, 274074.72));
    timeouts.push(setTimeout(orange, 274181.85));

    //637

    timeouts.push(setTimeout(pista, 274289.00)); // 4
    timeouts.push(setTimeout(red, 274289.00));
    timeouts.push(setTimeout(orange, 274396.15));
    timeouts.push(setTimeout(orange, 274503.28));
    timeouts.push(setTimeout(orange, 274610.41));

    timeouts.push(setTimeout(pista, 274717.56));
    timeouts.push(setTimeout(red, 274717.56));
    timeouts.push(setTimeout(orange, 274824.71));
    timeouts.push(setTimeout(orange, 274931.84));
    timeouts.push(setTimeout(orange, 275038.97));

    timeouts.push(setTimeout(pista, 275146.13));
    timeouts.push(setTimeout(red, 275146.13));
    timeouts.push(setTimeout(orange, 275253.27));
    timeouts.push(setTimeout(orange, 275360.41));
    timeouts.push(setTimeout(orange, 275467.53));

    timeouts.push(setTimeout(pista, 275574.69));
    timeouts.push(setTimeout(red, 275574.69));
    timeouts.push(setTimeout(orange, 275681.83));
    timeouts.push(setTimeout(orange, 275788.97));
    timeouts.push(setTimeout(orange, 275896.10));

    //641

    timeouts.push(setTimeout(pista, 276003.25)); // 5
    timeouts.push(setTimeout(red, 276003.25));
    timeouts.push(setTimeout(orange, 276110.40));
    timeouts.push(setTimeout(orange, 276217.53));
    timeouts.push(setTimeout(orange, 276324.66));

    timeouts.push(setTimeout(pista, 276431.81));
    timeouts.push(setTimeout(red, 276431.81));
    timeouts.push(setTimeout(orange, 276538.96));
    timeouts.push(setTimeout(orange, 276646.09));
    timeouts.push(setTimeout(orange, 276753.22));

    timeouts.push(setTimeout(pista, 276860.38));
    timeouts.push(setTimeout(red, 276860.38));
    timeouts.push(setTimeout(orange, 276967.52));
    timeouts.push(setTimeout(orange, 277074.66));
    timeouts.push(setTimeout(orange, 277181.78));

    timeouts.push(setTimeout(pista, 277288.94));
    timeouts.push(setTimeout(red, 277288.94));
    timeouts.push(setTimeout(orange, 277396.08));
    timeouts.push(setTimeout(orange, 277503.22));
    timeouts.push(setTimeout(orange, 277610.35));

    //645

    timeouts.push(setTimeout(pista, 277717.50)); // 6
    timeouts.push(setTimeout(red, 277717.50));
    timeouts.push(setTimeout(orange, 277824.65));
    timeouts.push(setTimeout(orange, 277931.78));
    timeouts.push(setTimeout(orange, 278038.91));

    timeouts.push(setTimeout(pista, 278146.06));
    timeouts.push(setTimeout(red, 278146.06));
    timeouts.push(setTimeout(orange, 278253.21));
    timeouts.push(setTimeout(orange, 278360.34));
    timeouts.push(setTimeout(orange, 278467.47));

    timeouts.push(setTimeout(pista, 278574.63));
    timeouts.push(setTimeout(red, 278574.63));
    timeouts.push(setTimeout(orange, 278681.77));
    timeouts.push(setTimeout(orange, 278788.91));
    timeouts.push(setTimeout(orange, 278896.03));

    timeouts.push(setTimeout(pista, 279003.19));
    timeouts.push(setTimeout(red, 279003.19));
    timeouts.push(setTimeout(orange, 279110.33));
    timeouts.push(setTimeout(orange, 279217.47));
    timeouts.push(setTimeout(orange, 279324.60));

    //649

    timeouts.push(setTimeout(pista, 279431.75)); // 7
    timeouts.push(setTimeout(red, 279431.75));
    timeouts.push(setTimeout(orange, 279538.90));
    timeouts.push(setTimeout(orange, 279646.03));
    timeouts.push(setTimeout(orange, 279753.16));
    
    timeouts.push(setTimeout(pista, 279860.31));
    timeouts.push(setTimeout(blue, 279860.31));
    timeouts.push(setTimeout(orange, 280074.59));
    timeouts.push(setTimeout(orange, 280181.72));
    
    timeouts.push(setTimeout(pista, 280288.88));
    timeouts.push(setTimeout(green, 280288.88));
    timeouts.push(setTimeout(orange, 280503.16));
    timeouts.push(setTimeout(orange, 280610.28));
    
    timeouts.push(setTimeout(pista, 280717.44));
    timeouts.push(setTimeout(yellow, 280717.44));
    timeouts.push(setTimeout(orange, 280931.72));

    //653

    timeouts.push(setTimeout(pista, 281146.00)); // 8
    timeouts.push(setTimeout(red, 281146.00));
    timeouts.push(setTimeout(orange, 281253.15));
    timeouts.push(setTimeout(orange, 281360.28));
    timeouts.push(setTimeout(orange, 281467.41));
    
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
    timeouts.push(setTimeout(yellow, 282860.25));

    timeouts.push(setTimeout(pista, 283288.81));
    timeouts.push(setTimeout(yellow, 283288.81));

    timeouts.push(setTimeout(pista, 283717.38));
    timeouts.push(setTimeout(red, 283717.38));
    timeouts.push(setTimeout(orange, 283824.52));
    timeouts.push(setTimeout(orange, 283931.66));
    timeouts.push(setTimeout(orange, 284038.78));

    timeouts.push(setTimeout(pista, 284145.94));
    timeouts.push(setTimeout(red, 284145.94));
    timeouts.push(setTimeout(orange, 284253.08));
    timeouts.push(setTimeout(orange, 284360.22));
    timeouts.push(setTimeout(orange, 284467.35));

    //661

    timeouts.push(setTimeout(pista, 284574.50));
    timeouts.push(setTimeout(yellow, 284574.50));

    timeouts.push(setTimeout(pista, 285003.06));
    timeouts.push(setTimeout(red, 285003.06));
    timeouts.push(setTimeout(orange, 285110.21));
    timeouts.push(setTimeout(orange, 285217.34));
    timeouts.push(setTimeout(orange, 285324.47));

    timeouts.push(setTimeout(pista, 285431.63));
    timeouts.push(setTimeout(red, 285431.63));
    timeouts.push(setTimeout(orange, 285538.77));
    timeouts.push(setTimeout(orange, 285645.91));
    timeouts.push(setTimeout(orange, 285753.03));

    timeouts.push(setTimeout(pista, 285860.19));
    timeouts.push(setTimeout(red, 285860.19));
    timeouts.push(setTimeout(orange, 285967.33));
    timeouts.push(setTimeout(orange, 286074.47));
    timeouts.push(setTimeout(orange, 286181.60));

    //665

    timeouts.push(setTimeout(pista, 286288.75)); // 2.2
    timeouts.push(setTimeout(yellow, 286288.75));

    timeouts.push(setTimeout(pista, 286717.31));
    timeouts.push(setTimeout(yellow, 286717.31));

    timeouts.push(setTimeout(pista, 287145.88));
    timeouts.push(setTimeout(red, 287145.88));
    timeouts.push(setTimeout(orange, 287253.02));
    timeouts.push(setTimeout(orange, 287360.16));
    timeouts.push(setTimeout(orange, 287467.28));

    timeouts.push(setTimeout(pista, 287574.44));
    timeouts.push(setTimeout(red, 287574.44));
    timeouts.push(setTimeout(orange, 287681.58));
    timeouts.push(setTimeout(orange, 287788.72));
    timeouts.push(setTimeout(orange, 287895.85));

    //669

    timeouts.push(setTimeout(pista, 288003.00));
    timeouts.push(setTimeout(yellow, 288003.00));

    timeouts.push(setTimeout(pista, 288431.56));
    timeouts.push(setTimeout(red, 288431.56));
    timeouts.push(setTimeout(orange, 288538.71));
    timeouts.push(setTimeout(orange, 288645.84));
    timeouts.push(setTimeout(orange, 288752.97));

    timeouts.push(setTimeout(pista, 288860.13));
    timeouts.push(setTimeout(red, 288860.13));
    timeouts.push(setTimeout(orange, 288967.27));
    timeouts.push(setTimeout(orange, 289074.41));
    timeouts.push(setTimeout(orange, 289181.53));

    timeouts.push(setTimeout(pista, 289288.69));
    timeouts.push(setTimeout(red, 289288.69));
    timeouts.push(setTimeout(orange, 289395.83));
    timeouts.push(setTimeout(orange, 289502.97));
    timeouts.push(setTimeout(orange, 289610.10));

    //673

    timeouts.push(setTimeout(pista, 289717.25)); // 2.3
    timeouts.push(setTimeout(yellow, 289717.25));

    timeouts.push(setTimeout(pista, 290145.81));
    timeouts.push(setTimeout(yellow, 290145.81));

    timeouts.push(setTimeout(pista, 290574.38));
    timeouts.push(setTimeout(red, 290574.38));
    timeouts.push(setTimeout(orange, 290681.52));
    timeouts.push(setTimeout(orange, 290788.66));
    timeouts.push(setTimeout(orange, 290895.78));

    timeouts.push(setTimeout(pista, 291002.94));
    timeouts.push(setTimeout(red, 291002.94));
    timeouts.push(setTimeout(orange, 291110.08));
    timeouts.push(setTimeout(orange, 291217.22));
    timeouts.push(setTimeout(orange, 291324.35));

    //677

    timeouts.push(setTimeout(pista, 291431.50));
    timeouts.push(setTimeout(yellow, 291431.50));

    timeouts.push(setTimeout(pista, 291860.06));
    timeouts.push(setTimeout(red, 291860.06));
    timeouts.push(setTimeout(orange, 291967.21));
    timeouts.push(setTimeout(orange, 292074.34));
    timeouts.push(setTimeout(orange, 292181.47));

    timeouts.push(setTimeout(pista, 292288.63));
    timeouts.push(setTimeout(red, 292288.63));
    timeouts.push(setTimeout(orange, 292395.77));
    timeouts.push(setTimeout(orange, 292502.91));
    timeouts.push(setTimeout(orange, 292610.03));

    timeouts.push(setTimeout(pista, 292717.19));
    timeouts.push(setTimeout(red, 292717.19));
    timeouts.push(setTimeout(orange, 292824.33));
    timeouts.push(setTimeout(orange, 292931.47));
    timeouts.push(setTimeout(orange, 293038.60));

    //681

    timeouts.push(setTimeout(pista, 293145.75)); // 2.4
    timeouts.push(setTimeout(yellow, 293145.75));

    timeouts.push(setTimeout(pista, 293574.31));
    timeouts.push(setTimeout(yellow, 293574.31));

    timeouts.push(setTimeout(pista, 294002.88));
    timeouts.push(setTimeout(red, 294002.88));
    timeouts.push(setTimeout(orange, 294110.02));
    timeouts.push(setTimeout(orange, 294217.16));
    timeouts.push(setTimeout(orange, 294324.28));

    timeouts.push(setTimeout(pista, 294431.44));
    timeouts.push(setTimeout(red, 294431.44));
    timeouts.push(setTimeout(orange, 294538.58));
    timeouts.push(setTimeout(orange, 294645.72));
    timeouts.push(setTimeout(orange, 294752.85));

    //685

    timeouts.push(setTimeout(pista, 294860.00));
    timeouts.push(setTimeout(yellow, 294860.00));

    timeouts.push(setTimeout(pista, 295288.56));
    timeouts.push(setTimeout(red, 295288.56));
    timeouts.push(setTimeout(orange, 295395.71));
    timeouts.push(setTimeout(orange, 295502.84));
    timeouts.push(setTimeout(orange, 295609.97));

    timeouts.push(setTimeout(pista, 295717.13));
    timeouts.push(setTimeout(red, 295717.13));
    timeouts.push(setTimeout(orange, 295824.27));
    timeouts.push(setTimeout(orange, 295931.41));
    timeouts.push(setTimeout(orange, 296038.53));

    timeouts.push(setTimeout(pista, 296145.69));
    timeouts.push(setTimeout(red, 296145.69));
    timeouts.push(setTimeout(orange, 296252.83));
    timeouts.push(setTimeout(orange, 296359.97));
    timeouts.push(setTimeout(orange, 296467.10));

    //689

    timeouts.push(setTimeout(pista, 296574.25)); // altro
    timeouts.push(setTimeout(red, 296574.25));
    timeouts.push(setTimeout(orange, 296788.53));

    timeouts.push(setTimeout(pista, 297002.81));
    timeouts.push(setTimeout(red, 297002.81));

    timeouts.push(setTimeout(pista, 297431.38));
    timeouts.push(setTimeout(red, 297431.38));
    timeouts.push(setTimeout(orange, 297645.66));

    timeouts.push(setTimeout(pista, 297859.94));
    timeouts.push(setTimeout(red, 297859.94));

    //693

    timeouts.push(setTimeout(pista, 298288.50));
    timeouts.push(setTimeout(red, 298288.50));
    timeouts.push(setTimeout(orange, 298395.65));
    timeouts.push(setTimeout(orange, 298502.78));
    timeouts.push(setTimeout(orange, 298609.91));

    timeouts.push(setTimeout(pista, 298717.06));
    timeouts.push(setTimeout(red, 298717.06));
    timeouts.push(setTimeout(orange, 298824.21));
    timeouts.push(setTimeout(orange, 299038.47));

    timeouts.push(setTimeout(pista, 299145.63));
    timeouts.push(setTimeout(red, 299145.63));
    timeouts.push(setTimeout(orange, 299252.77));
    timeouts.push(setTimeout(orange, 299359.91));
    timeouts.push(setTimeout(orange, 299467.03));

    timeouts.push(setTimeout(pista, 299574.19));
    timeouts.push(setTimeout(red, 299574.19));
    timeouts.push(setTimeout(orange, 299681.33));
    timeouts.push(setTimeout(orange, 299788.47));

    //697

    timeouts.push(setTimeout(pista, 300002.75)); // 2
    timeouts.push(setTimeout(red, 300002.75));
    timeouts.push(setTimeout(orange, 300217.03));

    timeouts.push(setTimeout(pista, 300431.31));
    timeouts.push(setTimeout(red, 300431.31));

    timeouts.push(setTimeout(pista, 300859.88));
    timeouts.push(setTimeout(red, 300859.88));
    timeouts.push(setTimeout(orange, 301074.16));

    timeouts.push(setTimeout(pista, 301288.44));
    timeouts.push(setTimeout(red, 301288.44));

    //701

    timeouts.push(setTimeout(pista, 301717.00));
    timeouts.push(setTimeout(red, 301717.00));
    timeouts.push(setTimeout(orange, 301824.15));
    timeouts.push(setTimeout(orange, 301931.28));
    timeouts.push(setTimeout(orange, 302038.41));

    timeouts.push(setTimeout(pista, 302145.56));
    timeouts.push(setTimeout(red, 302145.56));
    timeouts.push(setTimeout(orange, 302252.71));
    timeouts.push(setTimeout(orange, 302466.97));

    timeouts.push(setTimeout(pista, 302574.13));
    timeouts.push(setTimeout(red, 302574.13));
    timeouts.push(setTimeout(orange, 302681.27));
    timeouts.push(setTimeout(orange, 302788.41));
    timeouts.push(setTimeout(orange, 302895.53));

    timeouts.push(setTimeout(pista, 303002.69));
    timeouts.push(setTimeout(red, 303002.69));
    timeouts.push(setTimeout(orange, 303109.83));
    timeouts.push(setTimeout(orange, 303216.97));

    //705

    timeouts.push(setTimeout(pista, 303431.25)); // 3
    timeouts.push(setTimeout(red, 303431.25));
    timeouts.push(setTimeout(orange, 303645.53));

    timeouts.push(setTimeout(pista, 303859.81));
    timeouts.push(setTimeout(red, 303859.81));

    timeouts.push(setTimeout(pista, 304288.38));
    timeouts.push(setTimeout(red, 304288.38));
    timeouts.push(setTimeout(orange, 304502.66));

    timeouts.push(setTimeout(pista, 304716.94));
    timeouts.push(setTimeout(red, 304716.94));

    //709

    timeouts.push(setTimeout(pista, 305145.50));
    timeouts.push(setTimeout(red, 305145.50));
    timeouts.push(setTimeout(orange, 305252.65));
    timeouts.push(setTimeout(orange, 305359.78));
    timeouts.push(setTimeout(orange, 305466.91));

    timeouts.push(setTimeout(pista, 305574.06));
    timeouts.push(setTimeout(red, 305574.06));
    timeouts.push(setTimeout(orange, 305681.21));
    timeouts.push(setTimeout(orange, 305895.47));

    timeouts.push(setTimeout(pista, 306002.63));
    timeouts.push(setTimeout(red, 306002.63));
    timeouts.push(setTimeout(orange, 306109.77));
    timeouts.push(setTimeout(orange, 306216.91));
    timeouts.push(setTimeout(orange, 306324.03));

    timeouts.push(setTimeout(pista, 306431.19));
    timeouts.push(setTimeout(red, 306431.19));
    timeouts.push(setTimeout(orange, 306538.33));
    timeouts.push(setTimeout(orange, 306645.47));

    //713

    timeouts.push(setTimeout(pista, 306859.75)); // 4
    timeouts.push(setTimeout(red, 306859.75));
    timeouts.push(setTimeout(orange, 307074.03));

    timeouts.push(setTimeout(pista, 307288.31));
    timeouts.push(setTimeout(red, 307288.31));

    timeouts.push(setTimeout(pista, 307716.88));
    timeouts.push(setTimeout(red, 307716.88));
    timeouts.push(setTimeout(orange, 307931.16));

    timeouts.push(setTimeout(pista, 308145.44));
    timeouts.push(setTimeout(red, 308145.44));

    //717

    timeouts.push(setTimeout(pista, 308574.00));
    timeouts.push(setTimeout(red, 308574.00));
    timeouts.push(setTimeout(orange, 308681.15));
    timeouts.push(setTimeout(orange, 308788.28));
    timeouts.push(setTimeout(orange, 308895.41));

    timeouts.push(setTimeout(pista, 309002.56));
    timeouts.push(setTimeout(red, 309002.56));
    timeouts.push(setTimeout(orange, 309109.71));
    timeouts.push(setTimeout(orange, 309323.97));

    timeouts.push(setTimeout(pista, 309431.13));
    timeouts.push(setTimeout(red, 309431.13));
    timeouts.push(setTimeout(orange, 309538.27));
    timeouts.push(setTimeout(orange, 309645.41));
    timeouts.push(setTimeout(orange, 309752.53));

    timeouts.push(setTimeout(pista, 309859.69));
    timeouts.push(setTimeout(red, 309859.69));
    timeouts.push(setTimeout(orange, 309966.83));
    timeouts.push(setTimeout(orange, 310073.97));

    //721

    timeouts.push(setTimeout(pista, 310288.25)); // altro 2
    timeouts.push(setTimeout(red, 310288.25));
    timeouts.push(setTimeout(orange, 310502.53));

    timeouts.push(setTimeout(pista, 310716.81));
    timeouts.push(setTimeout(red, 310716.81));

    timeouts.push(setTimeout(pista, 311145.38));
    timeouts.push(setTimeout(red, 311145.38));
    timeouts.push(setTimeout(orange, 311359.66));

    timeouts.push(setTimeout(pista, 311573.94));
    timeouts.push(setTimeout(red, 311573.94));

    //725

    timeouts.push(setTimeout(pista, 312002.50));
    timeouts.push(setTimeout(red, 312002.50));
    timeouts.push(setTimeout(orange, 312216.78));

    timeouts.push(setTimeout(pista, 312431.06));
    timeouts.push(setTimeout(red, 312431.06));
    timeouts.push(setTimeout(orange, 312645.34));

    timeouts.push(setTimeout(pista, 312859.63));
    timeouts.push(setTimeout(red, 312859.63));
    timeouts.push(setTimeout(orange, 313073.91));

    timeouts.push(setTimeout(pista, 313288.19));
    timeouts.push(setTimeout(red, 313288.19));

    //729

    timeouts.push(setTimeout(pista, 313716.75)); // 2
    timeouts.push(setTimeout(red, 313716.75));
    timeouts.push(setTimeout(orange, 313931.03));

    timeouts.push(setTimeout(pista, 314145.31));
    timeouts.push(setTimeout(red, 314145.31));

    timeouts.push(setTimeout(pista, 314573.88));
    timeouts.push(setTimeout(red, 314573.88));
    timeouts.push(setTimeout(orange, 314788.16));

    timeouts.push(setTimeout(pista, 315002.44));
    timeouts.push(setTimeout(red, 315002.44));

    //733

    timeouts.push(setTimeout(pista, 315431.00));
    timeouts.push(setTimeout(red, 315431.00));
    timeouts.push(setTimeout(orange, 315645.28));

    timeouts.push(setTimeout(pista, 315859.56));
    timeouts.push(setTimeout(red, 315859.56));
    timeouts.push(setTimeout(orange, 316073.84));

    timeouts.push(setTimeout(pista, 316288.13));
    timeouts.push(setTimeout(red, 316288.13));
    timeouts.push(setTimeout(orange, 316502.41));

    timeouts.push(setTimeout(pista, 316716.69));
    timeouts.push(setTimeout(red, 316716.69));

    //737

    timeouts.push(setTimeout(pista, 317145.25)); // 3
    timeouts.push(setTimeout(red, 317145.25));
    timeouts.push(setTimeout(orange, 317359.53));

    timeouts.push(setTimeout(pista, 317573.81));
    timeouts.push(setTimeout(red, 317573.81));

    timeouts.push(setTimeout(pista, 318002.38));
    timeouts.push(setTimeout(red, 318002.38));
    timeouts.push(setTimeout(orange, 318216.66));

    timeouts.push(setTimeout(pista, 318430.94));
    timeouts.push(setTimeout(red, 318430.94));

    //741

    timeouts.push(setTimeout(pista, 318859.50));
    timeouts.push(setTimeout(red, 318859.50));
    timeouts.push(setTimeout(orange, 319073.78));

    timeouts.push(setTimeout(pista, 319288.06));
    timeouts.push(setTimeout(red, 319288.06));
    timeouts.push(setTimeout(orange, 319502.34));

    timeouts.push(setTimeout(pista, 319716.63));
    timeouts.push(setTimeout(red, 319716.63));
    timeouts.push(setTimeout(orange, 319930.91));

    timeouts.push(setTimeout(pista, 320145.19));
    timeouts.push(setTimeout(red, 320145.19));

    //745

    timeouts.push(setTimeout(pista, 320573.75)); // 4
    timeouts.push(setTimeout(red, 320573.75));
    timeouts.push(setTimeout(orange, 320788.03));

    timeouts.push(setTimeout(pista, 321002.31));
    timeouts.push(setTimeout(red, 321002.31));

    timeouts.push(setTimeout(pista, 321430.88));
    timeouts.push(setTimeout(red, 321430.88));
    timeouts.push(setTimeout(orange, 321645.16));

    timeouts.push(setTimeout(pista, 321859.44));
    timeouts.push(setTimeout(red, 321859.44));

    //749

    timeouts.push(setTimeout(pista, 322288.00));
    timeouts.push(setTimeout(red, 322288.00));
    timeouts.push(setTimeout(orange, 322502.28));

    timeouts.push(setTimeout(pista, 322716.56));
    timeouts.push(setTimeout(red, 322716.56));
    timeouts.push(setTimeout(orange, 322930.84));

    timeouts.push(setTimeout(pista, 323145.13));
    timeouts.push(setTimeout(red, 323145.13));
    timeouts.push(setTimeout(orange, 323359.41));

    timeouts.push(setTimeout(pista, 323573.69));
    timeouts.push(setTimeout(red, 323573.69));

    //753

    timeouts.push(setTimeout(pista, 324002.25));
    timeouts.push(setTimeout(red, 324002.25));

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