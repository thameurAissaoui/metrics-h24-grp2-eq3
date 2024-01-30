export class Response {
    constructor(code, message, results, count, links) {
        this.code = code;
        this.count = count;
        this.message = message;
        this.links = links;
        this.results = results;
    }

    static ok(results, count, links) {
        return new Response(200, "OK", results, count, links);
    }

    static badRequest(message) {
        return new Response(400, message);
    }

    static notFound(message) {
        return new Response(404, message);
    }

    static serverError(message) {
        return new Response(505, message);
    }
}