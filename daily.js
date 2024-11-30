// String ifadeler içeren bir array
const phrases = ["Merhaba!", "Nasılsınız?", "JavaScript öğreniyorum!", "Bugün harika bir gün!", "Kod yazmak çok eğlenceli!"];

// Rastgele bir ifade seçmek için array'in uzunluğunu kullanarak bir index oluşturuyoruz
const randomIndex = Math.floor(Math.random() * phrases.length);

// Rastgele seçilen ifadeyi konsola yazdırıyoruz
console.log(phrases[randomIndex]);

