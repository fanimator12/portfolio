export interface Project {
    id: number,
    image: string,
    title: string,
    url: string,
    type: "software" | "photo" | "graphic",
    description: string | null
}