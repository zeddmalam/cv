import { careerHistory } from "@/data/objects";

export async function GET(request: Request) {
    return new Response (JSON.stringify(careerHistory));
}
