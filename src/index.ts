import { server } from "./lib/server.js";

type App = {
    init: () => void;
}

const app = {} as App;

app.init = () => {
    server.init();
}

app.init();

export default app;

