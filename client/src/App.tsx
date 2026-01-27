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
import Placeholder from "./pages/Placeholder";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre-yohev"} component={SobreYohev} />
      <Route path={"/que-es-ks-healing"} component={QueEsKSHealing} />
      <Route path={"/el-libro"} component={ElLibro} />
      <Route path={"/cursos"}>
        {() => <Placeholder title="Cursos y Formacion" description="Explora nuestros programas de formacion en KS Healing, desde nivel basico hasta certificacion de facilitador." />}
      </Route>
      <Route path={"/sesiones"}>
        {() => <Placeholder title="Sesiones KS" description="Reserva una sesion privada de transmision de Energia KS con YOHEV o un facilitador certificado." />}
      </Route>
      <Route path={"/directorio"}>
        {() => <Placeholder title="Directorio de Practicantes" description="Encuentra facilitadores de KS Healing certificados en tu zona." />}
      </Route>
      <Route path={"/blog"}>
        {() => <Placeholder title="Blog y Recursos" description="Articulos, guias y recursos sobre KS Healing y transformacion espiritual." />}
      </Route>
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
