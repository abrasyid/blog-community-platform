import Main from "../layouts/Main";
import Hero from "../components/home/Hero";
import ListBlog from "../components/home/ListBlog";

export default function Home() {
    return (
        <div>
            <Main>
                <Hero></Hero>
                <ListBlog></ListBlog>
            </Main>
        </div>
    );
}
