document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Kullanıcı bilgilerini al
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Onay kontrolü
    const consent = document.getElementById('consent').checked;
    if (!consent) {
        alert('Bilgilerinizin gönderilmesini onaylamadınız.');
        return;
    }

    // Verileri bir backend sunucusuna gönderme
    fetch('https://example.com/api/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            alert('Bilgileriniz başarıyla gönderildi.');
        } else {
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
    })
    .catch(error => {
        console.error('Hata:', error);
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    });
});
<script>
async function sendDataToFlask() {
    // Kullanıcıdan alınan veriler
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    try {
        // Flask sunucusuna POST isteği gönder
        const response = await fetch('http://127.0.0.1:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Sunucudan gelen cevabı al
        const result = await response.json();
        console.log("Sunucudan gelen cevap:", result);
        alert("Veri başarıyla gönderildi!");
    } catch (error) {
        console.error("Hata oluştu:", error);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
}
</script>
<form>
    <label for="name">Adınız:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="email">E-posta:</label>
    <input type="email" id="email" name="email"><br><br>
    <button type="button" onclick="sendDataToFlask()">Gönder</button>
</form>
