import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //   TODO: API call to get searched movies
  //   TODO: API Call to get the popular movie

  return <div>Welcome to search page {termToUse}</div>;
}

export default SearchPage;
