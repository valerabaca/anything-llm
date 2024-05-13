import { API_BASE } from "./constants";

export default {
  home: () => {
    return "/apps/anything-llm/";
  },
  login: (noTry = false) => {
    return `/apps/anything-llm/login${noTry ? "?nt=1" : ""}`;
  },
  onboarding: {
    home: () => {
      return "/apps/anything-llm/onboarding";
    },
    survey: () => {
      return "/apps/anything-llm/onboarding/survey";
    },
    llmPreference: () => {
      return "/apps/anything-llm/onboarding/llm-preference";
    },
    embeddingPreference: () => {
      return "/apps/anything-llm/onboarding/embedding-preference";
    },
    vectorDatabase: () => {
      return "/apps/anything-llm/onboarding/vector-database";
    },
    userSetup: () => {
      return "/apps/anything-llm/onboarding/user-setup";
    },
    dataHandling: () => {
      return "/apps/anything-llm/onboarding/data-handling";
    },
    createWorkspace: () => {
      return "/apps/anything-llm/onboarding/create-workspace";
    },
  },
  github: () => {
    return "https://github.com/Mintplex-Labs/anything-llm";
  },
  discord: () => {
    return "https://discord.com/invite/6UyHPeGZAC";
  },
  docs: () => {
    return "https://docs.useanything.com";
  },
  mailToMintplex: () => {
    return "mailto:team@mintplexlabs.com";
  },
  hosting: () => {
    return "https://my.mintplexlabs.com/aio-checkout?product=anythingllm";
  },
  workspace: {
    chat: (slug) => {
      return `/apps/anything-llm/workspace/${slug}`;
    },
    settings: {
      generalAppearance: (slug) => {
        return `/apps/anything-llm/workspace/${slug}/settings/general-appearance`;
      },
      chatSettings: (slug) => {
        return `/apps/anything-llm/workspace/${slug}/settings/chat-settings`;
      },
      vectorDatabase: (slug) => {
        return `/apps/anything-llm/workspace/${slug}/settings/vector-database`;
      },
      members: (slug) => {
        return `/apps/anything-llm/workspace/${slug}/settings/members`;
      },
      agentConfig: (slug) => {
        return `/apps/anything-llm/workspace/${slug}/settings/agent-config`;
      },
    },
    thread: (wsSlug, threadSlug) => {
      return `/apps/anything-llm/workspace/${wsSlug}/t/${threadSlug}`;
    },
  },
  apiDocs: () => {
    return `${API_BASE}/docs`;
  },
  settings: {
    system: () => {
      return `/apps/anything-llm/settings/system-preferences`;
    },
    users: () => {
      return `/apps/anything-llm/settings/users`;
    },
    invites: () => {
      return `/apps/anything-llm/settings/invites`;
    },
    workspaces: () => {
      return `/apps/anything-llm/settings/workspaces`;
    },
    chats: () => {
      return "/apps/anything-llm/settings/workspace-chats";
    },
    llmPreference: () => {
      return "/apps/anything-llm/settings/llm-preference";
    },
    transcriptionPreference: () => {
      return "/apps/anything-llm/settings/transcription-preference";
    },
    embedder: {
      modelPreference: () => "/apps/anything-llm/settings/embedding-preference",
      chunkingPreference: () => "/apps/anything-llm/settings/text-splitter-preference",
    },
    embeddingPreference: () => {
      return "/apps/anything-llm/settings/embedding-preference";
    },
    vectorDatabase: () => {
      return "/apps/anything-llm/settings/vector-database";
    },
    security: () => {
      return "/apps/anything-llm/settings/security";
    },
    appearance: () => {
      return "/apps/anything-llm/settings/appearance";
    },
    apiKeys: () => {
      return "/apps/anything-llm/settings/api-keys";
    },
    logs: () => {
      return "/apps/anything-llm/settings/event-logs";
    },
    privacy: () => {
      return "/apps/anything-llm/settings/privacy";
    },
    embedSetup: () => {
      return `/apps/anything-llm/settings/embed-config`;
    },
    embedChats: () => {
      return `/apps/anything-llm/settings/embed-chats`;
    },
  },
};
