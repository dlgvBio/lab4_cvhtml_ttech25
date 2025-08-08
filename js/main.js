document.addEventListener("DOMContentLoaded", () => {
  // 📨 Validación del formulario de contacto
  const formulario = document.getElementById("formulario");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre");
      const motivo = document.getElementById("motivo");
      const correo = document.getElementById("correo");

      const errorNombre = document.getElementById("error-nombre");
      const errorMotivo = document.getElementById("error-motivo");
      const errorCorreo = document.getElementById("error-correo");

      errorNombre.textContent = "";
      errorMotivo.textContent = "";
      errorCorreo.textContent = "";

      let valido = true;

      const nombreValor = nombre.value.trim();
      const soloLetrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

      if (nombreValor === "") {
        errorNombre.textContent = "Por favor ingresa tu nombre.";
        valido = false;
      } else if (!soloLetrasRegex.test(nombreValor)) {
        errorNombre.textContent = "El nombre solo debe contener letras y espacios.";
        valido = false;
      }

      const motivoTexto = motivo.value.trim();
      const motivoPalabras = motivoTexto.split(/\s+/).filter(p => p !== "").length;

      if (motivoTexto === "") {
        errorMotivo.textContent = "Por favor indica el motivo de contacto.";
        valido = false;
      } else if (motivoPalabras > 200) {
        errorMotivo.textContent = `Máximo 200 palabras. Actualmente tienes ${motivoPalabras}.`;
        valido = false;
      }

      const correoValor = correo.value.trim();
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (correoValor === "") {
        errorCorreo.textContent = "Por favor ingresa tu correo.";
        valido = false;
      } else if (!correoRegex.test(correoValor)) {
        errorCorreo.textContent = "Formato de correo inválido. Ej: nombre@dominio.com";
        valido = false;
      }

      if (valido) {
        alert("¡Gracias por tu mensaje, pronto te contactaré!");
        formulario.reset();
      }
    });
  }

  // Validación del formulario de registro
  const registroForm = document.getElementById("registroForm");
  if (registroForm) {
    registroForm.addEventListener("submit", (e) => {
      let valido = true;

      // Obtener campos y spans de error
      const nombre = document.getElementById("nombre");
      const correo = document.getElementById("correo");
      const password = document.getElementById("password");
      const imagenInput = document.getElementById("imagen");

      const errorNombre = document.getElementById("error-nombre");
      const errorCorreo = document.getElementById("error-correo");
      const errorPassword = document.getElementById("error-password");
      const errorImagen = document.getElementById("error-imagen");

      // Limpiar mensajes previos
      errorNombre.textContent = "";
      errorCorreo.textContent = "";
      errorPassword.textContent = "";
      errorImagen.textContent = "";

      // Validación de nombre
      const soloLetrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
      if (nombre.value.trim() === "") {
        errorNombre.textContent = "Por favor ingresa tu nombre.";
        valido = false;
      } else if (!soloLetrasRegex.test(nombre.value.trim())) {
        errorNombre.textContent = "El nombre solo debe contener letras y espacios.";
        valido = false;
      }

     // Validación de correo
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (correo.value.trim() === "") {
        errorCorreo.textContent = "Por favor ingresa tu correo.";
        valido = false;
      } else if (!correoRegex.test(correo.value.trim())) {
        errorCorreo.textContent = "Formato de correo inválido.";
        valido = false;
      }

      // Validación de contraseña
      if (password.value.trim() === "") {
        errorPassword.textContent = "Por favor ingresa una contraseña.";
        valido = false;
      } else if (password.value.trim().length < 6) {
        errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres.";
        valido = false;
      }

      // Validación de imagen
      if (!imagenInput.files || imagenInput.files.length === 0) {
        errorImagen.textContent = "Por favor selecciona una imagen de perfil.";
        valido = false;
      } else {
        const archivo = imagenInput.files[0];
        const tiposPermitidos = ["image/jpeg", "image/png"];
        if (!tiposPermitidos.includes(archivo.type)) {
          errorImagen.textContent = "Solo se permiten imágenes JPG o PNG.";
          valido = false;
        }
      }

      if (!valido) {
        e.preventDefault();
      }
    });
  }
});