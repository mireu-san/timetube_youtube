import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "TimeTube";
    res.locals.routes = routes;
    next();
};