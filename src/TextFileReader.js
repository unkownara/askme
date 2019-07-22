import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import code from './text.txt';

class TextFileReader extends React.Component {
    state = { code }

    render() {
        console.log(this.state.code)
        return (
            <Editor
                {...this.props}
                value={this.state.code}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
        );
    }
}

export default TextFileReader;