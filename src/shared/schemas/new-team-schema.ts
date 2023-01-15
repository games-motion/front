import { z } from 'zod'

export const schema = z.object({
  title: z.string().min(4, 'O minimo para este campo são 4 caracteres.'),
  description: z.string().optional(),
  image: z.any().optional(),
})

export type NewTeamForm = z.infer<typeof schema>
