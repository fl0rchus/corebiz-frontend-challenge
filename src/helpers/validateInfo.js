export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Preencha com seu nome completo";
  }
  if (!values.email) {
    errors.email = "Preencha com seu e-mail";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Preencha com um e-mail válido";
  }

  return errors;
}
