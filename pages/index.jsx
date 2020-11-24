import Head from "next/head";
import dynamic from "next/dynamic";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NextLink from "next/link";

const NonSSRApp = dynamic(() => import("../components/app/app"), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Router>
        <div>
          <ul className="flex p-4 bg-gray-100 mb-4 md:flex space-x-10">
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link to="/about">About</Link>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link to="/topics">Topics</Link>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <NextLink href="/ssr">SSR</NextLink>
            </li>
          </ul>
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/topics">
              <h1>Topics</h1>
            </Route>
            <Route path="/">
              <NonSSRApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
