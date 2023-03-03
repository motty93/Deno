import { grep } from './grep'

const [word, root] = Deno.args
await grep(root, word)
