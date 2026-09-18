import Footer from "../components/Footer"
import Article from "../components/Article"
import Sidebar from "../components/Siderbar"
export default function Home() {
    return (
        <>
            <h1>Portal de notícias</h1>
            <Sidebar/>
            <Article />
            <Article />
            <Article />

            <Footer />

        </>
    )
}