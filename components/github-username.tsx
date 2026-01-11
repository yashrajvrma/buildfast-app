"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check, GitBranch, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface GitHubSetupSectionProps {
  githubId?: string;
  cloneCommand?: string;
  templateName: string;
  paymentId: string;
}

interface GitHubInviteResponse {
  success: boolean;
  message: string;
  cloneCommand?: string;
  repository?: string;
  githubUsername?: string;
  alreadyConfigured?: boolean;
}

export function GithubUsername({
  githubId: userGithubId,
  cloneCommand: initialCloneCommand,
  templateName,
  paymentId,
}: GitHubSetupSectionProps) {
  const [copied, setCopied] = useState(false);
  const [inputGithubId, setInputGithubId] = useState("");
  const [setupComplete, setSetupComplete] = useState(!!userGithubId);
  const [cloneCommand, setCloneCommand] = useState(initialCloneCommand || "");

  const mutation = useMutation({
    mutationFn: async (githubUsername: string) => {
      const { data } = await axios.post<GitHubInviteResponse>(
        "/api/github-org-invite",
        {
          githubId: githubUsername,
          paymentId,
        }
      );
      return data;
    },
    onSuccess: (data) => {
      if (data.success) {
        setSetupComplete(true);

        // Handle both new invitation and already configured cases
        if (data.cloneCommand) {
          setCloneCommand(data.cloneCommand);
        }

        // Show appropriate message
        if (data.alreadyConfigured) {
          toast.success("GitHub access already configured!");
        } else {
          toast.success(
            data.message ||
              "Repository invitation sent! Check your GitHub notifications."
          );
        }
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Failed to add GitHub ID. Please try again.";
      toast.error(errorMessage);
    },
  });

  const handleCopyCommand = async () => {
    if (!cloneCommand) return;

    await navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    toast.success("Clone command copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddGithubId = () => {
    const trimmedGithubId = inputGithubId.trim();

    if (!trimmedGithubId) {
      toast.error("Please enter a GitHub username");
      return;
    }

    // Basic validation for GitHub username format
    if (
      !/^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/.test(
        trimmedGithubId
      )
    ) {
      toast.error("Please enter a valid GitHub username");
      return;
    }

    mutation.mutate(trimmedGithubId);
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
          {cloneCommand ? (
            <>
              <div className="flex gap-2">
                <div
                  className={cn(
                    "flex-1 px-4 py-2.5 bg-secondary rounded-lg font-mono text-sm",
                    "text-foreground break-all select-all"
                  )}
                >
                  {cloneCommand}
                </div>
                <Button
                  onClick={handleCopyCommand}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0 bg-transparent w-10 h-10"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Check your GitHub notifications to accept the repository
                invitation and Copy and paste this command in your terminal.
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              GitHub access configured! Check your GitHub notifications for the
              repository invitation.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <Github className="w-5 h-5 text-primary" />
            <p className="text-sm font-medium text-foreground">
              Add GitHub Username
            </p>
          </div>
          {/* <p className="text-sm text-muted-foreground">
            Enter your GitHub username to get access to the{" "}
            <span className="font-medium">{templateName}</span> repository.
          </p> */}
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="e.g., octocat"
              value={inputGithubId}
              onChange={(e) => setInputGithubId(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddGithubId();
                }
              }}
              disabled={mutation.isPending}
              className="flex-1"
            />
            <Button
              onClick={handleAddGithubId}
              disabled={!inputGithubId.trim() || mutation.isPending}
              className="flex-shrink-0"
            >
              {mutation.isPending ? "Sending..." : "Send Invite"}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            You'll receive a repository invitation in your GitHub notifications.
          </p>
        </div>
      )}
    </div>
  );
}
