import { IPost } from "@/interfaces";

export const getBaseUrl = () => {
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    return 'http://localhost:3000';
};

export const getPaginatedData = (data?: Array<IPost>, page = 1, size = 5) => {
    if (!data || data?.length === 0) return { paginatedData: [], totalPages: 0 };
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(data.length / size);
    const paginatedData = data.slice(startIndex, endIndex);
    return { paginatedData, totalPages };
};