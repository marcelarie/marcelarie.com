export const HOME = '/';
export const MY_PROJECTS = '/projects';
export const ABOUT_ME = '/about-me';
export const BLOG = '/blog';
export const POST = '/blog/:id';

export type RoutesTypes =
    | typeof HOME
    | typeof MY_PROJECTS
    | typeof ABOUT_ME
    | typeof POST
    | typeof BLOG;
