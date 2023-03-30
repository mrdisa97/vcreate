module.exports.ComponentTemplate = (templateName, lang = '', sass = false) => {
  return `<template>
    <div class="${templateName.toLowerCase()}">
      <h1>${templateName}</h1>
    </div>
  </template>
  
  <script${lang ? ` lang="${lang}"` : ''} setup>
    // Scripts here
  </script>
  
  <style${sass ? ` lang="sass"` : ''}>
    .${templateName.toLowerCase()}{
      /* Styling here */
    }
  </style>
  `;
};
