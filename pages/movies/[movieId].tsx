import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();
  console.log(router.query.movieId);

  return (
    <h1>This is movie page!</h1>
  );
}

export default Detail;
