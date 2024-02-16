export type Item = {
    name: string;
    id: number;
    children?: Item[];
}