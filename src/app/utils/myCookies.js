export const getCookie = (name) => {
  if (typeof document !== "undefined") {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((c) => c.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  }
};
