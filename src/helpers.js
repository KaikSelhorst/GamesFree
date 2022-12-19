export function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outSideData = "data-outside";

  function handleOutsideClick({ target }) {
    if (!element.contains(target)) {
      element.removeAttribute(outSideData);
      events.forEach((event) =>
        html.removeEventListener(event, handleOutsideClick)
      );
      // Executando a Função
      callback();
    }
  }

  // Verificando se o Elemento Contem o
  // Atributo Data-outside
  if (!element.hasAttribute(outSideData)) {
    // |Evitando ser adicionado varios eventos no HTML
    events.forEach((event) =>
      setTimeout(() => html.addEventListener(event, handleOutsideClick), 0)
    );
  }
  element.setAttribute(outSideData, "");
}
