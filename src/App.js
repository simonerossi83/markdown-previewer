import logo from './logo.svg';
import './App.css';
import React from 'react';
import marked from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true
});

//---------------Functional component per gestire l'inuput, che poi renderizza tutto 
const App = () => {
    //Inizializzo lo stato
let markdownText = `# This is a header 
## This is a subheader
[This is a link (to my website)](https://www.skorpionfire.com)

**This is bolded text**

\`This is inline code\`


\`\`\`
This is a code block 
and another line of the code block
\`\`\`

- This is an unordered list item 
- This is another unordered list item
- This is a final unordered list item 

1. This is an ordered list item
2. This is another ordered list item
3. This is a final ordered list item

> This is a blockquote. If you type a lot of things, it will still wrap properly, which makes it awesome! 

![My logo](https://static.wixstatic.com/media/938923_46653fb24e0f4571876d61e035e6fdde~mv2.png/v1/fill/w_270,h_148,al_c,q_85,usm_0.66_1.00_0.01/Logo%20Skorpionfire_new.webp)
`;

    
  const [text, setText] = React.useState(markdownText);
  
  //Funzione per gestire il cambiamento dello stato
   const handleChange= ({target}) => {
    setText(target.value)
  }
     return(
    <>
      <textarea id="editor" name="editor" rows="35" cols="50" onChange={handleChange} value={text}> </textarea>
       <Markdown preview={text}/>
    </>
  );
}

//---------------Functional component, figlio di Input, che viene usato per dare la preview
const Markdown = props => {
  return(
    <div id="preview"    
      dangerouslySetInnerHTML={{
        __html: marked(props.preview) 
    }}
/>
  );
}


export default App;
