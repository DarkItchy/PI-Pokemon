const validate = (value, pokemon) => {
  const errors = {};
  if (value.name) {
    const pokename = value.name.split("  ");
    if (!/^[ a-zA-Z ]+$/.test(value.name) || !value.name || pokename.length > 1)
      errors.name = "El nombre solo puede contener letras y no puede tener espacios consecutivos";
    if (
      pokemon.some(
        (el) => el.name.toLowerCase() === value.name.toLowerCase()
      )
    )
      errors.name = "Este pokemon ya existe";
    if (value.name.length > 20)
      errors.name = "El nombre no puede ser mayor a 20 caracteres";
  }
  if (value.hp) {
    if (
      value.hp < 1 ||
      value.hp > 255 ||
      !Number.isInteger(parseFloat(value.hp))
    )
      errors.hp = "La vida debe tener un valor entre 1-255";
  }
  if (value.atk) {
    if (
      value.atk < 5 ||
      value.atk > 190 ||
      !Number.isInteger(parseFloat(value.atk))
    )
      errors.atk = "El ataque debe ser tener un valor entre 5-190";
  }
  if (value.spatk) {
    if (
      value.spatk < 10 ||
      value.spatk > 165 ||
      !Number.isInteger(parseFloat(value.spatk))
    )
      errors.spatk = "El ataque especial debe ser tener un valor entre 10-165";
  }
  if (value.def) {
    if (
      value.def < 5 ||
      value.def > 250 ||
      !Number.isInteger(parseFloat(value.def))
    )
      errors.def = "La defensa debe tener un valor entre 5-250";
  }
  if (value.spdef) {
    if (
      value.spdef < 20 ||
      value.spdef > 250 ||
      !Number.isInteger(parseFloat(value.spdef))
    )
      errors.spdef = "La defensa especial debe tener un valor entre 20-250";
  }
  if (value.speed) {
    if (
      value.speed < 5 ||
      value.speed > 200 ||
      !Number.isInteger(parseFloat(value.speed))
    )
      errors.speed = "La velocidad debe tener un valor entre 5-200";
  }
  if (value.height) {
    if (
      value.height <= 1 ||
      value.height > 200 ||
      !Number.isInteger(parseFloat(value.height))
    )
      errors.height = "La altura debe tener un valor entre 1-200";
  }
  if (value.weight) {
    if (value.weight <= 1 || value.weight > 1000)
      errors.weight = "El peso debe tener un valor entre 1-1000";
  }
  if (value.types) {
    if (!value.types.length || value.types.length > 2)
      errors.types = "Se requiere al menos un tipo y maximo dos tipos";
    else {
      errors.types = false;
    }
  }
  return errors;
};

export default validate;
