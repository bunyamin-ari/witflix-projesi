// String ifadeler içeren bir array
const phrases = ["go to theatre with yusuf","spend time with your parents","call Mert Ölmez","go to tunnel aquarium","call Emrah","Watch a movie with Yusuf","test your programming process","think positively for a while","fix the treadmill","buy clothes","call şeyma","call rümeysa","call hamis","call emine","call recai"];

// Rastgele bir ifade seçmek için array'in uzunluğunu kullanarak bir index oluşturuyoruz
const randomIndex = Math.floor(Math.random() * phrases.length);

// Rastgele seçilen ifadeyi konsola yazdırıyoruz


console.log(phrases[randomIndex]);

