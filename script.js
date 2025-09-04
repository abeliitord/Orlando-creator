
        document.getElementById('whatsappForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            
            // Número de WhatsApp (reemplaza con el número real con código de país)
           const phoneNumber = "18295181410"; 

            
            // Crear mensaje codificado para URL
            const encodedMessage = encodeURIComponent(`Hola, soy ${name}. Me gustaría hacer una seccion de fotos: ${message}`);
            
            // Crear enlace de WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Abrir enlace
            window.open(whatsappURL, '_blank');
        });
        
        // Smooth scrolling para los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    