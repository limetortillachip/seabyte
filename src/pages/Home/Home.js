import Posts from "../../components/App/Posts/Posts";

export default function Home() {
  return (
    <div>
      <article className="hero">
        <h2>Welcome to my page!</h2>
        <div>
          Hi! My name is Shanon. I am a lover of colorfully styled webpages.
        </div>
      </article>
      <Posts />
    </div>
  );
}
