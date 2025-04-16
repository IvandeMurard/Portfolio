import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Portfolio from "./components/Portfolio";
import { ThemeProvider } from "./lib/theme";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppRouter />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
