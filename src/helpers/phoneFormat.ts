export const phoneFormat = (
  phoneNumber: string | number,
  withPlus: boolean = true,
) => {
  const cleaned = String(phoneNumber).replace(/\D/g, "");
  const regex = cleaned.match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

  if (!regex) {
    return "";
  }

  const formatted = !regex[2]
    ? regex[1]
    : `${regex[1]}(${regex[2]})` +
      (regex[3] ? ` ${regex[3]}` : "") +
      (regex[4] ? ` ${regex[4]}` : "") +
      (regex[5] ? ` ${regex[5]}` : "");

  if (withPlus) {
    return `+${formatted}`;
  } else {
    return formatted;
  }
};
