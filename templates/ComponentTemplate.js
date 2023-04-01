/**
 * Exports the component template
 * @param {String} templateName
 * @param {String} lang
 * @param {Boolean} scss
 * @param {Boolean} scoped
 * @returns String
 */
export const ComponentTemplate = (templateName, type, lang = '', scss = false, scoped = false) => {
  let scriptTag;
  if (type === 'composition') {
    scriptTag = `
<script${lang ? ` lang="${lang}"` : ''} setup>
  /* Composition scripts here */
</script>`;
  } else if (type === 'options') {
    scriptTag = `
<script${lang ? ` lang="${lang}"` : ''}>
  export default {
    data() {
      return {
        /* Data options here */
      };
    }
  }
</script>
    `;
  }

  return `<template>
  <div class="${templateName.toLowerCase()}">
    <h1>${templateName}</h1>
  </div>
</template>

${scriptTag}

<style${scss ? ` lang="scss"` : ''}${scoped ? ` scoped` : ''}>
  .${templateName.toLowerCase()}{
    /* Styling here */
  }
</style>
  `;
};
