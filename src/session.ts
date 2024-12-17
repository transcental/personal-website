const sessions = new Set();

export function save_session(): string {
  const session_id: string = crypto.randomUUID();
  sessions.add(session_id);
  return session_id
}

export function has_session(session_id: string): Boolean {
  return sessions.has(session_id);
}