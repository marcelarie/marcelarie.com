import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type codeBlockI = {
    language: string;
    value: string;
};

const CodeBlock = ({ language, value }: codeBlockI) => {
    if (!value) return '';
    return (
        <SyntaxHighlighter
            language={language}
            style={tomorrow}
            wrapLines={true}
            showLineNumbers={true}
            children={value}
        />
    );
};

export default CodeBlock;
