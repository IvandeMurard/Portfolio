export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offsetTop - 80, // Account for navbar height
      behavior: 'smooth'
    });
  }
};
