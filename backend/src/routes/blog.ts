import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: Number;
    id: Number;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header: string = c.req.header("authorization") || "";

  const token = header.split(" ")[1];

  const res = await verify(token, c.env.JWT_SECRET);

  if (res.id) {
    c.set("userId", res.id);
    await next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const userId = c.get("userId");
  console.log("1");

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(userId),
      },
    });
    console.log("2");
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text("Error creating post");
  }
});
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(411);
    return c.text("Error updating post");
  }
});

blogRouter.get("/getBlog/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        title: true,
        id: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.text("No blog post found");
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json(blogs);
  } catch (error) {
    return c.text("Error while fetching all blogs");
  }
});
