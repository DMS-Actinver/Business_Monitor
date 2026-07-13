document.getElementById('modalPerfilAsesor').addEventListener('show.bs.modal', function () {
    fetch('ficha1.html')
        .then(response => response.text())
        .then(html => {
            // Convertimos el texto a HTML para manipularlo
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            // Buscamos la tarjeta azul por su atributo o clase
            const profileCard = doc.querySelector('.profile-card');
            
            if(profileCard) {
                // Le quitamos márgenes sobrantes para que ajuste perfecto
                profileCard.style.margin = '0';
                profileCard.style.boxShadow = 'none';
                // La inyectamos limpia
                document.getElementById('contenidoPerfilAsesor').innerHTML = profileCard.outerHTML;
            }
        });
});