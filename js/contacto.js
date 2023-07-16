  // Obtener el formulario y el mensaje de éxito
  const form = document.querySelector("form");
  const successMessage = document.getElementById("success-message");

  // Agregar el evento de escucha al formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario de manera predeterminada

    // Datos del formulario
    const formData = new FormData(form);

    // Realizar el envío del formulario utilizando Fetch API
    fetch("https://formspree.io/f/xzblbljg", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Si el envío fue exitoso, mostrar el mensaje de éxito
        successMessage.style.display = "block";
      } else {
        // Si ocurrió un error, mostrar un mensaje de error
        console.error("Error al enviar el formulario:", response.status, response.statusText);
      }
    })
    .catch(error => {
      console.error("Error en la solicitud:", error);
    });
  });







  