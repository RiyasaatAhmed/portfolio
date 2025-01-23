interface ScrollOptions {
  behavior?: ScrollBehavior;
  offset?: number;
}

export const smoothScrollToSection = (
  id: string,
  options: ScrollOptions = {},
  document: Document = window.document
) => {
  const { behavior = "smooth", offset = 0 } = options;
  const element = document.getElementById(id);
  console.log(offset);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: behavior,
    });
  }
};
