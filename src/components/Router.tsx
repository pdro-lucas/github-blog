import { DefaultLayout } from "@/layout/DefaultLayout";
import { Home } from "@/pages/Home";
import { Post } from "@/pages/Post";
import { Routes, Route } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
