import { type Pokemon } from '@/types/Pokemon';

const Home = async () => {

  const req = await fetch('https://pokeapi.deno.dev/pokemon');
  const data = (await req.json()) as Pokemon[];

  return (
    <main>
      {data.map((result: Pokemon) => (
        <div key={result.id}>
          {result.name}
          <img src={result.imageUrl} alt={result.name} />
        </div>
      ))}
    </main>
  )
}

export default Home;