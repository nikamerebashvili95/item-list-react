import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ceeclnahzrcjwtpjfrqj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlZWNsbmFoenJjand0cGpmcnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMjc5NTYsImV4cCI6MjAxMzgwMzk1Nn0.2FFDlySaoHLMSmc0HKD_Le7RYi6tfwpzkykgllQU1bA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
