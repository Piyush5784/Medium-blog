import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signinInput, signupInput } from "@100xdevs/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/checkuser", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const header: string = c.req.header("authorization") || "";
  const token = header.split(" ")[1];

  try {
    const res = await verify(token, c.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        id: Number(res.id),
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ message: "unauthorised1" });
    } else {
      return c.json({ message: "authorised" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ message: "unauthorised2" });
  }
});

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.text("Invalid inputs");
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.username,
        password: body.password,
        name: body.name,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt: token });
  } catch (error) {
    console.log(error);
    c.status(403);
    return c.text("user already exists with this email");
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.text("Invalid inputs");
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.username,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt });
  } catch (error) {
    console.log(error);
    c.status(403);
    return c.text("Invalid");
  }
});
