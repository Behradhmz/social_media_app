import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CreatePostPage from "./Pages/CreatePostPage";
import PostPage from "./Pages/PostPage";
import { CreateCommunityPage } from "./Pages/CreateCommunityPage";
import { CommunitiesPage } from "./Pages/CommunitiesPage";
import { CommunityPage } from "./Pages/CommunityPage";

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700 pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/communities/create" element={<CreateCommunityPage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/communities/:id" element={<CommunityPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
