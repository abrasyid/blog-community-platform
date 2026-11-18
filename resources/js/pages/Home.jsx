import Main from "../layouts/Main";
import Hero from "../components/home/Hero";
import ListBlog from "../components/home/ListBlog";
import PopularBlog from "../components/home/PopularBlog";
import LatestBlog from "../components/home/LatestBlog";
import Category from "../components/home/Category";

export default function Home() {
    return (
        <div>
            <Main>
                <Hero></Hero>
                <ListBlog></ListBlog>
                <PopularBlog></PopularBlog>
                <LatestBlog></LatestBlog>
                <Category></Category>
            </Main>
        </div>
    );
}
