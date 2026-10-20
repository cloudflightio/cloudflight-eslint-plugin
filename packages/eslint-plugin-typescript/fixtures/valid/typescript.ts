export function greet(name: string): string {
    return `Hello ${name}`;
}

export async function loadGreeting(name: string): Promise<string> {
    const greeting = await Promise.resolve(greet(name));

    return greeting;
}
