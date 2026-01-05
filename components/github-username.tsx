"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check, GitBranch, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface GitHubSetupSectionProps {
  githubId?: string;
  cloneCommand: string;
  templateName: string;
}

export function GithubUsername({
  githubId: userGithubId,
  cloneCommand,
  templateName,
}: GitHubSetupSectionProps) {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputGithubId, setInputGithubId] = useState("");
  const [setupComplete, setSetupComplete] = useState(!!userGithubId);

  const handleCopyCommand = async () => {
    await navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddGithubId = async () => {
    if (!inputGithubId.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/github-org-invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          githubId: inputGithubId,
          paymentId: new URLSearchParams(window.location.search).get(
            "payment_id"
          ),
        }),
      });

      if (response.ok) {
        setSetupComplete(true);
      } else {
        alert("Failed to add GitHub ID. Please try again.");
      }
    } catch (error) {
      console.error("Error adding GitHub ID:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {setupComplete ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="w-5 h-5 text-primary" />
            <p className="text-sm font-medium text-foreground">
              Clone your repository
            </p>
          </div>
          <div className="flex gap-2">
            <div
              className={cn(
                "flex-1 px-4 py-3 bg-secondary rounded-lg font-mono text-sm",
                "text-foreground break-all select-all"
              )}
            >
              {cloneCommand}
            </div>
            <Button
              onClick={handleCopyCommand}
              variant="outline"
              size="icon"
              className="flex-shrink-0 bg-transparent"
            >
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Click the copy button and paste in your terminal to clone the
            repository.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <Github className="w-5 h-5 text-primary" />
            <p className="text-sm font-medium text-foreground">Add GitHub ID</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Enter your GitHub username to get access to the{" "}
            <span className="font-medium">{templateName}</span> repository.
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter your GitHub username"
              value={inputGithubId}
              onChange={(e) => setInputGithubId(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddGithubId();
                }
              }}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleAddGithubId}
              disabled={!inputGithubId.trim() || isLoading}
              className="flex-shrink-0"
            >
              {isLoading ? "Adding..." : "Send"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We'll add you to our GitHub organization and send you an invite to
            access the repository.
          </p>
        </div>
      )}
    </div>
  );
}
