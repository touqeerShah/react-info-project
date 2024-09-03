import { use, Suspense } from "react"

export default function UseAPI() {

  const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    
  const pokemon = use(fetchPromise)

  return (
    <>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <code>
          {JSON.stringify(pokemon, null, 1)}
        </code>
      </pre>
    </>
  )
}
