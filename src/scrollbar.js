module.exports = function ({ addUtilities }) {
    const utilities = {
      '.hide-scrollbar::-webkit-scrollbar': {
        display: 'none',
      },
      // You might need additional styles for other browsers (Firefox, Edge, etc.)
      // Add them in a similar fashion if needed
    };
  
    addUtilities(utilities, ['responsive']);
  };