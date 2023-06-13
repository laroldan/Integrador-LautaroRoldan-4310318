const submitForm = () => {
  let name = document.getElementById("name");
  if (name.value.trim() === "") {
    swal.fire({
      title: "Error!",
      text: "Debe colocar su nombre",
      icon: "error",
    });
    return;
  }

  let surname = document.getElementById("surname");
  if (surname.value.trim() === "") {
    swal.fire({
      title: "Error!",
      text: "Debe colocar su apellido",
      icon: "error",
    });
    return;
  }

  let email = document.getElementById("email");
  if (email.value === "") {
    swal.fire({
      title: "Error!",
      text: "Debe colocar su email",
      icon: "error",
    });
    return;
  }

  let isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    email.value
  );

  if (!isEmailValid) {
    swal.fire({
      title: "Error!",
      text: "Debe ingresar un email válido",
      icon: "error",
    });
    return;
  }

  let quantity = document.getElementById("quantity");
  if (quantity.value <= 0) {
    swal.fire({
      title: "Error!",
      text: "Debe colocar una cantidad mayor a cero",
      icon: "error",
    });
    return;
  }

  let category = document.getElementById("category");
  if (category.value === "") {
    swal.fire({
      title: "Error!",
      text: "Debe seleccionar una categoría",
      icon: "error",
    });
    return;
  }

  switch (category.value) {
    case "1":
      totalCost = 200 * quantity.value - 200 * quantity.value * 0.8;
      break;
    case "2":
      totalCost = 200 * quantity.value - 200 * quantity.value * 0.5;
      break;
    case "3":
      totalCost = 200 * quantity.value - 200 * quantity.value * 0.15;
      break;
    default:
      break;
  }

  document.getElementById(
    "totalCharge"
  ).placeholder = `Total a Pagar: $ ${totalCost}`;
};

submitButton.addEventListener("click", () => submitForm());

let form = document.getElementById("form");

const handleSubmit = (e) => {
  e.preventDefault();
};

form.addEventListener("submit", (e) => handleSubmit(e));

const resetFields = () => {
  form.reset();
  document.getElementById("totalCharge").placeholder = "Total a Pagar: $";
};

resetButton.addEventListener("click", () => resetFields());
