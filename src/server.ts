import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "hi";
});
app.use(router.routes());
app.listen(50001);
console.log("App running on port 50001");
