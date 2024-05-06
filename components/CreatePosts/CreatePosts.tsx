'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostValidation } from '@/models/Schema';
import type { z } from 'zod';

type ICreatePostFormProps =
    | {
        edit: true;
        id: number;
        handleStopEditing: () => void;
    }
    | { edit?: false };

export const CreatePosts = (props: ICreatePostFormProps) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
    });
    const router = useRouter();

    const handleCreate = handleSubmit(async (data) => {

        console.log('data', data)

        await fetch(`/api/views/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, image_url: `https://picsum.photos/${Math.floor(Math.random() * 1000)}`, id: Date.now().toString() }),
        });
        reset();
        router.push('/');
    });

    console.log('errors', errors)

    return (
        <form onSubmit={handleCreate}>
            <div>
                <label
                    className="text-sm font-bold text-gray-700"
                >
                    name
                    <input
                        id={`username${props.edit ? `-${props.id}` : ''}`}
                        className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
                        {...register('name')}
                    />
                </label>
                {errors.name?.message && (
                    <div className="my-2 text-xs italic text-red-500">
                        {errors.name?.message}
                    </div>
                )}
            </div>

            <div className="mt-3">
                <label
                    className="text-sm font-bold text-gray-700"
                    htmlFor={`body${props.edit ? `-${props.id}` : ''}`}
                >
                    desc
                    <input
                        id={`body${props.edit ? `-${props.id}` : ''}`}
                        className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
                        {...register('desc')}
                    />
                </label>
                {errors.desc?.message && (
                    <div className="my-2 text-xs italic text-red-500">
                        {errors.desc?.message}
                    </div>
                )}
            </div>

            <div className="mt-5">
                <button
                    className="rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </form>
    );
};
