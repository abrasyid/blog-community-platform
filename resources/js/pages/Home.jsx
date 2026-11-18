import Main from "../layouts/Main";
import Hero from "../components/home/Hero";
import ListBlog from "../components/home/ListBlog";
import PopularBlog from "../components/home/PopularBlog";
import LatestBlog from "../components/home/LatestBlog";

export default function Home() {
    return (
        <div>
            <Main>
                <Hero></Hero>
                <ListBlog></ListBlog>
                <PopularBlog></PopularBlog>
                <LatestBlog></LatestBlog>
            </Main>
        </div>
    );
}
