import React from 'react';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  // Simple markdown-to-React renderer
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let inCodeBlock = false;
    let codeBlockContent = '';

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 my-6 ml-4">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-muted-foreground leading-relaxed">
                {renderInlineMarkdown(item.replace(/^-\s*/, ''))}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const renderInlineMarkdown = (text: string): React.ReactNode => {
      // Handle bold **text**
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Handle italic *text*
      text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
      // Handle inline code `code`
      text = text.replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>');
      
      return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre key={`code-${elements.length}`} className="bg-muted p-4 rounded-lg my-6 overflow-x-auto">
              <code className="text-sm font-mono">{codeBlockContent}</code>
            </pre>
          );
          codeBlockContent = '';
          inCodeBlock = false;
        } else {
          // Start code block
          flushList();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent += (codeBlockContent ? '\n' : '') + line;
        return;
      }

      // Handle headings
      if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${elements.length}`} className="text-4xl font-bold text-foreground mt-12 mb-6 first:mt-0">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-3xl font-bold text-foreground mt-10 mb-4">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-2xl font-semibold text-foreground mt-8 mb-4">
            {line.substring(4)}
          </h3>
        );
      }
      // Handle list items
      else if (line.startsWith('- ')) {
        currentList.push(line);
      }
      // Handle emphasis/italic text starting lines
      else if (line.startsWith('*') && line.endsWith('*') && !line.includes(' ')) {
        flushList();
        elements.push(
          <p key={`italic-${elements.length}`} className="text-lg italic text-muted-foreground my-6 text-center">
            {line.substring(1, line.length - 1)}
          </p>
        );
      }
      // Handle horizontal rules
      else if (line === '---') {
        flushList();
        elements.push(
          <hr key={`hr-${elements.length}`} className="border-border my-8" />
        );
      }
      // Handle empty lines
      else if (line.trim() === '') {
        flushList();
      }
      // Handle regular paragraphs
      else if (line.trim() !== '') {
        flushList();
        elements.push(
          <p key={`p-${elements.length}`} className="text-muted-foreground leading-relaxed my-6">
            {renderInlineMarkdown(line)}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderContent(content)}
    </div>
  );
};

export default MarkdownContent;