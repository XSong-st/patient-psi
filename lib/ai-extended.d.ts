// ai-extended.d.ts
import "ai";

declare module "ai" {
  interface Message {
    role: "function" | "user" | "data" | "system" | "assistant" | "tool";
  }
}
