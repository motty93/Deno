import { walk } from 'https://deno.land/std@0.165.0/fs/walk.ts'

export async function grep(root: string, word: string): Promise<void> {
  // .git remove
  for await (const entry of walk(root, { skip: [/^\.git/] })) {
    console.log(entry.path)
  }
}
