
player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");
player_1_score = 0;
player_2_score = 0;
document.getElementById("player_1_name").innerHTML = player_1_name + ":";
document.getElementById("player_2_name").innerHTML = player_2_name + ":";
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "Turno para preguntar -" + player_1_name;
document.getElementById("player_answer").innerHTML = "Turno para contestar -" + player_2_name;
//primero definir el valor de las variables fila 1 a la 11

//se espera que presione el usuario el boton enviar para que active la funcion send
function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Palabra en minúsculas=" + word);
    charAt1 = word.charAt(1);
    console.log(charAt1); lenght_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);
    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'>Q." + remove_charAt3 + "</h4>";
    input_box = "<br>Respuesta:<input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}