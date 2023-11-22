import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("hello");

  console.log("query", searchParams);

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("hello");

  const body = request.body;

  let passedValue = await new Response(body).text();
  let valueToJson = JSON.parse(passedValue);

  console.log(valueToJson);

  return new Response(body, {
    status: 200,
    statusText: "successfully api send",
  });
}
