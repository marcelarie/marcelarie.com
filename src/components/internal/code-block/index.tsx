import React from 'react';
import { ReactNode } from 'react-markdown/src/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CodeBlockStyled from './styled';

type codeBlockI = {
    language: string;
    value: ReactNode;
};

const CodeBlock = ({ language, value }: codeBlockI) => {
    if (!value) return '';
    const cleanValue = value.toLocaleString();
    console.log(cleanValue);
    return (
        <CodeBlockStyled>
            <SyntaxHighlighter
                language={language}
                style={tomorrow}
                wrapLines={true}
                showLineNumbers={true}
                children={cleanValue.substring(0, cleanValue.length - 1)}
            />
        </CodeBlockStyled>
    );
};

export default CodeBlock;
