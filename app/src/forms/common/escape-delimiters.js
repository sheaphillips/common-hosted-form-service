module.exports = function escapedDelimiters(textDelimiter, rowDelimiter, forceTextDelimiter) {
  let endOfLine = '\n';

  if (typeof textDelimiter !== 'string') {
    throw new TypeError('Invalid param "textDelimiter", must be a string.');
  }

  if (typeof rowDelimiter !== 'string') {
    throw new TypeError('Invalid param "rowDelimiter", must be a string.');
  }

  let textDelimiterRegex = new RegExp('\\' + textDelimiter, 'g');
  let escapedDelimiter = textDelimiter + textDelimiter;

  const enclosingCondition = (textDelimiter === '"') ?
    (value) => (value.indexOf(rowDelimiter) >= 0 ||
        value.indexOf(endOfLine) >= 0 ||
        value.indexOf('"') >= 0)
    : (value) => (value.indexOf(rowDelimiter) >= 0 ||
        value.indexOf(endOfLine) >= 0);

  return function(value) {
    if(forceTextDelimiter) value = '' + value;

    if (!value.replace) return value;
    // Escape the textDelimiters contained in the field
    value = value.replace(textDelimiterRegex, escapedDelimiter);

    // Escape the whole field if it contains a rowDelimiter or a linebreak or double quote
    if (forceTextDelimiter || enclosingCondition(value)) {
      value = textDelimiter + value + textDelimiter;
    }

    return value;
  };
};