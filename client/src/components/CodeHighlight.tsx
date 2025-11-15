interface CodeHighlightProps {
  code: string;
  language: 'flutter' | 'kotlin' | 'swift';
}

export function CodeHighlight({ code, language }: CodeHighlightProps) {
  const highlightFlutter = (code: string) => {
    const lines = code.split('\n');
    return lines.map((line, i) => {
      // Comments
      if (line.trim().startsWith('//')) {
        return <div key={i} className="text-muted-foreground">{line}</div>;
      }
      
      // Process the line with syntax highlighting
      let highlighted = line;
      
      // Keywords
      const keywords = ['import', 'final', 'await', 'async', 'var', 'const', 'class', 'return', 'if', 'else', 'for', 'while'];
      keywords.forEach(keyword => {
        highlighted = highlighted.replace(
          new RegExp(`\\b(${keyword})\\b`, 'g'),
          '<span class="text-purple-400">$1</span>'
        );
      });
      
      // Strings
      highlighted = highlighted.replace(
        /('([^'\\]|\\.)*')/g,
        '<span class="text-emerald-400">$1</span>'
      );
      
      // Function calls and types
      highlighted = highlighted.replace(
        /\b([A-Z][a-zA-Z0-9]*)\b/g,
        '<span class="text-blue-400">$1</span>'
      );
      
      // Property names
      highlighted = highlighted.replace(
        /(\w+):/g,
        '<span class="text-sky-300">$1</span>:'
      );
      
      // Booleans and null
      highlighted = highlighted.replace(
        /\b(true|false|null)\b/g,
        '<span class="text-orange-400">$1</span>'
      );
      
      return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
    });
  };

  const highlightKotlin = (code: string) => {
    const lines = code.split('\n');
    return lines.map((line, i) => {
      if (line.trim().startsWith('//')) {
        return <div key={i} className="text-muted-foreground">{line}</div>;
      }
      
      let highlighted = line;
      
      const keywords = ['import', 'val', 'var', 'fun', 'class', 'object', 'return', 'if', 'else', 'when', 'to', 'try', 'catch'];
      keywords.forEach(keyword => {
        highlighted = highlighted.replace(
          new RegExp(`\\b(${keyword})\\b`, 'g'),
          '<span class="text-purple-400">$1</span>'
        );
      });
      
      highlighted = highlighted.replace(
        /("([^"\\]|\\.)*")/g,
        '<span class="text-emerald-400">$1</span>'
      );
      
      highlighted = highlighted.replace(
        /\b([A-Z][a-zA-Z0-9]*)\b/g,
        '<span class="text-blue-400">$1</span>'
      );
      
      highlighted = highlighted.replace(
        /\b(true|false|null)\b/g,
        '<span class="text-orange-400">$1</span>'
      );
      
      highlighted = highlighted.replace(
        /(\w+)\s*=/g,
        '<span class="text-sky-300">$1</span> ='
      );
      
      return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
    });
  };

  const highlightSwift = (code: string) => {
    const lines = code.split('\n');
    return lines.map((line, i) => {
      if (line.trim().startsWith('//')) {
        return <div key={i} className="text-muted-foreground">{line}</div>;
      }
      
      let highlighted = line;
      
      const keywords = ['import', 'let', 'var', 'func', 'class', 'struct', 'return', 'if', 'else', 'try', 'await', 'async', 'guard'];
      keywords.forEach(keyword => {
        highlighted = highlighted.replace(
          new RegExp(`\\b(${keyword})\\b`, 'g'),
          '<span class="text-purple-400">$1</span>'
        );
      });
      
      highlighted = highlighted.replace(
        /("([^"\\]|\\.)*")/g,
        '<span class="text-emerald-400">$1</span>'
      );
      
      highlighted = highlighted.replace(
        /\b([A-Z][a-zA-Z0-9]*)\b/g,
        '<span class="text-blue-400">$1</span>'
      );
      
      highlighted = highlighted.replace(
        /\b(true|false|nil)\b/g,
        '<span class="text-orange-400">$1</span>'
      );
      
      highlighted = highlighted.replace(
        /"([^"]+)":/g,
        '<span class="text-emerald-400">"$1"</span><span class="text-sky-300">:</span>'
      );
      
      return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
    });
  };

  const getHighlightedCode = () => {
    switch (language) {
      case 'flutter':
        return highlightFlutter(code);
      case 'kotlin':
        return highlightKotlin(code);
      case 'swift':
        return highlightSwift(code);
      default:
        return code.split('\n').map((line, i) => <div key={i}>{line}</div>);
    }
  };

  return (
    <pre className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed min-h-[350px] md:min-h-[400px]">
      <code>{getHighlightedCode()}</code>
    </pre>
  );
}
