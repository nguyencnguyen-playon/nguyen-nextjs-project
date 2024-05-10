export interface IPost {
    id?: number;
    name: string;
    desc: string;
    image_url: string;
}

export type PostFormType = {
    name?: string;
    desc?: string;
};