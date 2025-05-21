// This is a temporary script to run drizzle-kit studio with a database URL
// Replace the DATABASE_URL with your actual database connection string
process.env.DATABASE_URL =
  "postgresql://postgres:postgres@localhost:5432/your_database_name";

const { execSync } = require("child_process");
try {
  console.log("Starting Drizzle Studio...");
  execSync("npx drizzle-kit studio --port=3001", { stdio: "inherit" });
} catch (error) {
  console.error("Error running Drizzle Studio:", error.message);
}
