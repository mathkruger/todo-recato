import Recato from "./lib/recato.js";
import Home from "./pages/home.js";
const { router, notFound } = Recato;

const routes = router({
  "/": Home,
  "/404": notFound
});

export default routes;