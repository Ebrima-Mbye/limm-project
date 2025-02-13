import prisma from "../../lib/prisma.js";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(req) {
  const { name } = await req.json();

  const newUser = await prisma.user.create({ data: { name } });
  console.log("New user: ", newUser);

  return Response.json(newUser);
}
