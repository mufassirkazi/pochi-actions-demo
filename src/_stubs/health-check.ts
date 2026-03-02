// STUB: Auto-generated in TEST_MODE — replace with real implementation
//
// Task: Add health check endpoint
// Description: Implement GET /health endpoint in server

import type { Request, Response } from "express";

export function healthCheck(_req: Request, res: Response): void {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
}
