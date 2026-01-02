import { NextRequest, NextResponse } from "next/server";

const MOCK_POSTS = [
  { id: 1, title: "Welcome to Our Blog", content: "This is the first post." },
  { id: 2, title: "Next.js & TypeScript Tips", content: "Learn best practices." },
  { id: 3, title: "Async Programming in React", content: "Handling side effects smoothly." }
];

export async function GET(req: NextRequest) {
  // Simulate latency
  await new Promise((res) => setTimeout(res, 700));
  // Implement handler to return mock posts as JSON
  return NextResponse.json(MOCK_POSTS);
}
