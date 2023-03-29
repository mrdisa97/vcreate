module.exports.ComponentTemplate = (templateName, lang = '') => {
  return `<template>
    <div class="${templateName.toLowerCase()}">
      <h1>${templateName}</h1>
    </div>
  </template>
  
  <script${lang ? ` lang="${lang}"` : ''} setup>
    // Scripts here
  </script>
  
  <style>
    .${templateName.toLowerCase()}{
      /* Styling here */
    }
  </style>
  `;
};
