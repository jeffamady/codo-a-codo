for(let i=11; i >= 9; i--){
    document.write("<h1>" + "La tabla del " + i + ":" + "</h1>");
    for(let j=1; j<10; j++){
        document.write(i + " x " + j +": " + i*j)
        document.write("<br>");

    }
}