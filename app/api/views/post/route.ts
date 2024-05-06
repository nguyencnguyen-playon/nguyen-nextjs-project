import { NextResponse } from 'next/server'

import { tursoClient } from '@/libs/tursoClient';
import { PostValidation, postSchema } from '@/models/Schema';


export const POST = async (request: Request) => {
  const json = await request.json();

  try {
    const post = await tursoClient
      .insert(postSchema)
      .values(json)
      .returning();

    console.log('A new post has been created');

    return NextResponse.json({
      id: post[0]?.id,
    });
  } catch (error) {
    console.error(error, 'An error occurred while creating a post');

    return NextResponse.json({}, { status: 500 });
  }
}

export const GET = async (request: Request) => {
  try {
    const post = await tursoClient.select().from(postSchema).all();
    console.log('A new post has been created');

    return NextResponse.json(post);
  } catch (error) {
    console.error(error, 'An error occurred while creating a post');

    return NextResponse.json({}, { status: 500 });
  }
}