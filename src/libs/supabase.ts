import { createClient } from "@supabase/supabase-js";
// 環境変数のロード
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
// 環境変数が設定されていなければエラーを投げる
if (!SUPABASE_URL) {
	throw new Error("Missing env.NEXT_PUBLIC_SUPABSE_URL");
}
if (!SUPABASE_KEY) {
	throw new Error("Missing env.NEXT_PUBLIC_SUPABSE_KEY");
}
export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
