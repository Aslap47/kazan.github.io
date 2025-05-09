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
