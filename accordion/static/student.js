function AccordionBlock(runtime, element, data) {
  let accordionHtml = $(element).find('#xblock-accordion-student');
  (async () => {
    const { renderBlock } = await import(data.url);
    renderBlock(accordionHtml, data);
  })();
}
