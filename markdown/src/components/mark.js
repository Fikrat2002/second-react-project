import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import '../App.css';

const defaultMarkdown = `# Welcome to My Markdown Previewer!

## Here's a subheading...

And here are some neat tricks:

You can add inline code like \`<div></div>\`, surrounded by backticks.

\`\`\`
// this is an example of multi-line code:
function exampleFunction(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
    return codeBlock;
  }
}
\`\`\`

Text can also be made **bold**... pretty cool, right?

Or _italic_.

Or... combine both for **_emphasis!_**
And don't hesitate to ~~strike through~~ text.

You can add [links](https://www.freecodecamp.org) and
> Blockquotes too!

For advanced formatting, you can even create tables:

Column A | Column B | Column C
-------- | -------- | -------- 
Data 1   | Data 2   | Data 3
Data 4   | Data 5   | Data 6

- Lists are a handy feature as well.
  - With various levels of indentation.
    - Like this.

1. You can also create numbered lists.
1. Using the same number for each item works just fine!
1. And let's not forget about embedding images:
`;

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    setMarkdown(defaultMarkdown);
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="container">
      <div className="header">Editor</div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here..."
      />
      <div className="header">Previewer</div>
      <div
        id="preview"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}

export default MarkdownPreviewer;





