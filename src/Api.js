export const fetchAPI = (date) => {
  const day = new Date(date).getDay();
    if (day === 0 || day === 6) {
    return ["18:00", "19:00", "20:00"];
  }
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};
export const submitAPI = (formData) => {
  console.log("Form submitted:", formData);
  return true; 
};

