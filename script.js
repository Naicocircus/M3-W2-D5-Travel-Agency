document.addEventListener("DOMContentLoaded", function () {

    // Toggle on click ---------------------------
   
    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
  

        if (!section) return;
  
      
        section.classList.toggle('hidden');
    }
  
    
    document.querySelectorAll('.collapse-btn').forEach(button => {
        const sectionId = button.getAttribute('data-target'); 
        
        button.addEventListener('click', function () {
        
          toggleSection(sectionId);
          
         
          button.innerText = document.getElementById(sectionId).classList.contains('hidden') ? 'Show' : 'Collapse';
        });
    });
  

    // Funzione per l'offcanvas ------------------
    function closeOffcanvas(event) {
        const offcanvasElement = document.getElementById('offcanvasExample');
        if (offcanvasElement) {
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide();
        }
    }

 
    document.querySelectorAll('.link-list a').forEach(link => {
        link.addEventListener('click', function (event) {
            closeOffcanvas();
        });
    });

    // Funzione per chiudere il modale ------------
    const sendButton = document.querySelector("#contactModal .btn-primary");
    if (sendButton) {
        sendButton.addEventListener("click", function () {
            const contactModal = document.getElementById("contactModal");
            if (contactModal) {
                const modalInstance = bootstrap.Modal.getInstance(contactModal);
                modalInstance.hide();
            }
        });
    }

    // Journey counter ---------------------------
    const totalImages = document.querySelectorAll("img").length;
    const imageCounter = document.getElementById("imageCounter");

    if (imageCounter && imageCounter.querySelector(".badge")) {
        imageCounter.querySelector(".badge").textContent = totalImages;
    }

});