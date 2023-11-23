import { NextRequest } from "next/server";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("hello");

  const body = request.body;
  let passedValue = await new Response(body).text();
  let valueToJson = JSON.parse(passedValue);

  const message = `
  Name: ${valueToJson.name}\r\n
  Email: ${valueToJson.email}\r\n
  Message: ${valueToJson.message}
  `;

  const data = {
    to: "neamulhaque2002@gmail.com",
    from: "hello@sunrises.se",
    subject: "Test web message",
    text: message,
    html: message.replace("\r\ng", "<br/>"),
  };

  (async () => {
    try {
      await mail.send(data);
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();

  return new Response(JSON.stringify(data), {
    status: 200,
    statusText: "successfully api send",
  });
}

// ------------get request

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
