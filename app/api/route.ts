import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // defaults to auto

type Params = {};

export async function GET(request: Request) {
  const key = "671c172b96988f635ba17db7d0668dbc";

  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" +
      { key },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
}
