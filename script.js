// masih belajar, belum sampai menyederhanakan fungsi
// artikel 1

var paragrafPertama = document.createElement('p');
var isiParagrafPertama = document.createTextNode('Drogon is one of the three dragons born in the wastelands beyond Lhazar, along with his brothers Rhaegal and Viserion. He is named after Daenerys late husband Khal Drogo. He can be distinguished by his black and red colored scales, and red-black wings. He was also Daenerys personal mount. With the deaths of Viserion and Rhaegal, Drogon is currently the last of his brothers, hence the only known living dragon in existence.');

var satu = document.getElementById('satu');

paragrafPertama.appendChild(isiParagrafPertama);
satu.appendChild(paragrafPertama);
//artikel 2

var paragrafKedua = document.createElement('p');
var isiParagrafKedua = document.createTextNode('Viserion was one of the three dragons born in the wastelands beyond Lhazar, along with Drogon and Rhaegal. He was named after Daenerys Targaryen elder brother, Viserys. He could be distinguished by his cream and gold colored scales, and red-orange wings. Eventually, he became an ice dragon (although different from the ones of legend), and was enslaved by the Night King. He was also able to breathe fire that was capable of melting the Wall, though it was blue in color');

var dua = document.getElementById('dua');

paragrafKedua.appendChild(isiParagrafKedua);
dua.appendChild(paragrafKedua);

//artikel 3

var paragrafKetiga = document.createElement('p');
var isiParagrafKetiga = document.createTextNode('Rhaegal was one of the three dragons born in the wastelands beyond Lhazar, along with Drogon and Viserion. He was named after Daenerys Targaryen eldest brother Rhaegar. He could be distinguished by his green and bronze colored scales, and his yellow-orange colored wings.');

var tiga = document.getElementById('tiga');

paragrafKetiga.appendChild(isiParagrafKetiga);
tiga.appendChild(paragrafKetiga);
