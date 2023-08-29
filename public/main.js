
document.querySelectorAll('input[name="documentType"]').forEach(function(el) {
    el.addEventListener("change", function() {
      document.getElementById("documentNumber").disabled = false;
    });
  });
  
document.getElementById("Form").onsubmit = function() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let documentType = document.querySelector('input[name="documentType"]:checked');
    let documentNumber = document.getElementById("documentNumber").value;
    let address = document.getElementById("address").value;
    let identity = document.querySelector('input[name="identity"]:checked');
    let otherIdentity = document.getElementById("otherIdentity").value;
    let isValid = true;
    
    // Validate firstName
    if (firstName.length > 0) {
      if (firstName.length < 3 || firstName.length > 10) {
        alert("El primer nombre debe tener entre 3 y 10 caracteres.");
        isValid = false;
      }
      
      if (!/^[a-zA-Z\u00C0-\u00FF]*$/.test(firstName)) {
        alert("El primer nombre solo debe contener caracteres alfabéticos.");
        isValid = false;
      }
    }
    
    // Validate lastName
    if (lastName.length == 0) {
      alert("El campo 'Primer apellido' es obligatorio.");
      isValid = false;
    } else {
      if (lastName.length < 2 || lastName.length > 10) {
        alert("El primer apellido debe tener entre 2 y 10 caracteres.");
        isValid = false;
      }
      
      if (!/^[a-zA-Z\u00C0-\u00FF']*$/i.test(lastName)) {
        alert("El primer apellido solo debe contener caracteres alfabéticos.");
        isValid = false;
      }
    }
    
    // Validate email
    if (email.length == 0) {
      alert("El campo 'Email' es obligatorio y no debe estar vacío.");
      isValid = false;
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      alert("Tiene que ser un dominio valido.");
      isValid = false;
    }
    
    // Validate documentType and documentNumber
    if (documentType == null) {
      alert("El campo 'Tipo de documento' es obligatorio.");
      isValid = false;
    } else {
      if (documentType.value == "DNI") {
        if (!/^\d{1,3}(\.\d{3}){0,2}$/.test(documentNumber)) {
          alert("El número de DNI debe tener entre 7 y 8 dígitos y puede tener puntos como separadores de miles. Ejemplos válidos: '1.234.567', '12.234.567', '1234567', '12345678'.");
          isValid = false;
        }
      } else if (documentType.value == "CUIL") {
        if (!/^\d{2}-\d{8}-\d$|^\d{11}$/.test(documentNumber)) {
          alert("El CUIL debe tener 11 dígitos y puede tener guiones medios optativos. Ejemplos válidos: '20-33444555-6', '20334445556'.");
          isValid = false;
        }
      }
    }
    
    // Validate address
    if (address.length > 0) {
      if (address.length < 10 || address.length > 200) {
        alert("La dirección debe tener entre 10 y 200 caracteres.");
        isValid = false;
      }
      
      if (!/^[\w\s\u00C0-\u00FF\u0100-\u017F,°\/'"\-()]*$/i.test(address)) {
        alert("La dirección solo debe contener caracteres alfabéticos en español y portugués, espacios, números, comas, guiones, guiones medios, paréntesis, comillas simples y dobles, símbolo de grado '°' y barra '/'.");
        isValid = false;
      }
    }
    
    // Validate identity and otherIdentity
    if (identity == null) {
      alert("El campo 'Identidad' es obligatorio.");
      isValid = false;
    } else if (identity.value == "Otro") {
      if (otherIdentity.length == 0) {
        alert("El campo 'Especifique' es obligatorio si seleccionó 'Otro' como identidad.");
        isValid = false;
      } else if (otherIdentity.length < 2 || otherIdentity.length > 15) {
        alert("El campo 'Especifique' debe tener entre 2 y 15 caracteres.");
        isValid = false;
      }
    }
    
    return isValid;
}

document.querySelectorAll('input[name="identity"]').forEach(function(el) {
    el.addEventListener("change", function() {
      if (el.value == "Otro") {
        document.getElementById("otherIdentityX").style.display = "block";
      } else {
        document.getElementById("otherIdentityX").style.display = "none";
      }
    });
});

document.getElementById("country").addEventListener("change", function() {
  if (this.value == "Argentina") {
    document.getElementById("provinceA").style.display = "block";
  } else {
    document.getElementById("provinceA").style.display = "none";
  }
});
