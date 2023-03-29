module.exports.ComponentTemplate = (templateName, lang = '') => {
  return `<template>
    <div>
      ${templateName}
    </div>
  </template>
  
  <script${lang ? ` lang="${lang}"` : ''} setup>
    // Import statements go here
  </script>
  
  <style${lang ? ` lang="${lang}"` : ''}></style>
  `;
}
