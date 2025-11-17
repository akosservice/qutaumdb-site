import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CodeHighlight } from "./CodeHighlight";

const codeExamples = {
  flutter: `// Offline encrypted database
import 'package:qutaumdb/qutaumdb.dart';

// Initialize database
final db = await QutaumDB.init(
  encryptionKey: deviceKey,
  path: './local.qdb'
);

// Write encrypted document
await db.collection('notes').insert({
  'id': uuid(),
  'title': 'My Secret Note',
  'content': 'This data never leaves my device',
  'encrypted': true
});

// Query offline data
final notes = await db.collection('notes')
  .where('encrypted', isEqualTo: true)
  .get();`,
  
  kotlin: `// Offline encrypted database
import com.qutaumdb.QutaumDB
import com.qutaumdb.Collection

// Initialize database
val db = QutaumDB.init(
    encryptionKey = deviceKey,
    path = "./local.qdb"
)

// Write encrypted document
db.collection("notes").insert(mapOf(
    "id" to uuid(),
    "title" to "My Secret Note",
    "content" to "This data never leaves my device",
    "encrypted" to true
))

// Query offline data
val notes = db.collection("notes")
    .where("encrypted", equalTo = true)
    .get()`,

  swift: `// Offline encrypted database
import QutaumDB

// Initialize database
let db = try await QutaumDB.init(
    encryptionKey: deviceKey,
    path: "./local.qdb"
)

// Write encrypted document
try await db.collection("notes").insert([
    "id": UUID().uuidString,
    "title": "My Secret Note",
    "content": "This data never leaves my device",
    "encrypted": true
])

// Query offline data
let notes = try await db.collection("notes")
    .where("encrypted", isEqualTo: true)
    .get()`
};

export default function HeroSplit() {
  const [activeTab, setActiveTab] = useState("flutter");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetQutaumDB = () => {
    console.log('Get QutaumDB clicked');
  };

  const handleComingSoon = () => {
    console.log('Coming Soon clicked');
  };

  return (
    <section className="min-h-screen flex items-center pt-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" data-testid="text-hero-title">
              Run Encrypted <a className="text-primary"> Databases </a>
 Everywhere
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-description">
              QutaumDB is a offline database engine that lets developers create secure, encrypted local storage for mobile apps, desktop apps, and embedded systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="text-base px-8"
              onClick={handleGetQutaumDB}
              data-testid="button-get-qutaumdb"
            >
              Get QutaumDB
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-8"
              onClick={handleComingSoon}
              data-testid="button-coming-soon"
            >
              Coming Soon
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center text-sm">
            <Badge variant="secondary" className="font-mono" data-testid="badge-version">
              v0.1.0-beta
            </Badge>
            <span className="text-muted-foreground" data-testid="text-beta-status">
              Developer Beta Opening Shortly
            </span>
          </div>
        </div>

        <Card className="overflow-hidden bg-muted/30 border-border/50 w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="bg-muted/50 px-3 md:px-4 py-2 md:py-3 flex items-center justify-between border-b border-border/50 flex-wrap gap-2">
              <TabsList className="bg-transparent h-auto p-0 gap-1" data-testid="tabs-language">
                <TabsTrigger 
                  value="flutter" 
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                  data-testid="tab-flutter"
                >
                  Flutter
                </TabsTrigger>
                <TabsTrigger 
                  value="kotlin"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                  data-testid="tab-kotlin"
                >
                  Kotlin
                </TabsTrigger>
                <TabsTrigger 
                  value="swift"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                  data-testid="tab-swift"
                >
                  Swift
                </TabsTrigger>
              </TabsList>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
                data-testid="button-copy"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
              </Button>
            </div>

            <div className="relative">
              <TabsContent value="flutter" className="m-0" data-testid="code-flutter">
                <CodeHighlight code={codeExamples.flutter} language="flutter" />
              </TabsContent>

              <TabsContent value="kotlin" className="m-0" data-testid="code-kotlin">
                <CodeHighlight code={codeExamples.kotlin} language="kotlin" />
              </TabsContent>

              <TabsContent value="swift" className="m-0" data-testid="code-swift">
                <CodeHighlight code={codeExamples.swift} language="swift" />
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>

<div className="absolute bottom-8 left-0 right-0 text-center hidden md:block">
  <p className="text-sm text-muted-foreground" data-testid="text-documentation-link">
    Learn more about QutaumDB with our{" "}
    <a href="#documentation" className="text-primary hover:underline">
      documentation
    </a>
    .
  </p>
</div>
    </section>
  );
}
