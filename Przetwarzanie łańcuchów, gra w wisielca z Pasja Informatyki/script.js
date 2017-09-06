var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

var password_length = password.length;

var password1 = "";

for (i=0; i < password_length; i++)
{
    if (password[i] == " ") password1 = password1 + " ";
    else password1 = password1 + "-";
}

function write_password() {
    document.getElementById("game-space").innerHTML = password1;
}

window.onload = write_password;