"use server"

import { pool } from "@/postgres";
import { PoolClient } from "pg";

export type PostType = {id: number, title: string, content: string, category_ID: string, created_at: Date}

export default async function getRecentPosts({ client, offset }: { client?: PoolClient, offset: number }) {
  let isClientConnected: PoolClient | undefined = client;
  let res: PostType[] = [];

  try {
    !isClientConnected && (isClientConnected = await pool.connect())
    const response = await isClientConnected.query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET $1', [offset]);
    res = response.rows;
    !client && isClientConnected.release();
  } catch (error: any) {
      console.error("error has occured when fetching recent blogposts");
  }

  return res;
}

