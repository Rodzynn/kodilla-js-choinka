// plik scripts.js

// *************** Zadanie 7 - Choinka ***************
 function rysujChoinke(n) {
 
    for (i = 1; i <= n; i++)
    { 
        for (j = i; j < n; j++)
        {
            document.write("");
        }
        for (j = 1; j <= (2*i-1); j++)
        {
            document.write("*");
        }
 
        	document.write("<br>");

        }

    }
rysujChoinke(prompt("Jak duża ma być choinka? Wpisz liczbę całkowitą"));