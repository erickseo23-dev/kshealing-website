import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SobreYohev from "./pages/SobreYohev";
import QueEsKSHealing from "./pages/QueEsKSHealing";
import ElLibro from "./pages/ElLibro";
import Blog from "./pages/Blog";
import BlogArticle1 from "./pages/BlogArticle1";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";
import BlogArticle4 from "./pages/BlogArticle4";
import BlogArticle5 from "./pages/BlogArticle5";
import Testimonios from "./pages/Testimonios";
import Eventos from "./pages/Eventos";
import Recursos from "./pages/Recursos";
import Directorio from "./pages/Directorio";
import Tienda from "./pages/Tienda";
import Meditaciones from "./pages/Meditaciones";
import PortalMiembros from "./pages/PortalMiembros";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre-yohev"} component={SobreYohev} />
      <Route path={"/que-es-ks-healing"} component={QueEsKSHealing} />
      <Route path={"/el-libro"} component={ElLibro} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/article-1"} component={BlogArticle1} />
      <Route path={"/blog/article-2"} component={BlogArticle2} />
      <Route path={"/blog/article-3"} component={BlogArticle3} />
      <Route path={"/blog/article-4"} component={BlogArticle4} />
      <Route path={"/blog/article-5"} component={BlogArticle5} />
      <Route path={"/testimonios"} component={Testimonios} />
      <Route path={"/eventos"} component={Eventos} />
      <Route path={"/recursos"} component={Recursos} />
      <Route path={"/directorio"} component={Directorio} />
      <Route path={"/tienda"} component={Tienda} />
      <Route path={"/meditaciones"} component={Meditaciones} />
      <Route path={"/portal-miembros"} component={PortalMiembros} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
