import { NextResponse } from 'next/server'
import { tursoClient } from '@/libs/tursoClient';
import { postSchema } from '@/models/Schema';


export const POST = async (request: Request) => {
  const json = await request.json();

  try {
    const post = await tursoClient
      .insert(postSchema)
      .values(json)
      .returning();

    return NextResponse.json({
      id: post[0]?.id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({}, { status: 500 });
  }
}

export const GET = async () => {
  try {
    const post = await tursoClient.select().from(postSchema).all();
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({}, { status: 500 });
  }
}