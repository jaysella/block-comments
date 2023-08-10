import moment from "moment";
import { ImageResponse } from "next/server";

export const runtime = "edge";

function getStringFromChar(char: string): string {
  return String.fromCharCode(parseInt(char));
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?id=<id>
    const hasId = searchParams.has("id");
    if (!hasId) {
      throw new Error("No Sprint ID provided");
    }

    const id = searchParams.get("id")!;
    const idComponents = id.split("-");

    if (idComponents.length !== 7) {
      throw new Error("Invalid count of ID components");
    }

    let firstName = "";
    const firstNameChars = idComponents[0].replace("u", "").split("");
    if (firstNameChars.length === 0) {
      throw new Error("Invalid first name: not provided");
    }
    firstName += getStringFromChar(firstNameChars[0] + firstNameChars[1]);
    firstName += getStringFromChar(firstNameChars[2] + firstNameChars[3]);

    let nuid = "";
    const nuidChars = idComponents[1].replace("n", "").match(/.{1,2}/g) ?? [];
    if (nuidChars.length < 7) {
      throw new Error("Invalid NUID: too short");
    } else if (nuidChars.length > 9) {
      throw new Error("Invalid NUID: too long");
    }
    nuidChars.forEach((c) => {
      nuid += getStringFromChar(c);
    });

    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-slate-100">
          <div tw="flex flex-col">
            <h1 tw="pl-4 w-95 -mt-2 font-bold">Sprint Simulation Recap</h1>

            <div tw="flex flex-col w-full border rounded-lg border-slate-200">
              <div tw="flex items-center px-4 py-3 border-b border-b-slate-200">
                <div tw="font-medium uppercase text-slate-600 w-48">Name</div>
                <div tw="mt-1 font-mono mt-0">
                  {firstName.substring(0, 2).toUpperCase() + "·".repeat(4)}
                </div>
              </div>

              <div tw="flex items-center px-4 py-3 border-b border-b-slate-200">
                <div tw="font-medium uppercase text-slate-600 w-48">NUID</div>
                <div tw="mt-1 font-mono mt-0">
                  {"·".repeat(3) + nuid.slice(-3)}
                </div>
              </div>

              <div tw="flex items-center px-4 py-3 border-b border-b-slate-200">
                <div tw="font-medium uppercase text-slate-600 w-48">
                  Timestamp
                </div>
                <div tw="mt-1 font-mono mt-0">
                  {moment().format("MMMM D, YYYY [at] h:mm a").toUpperCase()}
                </div>
              </div>

              <div tw="flex items-center px-4 py-3 border-b border-b-slate-200">
                <div tw="font-medium uppercase text-slate-600 w-48">
                  Sprint Identifier
                </div>
                <div tw="mt-1 font-mono mt-0">{id}</div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 800,
        height: 400,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
