type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      Welcome to genre {id} {genre}
    </div>
  );
}

export default GenrePage;
