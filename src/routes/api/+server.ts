import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return new Response(JSON.stringify(
        {
            city: "Leicester",
            state: "Leicestershire",
            country: "UK",
            slack_id: "U054VC2KM9P",
            extra: "hi im amber idk what to put here"
        }
    ));
};