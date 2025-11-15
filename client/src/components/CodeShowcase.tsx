import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const codeExamples = {
  flutter: `import 'package:qutaumdb/qutaumdb.dart';

// Initialize QutaumDB
final db = QutaumDB('my_secure_db');

// Create a collection
final users = db.collection('users');

// Insert encrypted document
await users.insert({
  'name': 'John Doe',
  'email': 'john@example.com',
  'role': 'developer'
});

// Query data (automatically decrypted)
final devs = await users.find({
  'role': 'developer'
});`,
  
  kotlin: `import com.qutaumdb.QutaumDB

// Initialize QutaumDB
val db = QutaumDB("my_secure_db")

// Create a collection
val users = db.collection("users")

// Insert encrypted document
users.insert(mapOf(
    "name" to "John Doe",
    "email" to "john@example.com",
    "role" to "developer"
))

// Query data (automatically decrypted)
val devs = users.find(mapOf(
    "role" to "developer"
))`,

  swift: `import QutaumDB

// Initialize QutaumDB
let db = QutaumDB(name: "my_secure_db")

// Create a collection
let users = db.collection("users")

// Insert encrypted document
try await users.insert([
    "name": "John Doe",
    "email": "john@example.com",
    "role": "developer"
])

// Query data (automatically decrypted)
let devs = try await users.find([
    "role": "developer"
])`
};

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState("flutter");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-accent/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" data-testid="text-code-title">
          Simple, Encrypted, Powerful
        </h2>

        <Card className="p-0 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="bg-muted/50 px-6 py-4 flex items-center justify-between border-b border-border">
              <TabsList data-testid="tabs-sdk">
                <TabsTrigger value="flutter" data-testid="tab-flutter">Flutter</TabsTrigger>
                <TabsTrigger value="kotlin" data-testid="tab-kotlin">Kotlin</TabsTrigger>
                <TabsTrigger value="swift" data-testid="tab-swift">Swift</TabsTrigger>
              </TabsList>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
                data-testid="button-copy-code"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <TabsContent value="flutter" className="m-0">
              <pre className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed" data-testid="code-flutter">
                <code>{codeExamples.flutter}</code>
              </pre>
            </TabsContent>

            <TabsContent value="kotlin" className="m-0">
              <pre className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed" data-testid="code-kotlin">
                <code>{codeExamples.kotlin}</code>
              </pre>
            </TabsContent>

            <TabsContent value="swift" className="m-0">
              <pre className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed" data-testid="code-swift">
                <code>{codeExamples.swift}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
