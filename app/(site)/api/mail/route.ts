import { NextRequest } from "next/server";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("hello");

    const body = request.body;
    let passedValue = await new Response(body).text();
    let dataToJson = JSON.parse(passedValue);

    const message = `
      Tack för ditt meddelande! En av våra representanter kommer att kontakta dig snart. Vid mer akuta ärenden, var vänlig ring direkt på 08-30 22 41
    `;

    const data = {
      to: dataToJson.email,
      from: "order@jour365.se",
      subject: "Bekräftelse: Ditt meddelande till oss är mottaget",
      text: message,
      html: message.replace("\r\n/g", "<br/>"),
    };

    await mail.send(data);

    //----------------------- Now, send an email to the company with user details
    const companyMessage = `
      Meddelande från användare: \r\n/g
      Namn: ${dataToJson.name} \r\n/g
      Telefonnummer: ${dataToJson.phone} \r\n/g
      email: ${dataToJson.phone} \r\n/g
      zipCode: ${dataToJson.zipCode} \r\n/g
      postalCode: ${dataToJson.postalCode} \r\n/g
      address: ${dataToJson.address} \r\n/g
      photo: ${dataToJson.photo},
      Meddelande: ${dataToJson.message} \r\n/g
    `;

    const companyData = {
      to: "wordpress@jour365.se", // Replace with the company's email
      from: "order@jour365.se",
      subject: "Nytt meddelande från användare",
      text: companyMessage,
      html: companyMessage.replace("\r\n/g", "<br/>"),
    };

    await mail.send(companyData);

    return new Response(JSON.stringify({ message: "Mail sent successfully" }), {
      status: 200,
      statusText: "Successfully sent",
    });
  } catch (error) {
    // console.error(error);

    return new Response(
      JSON.stringify({ message: "Something went wrong", error: error }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
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
